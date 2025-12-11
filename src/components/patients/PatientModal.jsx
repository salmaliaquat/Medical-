import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PatientModal = ({ onClose, onCreate, onUpdate, patient = null }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    patientId: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    bloodGroup: "",
    emergencyContactName: "",
    emergencyPhone: "",
    address: "",
    medicalHistory: "",
    allergies: "",
  });


  useEffect(() => {
  if (patient) {
    setFormData({
      fullName: patient.name || "",
      patientId: patient.patientId || patient.id || "",
      age: patient.age || "",
      gender: patient.gender || "",
      phone: patient.phone || "",
      email: patient.email || "",
      bloodGroup: patient.bloodGroup || "",
      emergencyContactName: patient.emergencyContactName || "",
      emergencyPhone: patient.emergency || "",
      address: patient.address || "",
      medicalHistory: patient.medicalHistory || "",
      allergies: patient.allergies || "",
    });
  } else {
    setFormData({
      fullName: "",
      patientId: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      bloodGroup: "",
      emergencyContactName: "",
      emergencyPhone: "",
      address: "",
      medicalHistory: "",
      allergies: "",
    });
  }
}, [patient]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patient && onUpdate) {
      onUpdate({ ...patient, ...formData });
    } else if (!patient && onCreate) {
      onCreate({ ...formData, id: Date.now() });
    }
    onClose();
  };

  if (!patient && !onCreate && !onUpdate) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {patient ? "Edit Patient" : "New Patient"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Patient ID</label>
              <input
                type="text"
                name="patientId"
                placeholder="Auto-generated"
                value={formData.patientId}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={formData.age}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option  value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option value="">Select blood group</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Contact</label>
              <input
                type="text"
                name="emergencyContactName"
                placeholder="Emergency contact name"
                value={formData.emergencyContactName}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Phone</label>
              <input
                type="tel"
                name="emergencyPhone"
                placeholder="Emergency phone number"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              rows={2}
              className="flex w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Medical History</label>
            <textarea
              name="medicalHistory"
              placeholder="Enter medical history"
              value={formData.medicalHistory}
              onChange={handleChange}
              rows={3}
              className="flex w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Allergies</label>
            <textarea
              name="allergies"
              placeholder="Enter known allergies"
              value={formData.allergies}
              onChange={handleChange}
              rows={2}
              className="flex w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
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
              {patient ? "Update Patient" : "Create Patient"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientModal;
