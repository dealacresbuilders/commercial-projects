"use client"

import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      })

      const result = await res.json()

      if (result.success) {
        toast.success("Your inquiry has been submitted!")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (err) {
      toast.error("Server error. Please try later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#0f172a] py-24 px-4 sm:px-6 text-white">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Discuss Your{" "}
            <span className="text-[#FFA6A6]">
              Commercial Investment Goals
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Whether you are expanding your business or investing in commercial real estate,
            our experts provide transparent guidance and verified opportunities.
          </p>
          <div className="w-20 h-1 bg-[#FFA6A6] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ================= FORM + IMAGE ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== FORM CARD ===== */}
          <div className="bg-[#1f2937] border border-white/10 
          rounded-3xl p-10 shadow-2xl">

            <h3 className="text-2xl font-semibold mb-2">
              Request Consultation
            </h3>

            <p className="text-gray-400 mb-8 text-sm">
              Share your requirement and our commercial property expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">Full Name*</label>
                <input
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl 
                  bg-white/10 border border-white/20 
                  placeholder-white/50
                  focus:ring-2 focus:ring-[#FFA6A6] outline-none transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-400">Phone*</label>
                <input
                  name="phone"
                  required
                  inputMode="numeric"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl 
                  bg-white/10 border border-white/20
                  placeholder-white/50
                  focus:ring-2 focus:ring-[#FFA6A6] outline-none transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us about your investment requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl 
                  bg-white/10 border border-white/20
                  placeholder-white/50
                  focus:ring-2 focus:ring-[#FFA6A6] outline-none resize-none transition"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full font-semibold
                bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
                text-black transition shadow-lg hover:opacity-90"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

            </form>
          </div>

          {/* ===== IMAGE SIDE ===== */}
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.presentationgo.com/2025/06/business-partnership-handshake.jpg"
              alt="Commercial Real Estate Consultation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

        </div>

        {/* ================= MAP ================= */}
        <div className="mt-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=29.134042,75.740044&z=18&output=embed"
            className="w-full h-[500px] border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}