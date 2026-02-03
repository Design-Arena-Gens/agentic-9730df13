import { NextResponse } from "next/server";
import { tenants } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ data: tenants, count: tenants.length });
}
