import React from "react";
import { Pen } from "lucide-react";

const DoctorCard = ({ doctor, onEdit }) => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
               {doctor.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Dr.  {doctor.name}</h3>
              <p className="text-sm text-teal-600 font-medium">{doctor.specialization}</p>
            </div>
          </div>
          <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors shadow bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-primary/80">
            {doctor.status}
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-3">{doctor.qualification}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-600">
            <span className="font-medium text-slate-900">${doctor.fee}</span>
            <span className="ml-1">consultation fee</span>
          </div>
          <p className="text-sm text-slate-600">📞 {doctor.phone}</p>
        </div>

        <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-2 mb-4">
          {doctor.availableHours}
        </div>

        <button
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full border-slate-200"
          onClick={() => onEdit(doctor)}
        >
          <Pen className="w-4 h-4 mr-2" /> Edit Details
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
