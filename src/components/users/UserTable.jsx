import React from "react";
import {Pen, Edit3 , Pencil} from 'lucide-react'

const UserTable = ({ users, onEdit }) => {
  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="whitespace-nowrap w-full caption-bottom text-sm">
        <thead className="bg-slate-50">
          <tr className="border-b border-gray-300 text-gray-500">
            {["User", "Email", "Role", "Department", "Last Login", "Status", "Actions"].map((head) => (
              <th key={head} className="h-10 px-2 text-left text-muted-foreground font-semibold">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b  border-gray-200 hover:bg-slate-50 cursor-pointer" onClick={() => onEdit(user)}>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.department}</td>
              <td className="p-2">{user.lastLogin}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button className="text-indigo-600 hover:underline">
                    <Edit3 className="w-5 h-5"/>
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
