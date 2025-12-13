import React, {useState} from "react";
import SalesFilters from "./SalesFilters";
import SalesTable from "./SalesTable";
import SalesStates from "./SalesStates";

const SalesPage = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");


    return (
        <main className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Sales History</h1>
                <p className="text-slate-600 mt-1">
                    View and manage all sales transactions
                </p>
            </div>

            <SalesStates />
            <SalesFilters 
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            />
            <SalesTable 
            search={search}
            filter={filter}
            />
        </main>
    );
};

export default SalesPage;
