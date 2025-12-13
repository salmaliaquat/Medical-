import React from "react";
import FilterBar from "./FilterBar";
import SummaryCards from "./SummaryCards";
import RevenueBreakdown from "./RevenueBreakdown";
import ExpensesCategoryChart from "./ExpensesCategoryChart";
import PeriodSummary from "./PeriodSummary";

const ReportsPage = () => {
  const expenseData = [
    { category: "Utilities", value: 45 },
    { category: "Maintenance", value: 75 },
    { category: "Supplies", value: 450 },
  ];

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports &amp; Analytics</h1>
          <p className="text-slate-600 mt-1">Financial insights and performance metrics</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 text-white  bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Export Report
        </button>
      </div>

      {/* Filters */}
      <FilterBar />

      {/* Summary Cards */}
      <SummaryCards />

      {/* Revenue Breakdown */}
      <RevenueBreakdown />



      <ExpensesCategoryChart data={expenseData} />


      {/* Period Summary */}
      <PeriodSummary />
    </main>
  );
};

export default ReportsPage;
