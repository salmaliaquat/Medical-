import React from "react";

const ExpenseCard = ({ title, value, icon, iconBg, textColor }) => (
  <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${textColor}`}>{value}</p>
      </div>
      {icon && <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>{icon}</div>}
    </div>
  </div>
);

export default ExpenseCard;
