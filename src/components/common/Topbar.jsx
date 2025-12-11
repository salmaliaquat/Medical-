import React from "react";
import { Menu } from "lucide-react";


const Topbar = ({ sidebarOpen, toggleSidebar, title }) => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 768);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="fixed top-0 h-14 sm:h-20 bg-white shadow-md border-b border-blue-100 flex items-center px-6 transition-all duration-300 z-10"
      style={{
        marginLeft: isDesktop ? (sidebarOpen ? "15rem" : "4.75rem") : "0",
        width: isDesktop
          ? sidebarOpen
            ? "calc(100% - 15rem)"
            : "calc(100% - 4.7rem)"
          : "100%",
      }}
    >
      {/* Mobile menu button */}
      {!isDesktop && (
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-3 rounded-md bg-teal-600 text-white shadow-md mr-4"
        >
          <Menu size={22} />
        </button>
      )}
      <h1 className="text-lg font-bold text-slate-800 ml-10">{title}</h1>


    </header>
  );
};

export default Topbar;
