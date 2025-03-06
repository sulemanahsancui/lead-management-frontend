"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchLeads } from "./services/api";

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export default function Home() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const getLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
    };
    getLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Lead Management</h1>
      <Link href="/add-lead" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Lead</Link>
      <ul className="bg-white shadow p-4 rounded">
        {leads.map((lead) => (
          <li key={lead._id} className="border-b py-2">
            <strong>{lead.name}</strong> - {lead.email} ({lead.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
