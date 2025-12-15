import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react"; // Using lucide-react icons

const PermissionsModal = ({ role, open, onClose, onSave }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (role && role.permissions) {
      const permsArray = Object.entries(role.permissions).map(([name, allowed]) => ({
        name,
        allowed,
      }));
      setPermissions(permsArray);
    }
  }, [role]);

  if (!open) return null;

  const togglePermission = (name) => {
    setPermissions((prev) =>
      prev.map((perm) =>
        perm.name === name ? { ...perm, allowed: !perm.allowed } : perm
      )
    );
  };

  const handleSave = () => {
    const updatedPermissions = {};
    permissions.forEach((perm) => (updatedPermissions[perm.name] = perm.allowed));
    onSave(role.id, updatedPermissions);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-t-2xl flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold">Manage Permissions</h2>
            <p className="text-purple-100 text-sm mt-1">{role?.title}</p>
          </div>
          <button
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="text-left p-4 font-semibold text-slate-700">Module</th>
                <th className="text-center p-4 font-semibold text-slate-700 w-24">View</th>
                <th className="text-center p-4 font-semibold text-slate-700 w-24">Create</th>
                <th className="text-center p-4 font-semibold text-slate-700 w-24">Edit</th>
                <th className="text-center p-4 font-semibold text-slate-700 w-24">Delete</th>
                <th className="text-center p-4 font-semibold text-slate-700 w-24">All</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm) => (
                <tr key={perm.name} className="border-b border-slate-100 hover:bg-slate-50 bg-white">
                  <td className="p-4">
                    <p className="font-medium text-slate-900 capitalize">{perm.name}</p>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        perm.allowed ? "bg-purple-500 text-white shadow-lg scale-110" : "bg-slate-200 text-slate-400 hover:bg-slate-300"
                      }`}
                      onClick={() => togglePermission(perm.name)}
                    >
                      {perm.allowed && <Check className="w-5 h-5" />}
                    </button>
                  </td>
                  {/* Repeat for Create, Edit, Delete */}
                  <td className="p-4 text-center">
                    <button
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        perm.allowed ? "bg-purple-500 text-white shadow-lg scale-110" : "bg-slate-200 text-slate-400 hover:bg-slate-300"
                      }`}
                      onClick={() => togglePermission(perm.name)}
                    >
                      {perm.allowed && <Check className="w-5 h-5" />}
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        perm.allowed ? "bg-purple-500 text-white shadow-lg scale-110" : "bg-slate-200 text-slate-400 hover:bg-slate-300"
                      }`}
                      onClick={() => togglePermission(perm.name)}
                    >
                      {perm.allowed && <Check className="w-5 h-5" />}
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        perm.allowed ? "bg-purple-500 text-white shadow-lg scale-110" : "bg-slate-200 text-slate-400 hover:bg-slate-300"
                      }`}
                      onClick={() => togglePermission(perm.name)}
                    >
                      {perm.allowed && <Check className="w-5 h-5" />}
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                        perm.allowed
                          ? "bg-purple-100 text-purple-700 border border-purple-300"
                          : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                      }`}
                      onClick={() => togglePermission(perm.name)}
                    >
                      {perm.allowed ? "Revoke" : "Grant"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-slate-200">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow"
            >
              Save Permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
