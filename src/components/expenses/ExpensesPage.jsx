import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import ExpensesTable from "./ExpensesTable";
import ExpenseModal from "./ExpenseModal";
import { Plus, TrendingDown, Receipt } from "lucide-react";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2025-11-27",
      category: "Utilities",
      description: "tuyu",
      vendor: "asd",
      paymentMethod: "Cash",
      amount: 45,
      status: "Paid",
    },
      {
    id: 2,
    date: "2025-11-30",
    category: "Maintenance",
    description: "Air conditioner servicing",
    vendor: "CoolTech Services",
    paymentMethod: "Bank Transfer",
    amount: 75.0,
    status: "Pending",
  },
  {
    id: 3,
    date: "2025-12-05",
    category: "Supplies",
    description: "Medical consumables restock",
    vendor: "MediSupply Inc.",
    paymentMethod: "Card",
    amount: 450.0,
    status: "Cancelled",

  },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (expense) => {
    if (editData) {
      setExpenses(expenses.map((e) => (e.id === editData.id ? { ...expense, id: editData.id } : e)));
    } else {
      setExpenses([...expenses, { ...expense, id: Date.now() }]);
    }
    setEditData(null);
  };

  const handleEdit = (expense) => {
    setEditData(expense);
    setModalOpen(true);
  };

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Expenses</h1>
          <p className="text-slate-600 mt-1">Track and manage business expenses</p>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:border-none"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ExpenseCard
          title="This Month"
          value="$0.00"
          icon={<TrendingDown className="w-6 h-6 text-white" />}
          iconBg="bg-gradient-to-br from-red-500 to-red-600"
          textColor="text-red-600"
        />
        <ExpenseCard
          title="Total Expenses"
          value={expenses.length}
          icon={<Receipt className="w-6 h-6 text-white" />}
          iconBg="bg-gradient-to-br from-slate-500 to-slate-600"
          textColor="text-slate-900"
        />
        <ExpenseCard title="Top Category" value="" />
      </div>

      {/* Expenses Table */}
      <ExpensesTable data={expenses} onEdit={handleEdit} />

      {/* Add/Edit Modal */}
      {modalOpen && (
        <ExpenseModal
         isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditData(null);
          }}
          onSave={handleSave}
          editData={editData}
        />
      )}
    </main>
  );
};

export default ExpensesPage;
