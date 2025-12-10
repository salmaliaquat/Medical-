import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Scheduled", value: 43, color: "#0EA5E9" },
  { name: "Confirmed", value: 29, color: "#14B8A6" },
  { name: "Completed", value: 29, color: "#10B981" },
];

const AppointmentsStatus = () => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-6">
      <div className="tracking-tight text-lg font-semibold text-slate-900 mb-4">
        Appointments Status
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentsStatus;
