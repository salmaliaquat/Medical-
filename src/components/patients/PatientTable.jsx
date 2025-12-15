import React from "react";
import { Pen } from "lucide-react";

const PatientTable = ({ patients, onEdit }) => (

  <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-0">

    {/* Scroll on small screens ONLY */}
   <div className="overflow-x-auto max-w-full">

      <table className="min-w-full caption-bottom text-sm whitespace-nowrap">

        <thead>
          <tr className="border-b border-gray-300 bg-slate-100 text-gray-400">
            <th className="h-10 px-2 text-left font-semibold">Patient</th>
            <th className="h-10 px-2 text-left font-semibold">ID</th>
            <th className="h-10 px-2 text-left font-semibold">Contact</th>
            <th className="h-10 px-2 text-left font-semibold">Age/Gender</th>
            <th className="h-10 px-2 text-left font-semibold">Blood Group</th>
            <th className="h-10 px-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-b border-gray-100 transition-colors hover:bg-slate-50"
            >
              <td className="p-2 align-middle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {patient.name?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{patient.name}</p>
                    {patient.email && (
                      <p className="text-xs text-slate-500">{patient.email}</p>
                    )}
                  </div>
                </div>
              </td>

              <td className="p-2 align-middle font-mono text-sm">
                {patient.id}
              </td>

              <td className="p-2 align-middle text-sm">
                <p className="font-medium text-slate-900">{patient.phone}</p>
                {patient.emergency && (
                  <p className="text-xs text-slate-500">
                    Emergency: {patient.emergency}
                  </p>
                )}
              </td>

              <td className="p-2 align-middle text-sm">
                <p className="font-medium text-slate-900">{patient.age} years</p>
                <p className="text-xs text-slate-500">{patient.gender}</p>
              </td>

              <td className="p-2 align-middle">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-red-200 text-red-800">
                  {patient.bloodGroup}
                </div>
              </td>

              <td className="p-2 align-middle">
                <button
                  onClick={() => onEdit(patient)}
                  className="inline-flex items-center justify-center gap-2 font-medium transition-colors border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs border-slate-200"
                >
                  <Pen className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
);

export default PatientTable;
