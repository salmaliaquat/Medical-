import React from "react";

const TestRow = ({ test, onEdit }) => {
  // Map status to badge colors
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Sample Collected": "bg-blue-100 text-blue-800 border-blue-200",
    "In Progress": "bg-purple-100 text-purple-800 border-purple-200",
    Completed: "bg-green-100 text-green-800 border-green-200",
    Reported: "bg-teal-100 text-teal-800 border-teal-200",
  };

  // Map payment status to badge colors
  const paymentColors = {
    Pending: "bg-orange-100 text-orange-800 border-orange-200",
    Partial: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Paid: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-slate-50">
      <td className="p-2 font-mono">{test.id}</td>

      <td className="p-2">
        <p className="font-medium">{test.patient}</p>
        <p className="text-xs text-slate-500">{test.doctor}</p>
      </td>

      <td className="p-2 font-medium">{test.name}</td>

      <td className="p-2">
        <span className="border border-gray-200  rounded-md px-2.5 py-0.5 text-xs">
          {test.category}
        </span>
      </td>

      <td className="p-2">{test.date}</td>

      <td className="p-2">
        <p className="font-semibold">${test.fee.toFixed(2)}</p>
        <span
          className={`inline-block mt-1 text-xs border rounded-md px-2 py-0.5 ${
            paymentColors[test.paymentStatus] || "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {test.paymentStatus}
          
        </span>
      </td>

      <td className="p-2">
        <span
          className={`text-xs border rounded-md px-2 py-0.5 ${
            statusColors[test.status] || "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {test.status}
        </span>
      </td>

      <td className="p-2">
        <button
          onClick={() => onEdit(test)}
          className="h-8 px-3 text-xs border border-slate-200 rounded-md hover:bg-slate-100"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default TestRow;
