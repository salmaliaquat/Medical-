import React from "react";
import ExpenseRow from "./ExpenseRow";

const ExpensesTable = ({ data, onEdit }) => (
  <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-0 overflow-x-auto">
    <table className="w-full text-sm caption-bottom">
      <thead className="bg-slate-50">
        <tr className="border-b border-gray-300 text-gray-500">
          <th className="h-10 px-2 text-left font-semibold">Date</th>
          <th className="h-10 px-2 text-left font-semibold">Category</th>
          <th className="h-10 px-2 text-left font-semibold">Description</th>
          <th className="h-10 px-2 text-left font-semibold">Vendor</th>
          <th className="h-10 px-2 text-left font-semibold">Payment</th>
          <th className="h-10 px-2 text-left font-semibold">Amount</th>
          <th className="h-10 px-2 text-left font-semibold">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((expense) => (
          <ExpenseRow key={expense.id} expense={expense} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpensesTable;
