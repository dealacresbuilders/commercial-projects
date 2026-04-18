"use client";

import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }) {

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <div className="bg-[#1f2937] rounded-2xl border border-white/10 
    shadow-lg hover:shadow-2xl hover:-translate-y-2 
    transition duration-300 overflow-hidden flex flex-col h-full text-white">

      {/* IMAGE */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={property?.media?.url || "/no-image.png"}
          alt={property.title}
          width={400}
          height={250}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        <span className="absolute top-3 left-3 bg-[#FFA6A6] text-black text-xs px-3 py-1 rounded-full shadow font-semibold">
          {property.propertyType}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-base font-semibold line-clamp-2">
          {property.title}
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          {property.locality}
        </p>

        {/* STATS */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-gray-400 uppercase text-[10px] tracking-wide block mb-1">
              Area
            </span>
            <span className="font-semibold text-sm">
              {formatArea(property.area, property.areaUnit)}
            </span>
          </div>

          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-gray-400 uppercase text-[10px] tracking-wide block mb-1">
              Type
            </span>
            <span className="font-semibold text-sm">
              {property.propertyCategory}
            </span>
          </div>

          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-gray-400 uppercase text-[10px] tracking-wide block mb-1">
              Status
            </span>
            <span className="font-semibold text-[#FFA6A6] text-sm">
              {property.status || "Ready to Move"}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
          {property.description ||
            "Premium commercial asset offering strong rental yield and long-term appreciation potential."}
        </p>

        <div className="flex-1" />

        {/* PRICE + BUTTON */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xl font-bold text-[#FFA6A6] mb-3">
            {property.price && property.price > 0
              ? `₹ ${property.price.toLocaleString("en-IN")}`
              : "Price on Request"}
          </p>

          <Link
            href={`/properties/${property.slug}`}
            className="block w-full border border-[#FFA6A6] text-[#FFA6A6] 
            px-4 py-2 rounded-full 
            hover:bg-[#FFA6A6] hover:text-black
            transition text-center font-semibold text-sm"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}