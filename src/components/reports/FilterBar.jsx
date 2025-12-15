import React from "react";

const FilterBar = () => {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg max-w-full overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          
          {/* From Date */}
          <div className="w-full md:flex-1 space-y-1">
            <label className="text-sm font-medium text-slate-700">
              From Date
            </label>
            <input
              type="date"
              defaultValue="2025-11-13"
              className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* To Date */}
          <div className="w-full md:flex-1 space-y-1">
            <label className="text-sm font-medium text-slate-700">
              To Date
            </label>
            <input
              type="date"
              defaultValue="2025-12-16"
              className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Button */}
          <button
            className="w-full md:w-auto h-9 px-4 rounded-md text-sm font-medium
                       border border-gray-300 text-teal-700 shadow-sm
                       hover:bg-slate-100 transition"
          >
            Apply Filter
          </button>

        </div>
      </div>
    </div>
  );
};

export default FilterBar;
