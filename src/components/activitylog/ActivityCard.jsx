import React from "react";
import { LucideActivity } from "lucide-react";

const ActivityCard = ({ title, count, color, textColor }) => (
  <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${textColor || "text-slate-900"}`}>{count}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${color}`}>
        <LucideActivity className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);


const SummaryCards = ({ summaryData }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {summaryData.map((item, i) => (
      <ActivityCard key={i} {...item} />
    ))}
  </div>
);

export default SummaryCards;
