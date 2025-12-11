import React from "react";

const PatientCard = ({ title, count, icon }) => (
  <div className="rounded-xl w-[200px] text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur ">
    <div className="p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{count}</p>
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

export default PatientCard;
