import React from "react";
import { Search } from "lucide-react";

const PatientSearch = ({ value, onChange }) => (
  <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-4">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
      <input
        type="text"
        className="flex h-9 w-full rounded-md border border-gray-300 border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none md:text-sm pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400"
        placeholder="Search patients by name, phone, or ID..."
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default PatientSearch;
