import React from "react";
import {DollarSign, Calendar, TriangleAlert, TrendingUp, Package, TestTube, Receipt, Activity 
} from "lucide-react";
const cardsData = [
  {
    title: "Today's Revenue",
    value: "$0.00",
    subtitle: "0 transactions",
    icon: <DollarSign className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    title: "Appointments Today",
    value: "1",
    subtitle: "5 pending",
    icon: <Calendar className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "Low Stock Items",
    value: "1",
    subtitle: "0 expiring soon",
    icon: <TriangleAlert className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    title: "Monthly Profit",
    value: "$50.40",
    subtitle: "Revenue: $50.40",
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
   {
    title: "Total Products",
    value: "6",
    subtitle: "6 active",
    icon: <Package className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    title: "Pending Tests",
    value: "0",
    subtitle: "Total: 2",
    icon: <TestTube className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    title: "Month Sales",
    value: "1",
    subtitle: "$50.40",
    icon: <Receipt className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
  },
  {
    title: "Month Expenses",
    value: "$0.00",
    subtitle: "0 transactions",
    icon: <Activity className="w-7 h-7 text-white" />,
    iconBg: "bg-gradient-to-br from-slate-500 to-slate-700",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="rounded-xl text-card-foreground shadow overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 mb-1">
                  {card.title}
                </p>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {card.value}
                </h3>
                <p className="text-xs text-slate-500">{card.subtitle}</p>
              </div>
              <div
                className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
