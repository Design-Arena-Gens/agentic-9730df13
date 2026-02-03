import { NextResponse } from "next/server";
import { transcripts } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ data: transcripts, count: transcripts.length });
}
