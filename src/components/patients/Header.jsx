import React from "react";
import { Plus } from "lucide-react";

const Header = ({ onAdd }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Patients</h1>
      <p className="text-slate-600 mt-1">
        Manage patient records and medical history
      </p>
    </div>
    <button
      onClick={onAdd}
      className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg shadow-teal-500/30 text-primary-foreground"
    >
      <Plus className="w-5 h-5 mr-2 " /> Add Patient
    </button>
  </div>
);

export default Header;
