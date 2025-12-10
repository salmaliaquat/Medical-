import React from "react";
 import { Calendar } from "lucide-react";

const appointments = [
  { patient: "Maria Garcia", doctor: "Dr. Michael Chen", time: "15:05", date: "Dec 09" },
  { patient: "John Williams", doctor: "Dr. Sarah Johnson", time: "07:14", date: "Dec 03" },
  { patient: "Linda Martinez", doctor: "Dr. Michael Chen", time: "02:00 PM", date: "Jan 26" },
  { patient: "John Williams", doctor: "Dr. Sarah Johnson", time: "10:00 AM", date: "Jan 25" },
  { patient: "Maria Garcia", doctor: "Dr. Emily Rodriguez", time: "11:30 AM", date: "Jan 25" },
  // Add more if needed
];

const UpcomingAppointments = () => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="tracking-tight text-lg font-semibold text-slate-900 flex items-center">
         <Calendar className="w-5 h-5 mr-2 text-teal-600" />

          Upcoming Appointments
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {appointments.map((app, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div>
                <p className="font-medium text-slate-900">{app.patient}</p>
                <p className="text-sm text-slate-600">{app.doctor}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{app.time}</p>
                <p className="text-xs text-slate-500">{app.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
