import React from "react";
import { DollarSign, Receipt, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$281.12",
    color: "emerald",
    icon: DollarSign,
  },
  {
    label: "Transactions",
    value: "8",
    color: "blue",
    icon: Receipt,
  },
  {
    label: "Avg Transaction",
    value: "$35.14",
    color: "purple",
    icon: TrendingUp,
  },
];

const SalesStates = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className="rounded-xl shadow-lg bg-white/80 backdrop-blur p-4 flex justify-between items-center"
        >
          <div>
            <p className="text-sm text-slate-600">{item.label}</p>
            <p className={`text-2xl font-bold text-${item.color}-600 mt-1`}>
              {item.value}
            </p>
          </div>

          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center`}
          >
            <item.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesStates;
