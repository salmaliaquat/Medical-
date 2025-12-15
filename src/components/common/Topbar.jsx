import React from "react";
import { Menu } from "lucide-react";

const Topbar = ({ title, toggleSidebar }) => {
  return (
    <header
      className={`
        fixed top-0 left-0 h-14 sm:h-20 bg-white shadow-md border-b border-blue-100 flex items-center px-4 sm:px-6 z-30
        w-full md:w-[calc(100%-15rem)] md:left-60
      `}
    >
      {/* Mobile menu button */}
      <button
        className="p-2 rounded-md bg-teal-600 text-white shadow md:hidden mr-4"
        onClick={toggleSidebar}
      >
        <Menu size={22} />
      </button>

      <h1 className="text-lg font-bold text-slate-800">{title}</h1>
    </header>
  );
};

export default Topbar;
