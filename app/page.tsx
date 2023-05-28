import { NextFetchEvent } from "next/server";
import fetchData from "../app/utils/fetchData";
import { useEffect } from "react";

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
  members: number;
  profile_picture: string;
  connections: Connection[];
};

type UsersData = User[];

export default async function Home() {
  const users: UsersData = fetchData("users");
  const user: User = users[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-600">Hello {user?.username}</h1>
    </main>
  );
}
