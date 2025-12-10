import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const AppointmentModal = ({ 
  onClose, 
  onCreate, 
  onUpdate, 
  appointment = null 
}) => {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [fee, setFee] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (appointment) {
      setPatient(appointment.patient || "");
      setDoctor(appointment.doctor || "");
      setDate(appointment.date || new Date().toISOString().split("T")[0]);
      setTime(appointment.time || "");
      setFee(appointment.fee || "");
      setStatus(appointment.status || "Scheduled");
      setReason(appointment.reason || "");
      setNotes(appointment.notes || "");
    }
  }, [appointment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { patient, doctor, date, time, fee, status, reason, notes };
    if (appointment && onUpdate) {
      onUpdate({ ...appointment, ...newAppointment });
    } else if (!appointment && onCreate) {
      onCreate(newAppointment);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {appointment ? "Edit Appointment" : "New Appointment"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Patient */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Patient *</label>
              <select
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                required
              >
                <option value="">Select patient</option>
                <option value="Absara">Absara - 3234534</option>
                <option value="John Williams">John Williams - +1-555-1001</option>
                <option value="Maria Garcia">Maria Garcia - +1-555-1003</option>
                <option value="David Brown">David Brown - +1-555-1005</option>
                <option value="Linda Martinez">Linda Martinez - +1-555-1007</option>
              </select>
            </div>

            {/* Doctor */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Doctor *</label>
              <select
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                <option value="">Select doctor</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson - General Physician</option>
                <option value="Dr. Michael Chen">Dr. Michael Chen - Cardiologist</option>
                <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez - Pediatrician</option>
              </select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date *</label>
              <input
                type="date"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Time *</label>
              <input
                type="time"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            {/* Fee */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Consultation Fee</label>
              <input
                type="number"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                step="0.01"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Reason for Visit</label>
            <textarea
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm"
              placeholder="Enter reason for visit"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <textarea
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm"
              placeholder="Additional notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow hover:from-teal-600 hover:to-teal-700"
            >
              {appointment ? "Update Appointment" : "Create Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
