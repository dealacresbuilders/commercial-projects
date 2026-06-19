import React from "react";
import ContactPage from "./ContactPage";


export async function generateMetadata() {
  return {
    title:
      "Contact Us | Commercial Property in Faridabad Enquiry",

    description:
      "Connect with our Faridabad commercial property experts for a free consultation. Get help finding offices, retail shops or warehouses & book a site visit today.",
keywords: [
  "contact commercial property faridabad",
  "commercial property consultant faridabad",
  "free property consultation faridabad",
  "faridabad commercial real estate enquiry",
  "book a free consultation for commercial property in faridabad",
  "schedule a site visit commercial property faridabad",
  "talk to a faridabad commercial property expert",
  "enquiry form",
  "site visit",
  "property advisor",
  "request callback",
  "investment consultation"
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