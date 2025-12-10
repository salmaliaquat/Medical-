import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import POSPage from "./components/pages/POSPage";
import AppointmentsPage from "./components/pages/AppointmentPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ALL pages with Sidebar + Topbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/pos" element={<POSPage/>} />
          <Route path="/appointments" element={<AppointmentsPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
