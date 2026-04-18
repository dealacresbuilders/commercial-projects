"use client";

import React, { useState } from "react";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setSuccess("");

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
          source: "Sidebar Enquiry Form",
        }),
      });

      if (!res.ok) throw new Error("Failed request");

      const data = await res.json();

      if (data.success) {
        setSuccess("Request submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
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
    <div className="sticky top-28 bg-[#1f2937] rounded-2xl shadow-2xl p-8 border border-white/10 text-white">

      <h3 className="text-2xl font-semibold mb-2">
        Get Investment Consultation
      </h3>

      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        Share your business requirement and our commercial property expert
        will connect with you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* NAME */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-white/10 border border-white/20
          placeholder-white/50
          focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
          outline-none transition"
        />

        {/* PHONE */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-white/10 border border-white/20
          placeholder-white/50
          focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
          outline-none transition"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="4"
          placeholder="Business requirement (budget, location, shop size, etc.)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl
          bg-white/10 border border-white/20
          placeholder-white/50
          focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6]
          outline-none resize-none transition"
        />

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-500/10 border border-red-400/30 text-red-400 text-sm px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="bg-green-500/10 border border-green-400/30 text-green-400 text-sm px-4 py-2 rounded-lg">
            {success}
          </div>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f] 
          text-black py-3 rounded-xl font-semibold 
          transition shadow-lg hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Callback"}
        </button>

      </form>
    </div>
  );
};

export default SidebarEnquiryForm;