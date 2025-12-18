// import React, { useState, useEffect } from "react";

// const TestModal = ({ onClose, onSave, editData, patients = [], doctors = [] }) => {
//   const [form, setForm] = useState({
//     patient: "",
//     doctor: "",
//     name: "",
//     category: "Blood Test",
//     date: "",
//     fee: "",
//     paymentStatus: "Pending",
//     status: "Pending",
//     results: "",
//     notes: "",
//   });

//   useEffect(() => {
//     if (editData) setForm(editData);
//   }, [editData]);

//   const handleChange = (key, value) => setForm({ ...form, [key]: value });

//   const handleSubmit = () => {
//     onSave({ ...form, fee: Number(form.fee) });
//   };

//   return (
//     <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        
//         {/* Header */}
//         <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
//           <h2 className="text-2xl font-bold">{editData ? "Update Test" : "Add New Test"}</h2>
//           <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg transition-colors">
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

//           {/* Grid Inputs */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {/* Patient */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Patient *</label>
//               <select
//                 value={form.patient}
//                 onChange={(e) => handleChange("patient", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               >
//                 <option value="">Select patient</option>
//                 {patients.map(p => (
//                   <option key={p.id} value={p.name}>{p.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Doctor */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Doctor</label>
//               <select
//                 value={form.doctor}
//                 onChange={(e) => handleChange("doctor", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               >
//                 <option value="">Select doctor</option>
//                 {doctors.map(d => (
//                   <option key={d.id} value={d.name}>{d.name}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Test Name */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Test Name *</label>
//               <input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 placeholder="e.g., Complete Blood Count"
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             {/* Category */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Category</label>
//               <select
//                 value={form.category}
//                 onChange={(e) => handleChange("category", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Blood Test</option>
//                 <option>Urine Test</option>
//                 <option>X-Ray</option>
//                 <option>Ultrasound</option>
//                 <option>CT Scan</option>
//                 <option>MRI</option>
//                 <option>ECG</option>
//                 <option>Echo</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Test Date */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Test Date *</label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             {/* Test Fee */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Test Fee</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 value={form.fee}
//                 onChange={(e) => handleChange("fee", e.target.value)}
//                 placeholder="0.00"
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             {/* Payment Status */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Payment Status</label>
//               <select
//                 value={form.paymentStatus}
//                 onChange={(e) => handleChange("paymentStatus", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Pending</option>
//                 <option>Paid</option>
//               </select>
//             </div>

//             {/* Test Status */}
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-slate-700 mb-1">Test Status</label>
//               <select
//                 value={form.status}
//                 onChange={(e) => handleChange("status", e.target.value)}
//                 className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Pending</option>
//                 <option>Sample Collected</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//                 <option>Reported</option>
//               </select>
//             </div>

//             {/* Test Results */}
//             <div className="flex flex-col md:col-span-2">
//               <label className="text-sm font-medium text-slate-700 mb-1">Test Results</label>
//               <textarea
//                 value={form.results}
//                 onChange={(e) => handleChange("results", e.target.value)}
//                 placeholder="Enter test results or findings"
//                 rows={4}
//                 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             {/* Notes */}
//             <div className="flex flex-col md:col-span-2">
//               <label className="text-sm font-medium text-slate-700 mb-1">Notes</label>
//               <textarea
//                 value={form.notes}
//                 onChange={(e) => handleChange("notes", e.target.value)}
//                 placeholder="Additional notes"
//                 rows={2}
//                 className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//           </div>

//           {/* Footer */}
//           <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//             <button
//               onClick={onClose}
//               className="h-10 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-slate-100"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="h-10 px-4 rounded-md shadow text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
//             >
//               {editData ? "Update Test" : "Add Test"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default TestModal;


import React, { useState, useEffect } from "react";

const TestModal = ({ onClose, onSave, editData, patients = [], doctors = [] }) => {
  const [form, setForm] = useState({
    patientId: "",
    patientName: "",
    age: "",
    sex: "",
    doctor: "",
    testName: "",
    testType: "Blood Test",
    date: "",
    time: "",
    fee: "",
    paymentStatus: "Pending",
    status: "Pending",
    parameters: [
      { name: "", min: "", max: "", result: "", unit: "" },
    ],
    notes: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  /* ---------------- Parameters ---------------- */
  const handleParamChange = (index, key, value) => {
    const updated = [...form.parameters];
    updated[index][key] = value;
    setForm({ ...form, parameters: updated });
  };

  const addParameter = () => {
    setForm({
      ...form,
      parameters: [...form.parameters, { name: "", min: "", max: "", result: "", unit: "" }],
    });
  };

  const removeParameter = (index) => {
    const updated = form.parameters.filter((_, i) => i !== index);
    setForm({ ...form, parameters: updated });
  };

  const handleSubmit = () => {
    onSave({ ...form, fee: Number(form.fee) });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between">
          <h2 className="text-2xl font-bold">
            {editData ? "Update Lab Test Report" : "New Lab Test Report"}
          </h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <form className="p-6 space-y-8" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

          {/* ---------------- Patient Info ---------------- */}
          <section>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Patient Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                placeholder="Patient ID"
                value={form.patientId}
                onChange={(e) => handleChange("patientId", e.target.value)}
                className="input"
              />
              <input
                placeholder="Patient Name"
                value={form.patientName}
                onChange={(e) => handleChange("patientName", e.target.value)}
                className="input"
              />
              <input
                placeholder="Age"
                value={form.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className="input"
              />
              <select
                value={form.sex}
                onChange={(e) => handleChange("sex", e.target.value)}
                className="input"
              >
                <option value="">Sex</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} className="input" />
              <input type="time" value={form.time} onChange={(e) => handleChange("time", e.target.value)} className="input" />
            </div>
          </section>

          {/* ---------------- Test Info ---------------- */}
          <section>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Test Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                placeholder="Test Name (e.g CBC)"
                value={form.testName}
                onChange={(e) => handleChange("testName", e.target.value)}
                className="input"
              />
              <select
                value={form.testType}
                onChange={(e) => handleChange("testType", e.target.value)}
                className="input"
              >
                <option>Blood Test</option>
                <option>Urine Test</option>
                <option>X-Ray</option>
                <option>Ultrasound</option>
                <option>Other</option>
              </select>
              <input
                type="number"
                placeholder="Test Fee"
                value={form.fee}
                onChange={(e) => handleChange("fee", e.target.value)}
                className="input"
              />
            </div>
          </section>

          {/* ---------------- Parameters Table ---------------- */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-slate-700">Test Parameters</h3>
              <button type="button" onClick={addParameter} className="px-4 py-2 bg-teal-500 text-white rounded-md">
                + Add Parameter
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead className="bg-slate-100">
                  <tr className="text-gray-500">
                    <th className="p-2 border border-gray-300">Parameter</th>
                    <th className="p-2 border border-gray-300">Min</th>
                    <th className="p-2 border border-gray-300">Max</th>
                    <th className="p-2 border border-gray-300">Result</th>
                    <th className="p-2 border border-gray-300">Unit</th>
                    <th className="p-2 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {form.parameters.map((p, i) => (
                    <tr key={i}>
                      <td><input className="table-input" value={p.name} onChange={(e) => handleParamChange(i, "name", e.target.value)} /></td>
                      <td><input className="table-input" value={p.min} onChange={(e) => handleParamChange(i, "min", e.target.value)} /></td>
                      <td><input className="table-input" value={p.max} onChange={(e) => handleParamChange(i, "max", e.target.value)} /></td>
                      <td><input className="table-input" value={p.result} onChange={(e) => handleParamChange(i, "result", e.target.value)} /></td>
                      <td><input className="table-input" value={p.unit} onChange={(e) => handleParamChange(i, "unit", e.target.value)} /></td>
                      <td className="text-center">
                        {form.parameters.length > 1 && (
                          <button type="button" onClick={() => removeParameter(i)} className="text-red-500">✕</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Notes */}
          <textarea
            rows={3}
            placeholder="Additional Notes"
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="input w-full"
          />

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
            <button className="px-5 py-2 bg-teal-600 text-white rounded-md">
              Save Report
            </button>
          </div>

        </form>
      </div>

      {/* Small helpers */}
      <style>{`
        .input {
          height: 40px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 0 10px;
          font-size: 14px;
        }
        .table-input {
          width: 100%;
          padding: 6px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default TestModal;
