import React from "react";
import { LayoutDashboard, ShoppingCart, CalendarCheck, Users, Stethoscope, Package, PackagePlus, Receipt, FlaskConical, Wallet, BarChart3, UserCog, ShieldCheck, History, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const links = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "POS", icon: ShoppingCart, path: "/pos" },
    { name: "Appointments", icon: CalendarCheck, path: "/appointments" },
    { name: "Patients", icon: Users, path: "/patients" },
    { name: "Doctors", icon: Stethoscope, path: "/doctors" },
    { name: "Products", icon: Package, path: "/products" },
    { name: "Purchases", icon: PackagePlus, path: "/purchases" },
    { name: "Sales", icon: Receipt, path: "/sales" },
    { name: "Tests", icon: FlaskConical, path: "/tests" },
    { name: "Expenses", icon: Wallet, path: "/expenses" },
    { name: "Reports", icon: BarChart3, path: "/reports" },
    { name: "Users", icon: UserCog, path: "/users" },
    { name: "Roles", icon: ShieldCheck, path: "/roles" },
    { name: "Activity", icon: History, path: "/activity" },
    { name: "Settings", icon: Settings, path: "/settings" }
  ];

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-200 shadow-lg z-50 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:shadow-none`}
      >
        {/* Flex container to separate logo and menu */}
        <div className="flex flex-col h-full relative">
          {/* Mobile-only close button */}
          <button
            className="absolute top-6 right-4 md:hidden p-2 rounded-md  hover:bg-gray-200 transition"
            onClick={toggleSidebar}
          >
            <X size={20} className="text-teal-700 bg-white/5" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 px-5 py-6 border-b border-gray-200 justify-start">
            <div className="p-2 bg-teal-600 rounded-xl shadow">
              <Stethoscope size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-800">MediPOS</h2>
              <p className="text-xs text-slate-500">Clinic Management</p>
            </div>
          </div>

          {/* Scrollable Menu */}
          <nav className="flex-1 overflow-y-auto py-4 font-medium text-lg">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all
                     ${isActive ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white" : "text-slate-700 hover:bg-gray-100 hover:text-teal-600"}`
                  }
                  onClick={toggleSidebar} // close sidebar on mobile after click
                >
                  <Icon size={20} />
                  <span className="text-sm">{link.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
