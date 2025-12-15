import React from "react";

const ActivityTable = ({ activities }) => (
  <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-slate-50">
        <tr className="border-b border-gray-300">
          {["Timestamp", "User", "Action", "Module", "Details", "IP Address"].map((th, i) => (
            <th key={i} className="px-2 py-2 text-left font-semibold text-slate-600">{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {activities.map((act, i) => (
          <tr key={i} className="border-b border-gray-200 hover:bg-slate-50">
            <td className="px-2 py-2">{act.timestamp}</td>
            <td className="px-2 py-2">
              <p className="font-medium text-slate-900">{act.user}</p>
              <p className="text-xs text-slate-500">{act.email}</p>
            </td>
            <td className="px-2 py-2">
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${act.actionColor}`}>
                {act.action}
              </div>
            </td>
            <td className="px-2 py-2">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs border border-slate-200">{act.module}</div>
            </td>
            <td className="px-2 py-2 max-w-xs truncate text-sm text-slate-600">{act.details}</td>
            <td className="px-2 py-2 text-xs font-mono text-slate-500">{act.ip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ActivityTable;
