"use client";

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export default function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div
      className="bg-white shadow-md p-4 rounded-lg border-l-4 
        border-blue-500 hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold text-gray-800">{lead.name}</h2>
      <p className="text-gray-600">{lead.email}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full 
          ${
            lead.status === "New"
              ? "bg-blue-100 text-blue-700"
              : lead.status === "Engaged"
              ? "bg-yellow-100 text-yellow-700"
              : lead.status === "Proposal Sent"
              ? "bg-purple-100 text-purple-700"
              : lead.status === "Closed-Won"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
      >
        {lead.status}
      </span>
    </div>
  );
}
