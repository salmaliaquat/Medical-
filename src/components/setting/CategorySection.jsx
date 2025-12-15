import { useState } from "react";
import { Plus, Tag } from "lucide-react";
import CategoryForm from "../setting/CategoryForm";
import CategoryTable from "../setting/CategoryTable";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleAddClick = () => {
    setEditingCategory(null);
    setShowForm(true);
  };

  const handleSave = (category) => {
    setCategories((prev) => {
      const exists = prev.find((c) => c.id === category.id);
      if (exists) {
        // Update existing category
        return prev.map((c) => (c.id === category.id ? category : c));
      } else {
        // Add new category
        return [...prev, category];
      }
    });
    setShowForm(false);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <div className="flex items-center font-semibold">
          <Tag className="w-5 h-5 mr-2 text-teal-600" />
          Product Categories
        </div>

        <button
          onClick={handleAddClick}
          className="h-8 px-3 text-xs rounded-md bg-teal-600 text-white hover:bg-teal-700 flex items-center"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Category
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {showForm && (
          <CategoryForm
            category={editingCategory}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        )}
        <CategoryTable categories={categories} onEdit={handleEdit} />
      </div>
    </div>
  );
};


export default CategorySection;
