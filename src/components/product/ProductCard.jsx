import React from "react";

export default function ProductCard({ title, count, color, Icon }) {
  const gradientFrom = `from-${color}-500`;
  const gradientTo = `to-${color}-600`;

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur cursor-pointer hover:scale-105 transition-transform">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600">{title}</p>
            <p className={`text-2xl font-bold mt-1 ${color === 'red' ? 'text-red-600' : color === 'green' ? 'text-emerald-600' : color === 'amber' ? 'text-amber-600' : 'text-slate-900'}`}>{count}</p>
          </div>
          <div className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
