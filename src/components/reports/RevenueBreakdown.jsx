import React from "react";

const revenueItems = [
  { label: "Pharmacy Sales", value: "$252.98", bg: "bg-teal-50", text: "text-teal-600" },
  { label: "Consultation Fees", value: "$0.00", bg: "bg-blue-50", text: "text-blue-600" },
  { label: "Test Fees", value: "$0.00", bg: "bg-purple-50", text: "text-purple-600" },
];

const RevenueBreakdown = () => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">Revenue Breakdown</div>
      </div>
      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {revenueItems.map((item) => (
          <div key={item.label} className={`text-center p-4 ${item.bg} rounded-xl`}>
            <p className="text-sm text-slate-600 mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.text}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
