import React from "react";

// Function to format date like "Nov 27, 2025"
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const ExpenseRow = ({ expense, onEdit }) => {
  const statusColors = {
    Paid: "bg-green-100 text-green-800 border-green-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <tr
      className="border-b border-gray-200 transition-colors hover:bg-slate-50 cursor-pointer"
      onClick={() => onEdit(expense)}
    >
      <td className="p-2 text-sm whitespace-nowrap">{formatDate(expense.date)}</td>
      <td className="p-2">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground border-slate-200">
          {expense.category}
        </div>
      </td>
      <td className="p-2 max-w-xs truncate">{expense.description}</td>
      <td className="p-2">{expense.vendor}</td>
      <td className="p-2 text-sm text-slate-600">{expense.paymentMethod}</td>
      <td className="p-2 font-bold text-red-600">${expense.amount.toFixed(2)}</td>
     
      <td className="p-2">
        <div
          className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold border ${
            statusColors[expense.status] || "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {expense.status}
        </div>
      </td>
    </tr>
  );
};

export default ExpenseRow;
