import { NextResponse } from "next/server";
import { tenants } from "@/lib/demo-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const notifications = tenants.flatMap((tenant) =>
    tenant.notifications.map((notification) => ({
      tenantId: tenant.tenantId,
      ...notification
    }))
  );

  return NextResponse.json({
    data: notifications,
    count: notifications.length
  });
}
