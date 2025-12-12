// import React from "react";
// import { Pen } from "lucide-react";

// const ProductTable = ({ products, onEdit }) => {
//     return (
//         <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-0 overflow-x-auto">
//             <div className="relative w-full overflow-auto">
//                 <table className="w-full text-sm caption-bottom">
//                     <thead className="[&_tr]:border-b">
//                         <tr className="border-b border-b-gray-300 text-gray-400 transition-colors hover:bg-muted/50 bg-slate-50">
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Product</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Code</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Category</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Price</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Stock</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Status</th>
//                             <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="[&_tr:last-child]:border-0">
//                         {products.map((p) => (
//                             <tr key={p.id} className="border-b border-b-gray-100 transition-colors hover:bg-slate-50">
//                                 {/* Product Name & Brand */}
//                                 <td className="p-2 align-middle">
//                                     <div>
//                                         <p className="font-medium text-slate-900">{p.name}</p>
//                                         <p className="text-xs text-slate-500">{p. manufacturer}</p>
//                                     </div>
//                                 </td>

//                                 {/* Product Code */}
//                                 <td className="p-2 align-middle font-mono text-sm">{p.code}</td>

//                                 {/* Category Badge */}
//                                 <td className="p-2 align-middle">
//                                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground border-slate-200">
//                                         {p.category}
//                                     </div>
//                                 </td>

//                                 {/* Price & Cost */}
//                                 <td className="p-2 align-middle">
//                                     <div className="text-sm">
//                                         <p className="font-semibold text-slate-900">${p.price}</p>
//                                         {p.cost && <p className="text-xs text-slate-500">Cost: ${p.cost}</p>}
//                                     </div>
//                                 </td>

//                                 {/* Stock */}
//                                 <td className="p-2 align-middle">
//                                     <div className="flex flex-col gap-1">
//                                         <div className="flex items-center gap-2">
//                                             <span className={`font-semibold ${p.stock <= 12 ? "text-amber-600" : "text-emerald-600"}`}>{p.stock}</span>
//                                             <span className="text-xs text-slate-500">{p.unit}</span>
//                                         </div>
//                                         {p.lowStock && (
//                                             <div className="w-20 inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold shadow bg-amber-100 text-amber-800 border-amber-200">
//                                                 Low Stock
//                                             </div>
//                                         )}
//                                     </div>
//                                 </td>

//                                 {/* Status Badge */}
//                                 <td className="p-2 align-middle">
//                                     <div className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold shadow ${p.status === "Active"
//                                             ? "bg-emerald-100 text-emerald-800 border-emerald-200"
//                                             : "bg-red-100 text-red-800 border-red-200"
//                                         }`}>
//                                         {p.status}
//                                     </div>
//                                 </td>

//                                 {/* Actions */}
//                                 <td className="p-2 align-middle">
//                                     <button
//                                         onClick={() => onEdit(p)}
//                                         className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-md border border-gray-200 bg-background hover:bg-accent hover:text-accent-foreground text-xs"
//                                     >
//                                         <Pen className="w-4 h-4" />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ProductTable;


import React from "react";
import { Pen, Package } from "lucide-react";

const ProductTable = ({ products, onEdit }) => {
  return (
    <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-0 overflow-x-auto">
      <div className="relative w-full overflow-auto">
        <table className="w-full text-sm caption-bottom">
          <thead className="[&_tr]:border-b">
            <tr className="border-b border-b-gray-300 text-gray-400 transition-colors hover:bg-muted/50 bg-slate-50">
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Product</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Code</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Category</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Price</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Stock</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Status</th>
              <th className="h-10 px-2 text-left align-middle font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>

          <tbody className="[&_tr:last-child]:border-0">
            {products.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="text-center py-12 text-slate-500">
                    <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="text-lg font-medium">No products found</p>
                    <p className="text-sm">Try adjusting your search or filters</p>
                  </div>
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="border-b border-b-gray-100 transition-colors hover:bg-slate-50">
                  {/* Product Name & Manufacturer */}
                  <td className="p-2 align-middle">
                    <div>
                      <p className="font-medium text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-500">{p.manufacturer}</p>
                    </div>
                  </td>

                  {/* Product Code */}
                  <td className="p-2 align-middle font-mono text-sm">{p.code}</td>

                  {/* Category Badge */}
                  <td className="p-2 align-middle">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground border-slate-200">
                      {p.category}
                    </div>
                  </td>

                  {/* Price & Cost */}
                  <td className="p-2 align-middle">
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">${p.price}</p>
                      {p.cost && <p className="text-xs text-slate-500">Cost: ${p.cost}</p>}
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="p-2 align-middle">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${p.stock <= 12 ? "text-amber-600" : "text-emerald-600"}`}>
                          {p.stock}
                        </span>
                        <span className="text-xs text-slate-500">{p.unit}</span>
                      </div>
                      {p.lowStock && (
                        <div className="w-20 inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold shadow bg-amber-100 text-amber-800 border-amber-200">
                          Low Stock
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="p-2 align-middle">
                    <div
                      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold shadow ${
                        p.status === "Active"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : "bg-red-100 text-red-800 border-red-200"
                      }`}
                    >
                      {p.status}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-2 align-middle">
                    <button
                      onClick={() => onEdit(p)}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-md border border-gray-200 bg-background hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                      <Pen className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
