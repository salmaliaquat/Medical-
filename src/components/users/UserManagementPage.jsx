import React, { useState } from "react";
import UserStatsCard from "./UserStatsCard";
import SearchAndFilter from "./SearchAndFilter";
import UserTable from "./UserTable";
import UserModal from "./UserModel";
import { LucideUserCog, LucideLockOpen, LucideLock, LucideShield } from "lucide-react";

const UserManagementPage = () => {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Add dummy data here
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", department: "IT", lastLogin: "2025-12-10", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Doctor", department: "Medical", lastLogin: "2025-12-09", status: "Inactive" },
        { id: 3, name: "Ali Khan", email: "ali@example.com", role: "Pharmacist", department: "Pharmacy", lastLogin: "2025-12-12", status: "Active" },
    ]);

    // Filter users based on search and role
    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesRole = roleFilter === "All" || user.role === roleFilter;

        return matchesSearch && matchesRole;
    });


    const handleEdit = (user) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const handleSubmit = (e, formData) => {
        e.preventDefault();

        if (editingUser) {
            // Update existing user
            setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u)));
        } else {
            // Add new user
            const newUser = {
                id: users.length + 1,
                lastLogin: "-", // default value
                ...formData,
            };
            setUsers([...users, newUser]);
        }

        setModalOpen(false);
        setEditingUser(null);
    };

    return (
        <main className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-600 mt-1">Manage system users, roles, and permissions</p>
                </div>
                <button onClick={() => setModalOpen(true)} className="btn-submit inline-flex items-center gap-2 h-9 px-4">
                    <LucideUserCog className="w-5 h-5" /> Add User
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <UserStatsCard title="Total Users" value={users.length} icon={<LucideUserCog className="w-6 h-6 text-white" />} bgGradient="bg-gradient-to-br from-indigo-500 to-indigo-600" textColor="text-slate-900" />
                <UserStatsCard title="Active Users" value={users.filter(u => u.status === "Active").length} icon={<LucideLockOpen className="w-6 h-6 text-white" />} bgGradient="bg-gradient-to-br from-emerald-500 to-emerald-600" textColor="text-emerald-600" />
                <UserStatsCard title="Inactive Users" value={users.filter(u => u.status !== "Active").length} icon={<LucideLock className="w-6 h-6 text-white" />} bgGradient="bg-gradient-to-br from-red-500 to-red-600" textColor="text-red-600" />
                <UserStatsCard title="Total Roles" value={5} icon={<LucideShield className="w-6 h-6 text-white" />} bgGradient="bg-gradient-to-br from-purple-500 to-purple-600" textColor="text-purple-600" />
            </div>

            {/* Search & Filter */}
            <SearchAndFilter
                searchValue={search}
                onSearchChange={(e) => setSearch(e.target.value)}
                selectedRole={roleFilter}
                onRoleChange={setRoleFilter}
            />

            {/* Users Table */}
            <UserTable users={filteredUsers}  onEdit={handleEdit} />

            {/* Modal */}
            <UserModal
                isOpen={modalOpen}
                onClose={() => { setModalOpen(false); setEditingUser(null); }}
                onSubmit={(e) => {
                    const form = e.target;
                    const formData = {
                        name: form[0].value,
                        email: form[1].value,
                        phone: form[2].value,
                        employeeId: form[3].value,
                        role: form[4].value,
                        department: form[5].value,
                        status: form[6].value,
                        customRole: form[7].value,
                        ipRestrictions: form[10].value,
                    };
                    handleSubmit(e, formData);
                }}
                userData={editingUser}
            />
        </main>
    );
};

export default UserManagementPage;
