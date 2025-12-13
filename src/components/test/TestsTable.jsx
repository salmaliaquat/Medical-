import React from "react";
import TestRow from "./TestRow";

const TestsTable = ({ tests, onEdit }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-gray-300">
          <tr>
            {["Test #", "Patient", "Test Name", "Category", "Date", "Fee", "Status", "Actions"]
              .map(h => (
                <th key={h} className="p-2 text-left font-semibold text-slate-600">
                  {h}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {tests.map(test => (
            <TestRow key={test.id} test={test} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestsTable;
