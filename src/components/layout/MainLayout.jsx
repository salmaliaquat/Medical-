import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/pos": "POS",
    "/appointments": "Appointments",
    "/patients": "Patients",
    "/doctors": "Doctors",
    "/products": "Products",
    "/purchases": "Purchases",
    "/sales": "Sales",
    "/tests": "Tests",
    "/expenses": "Expenses",
    "/reports": "Reports",
    "/users": "Users",
    "/roles": "Roles",
    "/activity": "Activity",
    "/settings": "Settings",
  };

  const pageTitle = titles[location.pathname] || "Page";

  // Optional: close sidebar on window resize to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
  <div className="min-h-screen overflow-x-hidden bg-gray-50">
    <div className="flex">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          title={pageTitle}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="md:ml-56 flex-1 min-w-0 pt-14 sm:pt-20 px-4">
          <Outlet />
        </main>
      </div>
    </div>
  </div>
);

};

export default MainLayout;
