"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DisclaimerSection from "./DisclaimerSection";

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who runs this platform and what is your background in real estate?",
      answer:
        "This platform is run by a team with deep roots in Faridabad's property market and a genuine frustration with how commercial real estate search worked — or rather, did not work — in this city. We have combined expertise in real estate, digital publishing, and local market knowledge to build a directory that solves the real problems property seekers face: irrelevant listings, outdated information, lack of transparency, and the absence of a Faridabad-specific resource. We are not a brokerage, not a developer, and not a franchise of a national portal. We are an independent team committed to making Faridabad's commercial property market more accessible and transparent.",
    },
    {
      question: "How is this platform different from other property portals?",
      answer:
        "The biggest difference is focus. Most large real estate portals cover residential and commercial properties across hundreds of Indian cities. Commercial listings in a specific city like Faridabad get lost in the noise — they compete with apartment listings, villa projects, and residential plots for visibility. Our platform lists only commercial properties, only in Faridabad. This focus means better search results, more relevant filters, deeper local market content, and a database that is curated around the needs of commercial property buyers, tenants, and investors rather than designed as a one-size-fits-all solution.",
    },
    {
      question: "Do you charge property seekers to use this platform?",
      answer:
        "No. Searching for commercial properties, viewing listing details, accessing photographs, and contacting property owners or agents through this platform is entirely free for property seekers. There are no subscription fees, no pay-per-inquiry charges, and no premium tiers that lock basic information behind a paywall. We believe every business owner and investor deserves free access to property market information.",
    },
    {
      question: "How can property owners and brokers list properties on your platform?",
      answer:
        "If you have a commercial property in Faridabad to list — whether you are the owner, a developer, or an authorised broker — you can reach out to us through the contact section of this website. Our team will guide you through the listing process, including what information and photographs to submit. We review all new listings before they go live to ensure they meet our quality and accuracy standards. We offer different listing options to suit different needs — get in touch and we will explain what is available.",
    },
    {
      question: "How do you verify the listings on your platform?",
      answer:
        "We have a multi-step review process for new listings. When a property is submitted for listing, our team reviews the details for completeness, checks for obvious inconsistencies in pricing or area claims, and in many cases contacts the lister to verify key details. For listed properties, we periodically conduct audits to check whether they are still available and whether the listed details remain accurate. We also rely on user feedback — if you contact a property through our platform and find that the listing details are significantly inaccurate, we encourage you to let us know so we can update or remove it.",
    },
    {
      question: "Do you offer any advisory or consultation services for commercial property?",
      answer:
        "Our primary role is as a directory and information platform — connecting property seekers with listings and providing market information to help them make informed decisions. We do not offer formal real estate advisory, valuation, or legal services. However, our content — including our FAQs, market guides, and area profiles — is written to give you the information you need to ask the right questions and evaluate properties intelligently. For transaction-specific advice, we recommend engaging a qualified property lawyer and, where relevant, a chartered accountant.",
    },
    {
      question: "How often are new properties added to the platform?",
      answer:
        "New commercial property listings are added to our platform multiple times a week. Faridabad's commercial market sees regular new inventory — new construction projects completing, existing occupiers vacating, developers launching new commercial phases, and investors putting properties on the rental or sale market. We actively work to capture this new inventory as quickly as possible. If you are looking for a specific type of property and cannot find it today, we recommend checking back regularly or contacting us with your specific requirement — we may be able to connect you with unlisted inventory.",
    },
    {
      question: "Can developers and builders list new commercial projects on this platform?",
      answer:
        "Yes. We actively welcome listings from developers and builders who are launching new commercial projects in Faridabad. New commercial projects are among the most searched categories on our platform — buyers and investors frequently look for under-construction commercial properties at launch pricing. If you are a developer with a new commercial project in Faridabad — whether it is an office complex, a retail mall, an SCO block, or an industrial park — please reach out to us to discuss listing options.",
    },
    {
      question: "What areas of Faridabad do you currently cover?",
      answer:
        "We currently cover all major commercial areas of Faridabad, including Sector 15, Sector 16, Sector 20, NIT Faridabad, Old Faridabad, Ballabhgarh, Sector 58–65, the NH-44 corridor, HSIIDC industrial areas, and all other commercial sectors within the Faridabad municipal limits. We are continuously expanding our coverage to include emerging commercial zones and peripheral areas as the city grows. If you have a property in an area not currently represented on our platform, please contact us — we would like to include it.",
    },
    {
      question: "How can I stay updated about new commercial property listings in Faridabad?",
      answer:
        "The best ways to stay updated are to visit the platform regularly and check for new listings in your preferred location and property category. We are also developing notification and alert features that will allow registered users to receive updates when new properties matching their criteria are listed. Additionally, following our platform on social media and subscribing to our market updates will keep you informed about significant new listings, market trends, and commercial real estate developments in Faridabad. If you have a very specific requirement, you can also contact us directly and we will notify you personally when a matching property becomes available.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your Questions About Us,{" "}
            <span className="text-[#FFA6A6]">
              Answered Honestly
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl">
            Learn more about our platform, how we work, property listings,
            verification process, and our mission to make commercial real
            estate in Faridabad more transparent.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 bg-[#1f2937]
                ${
                  isOpen
                    ? "border-[#FFA6A6] shadow-lg shadow-[#FFA6A6]/10"
                    : "border-white/10"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-white font-semibold text-lg">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`text-[#FFA6A6] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-300 leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
      <DisclaimerSection/>
    </section>
  );
}