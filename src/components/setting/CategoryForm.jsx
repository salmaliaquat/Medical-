import { useState } from "react";
import { Plus, Tag, Pen } from "lucide-react";

// CategoryForm Component
const CategoryForm = ({ category, onCancel, onSave }) => {
  const [name, setName] = useState(category?.name || "");
  const [type, setType] = useState(category?.type || "Medicine");
  const [description, setDescription] = useState(category?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: category?.id || Date.now(), name, type, description, status: "Active" });
  };

  return (
    <form className="p-4 bg-slate-50 rounded-lg space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Category Name *</label>
          <input
            className="h-9 w-full rounded-md border border-slate-300 px-3 text-sm"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Type</label>
          <select
            className="h-9 w-full rounded-md border border-slate-300 px-3 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Medicine</option>
            <option>Medical Equipment</option>
            <option>Consumables</option>
            <option>General</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Description</label>
        <input
          className="h-9 w-full rounded-md border border-slate-300 px-3 text-sm"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="h-9 px-4 rounded-md border border-slate-300 text-sm"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="h-9 px-4 rounded-md bg-teal-600 text-white text-sm hover:bg-teal-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default CategoryForm