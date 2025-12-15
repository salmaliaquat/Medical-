import { Pen } from "lucide-react";

const CategoryTable = ({ categories, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-gray-500 border-b border-gray-300">
          <tr>
            <th className="px-2 py-2 text-left">Category</th>
            <th className="px-2 py-2 text-left">Type</th>
            <th className="px-2 py-2 text-left">Description</th>
            <th className="px-2 py-2 text-left">Status</th>
            <th className="px-2 py-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b border-gray-200">
              <td className="p-2 font-medium">{cat.name}</td>
              <td className="p-2">{cat.type}</td>
              <td className="p-2 text-slate-600">{cat.description}</td>
              <td className="p-2">
                <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded-md">
                  {cat.status}
                </span>
              </td>
              <td className="p-2">
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200"
                  onClick={() => onEdit(cat)}
                >
                  <Pen className="w-3 h-3 text-gray-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategoryTable