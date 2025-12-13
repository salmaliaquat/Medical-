import React from "react";

const SalesRow = ({ sale }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-slate-50">
      <td className="p-2 font-mono font-medium">{sale.invoice}</td>

      <td className="p-2">
        <p className="font-medium">{sale.date}</p>
        <p className="text-xs text-slate-500">{sale.time}</p>
      </td>

      <td className="p-2 font-medium">{sale.patient}</td>
      <td className="p-2 text-slate-600">{sale.items} items</td>

      <td className="p-2">
        <span className="border rounded-md px-2 py-0.5 text-xs">
          {sale.payment}
        </span>
      </td>

      <td className="p-2 font-bold text-emerald-600">{sale.amount}</td>

      <td className="p-2">
        <span className="px-2 py-0.5 text-xs rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
          Completed
        </span>
      </td>
    </tr>
  );
};

export default SalesRow;
