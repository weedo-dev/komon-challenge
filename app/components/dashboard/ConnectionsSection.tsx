import TitleH2 from "../utils/TitleH2";
import Image from "next/image";
import { PlusIcon } from "../utils/icons";

export default function ConnectionsSection({
  connections,
}: {
  connections: Connection[];
}) {
  return (
    <div className="w-full">
      <TitleH2 title="Your Connections" />
      <div className="grid grid-cols-6 gap-2">
        {connections.map((connection) => {
          return (
            <div
              key={connection.id}
              className="flex flex-col items-center gap-1"
            >
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
            </div>
          );
        })}
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full bg-slate-900 text-6xl text-white hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-600 hover:to-pink-500">
            <PlusIcon className="p-6" />
          </div>
          <div>
            <p className="text-center text-sm font-medium">New Connection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
