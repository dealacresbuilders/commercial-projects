"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: " What types of commercial properties are available in Faridabad?",
    answer: "Faridabad offers one of the most diverse commercial real estate inventories in the NCR region. The city has well-established office spaces ranging from small single-room offices to large multi-floor corporate floors in Sectors 15, 16, and 20. Retail properties are available across high-street locations in NIT Faridabad, Old Faridabad, and along NH-44. SCO (Shop-cum-Office) properties are highly popular among small and medium businesses for their flexibility — they allow a shopfront on the ground floor with office space on the upper floors. Faridabad also has a thriving industrial real estate segment, with warehouses, industrial sheds, and factory plots concentrated in Ballabhgarh, Sector 58–65, and the HSIIDC industrial areas. Showrooms, particularly for automobile dealerships and furniture brands, line the NH-44 corridor. Co-working spaces and managed office facilities are growing in Sectors 15–20. Whatever your commercial requirement — occupation, investment, or development — Faridabad has a matching property type.",
  },
  {
    question: "Which are the best locations for commercial property investment in Faridabad?",
    answer: "Faridabad has several distinct commercial micro-markets, each suited to a different type of business or investment. Sector 15, 16, and 20 are the most established commercial zones, with premium office and retail demand driven by proximity to Delhi and excellent road connectivity. NIT Faridabad is a densely populated mixed-use area ideal for retail shops with high daily footfall. Old Faridabad near the railway station supports traditional retail and service businesses. Ballabhgarh is the industrial and logistics hub — the right location for warehousing, manufacturing units, and industrial plot investments. NH-44 (formerly NH-2) is the prime corridor for showrooms, automobile dealerships, and large-format retail. Sectors 58–65 near the Faridabad-Gurugram border are emerging commercial zones that offer competitive pricing and strong appreciation potential. The areas near Faridabad metro stations on the Violet Line are increasingly attractive for office and retail investment due to improved connectivity.",
  },
  {
    question: "What is the average price of commercial property in Faridabad?",
    answer: "Commercial property prices in Faridabad vary significantly depending on location, property type, age, and condition. As a general benchmark: prime retail properties on main roads in NIT Faridabad or Sector 15–16 range from ₹8,000 to ₹18,000 per sq ft for purchase. Office spaces in established commercial sectors are priced between ₹4,500 and ₹12,000 per sq ft. SCO properties, depending on the sector, range from ₹60 lakh to ₹3 crore and above. Industrial plots in Ballabhgarh are typically available between ₹2,500 and ₹6,000 per sq ft depending on road width and zone. Rental rates for retail shops start from ₹40–₹60 per sq ft per month on prime streets, while office rentals range from ₹25 to ₹70 per sq ft per month. These are approximate ranges — actual pricing depends on the specific property. We recommend checking individual listings on this platform for the most accurate and updated pricing.",
  },
  {
    question: "What documents should I verify before buying commercial property in Faridabad?",
    answer: "Before committing to any commercial property purchase in Faridabad, there are several critical documents you must verify. First, check the title deed to confirm the seller has clear, undisputed ownership of the property. Second, obtain an encumbrance certificate to confirm there are no pending loans, mortgages, or legal disputes on the property. Third, verify the land use certificate or zoning classification under DTCP (Department of Town and Country Planning, Haryana) or HSVP to confirm the land is approved for commercial use. Fourth, check the approved building plan and occupancy certificate for constructed properties to ensure the structure is legally sanctioned. Fifth, for leasehold properties in HSVP sectors, verify the lease deed and check if all dues are cleared. Sixth, check for any pending property tax dues with the Faridabad Municipal Corporation. We strongly recommend engaging a qualified property lawyer to conduct full due diligence before any transaction.",
  },
  {
    question: "Is commercial property in Faridabad a good investment in 2024–25?",
    answer: "Yes — by most objective metrics, commercial property in Faridabad presents a strong investment case. The city offers significantly lower entry prices compared to Gurugram and Noida while delivering comparable or better rental yields — typically between 6% and 9% annually for well-located properties. The ongoing metro expansion, NH-44 upgrade works, and the city's proximity to South Delhi continue to drive demand for commercial spaces. The industrial and warehousing segment is seeing particularly strong demand driven by the growth of e-commerce logistics hubs in Haryana. Additionally, Faridabad's large residential population — over 1.8 million people — creates sustainable organic demand for retail and service-oriented commercial spaces. The infrastructure cycle in Faridabad is still mid-curve, meaning capital appreciation potential over the next five to ten years remains significant. As with any real estate investment, location selection and thorough due diligence are critical.",
  },
  {
    question: "Can I find warehouse and industrial property listings on this platform?",
    answer: "Yes, absolutely. Warehouses, industrial sheds, factory plots, and cold storage facilities are among the most actively searched commercial categories on this platform. Faridabad and the Ballabhgarh industrial belt are major logistics and manufacturing hubs in Haryana, and we maintain a dedicated inventory of industrial and warehousing properties in these areas. You can search by property size, road width access (important for truck movement), zone type (industrial vs. commercial), and specific sectors. Whether you need a 2,000 sq ft storage shed or a 1 lakh sq ft Grade-A warehouse, our listings cover the full range. Industrial plot listings are also available for businesses looking to construct their own facilities.",
  },
  {
    question: "How do I list my commercial property on this platform?",
    answer: "If you are a property owner, developer, or authorised broker with a commercial property in Faridabad to list, you can get in touch with us through the contact section of this website. We will review your listing details, verify the key information, and publish your property on the platform. We encourage all listers to provide accurate carpet area, clear photographs, realistic pricing, and correct contact details to maximise inquiry responses. Listings with complete information consistently receive significantly more inquiries than incomplete ones. Reach out to us and our team will guide you through the listing process.",
  },
  {
    question: "What is an SCO property and is it a good option for small businesses in Faridabad?",
    answer: "SCO stands for Shop-cum-Office — a property format that is extremely popular in Haryana's urban real estate market. An SCO unit typically consists of a ground floor designed for retail or customer-facing commercial use and one or more upper floors usable as office space, service floors, or even residential accommodation in some zones. For small and medium businesses, SCO properties offer excellent flexibility — you can run your customer operations on the ground floor while housing your back-office team above. Faridabad has a healthy supply of SCO properties across various sectors, priced to suit different budgets. They are also popular as investment assets because a single SCO property can be leased to multiple tenants — a retail tenant on the ground floor and a professional services firm on the upper floors — generating diversified rental income.",
  },
  {
    question: " How is Faridabad's metro connectivity impacting commercial real estate?",
    answer: "The Delhi Metro Violet Line's extension to Faridabad has had a measurable and positive impact on commercial real estate values and demand across the city. Stations from Badarpur Border through to Escorts Mujesar have created new commercial catchment areas around their immediate vicinity. Properties within 500 metres of metro stations have seen faster price appreciation and shorter vacancy periods compared to comparable properties without metro access. For retail businesses, metro connectivity means a larger addressable customer base — shoppers and office workers now travel from across Delhi and other NCR areas to Faridabad for work and commerce. For businesses hiring talent from across NCR, proximity to metro makes Faridabad office locations far more accessible. Future metro corridor expansion plans are expected to further amplify this effect.",
  },
  {
    question: "Can NRIs purchase commercial property in Faridabad?",
    answer: "Yes. Non-Resident Indians (NRIs) are permitted to purchase commercial real estate in India under the Foreign Exchange Management Act (FEMA) regulations set by the Reserve Bank of India. NRIs can fund property purchases through their NRE (Non-Resident External) or NRO (Non-Resident Ordinary) accounts. Rental income earned from commercial properties can be credited to the NRO account, and repatriation of funds is permitted subject to applicable limits and tax deductions. Commercial property in Faridabad is an attractive option for NRIs looking to invest in India because of its relatively lower entry pricing, strong rental demand, and long-term appreciation potential tied to NCR's overall growth. It is advisable for NRI buyers to engage a local legal advisor and a chartered accountant familiar with cross-border property transactions to ensure full compliance.",
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