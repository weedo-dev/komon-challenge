"use client";

import { useState, useEffect, useRef } from "react";
import { fetchData } from "@/app/utils/fetchData";
import saveNewConnection from "@/app/utils/saveNewConnection";

export default function NewConnectionModal({
  toggleModal,
  username,
}: {
  toggleModal: () => void;
  username: string;
}) {
  const [platforms, setPlatforms] = useState<Platform[] | null>(null);
  const [formData, setFormData] = useState({
    username: username,
    name: "",
    platform: "",
  });

  const [inputError, setInputError] = useState({
    name: true,
    platform: true,
  });

  const [newConnectionLoading, setNewConnectionLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const platformRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    async function fetchPlatforms() {
      try {
        const appData = await fetchData("app");
        const platforms: Platform[] = appData.platforms;
        setPlatforms(platforms);
      } catch (err) {
        console.log("Error occurred when fetching app data");
      }
    }

    fetchPlatforms();
  }, []);

  function handlePlatformChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const platformValue = platformRef.current?.value;
    setFormData({
      ...formData,
      platform: platformValue as string,
    });
    platformValue === ""
      ? setInputError({ ...inputError, platform: true })
      : setInputError({ ...inputError, platform: false });
  }
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nameValue = nameRef.current?.value;
    setFormData({ ...formData, name: nameValue as string });
    nameValue === ""
      ? setInputError({ ...inputError, name: true })
      : setInputError({ ...inputError, name: false });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewConnectionLoading(true);

    if (inputError.name === true || inputError.platform === true) {
      setNewConnectionLoading(false);
      return;
    } else {
      await saveNewConnection(formData);
      setTimeout(toggleModal, 1000);
      setNewConnectionLoading(true);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center ">
      <div className="flex w-full max-w-[600px] justify-center rounded-lg bg-white p-16 ">
        <div className="flex max-w-[350px] flex-col justify-center gap-8">
          <h2 className="text-center font-euclid text-2xl font-bold">
            {"Let's create a new connection"}
          </h2>
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <select
                ref={platformRef}
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handlePlatformChange}
                className="w-full rounded-lg border p-2"
              >
                <option hidden value="">
                  Select ...
                </option>
                {platforms
                  ? platforms.map((platform) => (
                      <option key={platform.name} value={platform.name}>
                        {platform.name}
                      </option>
                    ))
                  : "loading"}
              </select>
              {inputError.platform ? (
                <p className="text-red-800">Please select a platform.</p>
              ) : null}
            </div>
            <div className="flex w-full items-center">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={nameRef}
                value={formData.name}
                onChange={handleNameChange}
                className="ml-2 w-full rounded-lg border p-2"
                placeholder="Name your platform"
              />
            </div>
            {inputError.name ? (
              <p className="text-red-800">Please enter a valid name.</p>
            ) : null}

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-sky-500 hover:text-black "
            >
              {newConnectionLoading ? "Connecting.." : "Add Connection"}
            </button>
          </form>
        </div>
      </div>

      <div
        className="fixed inset-0 -z-10 h-full w-full cursor-pointer bg-black opacity-40 "
        onClick={toggleModal}
      ></div>
    </div>
  );
}
