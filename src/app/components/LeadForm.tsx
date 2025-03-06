"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addLead } from "../services/api";
import toast from "react-hot-toast";
import BackButton from "./BackButton";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("New");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addLead({ name, email, status });
    toast.success("Lead added successfully!");
    router.push("/");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md relative">
      {/* Back Button */}
      <BackButton />

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 mt-4">
        Add New Lead
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="New">New</option>
            <option value="Engaged">Engaged</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed-Won">Closed-Won</option>
            <option value="Closed-Lost">Closed-Lost</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Add Lead
        </button>
      </form>
    </div>
  );
}
