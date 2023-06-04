import { fetchData } from "../../utils/fetchData";
import Link from "next/link";
import Image from "next/image";

import UserProfileData from "../components/UserProfileData";
import ActionableQuote from "../components/ActionableQuote";
import CreateSection from "../components/CreateSection";
import ConnectionsSection from "../components/ConnectionsSection";
import TopCommunitiesSection from "../components/TopCommunitiesSection";
import YouAreLost from "../components/YouAreLost";
import DisplayPosts from "./components/DisplayPosts";
import { ArrowSmallLeftIcon } from "@/app/utils/components/Icons";

export default async function ConnectionPage({
  params,
}: {
  params: { username: string; connection_id: string };
}) {
  console.log(params);
  const users: UsersData = await fetchData("users");
  const user: User | undefined = users.find(
    (user) => user.username === params.username
  );
  const userConnections = user?.connections;
  const connection = userConnections?.find(
    (connection) => connection.id == Number(params.connection_id)
  );

  if (!user || !connection) {
    return <YouAreLost></YouAreLost>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 py-24">
      <div className="mb-[-2rem] w-full  hover:text-sky-500">
        <ArrowSmallLeftIcon className="mr-0.5 inline h-5 w-5" />
        <Link
          href={`/${user.username}`}
          className="font-euclid text-lg font-bold"
        >
          Volver a tu perfil
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Image
            className=" rounded-full "
            src={connection.profile_picture}
            width={125}
            height={125}
            alt={`${user.username}'s ${connection.platform} profile picture`}
          ></Image>
        </div>
        <div>
          <h1 className="font-euclid text-4xl font-bold">{connection.name}</h1>
          <p className="font-sm font medium text-sky-500">
            {connection.platform}
          </p>
        </div>
      </div>
      <DisplayPosts posts={connection.posts} username={user.username} />
    </main>
  );
}
