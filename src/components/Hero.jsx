"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import AlertPopup from "@/components/AlertPopup";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  type: "",
  message: "",
});

  

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

    if (formData.phone.length !== 10) {
 setPopup({
  open: true,
  type: "error",
  message: "Phone number must be 10 digits",
});      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website:"www.commercialprojectsinfaridabad.com",
        }),
      });

      const result = await res.json();

      if (result.success) {
setPopup({
  open: true,
  type: "success",
  message: "Enquiry submitted successfully!",
});
        setFormData({ name: "", phone: "", message: "" });
      } else {
 setPopup({
  open: true,
  type: "error",
  message: "Something went wrong. Try again.",
});
      }
    } catch (err) {
setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 py-8 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
 <AlertPopup
    open={popup.open}
    type={popup.type}
    message={popup.message}
    onClose={() =>
      setPopup({
        open: false,
        type: "",
        message: "",
      })
    }
  />
        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">
            Find Your <span className="text-[#FFA6A6]">Commercial Property</span> in Faridabad Today
          </h1>

          <p className="text-lg max-w-5xl text-gray-300 leading-relaxed">
           Faridabad is no longer just Haryana's industrial town — it is one of the National Capital Region's fastest-rising commercial real estate destinations. With seamless connectivity to South Delhi via NH-44, an operational metro corridor, and a resident population of over 1.8 million, the commercial demand across retail, office, warehouse, and industrial segments has never been stronger.
Whether you are a startup hunting for your first office space, a retail brand looking for a high-footfall shop, a logistics company scouting warehouse space, or an investor building a commercial portfolio — this is the only platform you need.

          </p>

          <p className="mt-6 text-gray-400 max-w-6xl">
            We are Faridabad's dedicated commercial property directory. Every listing on this platform is a commercial space — no residential clutter, no irrelevant results. Browse verified offices, retail shops, SCO properties, showrooms, industrial plots, warehouses, and co-working spaces across Sector 15, 16, 20, NIT Faridabad, Ballabhgarh, Old Faridabad, and every major commercial corridor in the city.
Each listing includes carpet area, price, photographs, location, and direct contact details — so you can move from search to site visit without wasting a single day.
Your next business address is here. Start exploring.

          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl text-white">
            <h3 className="text-2xl font-semibold mb-2">
              Get Investment Consultation
            </h3>

            <p className="text-sm mb-6 text-gray-400">
              Speak with our commercial property expert today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6] outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6] outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Business Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#FFA6A6] focus:border-[#FFA6A6] outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f] hover:opacity-90 transition duration-300 disabled:opacity-70 shadow-lg text-black"
              >
                {loading ? "Submitting..." : "Request Callback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;