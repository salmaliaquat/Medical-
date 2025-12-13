import React, { useState } from "react";
import { Plus } from "lucide-react";
import TestStatsCards from "./TestStatsCards";
import TestsTable from "./TestsTable";
import TestModal from "./TestModal";

const initialTests = [
  {
    id: "TEST-002",
    patient: "Maria Garcia",
    doctor: "Dr. Michael Chen",
    name: "ECG",
    category: "X-Ray",
    date: "Jan 25, 2025",
    fee: 50,
    status: "Completed",
    paymentStatus: "Paid",
  },
  {
    id: "TEST-001",
    patient: "John Williams",
    doctor: "Dr. Sarah Johnson",
    name: "Complete Blood Count (CBC)",
    category: "Blood Test",
    date: "Jan 24, 2025",
    fee: 35,
    status: "Completed",
    paymentStatus: "Pending",
  },
  {
    id: "TEST-003",
    patient: "Williams janson",
    doctor: "Dr. Sarah Johnson",
    name: "Complete Blood Count (CBC)",
    category: "Blood Test",
    date: "Jan 24, 2025",
    fee: 35,
    status: "Completed",
    paymentStatus: "Parcial",
  },
];

const MedicalTestsPage = () => {
  const [tests, setTests] = useState(initialTests);
  const [open, setOpen] = useState(false);
  const [editTest, setEditTest] = useState(null);

  const handleSave = (data) => {
    if (editTest) {
      setTests(tests.map(t => (t.id === editTest.id ? data : t)));
    } else {
      setTests([{ ...data, id: `TEST-${Date.now()}` }, ...tests]);
    }
    setOpen(false);
    setEditTest(null);
  };

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Medical Tests</h1>
          <p className="text-slate-600 mt-1">
            Manage diagnostic tests and lab reports
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-500/30"
        >
          <Plus className="w-5 h-5" />
          New Test
        </button>
      </div>

      <TestStatsCards tests={tests} />

      <TestsTable
        tests={tests}
        onEdit={(t) => {
          setEditTest(t);
          setOpen(true);
        }}
      />

      {open && (
        <TestModal
          onClose={() => {
            setOpen(false);
            setEditTest(null);
          }}
          onSave={handleSave}
          editData={editTest}
        />
      )}
    </main>
  );
};

export default MedicalTestsPage;
