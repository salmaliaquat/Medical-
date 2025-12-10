

const Topbar = ({ sidebarOpen, title }) => {
  return (
    <header
      className="fixed top-0 h-14 sm:h-20 bg-white shadow-md border-b border-blue-100 flex items-center px-6 transition-all duration-300 z-10"
      style={{
        marginLeft: sidebarOpen ? "15rem" : "5.75rem",
        width: sidebarOpen ? "calc(100% - 15rem)" : "calc(100% - 5.75rem)",
      }}
    >
      <h1 className="text-3xl font-bold text-slate-800 ml-10">{title}</h1>
    </header>
  );
};

export default Topbar;
