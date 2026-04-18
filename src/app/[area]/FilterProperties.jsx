"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProperty } from "@/contextapi/propertycontext";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const { data, loading2, error2, setLocality } = useProperty();

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#111827]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FFA6A6] border-r-[#ff8f8f] animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-400 tracking-wide">
          Loading Premium Commercial Listings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#111827]">
        <p className="text-red-400 text-lg">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#111827] text-white">
        <h2 className="text-2xl font-semibold">
          No Commercial Shops Available in {formattedArea}
        </h2>
        <p className="text-gray-400 mt-2">
          New investment opportunities will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#0f172a] px-4 py-16 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Premium Commercial Shops in{" "}
            <span className="text-[#FFA6A6]">{formattedArea}</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Verified commercial investment opportunities in prime business locations.
          </p>
          <div className="w-20 h-1 bg-[#FFA6A6] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {data.map((property) => (
            <div
              key={property._id}
              className="bg-[#1f2937] rounded-2xl border border-white/10
              shadow-lg hover:shadow-2xl hover:-translate-y-1
              transition duration-300 overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                {property?.media?.url ? (
                  <Image
                    src={property.media.url}
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="bg-white/5 w-full h-full flex items-center justify-center text-[#FFA6A6] text-sm">
                    No Image
                  </div>
                )}

                <span className="absolute top-4 left-4 bg-[#FFA6A6] text-black text-xs px-4 py-1 rounded-full font-semibold shadow">
                  {property.propertyType || "Commercial"}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col">

                <h2 className="text-base font-semibold leading-snug">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  {property.locality}
                </p>

                {/* INFO BAR */}
                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs flex items-center justify-between">

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-400">AREA</span>
                    <span className="font-semibold">
                      {formatArea(property.area, property.areaUnit)}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-white/10"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-400">STATUS</span>
                    <span className="font-semibold text-[#FFA6A6]">
                      {property.status || "Available"}
                    </span>
                  </div>

                  <div className="h-8 w-px bg-white/10"></div>

                  <div className="flex flex-col items-center flex-1">
                    <span className="text-gray-400">TYPE</span>
                    <span className="font-semibold">
                      {property.type || "Commercial"}
                    </span>
                  </div>

                </div>

                <p className="text-sm text-gray-400 mt-4 line-clamp-2">
                  {property.description ||
                    "Prime commercial shop ideal for business expansion and long-term rental yield."}
                </p>

                <div className="flex-1" />

                {/* PRICE + LINK */}
                <div className="mt-6 flex justify-between items-center">

                  {property.price && property.price > 0 ? (
                    <p className="text-lg font-bold text-[#FFA6A6]">
                      ₹ {property.price.toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
                      text-black px-4 py-1.5 rounded-full text-xs
                      transition shadow-md hover:opacity-90"
                    >
                      Request Price
                    </button>
                  )}

                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-[#FFA6A6] text-sm font-semibold hover:underline"
                  >
                    View Details →
                  </Link>

                </div>

              </div>
            </div>
          ))}

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