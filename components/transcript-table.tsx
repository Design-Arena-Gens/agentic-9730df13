import type { CallTranscript } from "@/lib/types";
import { formatSeconds } from "@/lib/utils";

interface TranscriptTableProps {
  transcripts: CallTranscript[];
}

export function TranscriptTable({ transcripts }: TranscriptTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-card">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-900 text-left text-xs font-semibold uppercase tracking-wider text-white">
          <tr>
            <th scope="col" className="px-6 py-4">
              Call ID
            </th>
            <th scope="col" className="px-6 py-4">
              Tenant
            </th>
            <th scope="col" className="px-6 py-4">
              Outcome
            </th>
            <th scope="col" className="px-6 py-4">
              Duration
            </th>
            <th scope="col" className="px-6 py-4">
              Summary
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
          {transcripts.map((call) => (
            <tr key={call.id} className="hover:bg-slate-50">
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-slate-900">
                {call.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {call.tenantId}
              </td>
              <td className="whitespace-nowrap px-6 py-4 capitalize">
                {call.outcome}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {formatSeconds(call.durationSeconds)}
              </td>
              <td className="max-w-2xl px-6 py-4 text-slate-500">
                {call.summary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
