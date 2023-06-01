"use client";

import TitleH2 from "../../global/components/TitleH2";
import Image from "next/image";
import { PlusIcon } from "../../global/components/Icons";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/app/global/components/Modal";
import NewConnectionModal from "./NewConnectionModal";



export default function ConnectionsSection({
  connections,
  username,
}: {
  connections: Connection[];
  username: string;
}) {
  const [currentConnections, setCurrenConnections] =
    useState<Connection[]>(connections);

    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
      setShowModal(!showModal);
    }

  return (
    <div className="w-full">
      <TitleH2 title="Your Connections" />
      <div className="grid grid-cols-6 gap-2">
        {currentConnections.map((connection) => {
          return (
            <div
              key={connection.id}
              className="flex flex-col items-center gap-1"
            >
              <Link href={`${username}/${connection.id}`}>
                <Image
                  src={connection.profile_picture}
                  alt={`${connection.platform} ${connection.name} Profile Picture`}
                  height={90}
                  width={90}
                  className="rounded-full"
                ></Image>
                <div>
                  <p className="text-center font-medium">{connection.name}</p>
                  <p className="text-center text-xs">{connection.platform}</p>
                </div>
              </Link>
            </div>
          );
        })}
        <div
          className="flex cursor-pointer flex-col items-center gap-1"
          onClick={toggleModal}
        >
          <div className="aspect-h-1 aspect-w-1 flex max-h-[90px] w-full max-w-[90px] cursor-pointer items-center justify-center rounded-full bg-slate-900 text-6xl text-white hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-600 hover:to-pink-500">
            <PlusIcon className="p-6" />
          </div>
          <div>
            <p className="text-center text-sm font-medium">New Connection</p>
          </div>
        </div>
      </div>
      {showModal ? (<>
              <Modal>
                <NewConnectionModal toggleModal={toggleModal} />
              </Modal></>
            ) : null}
    </div>
  );
}
