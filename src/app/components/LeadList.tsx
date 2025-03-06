"use client";
import { useEffect, useState } from "react";
import LeadCard from "./LeadCard";
import { fetchLeads } from "../services/api";

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export default function LeadList() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const getLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
    };
    getLeads();
  }, []);
  return leads.length === 0 ? (
    <p className="text-center text-gray-500">
      No leads found. Add a new lead to get started.
    </p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {leads.map((lead) => (
        <LeadCard key={lead._id} lead={lead} />
      ))}
    </div>
  );
}
