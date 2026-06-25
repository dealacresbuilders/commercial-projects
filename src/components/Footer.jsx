"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

const initialCount = 15;

const [visibleCount, setVisibleCount] = useState(initialCount);

const visibleLocations = locations.slice(0, visibleCount);

  return (
    <footer className="bg-[#111827] pt-16 pb-8 px-4 border-t border-white/10 overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Premium Commercial Projects in{" "}
            <span className="text-[#FFA6A6]">
              Faridabad
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Explore verified office spaces, retail shops, corporate floors and high-return investment opportunities across prime sectors of Faridabad. We ensure transparent deals and expert guidance.
          </p>
        </div>

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`https://www.dealacres.com/properties/commercial-property-for-sale-in-${createSlug(loc)}-faridabad`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-gray-400 hover:text-[#FFA6A6] transition duration-300"
                >

                  Commercial Property in {loc}
                </Link>

                <div
                  className="
                 absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                 opacity-0 scale-95
                 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                 whitespace-nowrap
              bg-[#1f2937] text-white text-xs
px-3 py-1.5 rounded-md
shadow-lg border border-[#FFA6A6]/30
z-[9999]
pointer-events-none
"
                >
                  Commercial Property in {loc}
                </div>

              </div>
            ))}

            {/* Read More */}
           {/* View More */}
{visibleCount < locations.length && (
  <div>
    <span
      onClick={() =>
        setVisibleCount((prev) =>
          Math.min(prev + initialCount, locations.length)
        )
      }
      className="block cursor-pointer text-[#FFA6A6] hover:underline transition"
    >
      View More...
    </span>
  </div>
)}

{/* View Less */}
{visibleCount > initialCount && (
  <div>
    <span
      onClick={() => setVisibleCount(initialCount)}
      className="block cursor-pointer text-[#FFA6A6] hover:underline transition"
    >
      View Less...
    </span>
  </div>
)}

          </div>
        </div>
        {/* DISCLAIMER */}
        <div className="mt-12 mb-8 bg-[#1f2937] border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-[#FFA6A6] font-semibold text-lg">        Disclaimer
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Property information, pricing, availability and project details
                are subject to change. Please verify all information independently
                before making any purchase decision.
              </p>
            </div>

            <button
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="
px-5 py-2 rounded-lg
bg-gradient-to-r
from-[#FFA6A6]
to-[#ff8f8f]
text-black
font-medium
hover:opacity-90
transition"
            >
              {showDisclaimer ? "Show Less" : "Learn More"}
            </button>
          </div>

          {showDisclaimer && (
            <div className="mt-6 border-t border-white/10 pt-6 animate-in fade-in duration-300">
              <p className="text-sm text-gray-400 leading-7">
                The information provided on CommrcialProjectInFaridabad.com is

              </p>

            </div>
          )}
        </div>
        {/* 🔥 Bottom Navigation Buttons - CENTER */}
        <div className="border-t border-white/10 pt-6 mt-10 mb-6">  <div className="flex justify-center items-center">

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link
              href="/about"
              className="text-gray-400 hover:text-[#FFA6A6] transition"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-gray-400 hover:text-[#FFA6A6] transition"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 hover:text-[#FFA6A6] transition"
            >
              Contact
            </Link>

            {/* <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#FFB200] transition"
      >
         How It's Work
      </Link> */}
          </div>

        </div>
        </div>
        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} CommercialProjectInFaridabad.com
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By - {" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
            >
              Parchar Manch
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}