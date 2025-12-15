import React, { useState, useEffect } from "react";
import { LucideShield, LucideX } from "lucide-react";

const AddRoleModal = ({ open, onClose, onSave, role }) => {
  if (!open) return null;

  const [roleName, setRoleName] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [description, setDescription] = useState("");
  const [systemDefault, setSystemDefault] = useState(false);

  useEffect(() => {
    if (role) {
      setRoleName(role.title || "");
      setRoleCode(role.slug || "");
      setDescription(role.description || "");
      setSystemDefault(role.system || false);
    } else {
      setRoleName("");
      setRoleCode("");
      setDescription("");
      setSystemDefault(false);
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = {
      ...role,
      title: roleName,
      slug: roleCode,
      description,
      system: systemDefault,
    };
    onSave(newRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LucideShield className="w-6 h-6" />
            <h2 className="text-2xl font-bold">{role ? "Edit Role" : "Create Role"}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <LucideX className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Role Name *</label>
              <input
                type="text"
                placeholder="e.g., Pharmacy Manager"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:ring-gray-300 md:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Role Code *</label>
              <input
                type="text"
                placeholder="e.g., pharmacy_manager"
                value={roleCode}
                onChange={(e) => setRoleCode(e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:ring-gray-300 md:text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="3"
              placeholder="Describe the role and responsibilities"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex min-h-[60px] w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:ring-gray-300 md:text-sm"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded"
                checked={systemDefault}
                onChange={(e) => setSystemDefault(e.target.checked)}
              />
              <span className="text-sm text-slate-700">Set as system default role</span>
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-purple-400 text-purple-500 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium  text-white text-primary-foreground shadow h-9 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
            >
              {role ? "Save Changes" : "Create Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoleModal;
