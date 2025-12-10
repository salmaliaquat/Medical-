import React from "react";
import { TriangleAlert } from "lucide-react";

const lowStockItems = [
  { name: "Vitamin D3 Supplement", stock: "12 Bottle", status: "Reorder" },
  // Add more items if needed
];

const LowStockAlert = () => {
  return (
    <div className="rounded-xl overflow-visible text-card-foreground border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">

      <div className="flex flex-col space-y-1.5 p-6  pt-7">
        <div className="tracking-tight text-lg font-semibold text-amber-900 flex items-center leading-none">
         <TriangleAlert className="w-5 h-5 mr-2 text-amber-600" />
          Low Stock Alert
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {lowStockItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div>
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">Stock: {item.stock}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowStockAlert;
