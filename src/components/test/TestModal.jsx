import React, { useState, useEffect } from "react";

const TestModal = ({ onClose, onSave, editData, patients = [], doctors = [] }) => {
  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    name: "",
    category: "Blood Test",
    date: "",
    fee: "",
    paymentStatus: "Pending",
    status: "Pending",
    results: "",
    notes: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    onSave({ ...form, fee: Number(form.fee) });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold">{editData ? "Update Test" : "Add New Test"}</h2>
          <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg transition-colors">
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Patient */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Patient *</label>
              <select
                value={form.patient}
                onChange={(e) => handleChange("patient", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option value="">Select patient</option>
                {patients.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Doctor */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Doctor</label>
              <select
                value={form.doctor}
                onChange={(e) => handleChange("doctor", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option value="">Select doctor</option>
                {doctors.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* Test Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Test Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g., Complete Blood Count"
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Category</label>
              <select
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option>Blood Test</option>
                <option>Urine Test</option>
                <option>X-Ray</option>
                <option>Ultrasound</option>
                <option>CT Scan</option>
                <option>MRI</option>
                <option>ECG</option>
                <option>Echo</option>
                <option>Other</option>
              </select>
            </div>

            {/* Test Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Test Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* Test Fee */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Test Fee</label>
              <input
                type="number"
                step="0.01"
                value={form.fee}
                onChange={(e) => handleChange("fee", e.target.value)}
                placeholder="0.00"
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* Payment Status */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Payment Status</label>
              <select
                value={form.paymentStatus}
                onChange={(e) => handleChange("paymentStatus", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option>Pending</option>
                <option>Paid</option>
              </select>
            </div>

            {/* Test Status */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">Test Status</label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option>Pending</option>
                <option>Sample Collected</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Reported</option>
              </select>
            </div>

            {/* Test Results */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-slate-700 mb-1">Test Results</label>
              <textarea
                value={form.results}
                onChange={(e) => handleChange("results", e.target.value)}
                placeholder="Enter test results or findings"
                rows={4}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* Notes */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-slate-700 mb-1">Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="Additional notes"
                rows={2}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="h-10 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="h-10 px-4 rounded-md shadow text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
            >
              {editData ? "Update Test" : "Add Test"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TestModal;
