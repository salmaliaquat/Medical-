import { Settings } from "lucide-react";

const SystemInfo = () => {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg">
      <div className="p-6 border-b border-slate-200 flex items-center font-semibold">
        <Settings className="w-5 h-5 mr-2 text-indigo-600" />
        System Information
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">Total Suppliers</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">Total Categories</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
