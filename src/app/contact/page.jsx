import React from "react";
import ContactPage from "./ContactPage";


export async function generateMetadata() {
  return {
    title:
      "Contact Us | Commercial Projects in Faridabad - Property Assistance & Support",

    description:
      "Get in touch with Commercial Projects in Faridabad for project inquiries, site visits, investment opportunities, commercial property guidance, and expert support across Faridabad.",

    keywords: [
      "contact commercial projects Faridabad",
      "commercial property consultant Faridabad",
      "commercial real estate Faridabad",
      "property inquiry Faridabad",
      "office space Faridabad",
      "retail shop investment Faridabad",
      "commercial property support",
      "Faridabad property assistance",
      "commercial project consultation",
      "real estate contact Faridabad"
    ],
    alternates: {
      canonical:
        "https://www.commercialprojectsinfaridabad.com/contact",
    },

    openGraph: {
      title:
        "Contact Us | Commercial Projects in Faridabad",
      description:
        "Contact our team for commercial property inquiries, site visits, project details, and investment opportunities in Faridabad.",
      url:
        "https://www.commercialprojectsinfaridabad.com/contact",
      siteName: "Commercial Projects in Faridabad",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Contact Us | Commercial Projects in Faridabad",
      description:
        "Reach out for commercial property assistance, project information, and investment guidance in Faridabad.",
    },
  };
}

const Page = () => {
  return (
    <div>
     <ContactPage/>
    </div>
  );
};

export default Page;