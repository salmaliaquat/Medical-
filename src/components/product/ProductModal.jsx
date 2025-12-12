import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ProductModal = ({ product, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("Piece");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [tax, setTax] = useState(0);
  const [stock, setStock] = useState("");
  const [reorder, setReorder] = useState(10);
  const [manufacturer, setManufacturer] = useState("");
  const [status, setStatus] = useState("Active");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setCode(product.code || "");
      setCategory(product.category || "");
      setUnit(product.unit || "Piece");
      setCost(product.cost || "");
      setPrice(product.price || "");
      setMrp(product.mrp || "");
      setTax(product.tax || 0);
      setStock(product.stock || "");
      setReorder(product.reorder || 10);
      setManufacturer(product.manufacturer || "");
      setStatus(product.status || "Active");
      setDescription(product.description || "");
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product?.id, // keep id if editing, undefined if new
      name,
      code,
      category,
      unit,
      cost,
      price,
      mrp,
      tax,
      stock,
      reorder,
      manufacturer,
      status,
      description,
      lowStock: stock && stock <= 10, // automatically mark low stock
    };
    onSave(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product ? "Edit Product" : "New Product"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter product name"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Product Code */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Code / Barcode</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter product code"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option value="">Select category</option>
                <option value="Medicines">Medicines</option>
                <option value="Surgical Equipment">Surgical Equipment</option>
                <option value="Medical Consumables">Medical Consumables</option>
                <option value="Lab Equipment">Lab Equipment</option>
              </select>
            </div>

            {/* Unit */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Unit</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option value="Piece">Piece</option>
                <option value="Box">Box</option>
                <option value="Strip">Strip</option>
                <option value="Bottle">Bottle</option>
                <option value="Pack">Pack</option>
                <option value="Kit">Kit</option>
                <option value="Vial">Vial</option>
                <option value="Tube">Tube</option>
                <option value="Kg">Kg</option>
                <option value="Liter">Liter</option>
              </select>
            </div>

            {/* Cost Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Cost Price</label>
              <input
                type="number"
                step="0.01"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="0.00"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Selling Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Selling Price *</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="0.00"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* MRP */}
            <div className="space-y-2">
              <label className="text-sm font-medium">MRP</label>
              <input
                type="number"
                step="0.01"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
                placeholder="0.00"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Tax */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Tax %</label>
              <input
                type="number"
                step="0.01"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                placeholder="0"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Stock */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Stock</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="0"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Reorder Level */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Reorder Level</label>
              <input
                type="number"
                value={reorder}
                onChange={(e) => setReorder(e.target.value)}
                placeholder="10"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Manufacturer */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Manufacturer</label>
              <input
                type="text"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                placeholder="Enter manufacturer name"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              rows={3}
              className="flex w-full min-h-[60px] rounded-md border border-gray-200 bg-transparent px-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="h-9 px-4 rounded-md border bg-white shadow hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-9 px-4 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow hover:from-teal-600 hover:to-teal-700"
            >
              {product ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
