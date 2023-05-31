import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import dataSource from "../../data/users.json";
import { NextApiHandler } from "next";

export async function GET() {
  return NextResponse.json(dataSource);
}
