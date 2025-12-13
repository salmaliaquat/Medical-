import React from "react";

const summaryItems = [
  { label: "Sales Transactions", value: "6" },
  { label: "Appointments", value: "8" },
  { label: "Tests Conducted", value: "1" },
  { label: "Total Expenses", value: "1" },
];

const PeriodSummary = () => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">Period Summary</div>
      </div>
      <div className="p-6 pt-0 grid grid-cols-2 md:grid-cols-4 gap-4">
        {summaryItems.map((item) => (
          <div key={item.label} className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">{item.label}</p>
            <p className="text-xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodSummary;
