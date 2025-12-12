import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const location = useLocation();

  // Map routes to titles
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

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="min-h-screen flex bg-white">
    <div className="min-h-screen bg-white flex flex-col md:flex-row">

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          title={pageTitle}
        />


        {/* Page Content */}
        <main
          className="flex-1 transition-all duration-300 pt-20 px-4 bg-gray-50"
          style={{
            marginLeft: isDesktop ? (sidebarOpen ? "15rem" : "5.75rem") : "0",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
