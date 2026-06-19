import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
   title:
  "Commercial Property Blog in Faridabad | Market & Invest Tips",

description:
  "Read expert insights on commercial property in Faridabad, office & retail trends, rental yields and investment tips. New articles added regularly for investors.",

keywords: [
  "commercial property blog faridabad",
  "faridabad commercial real estate trends",
  "office space investment tips",
  "sco property insights faridabad",
  "latest news on commercial property in faridabad",
  "faridabad office space market trends 2025",
  "how to invest in sco property in faridabad",
  "rental yield",
  "capital appreciation",
  "nh-44 corridor",
  "metro connectivity",
  "industrial real estate ballabhgarh"
],
    alternates: {
      canonical: "www.commercialprojectsinfaridabad.com/blog", // 🔥 apna real domain yaha replace karna
    },
  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <BlogList />
    </div>
  );
};

export default Page;