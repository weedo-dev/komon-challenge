import { NextResponse } from "next/server";
import dataSource from "../../data/app.json";

export async function GET() {
  return NextResponse.json(dataSource);
}
