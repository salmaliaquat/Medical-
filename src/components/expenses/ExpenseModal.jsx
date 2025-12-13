// import React, { useState, useEffect } from "react";

// const ExpenseModal = ({ onClose, onSave, editData }) => {
//   const [form, setForm] = useState({
//     date: "",
//     category: "",
//     description: "",
//     vendor: "",
//     paymentMethod: "Cash",
//     amount: 0,
//     status: "Pending",
//   });

//   useEffect(() => {
//     if (editData) setForm(editData);
//   }, [editData]);

//   const handleChange = (key, value) => setForm({ ...form, [key]: value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ ...form, amount: Number(form.amount) });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 space-y-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{editData ? "Edit Expense" : "Add Expense"}</h2>
//           <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-md">✕</button>
//         </div>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Date</label>
//               <input
//                 type="date"
//                 value={form.date}
//                 onChange={(e) => handleChange("date", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Category</label>
//               <input
//                 value={form.category}
//                 onChange={(e) => handleChange("category", e.target.value)}
//                 placeholder="e.g., Utilities"
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Description</label>
//               <input
//                 value={form.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Vendor</label>
//               <input
//                 value={form.vendor}
//                 onChange={(e) => handleChange("vendor", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Payment Method</label>
//               <select
//                 value={form.paymentMethod}
//                 onChange={(e) => handleChange("paymentMethod", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Cash</option>
//                 <option>Card</option>
//                 <option>Bank Transfer</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Payment Status</label>
//               <select
//                 value={form.paymentStatus}
//                 onChange={(e) => handleChange("paymentStatus", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Pending</option>
//                 <option>Partial</option>
//                 <option>Paid</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Amount</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 value={form.amount}
//                 onChange={(e) => handleChange("amount", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-sm font-medium mb-1">Status</label>
//               <select
//                 value={form.status}
//                 onChange={(e) => handleChange("status", e.target.value)}
//                 className="w-full h-10 border border-slate-200 rounded-md px-3 text-sm focus:ring-1 focus:ring-teal-500"
//               >
//                 <option>Pending</option>
//                 <option>Completed</option>
//                 <option>Cancelled</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
//             <button type="button" onClick={onClose} className="h-10 px-4 border border-slate-200 rounded-md hover:bg-slate-100">Cancel</button>
//             <button type="submit" className="h-10 px-4 rounded-md text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ExpenseModal;


import React, { useState, useEffect } from "react";

const ExpenseModal = ({ isOpen, onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    date: "",
    category: "Other",
    description: "",
    vendor: "",
    paymentMethod: "Cash",
    paymentStatus: "Pending",
    amount: "",
    status: "Pending",
    referenceNumber: "",
    notes: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, amount: Number(form.amount) });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">{editData ? "Edit Expense" : "New Expense"}</h2>
          <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg transition-colors">
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
                className="flex h-9  px-3 py-1 w-full rounded-md border border-gray-200 border-input bg-transparent text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category *</label>
              <select
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Salary</option>
                <option>Rent</option>
                <option>Utilities</option>
                <option>Equipment</option>
                <option>Maintenance</option>
                <option>Marketing</option>
                <option>Supplies</option>
                <option>Transportation</option>
                <option>Professional Fees</option>
                <option>Insurance</option>
                <option>Taxes</option>
                <option>Other</option>
              </select>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount *</label>
              <input
                type="number"
                step="0.01"
                value={form.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                placeholder="0.00"
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Method</label>
              <select
                value={form.paymentMethod}
                onChange={(e) => handleChange("paymentMethod", e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 text-sm border-input bg-transparent px-3 py-1  shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Cash</option>
                <option>Card</option>
                <option>Bank Transfer</option>
                <option>Cheque</option>
              </select>
            </div>

            {/* Vendor */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Vendor</label>
              <input
                type="text"
                value={form.vendor}
                onChange={(e) => handleChange("vendor", e.target.value)}
                placeholder="Vendor name"
                className="flex h-9 w-full rounded-md border border-gray-200 text-sm border-input bg-transparent px-3 py-1  shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Reference Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Reference Number</label>
              <input
                type="text"
                value={form.referenceNumber}
                onChange={(e) => handleChange("referenceNumber", e.target.value)}
                placeholder="Receipt/invoice #"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              placeholder="Enter expense description"
              required
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={2}
              placeholder="Additional notes"
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="h-9 px-4 border border-input rounded-md hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-9 px-4 rounded-md text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              {editData ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
