
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import ProjectsPage from "@/components/TopBuilders";
import ResidentialProjectsContent from "@/components/ResidentialProjectsContent";
import PlotSaleFAQSection from "@/components/PlotSaleFAQSection";

export default function Home() {
  return (
    <>
     <Hero/>
     <ProjectsPage/>
     <ResidentialProjectsContent/>
     <PlotSaleFAQSection/>
    </>
  );
}
