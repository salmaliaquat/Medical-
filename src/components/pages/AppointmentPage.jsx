


import React, { useState } from "react";
import Header from "../appointments/Header";
import Calendar from "../appointments/Calender";
import AppointmentList from "../appointments/AppointmentsList";
import AppointmentModal from "../appointments/AppointmentModal"; // import modal

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [appointments, setAppointments] = useState([]);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Ahmed Raza",
      doctor: "Dr. Sara Khan",
      time: "10:00 AM",
      reason: "Fever & Headache",
      status: "Scheduled",
      fee: 1500,
      date: "2025-12-11",
    },
    {
      id: 2,
      patient: "Maria Ali",
      doctor: "Dr. Usman",
      time: "1:00 PM",
      reason: "Follow-up",
      status: "Confirmed",
      fee: 2000,
      date: "2025-12-11",
    },
    // {
    //   id: 3,
    //   patient: "Bilal Ahmad",
    //   doctor: "Dr. Ayesha",
    //   time: "3:30 PM",
    //   reason: "Skin Allergy",
    //   status: "C",
    //   fee: 1800,
    //   date: "2025-12-11",
    // }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);


  // Create new appointment
  const handleCreate = (newAppointment) => {
    setAppointments([...appointments, { id: Date.now(), ...newAppointment }]);
  };

  // Update existing appointment
  const handleUpdate = (updatedAppointment) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === updatedAppointment.id ? updatedAppointment : appt
      )
    );
  };

  return (
    <main className="p-6">
      <div className="space-y-6">
        {/* Header with "New" button */}
        <Header
          title="Appointments"
          description="Manage patient appointments and schedules"
          onNew={() => {
            setEditingAppointment(null); // for new appointment
            setIsModalOpen(true);
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            events={appointments.map((a) => new Date(a.date).toDateString())} // highlight events
          />

          <AppointmentList
            date={selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            appointments={appointments
              .filter(appt => appt.date === selectedDate.toISOString().split("T")[0])
              // .filter(appt => statusFilter === "All" || appt.status === statusFilter)
            }
            onEdit={(appt) => {
              setEditingAppointment(appt);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Modal for create/edit */}
      {isModalOpen && (
        <AppointmentModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          appointment={editingAppointment} // null for new, object for edit
        />
      )}
    </main>
  );
};

export default AppointmentsPage;
