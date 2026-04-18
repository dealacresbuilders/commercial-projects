"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
          source: "Popup Enquiry",
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const data = await res.json();

      if (data.success) {
        setFormData({ name: "", phone: "", message: "" });
        alert("Enquiry Submitted Successfully!");
        onClose();
      } else {
        setError("Something went wrong. Please try again.");
      }

    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-[#111827] w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-white/10 text-white">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#FFA6A6] text-xl transition"
        >
          ×
        </button>

        <h3 className="text-2xl font-semibold">
          Request Commercial Pricing
        </h3>

        <p className="text-sm text-gray-400 mt-3 mb-7 leading-relaxed">
          Enquiry for:
          <span className="block font-medium text-[#FFA6A6] mt-1">
            {propertyTitle}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
            text-white placeholder-white/50
            focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
            outline-none transition"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
            text-white placeholder-white/50
            focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
            outline-none transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Business requirement (budget, space size, location, etc.)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
            text-white placeholder-white/50
            focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
            outline-none resize-none transition"
          />

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 
            bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
            text-black font-semibold rounded-xl 
            transition shadow-lg hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Request Callback"}
          </button>

        </form>

      </div>
    </div>
  );
}