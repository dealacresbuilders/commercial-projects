"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of residential properties are available in Faridabad?",
    answer: "Faridabad offers a wide range of residential options including 1BHK, 2BHK and 3BHK apartments, builder floors, independent villas, row houses, and plotted developments. You can find affordable housing in sectors like Sector 37 and NIT Faridabad, as well as premium gated communities in Greater Faridabad (Neharpar).",
  },
  {
    question: "What is the average property price per sq. ft. in Faridabad?",
    answer: "Property prices in Faridabad typically range from ₹3,500 to ₹9,000 per sq. ft. depending on the location and project type. Affordable sectors like Sector 14 and Sector 21 offer lower rates, while premium developments in Neharpar or Sector 88 may command higher prices due to superior amenities and newer infrastructure.",
  },
  {
    question: "Is Faridabad a good city for real estate investment in 2025?",
    answer: "Yes, Faridabad is considered one of the best-value investment destinations in the NCR in 2025. The extension of the Delhi Metro to Faridabad, growing IT and industrial corridors, and infrastructure upgrades have significantly boosted property appreciation. Rental yields of 3–4% annually are common in well-connected sectors.",
  },
  {
    question: "Are residential projects in Faridabad RERA registered?",
    answer: "All projects listed on our platform are verified for RERA Haryana registration. Buyers can cross-check registration numbers directly on the RERA Haryana official portal (hrera.org.in). RERA compliance ensures builder accountability, on-time possession, and legal protection for buyers.",
  },
  {
    question: "Which sectors in Faridabad are best for buying a flat?",
    answer: "Top residential sectors in Faridabad include Neharpar (Greater Faridabad) for new developments, Sector 88 and Sector 89 for emerging projects, Sector 46 for mid-range options, and NIT Faridabad for affordable housing. The choice depends on your budget, connectivity needs, and preference for established vs upcoming neighbourhoods.",
  },
  {
    question: "How is the metro connectivity in Faridabad?",
    answer: "Faridabad is connected to Delhi via the Violet Line of the Delhi Metro, with stations at Escorts Mujesar, Bata Chowk, Neelam Chowk Ajronda, Old Faridabad, and Badarpur Border. This makes daily commuting to South Delhi, Central Delhi, and Gurugram (via interchange) highly convenient, which is a major driver of housing demand.",
  },
  {
    question: "What documents should I check before buying a property in Faridabad?",
    answer: "Key documents to verify include the RERA registration certificate, approved building plan from Haryana Urban Development Authority (HSVP), land title deed, encumbrance certificate, builder-buyer agreement, and the Occupancy Certificate (OC) for ready-to-move properties. Always consult a property lawyer for due diligence.",
  },
  {
    question: "Can NRIs buy residential property in Faridabad?",
    answer: "Yes, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) are permitted to purchase residential property in Faridabad under the Foreign Exchange Management Act (FEMA). NRIs can pay through NRE, NRO, or FCNR accounts and are eligible for home loans from Indian banks. Our NRI buying guide covers all required steps in detail.",
  },
  {
    question: "What amenities are typically offered in new residential projects in Faridabad?",
    answer: "Modern residential projects in Faridabad come with a variety of amenities such as 24/7 security with CCTV, landscaped gardens, clubhouses, swimming pools, gymnasiums, children's play areas, power backup, covered parking, and high-speed lifts. Premium projects in Greater Faridabad also offer jogging tracks, co-working spaces, and EV charging stations.",
  },
  {
    question: "How do I schedule a site visit for a project listed on this directory?",
    answer: "Each project page on our directory includes a 'Book a Site Visit' button where you can select your preferred date and time. Our property advisors will confirm your slot within 2 business hours and arrange a guided tour with the builder. Site visits are completely free and carry no obligation to purchase.",
  },
];

export default function PlotSaleFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

<section className="w-full py-6 px-4 bg-[#0f172a]">        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
   <div className="mb-10 md:mb-14">
  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
    Commercial Projects in{" "}
    <span className="text-[#FFA6A6]">Faridabad</span> - FAQs
  </h2>

  <p className="text-gray-400 text-base md:text-lg max-w-3xl mt-4 md:mt-5 leading-7 md:leading-8">
    Get answers to the most frequently asked questions about residential
    projects in Faridabad, including apartments, builder floors, affordable
    housing, home loans, amenities, investment opportunities, and property
    buying guidance.
  </p>
</div>

          {/* FAQ */}
          <div className="space-y-4 md:space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
      className={`rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden bg-[#1f2937] ${
  isOpen
    ? "border-[#FFA6A6] shadow-xl shadow-[#FFA6A6]/10"
    : "border-white/10 hover:border-[#FFA6A6]/50"
}`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-start justify-between gap-3 md:gap-6 px-4 md:px-8 py-5 md:py-7 text-left bg-[#1f2937]"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-7 md:leading-8 pr-2">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex-shrink-0 w-10 h-10 md:min-w-[48px] md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
  ? "bg-[#FFA6A6] text-black rotate-180"
  : "bg-[#FFA6A6]/10 text-[#FFA6A6]"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-white/10 mb-5 md:mb-6"></div>

                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}