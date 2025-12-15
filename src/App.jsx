import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import POSPage from "./components/pages/POSPage";
import AppointmentsPage from "./components/pages/AppointmentPage";
import PatientsPage from "./components/pages/PatientsPage";
import DoctorsPage from "./components/doctors/DoctorsPage";
import ProductsPage from "./components/product/ProductsPage";
import PurchasesPage from "./components/purchases/PurchasesPage";
import SalesPage from "./components/sales/SalesPage";
import MedicalTestsPage from "./components/test/MedicalTestsPage";
import ExpensesPage from "./components/expenses/ExpensesPage";
import ReportsPage from "./components/reports/ReportsPage";
import UserManagementPage from "./components/users/UserManagementPage";
import RolesPage from "./components/pages/RolesPage";
import ActivityLogPage from "./components/pages/ActivityLogPage";
import SettingsPage from "./components/pages/SettingsPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ALL pages with Sidebar + Topbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/pos" element={<POSPage/>} />
          <Route path="/appointments" element={<AppointmentsPage/>} />
          <Route path="/patients" element={<PatientsPage/>} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/purchases" element={<PurchasesPage/>} />
          <Route path="/sales" element={<SalesPage/>} />
          <Route path="/tests" element={<MedicalTestsPage/>} />
          <Route path="/expenses" element={<ExpensesPage/>} />
          <Route path="/reports" element={<ReportsPage/>} />
          <Route path="/users" element={<UserManagementPage/>} />
          <Route path="/roles" element={<RolesPage/>} />
          <Route path="/activity" element={<ActivityLogPage/>} />
          <Route path="/settings" element={<SettingsPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
