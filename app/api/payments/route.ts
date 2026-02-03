import { NextResponse } from "next/server";

const providers = [
  {
    provider: "stripe",
    status: "connected",
    supportedCapabilities: ["card", "ach", "apple_pay"],
    webhook: "https://api.agentic-voice.ai/webhooks/stripe"
  },
  {
    provider: "adyen",
    status: "sandbox",
    supportedCapabilities: ["card", "google_pay"],
    webhook: "https://api.agentic-voice.ai/webhooks/adyen"
  }
];

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ data: providers, count: providers.length });
}
