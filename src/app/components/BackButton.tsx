"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ to = "/" }: { to?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition flex items-center"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      <span>Back</span>
    </button>
  );
}
