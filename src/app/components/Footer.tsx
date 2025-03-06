import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Lead Management. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
