import { NextResponse } from "next/server";
import { tenants } from "@/lib/demo-data";
import { AgentController } from "@/server/orchestration/agent-controller";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const payload = await request.json();
  const tenant = tenants.find((entry) => entry.tenantId === payload.tenantId);

  if (!tenant) {
    return NextResponse.json(
      { error: `Tenant ${payload.tenantId} not found.` },
      { status: 404 }
    );
  }

  const controller = new AgentController();
  const result = await controller.execute({
    tenant,
    language: payload.language ?? tenant.localeSupport[0],
    utterances: payload.utterances ?? []
  });

  return NextResponse.json(result);
}
