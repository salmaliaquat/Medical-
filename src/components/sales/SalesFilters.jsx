import React from "react";
import { Search } from "lucide-react";

const SalesFilters = ({ search, setSearch, filter, setFilter }) => {
    return (
        <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur p-4">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-9 w-full rounded-md border border-gray-200 pl-10 text-sm"
                        placeholder="Search by invoice or patient name..."
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setFilter("all")}
                        className={`h-8 px-3 rounded-md text-xs ${filter === "all"
                                ? "text-white bg-teal-600"
                                : "border border-gray-200"
                            }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("today")}
                        className={`h-8 px-3 rounded-md text-xs ${filter === "today"
                                ? "text-white bg-teal-600"
                                : "border border-gray-200"
                            }`}
                    >
                        Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalesFilters;
