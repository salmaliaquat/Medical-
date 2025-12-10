import React from "react";
import { Plus } from "lucide-react";

const Header = ({ title, description, onNew }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      <p className="text-slate-600 mt-1">{description}</p>
    </div>
    <button
      onClick={onNew}
      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium
                 transition-colors h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600
                 hover:from-teal-600 hover:to-teal-700 shadow-lg text-white"
    >
      <Plus className="w-5 h-5" />
      New Appointment
    </button>
  </div>
);

export default Header;
