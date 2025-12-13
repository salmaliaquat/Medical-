import React from "react";

const roles = ["All", "Admin", "Doctor", "Pharmacist", "Cashier"];

const SearchAndFilter = ({ searchValue, onSearchChange, selectedRole, onRoleChange }) => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchValue}
            onChange={onSearchChange}
            className="flex h-9 w-full rounded-md  border-input px-10 py-1 placeholder:text-muted-foreground border border-gray-200 border-input bg-transparent text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <div className="flex gap-2 flex-wrap">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => onRoleChange(role)}
              className={`inline-flex items-center justify-center gap-2 text-xs font-medium h-8 rounded-md px-3 ${
                selectedRole === role
                  ? "bg-indigo-600 text-white"
                  : "bg-background border border-gray-300 border-input hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
