"use client";

import { fetchData } from "./utils/fetchData";
import getRandomUser from "./utils/getRandomUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    async function fetchDataAndRedirect() {
      const users: UsersData = await fetchData("users");
      const user: User = getRandomUser(users);
      router.push(`/${user.username}`);
    }

    fetchDataAndRedirect();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="m-w-[600px] text-2xl font-bold">
        Hi! 👋 <br />
        You are being redirected to a random user..{" "}
      </h1>
    </div>
  );
}
