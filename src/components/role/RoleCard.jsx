import React from "react";
import { Shield, Pen, Check, X} from 'lucide-react'

const RoleCard = ({ role, onEdit, onPermissions }) => {
  

  const permissionsArray = Object.entries(role.permissions).map(([name, allowed]) => ({
    name,
    allowed,
  }));

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-all">
      <div className="p-6 border-b border-slate-200 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white
          flex items-center justify-center  font-bold">
            < Shield className=" w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold text-lg">{role.title}</div>
            <p className="text-xs text-slate-500 mt-1">{role.slug}</p>
          </div>
        </div>

        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-md
        bg-emerald-100 text-emerald-800 border border-emerald-200">
          {role.status}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-slate-600">{role.description}</p>

        {role.system && (
          <span className="inline-flex px-2.5 py-0.5 text-xs rounded-md
          border border-blue-200 text-blue-800">
            System Default
          </span>
        )}

        <div>
          <h4 className="text-xs font-semibold text-slate-700 uppercase mb-2">
            Permissions Summary
          </h4>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {permissionsArray.map((perm) => (
              <div key={perm.name} className="flex items-center gap-1">
                {perm.allowed ? (
                  <Check className="w-3 h-3 border border-green-400 rounded-full text-green-500" />
                ) : (
                  <X className="w-3 h-3 border border-red-400 rounded-full text-red-500" />
                )}
                <span className="capitalize text-slate-600">{perm.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onPermissions(role)}
            className="flex-1 h-8 text-xs rounded-md border border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Permissions
          </button>

          <button
            onClick={() => onEdit(role)}
            className="h-8 px-3 rounded-md border border-slate-200 hover:bg-slate-100"
          >
            <Pen className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
