import React from "react";

const cards = [
  { title: "Total Revenue", value: "$252.98", bg: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
  { title: "Total Expenses", value: "$45.00", bg: "bg-gradient-to-br from-red-500 to-red-600" },
  { title: "Net Profit", value: "$207.98", bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { title: "Profit Margin", value: "82.2%", bg: "bg-gradient-to-br from-purple-500 to-purple-600" },
];

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.title} className={`rounded-xl border-0 shadow-lg text-white ${card.bg}`}>
          <div className="p-6">
            <p className="text-sm mb-1">{card.title}</p>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
