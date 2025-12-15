// import React, { useState } from "react";
// import SummaryCards from "../activitylog/ActivityCard";
// import FilterBar from "../activitylog/FilterBar";
// import ActivityTable from "../activitylog/ActivityTable";

// // Sample data
// const summaryData = [
//   { title: "Total Activities", count: 5, color: "from-indigo-500 to-indigo-600" },
//   { title: "Today's Activities", count: 0, color: "from-blue-500 to-blue-600", textColor: "text-blue-600" },
//   { title: "Active Users", count: 4, color: "from-emerald-500 to-emerald-600", textColor: "text-emerald-600" },
//   { title: "Modules Accessed", count: 5, color: "from-purple-500 to-purple-600", textColor: "text-purple-600" },
// ];

// const activities = [
//   {
//     timestamp: "Jan 24, 09:30:00",
//     user: "System Admin",
//     email: "admin@medipos.com",
//     action: "Login",
//     module: "Authentication",
//     details: "Successful login from dashboard",
//     ip: "192.168.1.100",
//     actionColor: "bg-purple-100 text-purple-800 border-purple-200",
//   },
//   {
//     timestamp: "Jan 24, 10:15:00",
//     user: "John Smith",
//     email: "john.smith@medipos.com",
//     action: "Create",
//     module: "Sales",
//     details: "Created new sale invoice INV-2025-003",
//     ip: "192.168.1.105",
//     actionColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
//   },
//   // Add more activity objects here...
// ];

// const ActivityLogPage = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <main className="p-6">
//       <div className="space-y-6">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">Activity Logs</h1>
//           <p className="text-slate-600 mt-1">Track all user actions and system activities</p>
//         </div>

//         <SummaryCards summaryData={summaryData} />

//         <FilterBar search={search} setSearch={setSearch} />

//         <ActivityTable activities={activities} />
//       </div>
//     </main>
//   );
// };

// export default ActivityLogPage;


import React, { useState, useMemo } from "react";
import SummaryCards from "../activitylog/ActivityCard";
import FilterBar from "../activitylog/FilterBar";
import ActivityTable from "../activitylog/ActivityTable";

// Sample data
const summaryData = [
  { title: "Total Activities", count: 5, color: "from-indigo-500 to-indigo-600" },
  { title: "Today's Activities", count: 0, color: "from-blue-500 to-blue-600", textColor: "text-blue-600" },
  { title: "Active Users", count: 4, color: "from-emerald-500 to-emerald-600", textColor: "text-emerald-600" },
  { title: "Modules Accessed", count: 5, color: "from-purple-500 to-purple-600", textColor: "text-purple-600" },
];

const activities = [
  {
    timestamp: "Jan 24, 09:30:00",
    user: "System Admin",
    email: "admin@medipos.com",
    action: "Login",
    module: "Authentication",
    details: "Successful login from dashboard",
    ip: "192.168.1.100",
    actionColor: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    timestamp: "Jan 24, 10:15:00",
    user: "John Smith",
    email: "john.smith@medipos.com",
    action: "Create",
    module: "Sales",
    details: "Created new sale invoice INV-2025-003",
    ip: "192.168.1.105",
    actionColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    timestamp: "Jan 24, 11:45:00",
    user: "Sarah Williams",
    email: "sarah.w@medipos.com",
    action: "Update",
    module: "Appointments",
    details: "Updated appointment status to Confirmed",
    ip: "192.168.1.110",
    actionColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

const ActivityLogPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter activities based on search and filter
  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const matchesSearch =
        act.user.toLowerCase().includes(search.toLowerCase()) ||
        act.action.toLowerCase().includes(search.toLowerCase()) ||
        act.module.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" || act.module === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <main className="p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Activity Logs</h1>
          <p className="text-slate-600 mt-1">Track all user actions and system activities</p>
        </div>

        <SummaryCards summaryData={summaryData} />

        <FilterBar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

        <ActivityTable activities={filteredActivities} />
      </div>
    </main>
  );
};

export default ActivityLogPage;
