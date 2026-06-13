"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
export default function AboutPage() {
  return (
    <section className="bg-[#0f172a] px-4 py-8 text-white">
      <div className="max-w-7xl mx-auto">
         <div className="mb-6">
   <Breadcrumb />
  </div>
        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Faridabad's Most Trusted Commercial {" "}
              <span className="text-[#FFA6A6]">
                Real Estate Directory
              </span>
            </h1>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-xl">
              There was a time when finding a commercial property in Faridabad meant spending weeks calling brokers, visiting offices with no prior information, and sifting through irrelevant listings on generic portals that treated a warehouse search the same as a flat search. We built this platform to fix exactly that.
We are a dedicated commercial property directory — built exclusively for Faridabad, focused entirely on commercial real estate, and designed around the needs of business owners, investors, and property professionals who value their time and their money.
Our platform brings together verified office spaces, retail shops, SCO properties, showrooms, warehouses, industrial plots, and co-working spaces from across every significant commercial corridor in Faridabad — Sector 15, 16, 20, NIT Faridabad, Ballabhgarh, Old Faridabad, NH-44, and beyond. Every listing is maintained with accurate details, real photographs, and direct contact information.
We are not brokers. We do not take commissions. We are not affiliated with any developer or builder. We are an independent directory platform whose only job is to help you find the right commercial property faster.
This is Faridabad's commercial real estate resource. And we are glad you found it.

            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#FFA6A6] to-[#ff8f8f]
                text-black shadow-lg hover:opacity-90 transition"
              >
                Browse All Commercial Properties in Faridabad Now
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
               Commercial Listings
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
        <div className="text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold">
            Who We Are and What We Stand For
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Built Exclusively for Faridabad's Commercial Market Every decision we have made in building this platform — from the listing categories to the search filters to the content we publish — has been made with Faridabad's commercial real estate market in mind. We are not a national portal that has added Faridabad as one of 500 cities. We are a platform built from the ground up for this specific city and its specific commercial property ecosystem.


Independent, Unbiased, and Broker-Neutral We do not represent any developer, builder, or brokerage firm. We do not favour any listing over another based on commercial arrangements. Every property listed on this platform gets equal visibility based on its relevance to the searcher's query. Our goal is to help you find the right property — not to push you toward a property that earns us the highest commission.


Committed to Listing Accuracy One of the biggest frustrations with online property search is encountering listings that are outdated, inaccurate, or simply fabricated to generate inquiries. We take listing accuracy seriously. Our team reviews new listings before they go live, periodically audits existing listings, and removes properties that are no longer available. We cannot guarantee perfection, but we are committed to maintaining the highest listing quality standards in Faridabad's commercial property space.


Covering Every Commercial Category Faridabad's commercial market is genuinely diverse — it spans premium offices, retail high streets, industrial estates, logistics parks, and emerging mixed-use developments. Our platform reflects this diversity. We list office spaces, retail shops, SCO units, showrooms, warehouses, industrial sheds, commercial plots, co-working spaces, and IT park floors. No matter what type of commercial property you are looking for, this is the platform that has it.


Designed for Both Buyers and Investors We understand that not everyone searching for commercial property intends to occupy it. A significant portion of our users are investors looking for high-yield commercial assets in Faridabad. Our platform and content are designed to serve both occupiers and investors equally — with listing details, market information, and FAQ content that helps both audiences make informed decisions.


A Growing, Living Directory Faridabad's commercial real estate market does not stand still, and neither does our platform. We add new listings regularly, update our market content to reflect current conditions, and continuously expand our coverage of emerging commercial areas in the city. Sectors 58–65, the areas near new metro stations, and the developing NH-48 extension corridor are among the zones we are actively expanding our inventory in.


Transparent and Free to Search We believe that access to property information should not carry a price tag for the searcher. Browsing every listing on this platform is completely free — no registration wall, no hidden fee, no paid tier required to see contact details. Property seekers deserve full access to market information without being made to pay for it.


Rooted in the Local Market We understand Faridabad's commercial geography — which sectors are mature, which are emerging, which roads carry the most footfall, and which industrial zones have the best infrastructure. This local knowledge informs everything from our listing categories to the market information we publish. We are not outsiders describing Faridabad's market from a distance — we are embedded in it.


Here for the Long Term We are committed to building the most reliable, comprehensive, and useful commercial property resource that Faridabad has ever had. That is not a short-term project — it is an ongoing commitment to this city's business community, investors, and property professionals. Every improvement we make to this platform is made with that long-term vision in mind.


Our Promise to Every User Whether you are a first-time commercial property buyer, a growing business looking to expand, or a seasoned investor — you deserve accurate information, relevant listings, and a platform that respects your time. That is what we are here to deliver, every single day.

          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center mb-16">
            WHY CHOOSE US
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