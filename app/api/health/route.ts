import { NextResponse } from "next/server";
import { IntegrationRegistry } from "@/server/services/integration-registry";

export const dynamic = "force-dynamic";

export async function GET() {
  const registry = IntegrationRegistry.bootstrap();
  const integrations = registry.healthSummary();

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    integrations
  });
}
