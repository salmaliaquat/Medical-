


// import { useState } from "react";
// import Sidebar from "../common/sidebar";
// import Topbar from "../common/Topbar";
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar state

//   return (
//     <div className="min-h-screen flex bg-white">
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <Topbar sidebarOpen={sidebarOpen} />

//         {/* Page Content */}
//         <main className="flex-1 transition-all duration-300 pt-20 px-4 bg-gray-50"
//           style={{ marginLeft: sidebarOpen ? "15rem" : "5.75rem" }} // match w-60/w-23 from Tailwind
//         >
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


import { useState } from "react";
import Sidebar from "../common/sidebar";
import Topbar from "../common/Topbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Map routes to titles
  const titles = {
    "/": "Dashboard",
    "/pos": "POS",
    "/appointments": "Appointments",
    "/patients": "Patients",
    "/patients/add": "Add Patient",
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

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar sidebarOpen={sidebarOpen} title={pageTitle} />

        {/* Page Content */}
        <main
          className="flex-1 transition-all duration-300 pt-20 px-4 bg-gray-50"
          style={{ marginLeft: sidebarOpen ? "15rem" : "5.75rem" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
