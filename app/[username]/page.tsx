import { fetchData, fetchUserData } from "../../app/utils/fetchData";
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
  const userData = await fetchUserData(params.username);

  const appData: AppData = await fetchData("app");

  if (!userData) {
    return <YouAreLost></YouAreLost>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 py-24">
      <UserProfileData
        username={userData.username}
        members_quantity={userData.members_quantity}
        members_variation={userData.members_variation}
        profile_picture={userData.profile_picture}
      ></UserProfileData>
      <ActionableQuote quote={getRandomQuote(appData.quotes)} />
      <CreateSection />
      <ConnectionsSection
        connections={userData.connections}
        username={userData.username}
      />
      <TopCommunitiesSection communities={appData.top_communities} />
    </main>
  );
}
