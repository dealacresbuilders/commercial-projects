"use client";

import { useEffect } from "react";
import { useProject } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";


export default function ProjectsPage() {
  const { projects, loading, error, getProjectByCity } = useProject();

  useEffect(() => {
    getProjectByCity("faridabad");
  }, []);

  return (
    <section className="bg-[#0f172a] min-h-screen py-14 px-6 text-white">
      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        {!loading && (
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
  <span className="text-[#FFA6A6]">Commercial</span> Projects in Faridabad
</h1>
        )}

        {/* Loader */}
        {loading && (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 border-4 border-[#FFA6A6]/20 border-t-[#FFA6A6] rounded-full animate-spin"></div>

<p className="text-gray-400 font-medium">
  Loading Projects...
</p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {projects?.map((item) => (
              <div
                key={item.slug}

               className="
bg-[#1f2937]
rounded-3xl
overflow-hidden
border border-white/10
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
group
flex
flex-col
"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.imgurlink || "/placeholder.jpg"}
                    alt={item.projectName}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />

                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* <span className="absolute top-4 left-4 bg-[#FFB200] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {item.propertyType || "Project"}
                  </span> */}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow backdrop-blur-sm">
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#FFA6A6] transition-colors">
  {item.projectName}
</h2>

                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#FFA6A6]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"
                      />
                    </svg>

                    <span className="text-sm text-gray-400">
                      {item.builderName}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
className="w-5 h-5 text-[#FFA6A6] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <p className="text-sm text-gray-400 line-clamp-2">
                      {item.address}
                    </p>
                  </div>

                  {/* <div className="text-[#FFB200] font-bold text-lg mb-3">
                    {item.priceRange ||
                      item.price ||
                      "Price On Request"}
                  </div> */}

                  <Link
                    href={`https://www.dealacres.com/project/${item.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                   <button
  className="
  w-full
  py-3
  rounded-2xl
  bg-gradient-to-r
  from-[#FFA6A6]
  to-[#ff8f8f]
  text-black
  font-semibold
  shadow-lg
  hover:shadow-2xl
  hover:scale-[1.02]
  transition-all
  duration-300
  cursor-pointer
  "
>
  View Details →
</button>
                  </Link>
                </div>
              </div>
            ))}

            {projects?.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-lg">
                  No Projects Found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}