import React from "react";
import { TestTube, Clock, CircleCheckBig } from "lucide-react";

const TestStatsCards = ({ tests }) => {
  const completed = tests.filter(t => t.status === "Completed").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Tests" value={tests.length} icon={<TestTube />} color="purple" />
      <Card title="Pending" value={0} icon={<Clock />} color="amber" />
      <Card title="Completed" value={completed} icon={<CircleCheckBig />} color="emerald" />
    </div>
  );
};

const Card = ({ title, value, icon, color }) => (
  <div className="rounded-xl shadow-lg bg-white/80   backdrop-blur p-4">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <p className={`text-2xl font-bold text-${color}-600 mt-1`}>
          {value}
        </p>
      </div>
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center text-white`}>
        {icon}
      </div>
    </div>
  </div>
);

export default TestStatsCards;
