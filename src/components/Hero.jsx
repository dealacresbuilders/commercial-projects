"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

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
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 py-20 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Premium <span className="text-[#FFA6A6]">Commercial Projects</span> in Faridabad
          </h1>

          <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
            Discover high-potential commercial properties in Faridabad designed 
            for business growth and long-term investment returns. From modern 
            office spaces and retail shops to corporate floors and IT parks, 
            we connect you with verified and strategically located projects.
          </p>

          <p className="mt-6 text-gray-400 max-w-2xl">
            Whether you are an investor, business owner, or brand expanding 
            operations, our expert team ensures transparent deals, prime 
            connectivity, and strong rental yield opportunities.
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