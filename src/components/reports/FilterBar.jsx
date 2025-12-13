import React from "react";

const FilterBar = () => {
    return (
        <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
            <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">From Date</label>
                        <input type="date" className="flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                            defaultValue="2025-11-13" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-medium">To Date</label>
                        <input type="date" className="flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"defaultValue="2025-12-16" />
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-300 text-teal-700 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                        Apply Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
