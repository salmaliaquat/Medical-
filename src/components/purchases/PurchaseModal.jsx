import React, { useState, useMemo } from "react";
import { X, Plus, Trash2, ChevronDown } from "lucide-react";


const PurchaseModal = ({ onClose }) => {
  const [supplier, setSupplier] = useState("");
  const [date, setDate] = useState(() => {
    // default to today in YYYY-MM-DD
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });
  const [invoice, setInvoice] = useState("");
  const [items, setItems] = useState([]); // dynamic item rows
  const [status, setStatus] = useState("Draft");
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [taxAmount, setTaxAmount] = useState(0); // can wire to percent if needed

  // Add a blank item row
  const handleAddItem = () => {
    const newItem = {
      id: Date.now() + Math.random(), // simple unique id
      product: "",
      qty: 1,
      cost: 0,
      selling: 0,
    };
    setItems((s) => [...s, newItem]);
  };

  // Remove item by id
  const handleRemoveItem = (id) => {
    setItems((s) => s.filter((it) => it.id !== id));
  };

  // Update a field on an item row
  const handleItemChange = (id, field, value) => {
    setItems((s) =>
      s.map((it) =>
        it.id !== id
          ? it
          : {
              ...it,
              [field]:
                field === "product"
                  ? value
                  : field === "qty"
                  ? Number(value || 0)
                  : Number(value || 0),
            }
      )
    );
  };

  // compute row total
  const rowTotal = (it) => {
    return Number(it.qty || 0) * Number(it.cost || 0);
  };

  // subtotal = sum of all row totals
  const subtotal = useMemo(() => items.reduce((acc, it) => acc + rowTotal(it), 0), [items]);

  // tax (here using fixed taxAmount field — you can change to percent)
  const tax = Number(taxAmount || 0);

  const total = subtotal + tax;

  // handle submit (collects data) — keep behaviour you want
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      supplier,
      date,
      invoice,
      items,
      subtotal,
      tax,
      total,
      status,
      paymentStatus,
    };
    // replace with your save call
    console.log("Create purchase payload:", payload);
    // close modal afterwards (or you may want to keep open)
    onClose && onClose();
  };

  // Example product options (replace with your data)
  const productOptions = [
    "Paracetamol 500mg",
    "Amoxicillin 250mg",
    "Ibuprofen 400mg",
    "Surgical Gloves (Pair)",
    "Face Masks (Box of 50)",
    "Vitamin D3 Supplement",
  ];

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 ">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-3xl max-h-[80vh]  overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">New Purchase</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          {/* Top Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Supplier *</label>
              <div className="flex">
                <select
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm"
                >
                  <option value="">Select supplier</option>
                  <option value="Supplier A">Supplier A</option>
                  <option value="Supplier B">Supplier B</option>
                </select>
                <button type="button" className="ml-2 h-9 px-3 rounded-md border border-gray-200 bg-white shadow-sm">
                  +
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Purchase Date *</label>
              <input
                type="date"
                className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Invoice Number</label>
              <input
                value={invoice}
                onChange={(e) => setInvoice(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                placeholder="Enter invoice #"
              />
            </div>
          </div>

          {/* Items Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold">Items</label>

              <button
                type="button"
                onClick={handleAddItem}
                className="flex items-center gap-1 border border-gray-200 h-8 px-3 rounded-md text-xs shadow-sm hover:bg-slate-100"
              >
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </div>

            {/* If no items, show placeholder prompt */}
           
             <div className="space-y-2">
                {items.map((it) => (
                  <div key={it.id} className="grid grid-cols-12 gap-2 p-3 bg-slate-50 rounded-lg items-center">
                    {/* Product */}
                    <div className="col-span-4">
                      <select
                        value={it.product}
                        onChange={(e) => handleItemChange(it.id, "product", e.target.value)}
                        className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm bg-white"
                      >
                        <option value="">Select product</option>
                        {productOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Qty */}
                    <div className="col-span-2">
                      <input
                        type="number"
                        min="0"
                        value={it.qty}
                        onChange={(e) => handleItemChange(it.id, "qty", e.target.value)}
                        placeholder="Qty"
                        className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                      />
                    </div>

                    {/* Cost */}
                    <div className="col-span-2">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={it.cost}
                        onChange={(e) => handleItemChange(it.id, "cost", e.target.value)}
                        placeholder="Cost"
                        className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                      />
                    </div>

                    {/* Selling (optional) */}
                    <div className="col-span-2">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={it.selling}
                        onChange={(e) => handleItemChange(it.id, "selling", e.target.value)}
                        placeholder="Selling"
                        className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                      />
                    </div>

                    {/* Row total */}
                    <div className="col-span-1 flex items-center">
                      <p className="text-sm font-medium">${rowTotal(it).toFixed(2)}</p>
                    </div>

                    {/* Delete */}
                    <div className="col-span-1 flex items-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(it.id)}
                        className="h-9 w-9 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-md"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

          </div>
          {/* TOTALS — show only when items exist */}
          {items.length > 0 && (
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-600 w-16">Tax</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={taxAmount}
                  onChange={(e) => setTaxAmount(Number(e.target.value || 0))}
                  className="h-9 w-36 rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                />
                <span className="text-sm text-slate-500"> (fixed amount)</span>
                <div className="flex-1" />
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-bold pt-2 border-t  border-gray-200">
                <span>Total</span>
                <span className="text-teal-600">${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Status + Payment Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm"
              >
                <option>Draft</option>
                <option>Received</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Status</label>
              <select
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm"
              >
                <option>Pending</option>
                <option>Partial</option>
                <option>Paid</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 ">
            <button type="button" onClick={onClose} className="h-9 px-4 py-2 rounded-md border border-gray-200 shadow-sm hover:bg-slate-100">
              Cancel
            </button>
            <button type="submit" className="h-9 px-4 py-2 rounded-md shadow text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
              Create Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseModal;
