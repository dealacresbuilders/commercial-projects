"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";

export default function Properties() {
  const { properties, loading, error } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#111827]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFA6A6] border-r-[#ff8f8f] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-400 tracking-wide">
          Loading Premium Commercial Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-400 bg-[#111827]">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20 bg-[#111827] text-white">
        <h2 className="text-2xl font-semibold">
          No Commercial Properties Available
        </h2>
        <p className="text-gray-400 mt-2">
          New investment opportunities will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#0f172a] px-4 py-20 text-white">

      {/* PAGE HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          Premium Commercial Properties in{" "}
          <span className="text-[#FFA6A6]">Faridabad</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore high-yield retail shops, office spaces and investment-ready
          commercial projects across prime sectors.
        </p>

        <div className="w-20 h-1 bg-[#FFA6A6] mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-[#1f2937] rounded-2xl border border-white/10 
              shadow-lg hover:shadow-2xl hover:-translate-y-1 
              transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-52 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#FFA6A6] text-black text-xs px-4 py-1 rounded-full shadow font-semibold">
                    {property.propertyType}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">

                  <h2 className="text-lg font-semibold">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    {property.locality}
                  </p>

                  {/* STATS BAR */}
                  <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 text-sm">

                    <div>
                      <span className="text-gray-400 text-xs uppercase">Area:</span>
                      <span className="ml-2 font-semibold">
                        {formatArea(property.area, property.areaUnit)}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-xs uppercase">Type:</span>
                      <span className="ml-2 font-semibold">
                        {property.propertyCategory}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400 text-xs uppercase">Status:</span>
                      <span className="ml-2 font-semibold text-[#FFA6A6]">
                        {property.status || "Ready to Move"}
                      </span>
                    </div>

                  </div>

                  <p className="text-sm text-gray-400 mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Premium commercial asset offering strong rental yield and long-term appreciation potential."}
                  </p>

                  <div className="flex-1" />

                  {/* PRICE + BUTTONS */}
                  <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

                    <p className="text-2xl font-bold text-[#FFA6A6]">
                      {property.price && property.price > 0
                        ? `₹ ${property.price.toLocaleString("en-IN")}`
                        : "Price on Request"}
                    </p>

                    <div className="flex gap-3 w-full md:w-auto">

                      <button
                        onClick={() => {
                          setSelectedProperty(property.title);
                          setOpen(true);
                        }}
                        className="bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
                        text-black px-6 py-2 rounded-full 
                        transition w-full md:w-auto font-semibold shadow-lg hover:opacity-90"
                      >
                        Request Callback
                      </button>

                      <Link
                        href={`/properties/${property.slug}`}
                        className="border border-[#FFA6A6] text-[#FFA6A6] 
                        px-6 py-2 rounded-full 
                        hover:bg-[#FFA6A6] hover:text-black
                        transition w-full md:w-auto text-center font-semibold"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}