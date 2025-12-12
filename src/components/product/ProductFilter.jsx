import React from "react";
import { Search } from "lucide-react";

const ProductFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  const filters = ["All", "Active", "Low Stock", "Out of Stock"];

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by product name, code, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex h-9 w-full rounded-md border 
            border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400
            border-input  py-1  transition-colors placeholder:text-muted-foreground  focus:ring-ring md:text-sm pl-10"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-8 rounded-md px-3 text-xs shadow ${
                filter === f
                  ? "bg-teal-600 text-white hover:bg-teal-700"
                  : "border border-gray-300 border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
