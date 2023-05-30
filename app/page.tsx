import { fetchData } from "../app/utils/fetchData";
import getRandomQuote from "./utils/getRandomQuotes";

import UserProfileData from "./dashboard/components/UserProfileData";
import ActionableQuote from "./dashboard/components/ActionableQuote";
import CreateSection from "./dashboard/components/CreateSection";
import ConnectionsSection from "./dashboard/components/ConnectionsSection";
import TopCommunitiesSection from "./dashboard/components/TopCommunitiesSection";

export default async function Home() {
  const users: UsersData = await fetchData("users");
  const user: User = users[0];

  const appData: AppData = await fetchData("app");

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
      <ConnectionsSection connections={user.connections} />
      <TopCommunitiesSection communities={appData.top_communities} />
    </main>
  );
}
