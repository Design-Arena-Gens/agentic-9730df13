import { NextResponse } from "next/server";

const policies = [
  {
    id: "hipaa-safe-harbor",
    title: "HIPAA Safe Harbor Redaction",
    enforcement: "real-time",
    description:
      "Automatically redacts PHI prior to persistence with audit trails stored for 7 years.",
    severity: "critical"
  },
  {
    id: "pci-dss",
    title: "PCI DSS Level 1",
    enforcement: "streaming",
    description:
      "Card details tokenized via Stripe Elements with dual-control decryption and forbidden transcript storage.",
    severity: "high"
  },
  {
    id: "gdpr-data-min",
    title: "GDPR Data Minimization",
    enforcement: "batch",
    description:
      "Automatically deletes non-essential metadata after 30 days for EU tenants.",
    severity: "medium"
  }
];

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ data: policies, count: policies.length });
}
