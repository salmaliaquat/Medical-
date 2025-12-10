import React from "react";
import { Calendar, Clock, User, Stethoscope, Check, X } from "lucide-react";

const AppointmentList = ({ date, appointments, onEdit }) => (
  <div className="rounded-2xl shadow-lg bg-white/90 backdrop-blur border border-slate-200 lg:col-span-2">
    {/* Header */}
    <div className="flex flex-col space-y-1.5 p-6 border-b border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="font-semibold tracking-tight text-xl">
          {date}
          <span className="ml-2 text-sm font-normal text-slate-500">
            ({appointments.length} appointments)
          </span>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {["All", "Scheduled", "Confirmed", "Completed"].map((status, idx) => (
            <button
              key={status}
              className={`inline-flex items-center justify-center gap-2 h-9 px-4 text-sm rounded-md font-medium ${
                idx === 0
                  ? "bg-teal-600 text-white shadow"
                  : "border bg-white shadow-sm hover:bg-slate-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Appointment List */}
    <div className="p-4">
      {appointments.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <Calendar className="w-10 h-10 mx-auto mb-3 text-slate-300" />
          <p className="text-lg font-medium">No appointments</p>
          <p className="text-sm">Schedule a new appointment to get started</p>
        </div>
      ) : (
        <div className="space-y-5 max-h-[500px] overflow-y-auto ">

          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200 "
            >
              {/* Top Row: Avatar + Name + Status */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    {appt.patient?.charAt(0)}
                  </div>

                  <div>
                    <p className="text-lg font-semibold">{appt.patient}</p>

                    {/* Doctor + Time */}
                    <p className="text-sm text-slate-600 flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1">
                        <Stethoscope className="w-4 h-4 text-teal-600" />
                        {appt.doctor}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        {appt.time}
                      </span>
                    </p>

                    {/* Reason */}
                    <p className="text-sm text-slate-700 mt-1">{appt.reason}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <span className="px-4 py-0.5   text-sm rounded-full shadow bg-teal-100 text-teal-800 border border-teal-200">
                  {appt.status || "Confirmed"}
                </span>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-slate-200"></div>

              {/* Fee + Payment Status */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Fee: ${appt.fee || "0"}</p>

                <span className="px-4 py-0.5  text-sm rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">
                  Payment Pending
                </span>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-6 flex items-center gap-3 border-2 border-gray-50 p-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-1 rounded-md border border-green-600 text-green-700 hover:bg-green-50 text-sm">
                  <Check className="w-4 h-4" />
                  Complete
                </button>

                <button className="p-3 rounded-md border border-red-500 text-red-600 hover:bg-red-50 py-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  </div>
);

export default AppointmentList;
