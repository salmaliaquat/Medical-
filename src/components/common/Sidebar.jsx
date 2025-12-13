import { useState, useEffect } from "react";
import {
  LayoutDashboard, ShoppingCart, CalendarCheck, Users, UserPlus,
  Stethoscope, Package, PackagePlus, Receipt, FlaskConical, Wallet,
  BarChart3, UserCog, ShieldCheck, History, Settings,
  ChevronLeft, Menu, X
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
      {/* Mobile overlay */}
      {!isDesktop && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Desktop Toggle Button */}
      {isDesktop && (
        <button
          onClick={toggleSidebar}
          className={`fixed top-4 z-[9999] p-2 rounded-full bg-teal-600 text-white shadow-md
            transition-all duration-300 ${isOpen ? "left-56" : "left-16"}`}
        >
          <ChevronLeft className={`${isOpen ? "" : "rotate-180"}`} size={22} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full flex flex-col bg-white border-r border-gray-200 shadow-lg z-50
          transition-all duration-300 ease-in-out
          ${isDesktop ? (isOpen ? "w-60" : "w-20") : isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}
        `}
      >
        {/* Mobile Close Button */}
        {!isDesktop && isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-4 p-2 rounded-md  text-teal-600  z-50"
          >
            <X size={20} />
          </button>
        )}

        {/* Logo */}
        <div
          className={`flex items-center gap-3 px-5 py-6 border-b border-gray-200
            ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <div className="p-2 bg-teal-600 rounded-xl shadow">
            <Stethoscope size={22} className="text-white" />
          </div>
          {isOpen && (
            <div>
              <h2 className="text-base font-semibold text-slate-800">MediPOS</h2>
              <p className="text-xs text-slate-500">Clinic Management</p>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 font-medium text-lg">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all
                  ${isActive ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white" : "text-slate-700  hover:bg-gray-100 hover:text-teal-600"}`
                }
              >
                <Icon size={20} />
                {isOpen && <span className="text-sm">{link.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
