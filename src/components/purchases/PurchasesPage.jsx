// import React from "react";
// import { Plus, ShoppingBag, Package } from "lucide-react";
// import PurchasesTable from "./PurchasesTable";
// import PurchasesCard from "./PurchasesCard";

// const PurchasesPage = () => {
//   const purchases = []; // Replace with dynamic data later

//   return (
//     <main className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">Purchases</h1>
//           <p className="text-slate-600 mt-1">Manage purchase orders and goods received</p>
//         </div>
//         <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg">
//           <Plus className="w-5 h-5 mr-2" /> New Purchase
//         </button>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <DashboardCard
//           title="Total Purchases"
//           value={0}
//           icon={<ShoppingBag className="w-6 h-6 text-white" />}
//           colorFrom="indigo"
//           colorTo="indigo"
//         />
//         <DashboardCard
//           title="Purchase Value"
//           value="$0.00"
//           icon={<Package className="w-6 h-6 text-white" />}
//           colorFrom="blue"
//           colorTo="blue"
//         />
//         <PurchasesCard
//           title="Pending Payments"
//           value="$0.00"
//           icon={<ShoppingBag className="w-6 h-6 text-white" />}
//           colorFrom="amber"
//           colorTo="amber"
//         />
//       </div>

//       {/* Purchases Table */}
//       <PurchasesTable purchases={purchases} />
//     </main>
//   );
// };

// export default PurchasesPage;


import React , {useState} from "react";
import { Plus, ShoppingBag, Package, Wallet } from "lucide-react";
import PurchasesTable from "./PurchasesTable";
import PurchasesCard from "./PurchasesCard";
import PurchaseModal from "./PurchaseModal";

const PurchasesPage = () => {

   const [openModal, setOpenModal] = useState(false);
   
  const purchases = []; // Replace with dynamic later

  // Stats same style as ProductsPage
  const stats = [
    {
      title: "Total Purchases",
      count: purchases.length,
      color: "indigo",
      Icon: ShoppingBag,
    },
    {
      title: "Purchase Value",
      count: "$0.00",
      color: "blue",
      Icon: Package,
    },
    {
      title: "Pending Payments",
      count: "$0.00",
      color: "amber",
      Icon: Wallet,
    },
  ];

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Purchases</h1>
          <p className="text-slate-600 mt-1">Manage purchase orders and goods received</p>
        </div>

        <button 
         onClick={() => setOpenModal(true)}
        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg">
          <Plus className="w-5 h-5 mr-2" />
          New Purchase
        </button>
      </div>

      {/* Purchase Cards (same design as Product Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <PurchasesCard
            key={index}
            title={stat.title}
            count={stat.count}
            color={stat.color}
            Icon={stat.Icon}
          />
        ))}
      </div>

      {/* Purchases Table */}
      <PurchasesTable purchases={purchases} />
      {openModal && <PurchaseModal onClose={() => setOpenModal(false)} />}
    </main>
  );
};

export default PurchasesPage;
