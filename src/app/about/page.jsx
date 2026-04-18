"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[#0f172a] px-4 py-24 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted Commercial Property Platform in{" "}
              <span className="text-[#FFA6A6]">
                Faridabad
              </span>
            </h1>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-xl">
              We connect serious investors, brands, and business owners with 
              verified commercial shops, office spaces, and investment-ready 
              properties in prime locations across Faridabad.
              Transparent deals. Strategic assets. High-yield opportunities.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
                text-black shadow-lg hover:opacity-90 transition"
              >
                Explore Properties
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#FFA6A6] text-[#FFA6A6]
                hover:bg-[#FFA6A6] hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-[#1f2937] border border-white/10 rounded-3xl p-12 shadow-2xl">

            <h3 className="text-4xl font-bold text-[#FFA6A6]">
              500+
            </h3>
            <p className="text-gray-400 mt-2">
              Verified Commercial Listings
            </p>

            <div className="h-px bg-white/10 my-8"></div>

            <h3 className="text-4xl font-bold text-[#FFA6A6]">
              1000+
            </h3>
            <p className="text-gray-400 mt-2">
              Happy Investors & Business Owners
            </p>

          </div>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Our mission is to simplify commercial property investment by 
            offering verified listings, transparent pricing, and access to 
            high-growth retail and office spaces across Faridabad’s prime sectors.
          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-[#1f2937] rounded-2xl p-10 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FFA6A6]/20 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#FFA6A6] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every commercial property is verified for legal clarity, 
                ensuring secure and reliable investment decisions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1f2937] rounded-2xl p-10 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FFA6A6]/20 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#FFA6A6] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Prime Business Locations
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We focus on high-footfall sectors with strong rental yield 
                and long-term appreciation potential.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#1f2937] rounded-2xl p-10 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FFA6A6]/20 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#FFA6A6] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clear pricing, no hidden costs, and complete assistance 
                from enquiry to final deal closure.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f] rounded-3xl p-16 text-center text-black shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Next Commercial Investment?
          </h2>

          <p className="text-black/80 mb-10 max-w-2xl mx-auto">
            Discover premium retail shops and office spaces in Faridabad 
            and start building long-term rental returns today.
          </p>

          <Link
            href="/"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold
            hover:bg-gray-900 transition shadow-md"
          >
            Browse Properties
          </Link>

        </div>

      </div>
    </section>
  );
}