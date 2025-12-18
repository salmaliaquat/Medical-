import React, { useState } from "react";
import { ShoppingCart, Plus, CheckCircle } from "lucide-react";

const ProductsCard = ({ products, addToCart }) => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    if (!selectedProductId) return;

    const product = products.find(
      (item) => item.id === Number(selectedProductId)
    );

    if (product) {
      addToCart(product);
      setSelectedProductId("");
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div>
      {/* Select + Add */}
      <div className="p-4">
        <div className="flex gap-3">
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="flex w-full rounded-md border bg-transparent px-3 py-2 shadow-sm
  text-sm border-slate-200 focus:outline-none focus:ring-0 focus:border-teal-600"
          >
            <option value="">Select product...</option>
            {products.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — ${item.price}
              </option>
            ))}
          </select>

          <button
            onClick={handleAdd}
            disabled={!selectedProductId}
            className={`inline-flex items-center gap-2 h-10 px-4 rounded-md
            font-medium shadow transition
            ${selectedProductId
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-teal-600 text-white
        px-4 py-2 rounded-md shadow-lg flex items-center gap-2 z-50">
          <CheckCircle className="w-4 h-4" />
          Item added to cart
        </div>
      )}

      {/* Products Grid (UNCHANGED) */}
      <div className="h-[65vh] overflow-y-auto pr-2">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-xl text-card-foreground shadow cursor-pointer 
              hover:shadow-xl transition-all duration-200 border-0 bg-white hover:scale-105"
            >
              <div className="p-4">
                <div className="aspect-square bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl mb-3 flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-teal-600" />
                </div>

                <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2 text-sm">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 mb-2">
                  Stock: {item.stock}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-600">
                    ${item.price}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="inline-flex items-center justify-center gap-2
                    text-xs bg-teal-600 hover:bg-teal-700 text-white
                    h-7 px-3 rounded-md"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
