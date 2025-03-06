import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center mb-10">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide">Lead Management</h1>

        {/* Navigation */}
        <Link
          href="/add-lead"
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow-md hover:bg-gray-100 transition"
        >
          + Add Lead
        </Link>
      </div>
    </header>
  );
};

export default Header;
