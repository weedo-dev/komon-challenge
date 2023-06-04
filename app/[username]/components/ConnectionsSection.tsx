"use client";

import TitleH2 from "../../utils/components/TitleH2";
import Image from "next/image";
import { PlusIcon } from "../../utils/components/CustomIcons";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@/app/utils/components/Modal";
import NewConnectionModal from "./NewConnectionModal";
import { fetchData, fetchUserData } from "@/app/utils/fetchData";

export default function ConnectionsSection({
  connections,
  username,
}: {
  connections: Connection[];
  username: string;
}) {
  const [currentConnections, setCurrentConnections] = useState<
    Connection[] | null
  >(connections);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    async function updateUserData() {
      const userData: User | undefined = await fetchUserData(username);
      if (userData) {
        setCurrentConnections(userData.connections);
      }
    }

    updateUserData();
  }, [showModal, username]);

  async function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="w-full">
      <TitleH2 title="Your Connections" />
      <div className="grid grid-cols-6 gap-2">
        {currentConnections
          ? currentConnections.map((connection) => {
              return (
                <div
                  key={connection.id}
                  className="flex flex-col items-center gap-1"
                >
                  <Link
                    href={`${username}/${connection.id}`}
                    className="group flex flex-col items-center"
                  >
                    <Image
                      src={connection.profile_picture}
                      alt={`${connection.platform} ${connection.name} Profile Picture`}
                      height={90}
                      width={90}
                      className="rounded-full"
                    ></Image>
                    <div>
                      <p className="text-center font-euclid font-medium group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">
                        {connection.name}
                      </p>
                      <p className="text-center font-euclid text-xs">
                        {connection.platform}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })
          : null}
        <div
          className="flex cursor-pointer flex-col items-center gap-1"
          onClick={toggleModal}
        >
          <div className="aspect-h-1 aspect-w-1 flex max-h-[90px] w-full max-w-[90px] cursor-pointer items-center justify-center rounded-full bg-slate-900 text-6xl text-white hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-600 hover:to-pink-500">
            <PlusIcon className="p-6" />
          </div>
          <div>
            <p className="text-center font-euclid text-sm font-medium">
              New Connection
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal>
            <NewConnectionModal toggleModal={toggleModal} username={username} />
          </Modal>
        </>
      ) : null}
    </div>
  );
}
