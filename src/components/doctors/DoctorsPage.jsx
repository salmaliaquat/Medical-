import React, { useState } from "react";
import DoctorCard from "../doctors/DoctorCard";
import DoctorModal from "../doctors/DoctorModal";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Salma Liaquat",
      specialization: "Heart",
      qualification: "MBBS",
      fee: 832,
      phone: "92384927428",
      status: "Active",
      availableHours: "Mon-Fri 9AM-5PM",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialization: "General Physician",
      qualification: "MBBS, MD",
      fee: 1500,
      phone: "+1-555-0101",
      status: "Active",
      availableHours: "Mon-Fri 9AM-5PM",
    },
    {
      id: 3,
      name: "Michael Chen",
      specialization: "Cardiologist",
      qualification: "MBBS, MD, DM (Cardiology)",
      fee: 120,
      phone: "+1-555-0102",
      status: "Active",
      availableHours: "Tue-Sat 10AM-6PM",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const handleSaveDoctor = (doctor) => {
    if (editingDoctor) {
      setDoctors(doctors.map((d) => (d.id === doctor.id ? doctor : d)));
    } else {
      setDoctors([...doctors, doctor]);
    }
  };

  return (
    <main className="p-6">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Doctors</h1>
            <p className="text-slate-600 mt-1">Manage medical staff and consultants</p>
          </div>
          <button
            onClick={() => { setEditingDoctor(null); setIsModalOpen(true); }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg hover:from-teal-600 hover:to-teal-700"
          >
            Add Doctor
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onEdit={(doc) => { setEditingDoctor(doc); setIsModalOpen(true); }}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <DoctorModal
          doctor={editingDoctor}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveDoctor}
        />
      )}
    </main>
  );
};

export default DoctorsPage;
