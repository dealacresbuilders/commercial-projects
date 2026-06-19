import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProjectProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Commercial Property in Faridabad | Buy, Rent & Invest",

  description:
    "Find verified commercial properties in Faridabad — offices, retail shops, SCOs & warehouses. NCR's dedicated commercial real estate directory. Search free.",

  keywords: [
    "commercial projects in Faridabad",
    "commercial property Faridabad",
    "office space in Faridabad",
    "retail shops in Faridabad",
    "commercial investment Faridabad",
    "SCO plots Faridabad",
    "commercial real estate Faridabad",
    "food court investment Faridabad",
    "business space Faridabad",
    "commercial property for sale Faridabad",
    "shops for sale Faridabad",
    "office spaces Faridabad",
    "commercial projects NCR",
    "commercial property Haryana",
    "investment property Faridabad",
  ],

  alternates: {
    canonical: "https://www.commercialprojectsinfaridabad.com/",
  },

  openGraph: {
    title:
      "Commercial Projects in Faridabad | Office Spaces, Retail Shops & Investment Properties",
    description:
      "Find verified commercial projects in Faridabad. Explore office spaces, retail shops, SCO plots, food courts and investment opportunities in prime locations.",
    url: "https://www.commercialprojectsinfaridabad.com/",
    siteName: "Commercial Projects in Faridabad",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Commercial Projects in Faridabad | Office Spaces, Retail Shops & Investment Properties",
    description:
      "Explore premium commercial projects in Faridabad with verified listings, office spaces, retail shops and investment opportunities.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Provider Wrap Start */}
        <ProjectProvider>
          <BlogProvider>
          <Navbar />
          {children}
          <ScrollToTop />
                    {/* <Toaster position="top-right" reverseOrder={false} /> */}

          <Footer/>
          </BlogProvider>
        </ProjectProvider>
        {/* ✅ Provider Wrap End */}
      </body>
    </html>
  );
}