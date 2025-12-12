import React from "react";
import { ShoppingBag } from "lucide-react";

const PurchasesTable = ({ purchases }) => {
  return (
    <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="overflow-x-auto p-0">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b border-gray-300 text-gray-400 transition-colors hover:bg-muted bg-slate-50">
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Purchase #</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Supplier</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Date</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Invoice</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Items</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Amount</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Payment</th>
              <th className="h-10 px-2 text-left font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.length === 0 ? (
              <tr>
                <td colSpan={8}>
                  <div className="text-center py-12 text-slate-500">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="text-lg font-medium">No purchases found</p>
                    <p className="text-sm">Try adjusting your search or filters</p>
                  </div>
                </td>
              </tr>
            ) : (
              purchases.map((p) => (
                <tr key={p.id} className="border-b border-b-gray-100 hover:bg-slate-50">
                  <td className="p-2">{p.purchaseNumber}</td>
                  <td className="p-2">{p.supplier}</td>
                  <td className="p-2">{p.date}</td>
                  <td className="p-2">{p.invoice}</td>
                  <td className="p-2">{p.items}</td>
                  <td className="p-2">{p.amount}</td>
                  <td className="p-2">{p.payment}</td>
                  <td className="p-2">{p.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasesTable;
