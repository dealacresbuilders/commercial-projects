// "use client";

// import Link from "next/link";

// const locations = [
//   '1F Block New Industrial Twp 1, Faridabad',
//   'Ashoka Enclave Part 1, Faridabad',
//   'Ashoka Enclave Part 2, Faridabad',
//   'Ashoka Enclave, Faridabad',
//   'BPTP, Faridabad',
//   'Badkhal, Faridabad',
//   'Ballabhgarh, Faridabad',
//   'Bhikam Colony, Faridabad',
//   'Bhim Sen Colony, Faridabad',
//   'Block A Sector 7, Faridabad',
//   'Block D New Industrial Twp 2, Faridabad',
//   'Block F New Industrial Twp 2, Faridabad',
//   'Block H Block F Sector 10 HBC, Faridabad',
//   'Block J New Industrial Twp 1, Faridabad',
//   'Block-E, Sector-7, Faridabad',
//   'Block-S Sector 75, Faridabad',
//   'Budena Village, Faridabad',
//   'Charmwood Village, Faridabad',
//   'Dayal Bagh Colony, Faridabad',
//   'Dheeraj Nagar, Faridabad',
//   'E Block Sector 85, Faridabad',
//   'Eros Garden, Faridabad',
//   'Gopi Colony, Faridabad',
//   'Gothda Mohbtabad, Faridabad',
//   'Greenfield Colony Block B, Faridabad',
//   'Greenfield Colony, Faridabad',
//   'Greenfields Colony Block C, Faridabad',
//   'Greenfields, Faridabad',
//   'HBH Colony, Faridabad',
//   'IP Extension 2, Faridabad',
//   'Indraprastha Colony, Faridabad',
//   'Ismailpur, Faridabad',
//   'Lakkarpur, Faridabad',
//   'Mawai, Faridabad',
//   'Mujesar, Faridabad',
//   'NIT 5, Faridabad',
//   'NIT, Faridabad',
//   'Nangla Gujran, Faridabad',
//   'Nawada Village, Faridabad',
//   'Nehar Par, Faridabad',
//   'Nehru Ground, Faridabad',
//   'New Industrial Township 1, Faridabad',
//   'New Industrial Township 2, Faridabad',
//   'New Industrial Township 5, Faridabad',
//   'New Industrial Township, Faridabad',
//   'Palla, Faridabad',
//   'Pocket H Sector 10 HBC, Faridabad',
//   'Rajendra Colony, Faridabad',
//   'SGM Nagar, Faridabad',
//   'Sainik Colony, Faridabad',
//   'Sanjay Colony, Faridabad',
//   'Sanjay Gandhi Memorial Nagar, Faridabad',
//   'Sarai Khawaja Village, Faridabad',
//   'Sector 1 Ballabhgarh, Faridabad',
//   'Sector 10 HBC, Faridabad',
//   'Sector 11, Faridabad',
//   'Sector 14, Faridabad',
//   'Sector 15, Faridabad',
//   'Sector 15A, Faridabad',
//   'Sector 16, Faridabad',
//   'Sector 16A, Faridabad',
//   'Sector 17, Faridabad',
//   'Sector 18, Faridabad',
//   'Sector 18A, Faridabad',
//   'Sector 19, Faridabad',
//   'Sector 2, Faridabad',
//   'Sector 21, Faridabad',
//   'Sector 21A, Faridabad',
//   'Sector 21B, Faridabad',
//   'Sector 21C, Faridabad',
//   'Sector 21D, Faridabad',
//   'Sector 23, Faridabad',
//   'Sector 28, Faridabad',
//   'Sector 29, Faridabad',
//   'Sector 3, Faridabad',
//   'Sector 30, Faridabad',
//   'Sector 31, Faridabad',
//   'Sector 32, Faridabad',
//   'Sector 35, Faridabad',
//   'Sector 36, Faridabad',
//   'Sector 37, Faridabad',
//   'Sector 41, Faridabad',
//   'Sector 43, Faridabad',
//   'Sector 45, Faridabad',
//   'Sector 46, Faridabad',
//   'Sector 48, Faridabad',
//   'Sector 49, Faridabad',
//   'Sector 56A, Faridabad',
//   'Sector 57, Faridabad',
//   'Sector 64, Faridabad',
//   'Sector 65, Faridabad',
//   'Sector 69, Faridabad',
//   'Sector 7, Faridabad',
//   'Sector 70, Faridabad',
//   'Sector 71, Faridabad',
//   'Sector 75, Faridabad',
//   'Sector 76, Faridabad',
//   'Sector 77, Faridabad',
//   'Sector 78, Faridabad',
//   'Sector 79, Faridabad',
//   'Sector 8, Faridabad',
//   'Sector 80, Faridabad',
//   'Sector 81, Faridabad',
//   'Sector 82, Faridabad',
//   'Sector 83, Faridabad',
//   'Sector 84, Faridabad',
//   'Sector 85 Faridabad',
//   'Sector 85, Faridabad',
//   'Sector 86, Faridabad',
//   'Sector 87, Faridabad',
//   'Sector 88, Faridabad',
//   'Sector 89, Faridabad',
//   'Sector 9, Faridabad',
//   'Sector 91, Faridabad',
//   'Sector 98, Faridabad',
//   'Sector-143, Faridabad',
//   'Shastri Colony, Faridabad',
//   'Shiv Durga Vihar, Faridabad',
//   'Shyam Colony, Faridabad',
//   'Sikri, Faridabad',
//   'Surajkund, Faridabad',
//   'Surya Nagar Phase 2, Faridabad',
//   'Surya Vihar Part 2, Faridabad',
//   'Tilpat, Faridabad',
//   'Uncha Gaon, Faridabad',
//   'sector 7B, Faridabad'
// ];

// const createSlug = (location) => {
//   return location
//     .toLowerCase()
//     .replace(/,/g, "")
//     .replace(/\s+/g, "-");
// };

// export default function Footer() {
//   return (
//     <footer className="bg-[#111827] pt-16 pb-8 px-4 border-t border-white/10">
//       <div className="max-w-7xl mx-auto">

//         {/* BRAND */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold text-white">
//             Premium Commercial Projects in{" "}
//             <span className="text-[#FFA6A6]">Faridabad</span>
//           </h2>

//           <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
//             Explore verified office spaces, retail shops, corporate floors 
//             and high-return investment opportunities across prime sectors 
//             of Faridabad. We ensure transparent deals and expert guidance.
//           </p>
//         </div>

//         {/* LOCATIONS */}
//         <div className="mb-12">
//           <h3 className="text-lg font-semibold text-white mb-6">
//             Prime Investment Locations
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
//             {locations.map((loc, index) => (
//               <Link
//                 key={index}
//                 href={`/${createSlug(loc)}`}
//                 className="text-gray-400 hover:text-[#FFA6A6] transition duration-300"
//               >
//                 {loc}, Faridabad
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm text-gray-500 text-center md:text-left">
//             © {new Date().getFullYear()} Commercial Projects Faridabad — All Rights Reserved.
//           </p>

//           <Link
//             href="https://www.parcharmanch.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm text-gray-500 hover:text-[#FFA6A6] transition mt-3 md:mt-0"
//           >
//             Designed By Parchar Manch
//           </Link>
//         </div>

//       </div>
//     </footer>
//   );
// }

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
  const [showAll, setShowAll] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const initialCount = 40;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

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
            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#FFA6A6] hover:underline transition"
                >
                  View More...
                </span>
              </div>
            )}

            {/* Read Less */}
            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
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