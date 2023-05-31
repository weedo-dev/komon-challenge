import { NextResponse } from "next/server";

export default async function createConnection(connection: {
  username: string;
  platform: string;
  name: string;
}) {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ connection }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
