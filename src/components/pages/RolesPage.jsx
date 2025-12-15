// import React, { useState } from "react";
// import { LucidePlus } from "lucide-react";
// import { roles as dummyRoles } from "../../data/roles";
// import RoleCard from "../role/RoleCard";
// import AddRoleModal from "../role/AddRoleModal";
// import PermissionsModal from "../role/PermissionsModal";

// const RolesPage = () => {
//   const [roles, setRoles] = useState(dummyRoles);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showPermissionsModal, setShowPermissionsModal] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);

//   const handleAddRole = (newRole) => {
//     setRoles((prev) => [
//       ...prev,
//       { id: prev.length + 1, ...newRole },
//     ]);
//     setShowAddModal(false);
//   };

//   const handleEditRole = (role) => {
//     alert(`Edit role: ${role.title}`);
//   };

//   const handlePermissions = (role) => {
//     setSelectedRole(role);
//     setShowPermissionsModal(true);
//   };

//   const handleSavePermissions = (roleId, updatedPermissions) => {
//     setRoles((prev) =>
//       prev.map((role) =>
//         role.id === roleId ? { ...role, permissions: updatedPermissions } : role
//       )
//     );
//     setShowPermissionsModal(false);
//   };

//   return (
//     <main className="p-6 space-y-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">User Roles & Permissions</h1>
//           <p className="text-slate-600 mt-1">Configure roles and access control</p>
//         </div>

//         <button
//           onClick={() => setShowAddModal(true)}
//           className="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-medium
//           bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-500/30"
//         >
//           <LucidePlus className="w-5 h-5" />Create Role
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {roles.map((role) => (
//           <RoleCard
//             key={role.id}
//             role={role}
//             onEdit={handleEditRole}
//             onPermissions={handlePermissions}
//           />
//         ))}
//       </div>

//       <AddRoleModal
//         open={showAddModal}
//         onClose={() => setShowAddModal(false)}
//         onSave={handleAddRole}
//       />

//       <PermissionsModal
//         role={selectedRole}
//         open={showPermissionsModal}
//         onClose={() => setShowPermissionsModal(false)}
//         onSave={handleSavePermissions}
//       />
//     </main>
//   );
// };

// export default RolesPage;


import React, { useState } from "react";
import { LucidePlus } from "lucide-react";
import { roles as dummyRoles } from "../../data/roles";
import RoleCard from "../role/RoleCard";
import AddRoleModal from "../role/AddRoleModal";
import PermissionsModal from "../role/PermissionsModal";

const RolesPage = () => {
  const [roles, setRoles] = useState(dummyRoles);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // Handle Add or Update Role
  const handleSaveRole = (role) => {
    if (role.id) {
      // Edit existing role
      setRoles((prev) =>
        prev.map((r) => (r.id === role.id ? { ...r, ...role } : r))
      );
    } else {
      // Add new role
      const newRole = { ...role, id: Date.now(), status: "Active" };
      setRoles((prev) => [...prev, newRole]);
    }
    setShowAddModal(false);
  };

  // Open Add Role Modal
  const handleAddRole = () => {
    setSelectedRole(null);
    setShowAddModal(true);
  };

  // Open Edit Role Modal
  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowAddModal(true);
  };

  // Open Permissions Modal
  const handlePermissions = (role) => {
    setSelectedRole(role);
    setShowPermissionsModal(true);
  };

  // Save Permissions
  const handleSavePermissions = (roleId, updatedPermissions) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId ? { ...role, permissions: updatedPermissions } : role
      )
    );
    setShowPermissionsModal(false);
  };

  return (
    <main className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">User Roles & Permissions</h1>
          <p className="text-slate-600 mt-1">Configure roles and access control</p>
        </div>

        <button
          onClick={handleAddRole}
          className="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-medium
          bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-500/30"
        >
          <LucidePlus className="w-5 h-5" />Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onEdit={handleEditRole}
            onPermissions={handlePermissions}
          />
        ))}
      </div>

      {/* Add / Edit Role Modal */}
      <AddRoleModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveRole}
        role={selectedRole}
      />

      {/* Permissions Modal */}
      <PermissionsModal
        role={selectedRole}
        open={showPermissionsModal}
        onClose={() => setShowPermissionsModal(false)}
        onSave={handleSavePermissions}
      />
    </main>
  );
};

export default RolesPage;
