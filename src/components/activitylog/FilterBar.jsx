// import React from "react";
// import { LucideSearch, LucideFilter } from "lucide-react";

// const FilterBar = ({ search, setSearch }) => {
//   return (
//     <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg p-4">
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="relative flex-1">
//           <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search by user, action, or module..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base pl-10 shadow-sm focus:ring-1 focus:ring-ring"
//           />
//         </div>
//         <div className="flex gap-2 items-center">
         
//           <button className="h-8 px-3 text-xs rounded-md bg-indigo-600 text-white hover:bg-indigo-700">All</button>
//           <button className="h-8 px-3 text-xs rounded-md border border-input hover:bg-gray-100">Authentication</button>
//           <button className="h-8 px-3 text-xs rounded-md border border-input hover:bg-gray-100">Sales</button>
//           <button className="h-8 px-3 text-xs rounded-md border border-input hover:bg-gray-100">Appointments</button>
//           <button className="h-8 px-3 text-xs rounded-md border border-input hover:bg-gray-100">Products</button>
//           <button className="h-8 px-3 text-xs rounded-md border border-input hover:bg-gray-100">Reports</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;


import React from "react";
import { LucideSearch, LucideFilter } from "lucide-react";

const FilterBar = ({ search, setSearch, filter, setFilter }) => {
  const filters = ["All", "Authentication", "Sales", "Appointments", "Products", "Reports"];

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by user, action, or module..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex h-9 w-full rounded-md border 
            border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400
            border-input  py-1  transition-colors placeholder:text-muted-foreground  focus:ring-ring md:text-sm pl-10"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap items-center">
         
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-8 px-3 text-xs rounded-md font-medium transition-colors shadow-sm ${
                filter === f
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border border-gray-300 text-gray-600 border-input bg-background hover:bg-accent hover:text-accent-foreground"
                
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

export default FilterBar;
