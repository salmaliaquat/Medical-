// import React from "react";

// const ExpensesCategoryChart = () => {
//   return (
//     <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
//       <div className="flex flex-col space-y-1.5 p-6">
//         <div className="font-semibold leading-none tracking-tight">Expenses by Category</div>
//       </div>
//       <div className="p-6 pt-0">
//         {/* Placeholder for chart */}
//         <div className="w-full h-72 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
//           Chart goes here
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensesCategoryChart;


import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ExpensesCategoryChart = ({ data }) => {
  // Example colors for categories
  const COLORS = [
    "#0EA5E9", // Utilities
    "#F87171", // Maintenance
    "#34D399", // Supplies
    "#FBBF24", // Marketing
    "#A78BFA", // Other
  ];

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">Expenses by Category</div>
      </div>
      <div className="p-6 pt-0">
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#0EA5E9"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCategoryChart;
