import React from "react";
import AboutPage from "./AboutPage";
import AboutFAQ from "./AboutFAQ";


export async function generateMetadata() {
  return {
   title:
  "About Us | Faridabad Commercial Property Directory",

description:
  "commercial property directory Faridabad, about us real estate Faridabad, best commercial real estate platform Faridabad, verified commercial listings Faridabad",

keywords: [
  "commercial projects Faridabad",
  "new commercial projects Faridabad",
  "luxury apartments Faridabad",
  "builder floors Faridabad",
  "affordable housing Faridabad",
  "upcoming projects Faridabad",
  "property investment Faridabad",
  "real estate trends Faridabad",
  "home buying guide Faridabad",
  "best commercial projects Faridabad",
  "commercial property news Faridabad",
  "Nehar Par projects Faridabad",
  "apartments in Faridabad",
  "housing projects Faridabad",
  "real estate blog Faridabad"
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