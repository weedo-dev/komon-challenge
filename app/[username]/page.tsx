import { fetchData } from "../../app/utils/fetchData";
import getRandomQuote from "./../utils/getRandomQuotes";

import UserProfileData from "./components/UserProfileData";
import ActionableQuote from "./components/ActionableQuote";
import CreateSection from "./components/CreateSection";
import ConnectionsSection from "./components/ConnectionsSection";
import TopCommunitiesSection from "./components/TopCommunitiesSection";
import YouAreLost from "./components/YouAreLost";

export default async function UsernamePage({
  params,
}: {
  params: { username: string };
}) {
  const users: UsersData = await fetchData("users");
  const user: User | undefined = users.find(
    (user) => user.username === params.username
  );

  const appData: AppData = await fetchData("app");

  if (!user) {
    return <YouAreLost></YouAreLost>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 py-24">
      <UserProfileData
        username={user.username}
        members_quantity={user.members_quantity}
        members_variation={user.members_variation}
        profile_picture={user.profile_picture}
      ></UserProfileData>
      <ActionableQuote quote={getRandomQuote(appData.quotes)} />
      <CreateSection />
      <ConnectionsSection
        connections={user.connections}
        username={user.username}
      />
      <TopCommunitiesSection communities={appData.top_communities} />
    </main>
  );
}
