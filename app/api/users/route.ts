import { NextResponse } from "next/server";
import dataSource from "../../data/users.json";

export async function GET() {
  return NextResponse.json(dataSource);
}
