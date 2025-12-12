import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const DoctorModal = ({ doctor, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fee, setFee] = useState("");
  const [commission, setCommission] = useState(0);
  const [status, setStatus] = useState("Active");
  const [availableHours, setAvailableHours] = useState("");

  useEffect(() => {
    if (doctor) {
      setName(doctor.name || "");
      setSpecialization(doctor.specialization || "");
      setQualification(doctor.qualification || "");
      setPhone(doctor.phone || "");
      setEmail(doctor.email || "");
      setFee(doctor.fee || "");
      setCommission(doctor.commission || 0);
      setStatus(doctor.status || "Active");
      setAvailableHours(doctor.availableHours || "");
    }
  }, [doctor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = {
      id: doctor?.id || Date.now(),
      name,
      specialization,
      qualification,
      phone,
      email,
      fee,
      commission,
      status,
      availableHours,
    };
    onSave(newDoctor);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">{doctor ? "Edit Doctor" : "New Doctor"}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter doctor's name"
                required
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Specialization *</label>
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="e.g., Cardiology"
                required
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Qualification</label>
              <input
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="e.g., MBBS, MD"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Consultation Fee *</label>
              <input
                type="number"
                step="0.01"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                placeholder="0.00"
                required
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Commission %</label>
              <input
                type="number"
                step="0.01"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                placeholder="0"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Available Hours</label>
              <input
                type="text"
                value={availableHours}
                onChange={(e) => setAvailableHours(e.target.value)}
                placeholder="e.g., Mon-Fri 9AM-5PM"
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-200 bg-white h-9 px-4 py-2 shadow-sm hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 shadow hover:from-teal-600 hover:to-teal-700"
            >
              {doctor ? "Update Doctor" : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorModal;
