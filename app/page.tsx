import fetchData from "../app/utils/fetchData";
import getRandomQuote from "./utils/getRandomQuotes";

import UserProfileData from "./components/dashboard/UserProfileData";
import ActionableQuote from "./components/dashboard/ActionableQuote";

type Post = {
  image: string;
  copy: string;
};

type Connection = {
  platform: string;
  url: string;
  name: string;
  followers: number;
  impressions: number;
  engagement_rate: number;
  profile_picture: string;
  Posts: Post[];
};

type User = {
  ID: number;
  username: string;
  name: string;
  email: string;
  members_quantity: number;
  members_variation: number;
  profile_picture: string;
  connections: Connection[];
};

type UsersData = User[];

type Quote = {
  id: number;
  quote: string;
  author: string;
  url: string;
};

type Community = {
  id: number;
  name: string;
  category: string;
};

type DashboardData = {
  quotes: Quote[];
  communities: Community[];
};

export default async function Home() {
  const users: UsersData = fetchData("users");
  const user: User = users[0];

  const dashboardData: DashboardData = fetchData("dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <UserProfileData
        username={user.username}
        members_quantity={user.members_quantity}
        members_variation={user.members_variation}
        profile_picture={user.profile_picture}
        quote={getRandomQuote(dashboardData.quotes)}
      ></UserProfileData>
      <ActionableQuote quote={getRandomQuote(dashboardData.quotes)} />
    </main>
  );
}
