import React from "react";
import AboutPage from "./AboutPage";
import AboutFAQ from "./AboutFAQ";


export async function generateMetadata() {
  return {
   title:
  "About Us | Faridabad Commercial Property Directory",

description:
  "Learn how our Faridabad commercial property directory verifies listings for offices, retail shops & warehouses, helping buyers decide with confidence.",
keywords: [
  "faridabad commercial property directory",
  "commercial real estate platform faridabad",
  "verified commercial listings faridabad",
  "about commercial property faridabad",
  "most trusted commercial property platform in faridabad",
  "how commercial listings are verified in faridabad",
  "independent commercial real estate directory faridabad",
  "broker-neutral",
  "listing accuracy",
  "sco properties",
  "industrial plots",
  "investor-focused content"
],
    alternates: {
      canonical: "www.commercialprojectsinfaridabad.com/about", // 🔥 apna real domain yaha replace karna
    },
  };
}

const Page = () => {
  return (
    <div>
     <AboutPage/>
     <AboutFAQ/>
    </div>
  );
};

export default Page;