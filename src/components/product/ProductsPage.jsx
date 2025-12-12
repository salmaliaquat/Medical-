import { useState } from "react";
import { Package, PackageCheck, TriangleAlert, TrendingDown } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import ProductFilter from "./ProductFilter";

const initialProducts = [
  { id: 1, name: "Paracetamol 500mg", manufacturer: "PharmaCorp", code: "MED-001", category: "Medicines", price: 4, cost: 2.5, stock: 141, unit: "Strip", status: "Active" },
  { id: 2, name: "Amoxicillin 250mg", manufacturer: "MediLabs", code: "MED-002", category: "Medicines", price: 12, cost: 8, stock: 72, unit: "Strip", status: "Active" },
  { id: 3, name: "Ibuprofen 400mg", manufacturer: "HealthPlus", code: "MED-003", category: "Medicines", price: 6, cost: 3.5, stock: 115, unit: "Strip", status: "Active" },
  { id: 4, name: "Surgical Gloves (Pair)", manufacturer: "MediSupply", code: "CONS-001", category: "Medical Consumables", price: 1, cost: 0.5, stock: 498, unit: "Piece", status: "Active" },
  { id: 5, name: "Face Masks (Box of 50)", manufacturer: "SafetyFirst", code: "CONS-002", category: "Medical Consumables", price: 12, cost: 8, stock: 44, unit: "Box", status: "Active" },
  { id: 6, name: "Vitamin D3 Supplement", manufacturer: "NutriHealth", code: "MED-004", category: "Medicines", price: 16, cost: 10, stock: 11, unit: "Bottle", status: "Active", lowStock: true },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = products.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Active" && p.status === "Active") ||
      (filter === "Low Stock" && p.lowStock) ||
      (filter === "Out of Stock" && p.stock === 0);

    return matchesSearch && matchesFilter;
  });

  const openEditModal = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleSaveProduct = (product) => {
    if (product.id) {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    } else {
      const newProduct = { ...product, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setModalOpen(false);
    setEditingProduct(null);
  };

  // Dynamic stats array
  const stats = [
    { title: "Total Products", count: products.length, color: "blue", Icon: Package },
    { title: "Active Products", count: products.filter(p => p.status === "Active").length, color: "pink", Icon: PackageCheck },
    { title: "Low Stock", count: products.filter(p => p.lowStock || p.stock <= 10).length, color: "amber", Icon: TriangleAlert },
    { title: "Out of Stock", count: products.filter(p => p.stock === 0).length, color: "red", Icon: TrendingDown },
  ];

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Product Inventory</h1>
          <p className="text-slate-600 mt-1">Manage your product catalog and stock levels</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-medium bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg text-white"
        >
          + Add Product
        </button>
      </div>

      {/* Dynamic Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <ProductCard
            key={index}
            title={stat.title}
            count={stat.count}
            color={stat.color}
            Icon={stat.Icon}
          />
        ))}
      </div>

      <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      <ProductTable
        products={filteredProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        onEdit={openEditModal}
      />

      {modalOpen && (
        <ProductModal
          product={editingProduct}
          onClose={() => { setModalOpen(false); setEditingProduct(null); }}
          onSave={handleSaveProduct}
        />
      )}
    </main>
  );
}
