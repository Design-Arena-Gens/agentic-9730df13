import { NextResponse } from "next/server";
import { intents } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ data: intents, count: intents.length });
}
