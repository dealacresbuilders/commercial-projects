import React from "react";
import { headers } from "next/headers";
import BlogList from "./BlogList";

export async function generateMetadata() {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  // remove www
  const cleanDomain = domain.replace(/^www\./, "");

  return {
    title: "Commercial Property Blogs | Investment Insights Faridabad",
    description:
      "Explore commercial real estate blogs, investment strategies, rental yield insights and business property trends in Faridabad.",
    keywords: [
      "commercial property blogs",
      "real estate investment tips",
      "rental yield insights",
      "commercial property Faridabad",
      "property market trends",
      "business property investment"
    ],
    alternates: {
      canonical: `https://${cleanDomain}/blog`,
    },
  };
}

const page = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <BlogList />
    </div>
  );
};

export default page;