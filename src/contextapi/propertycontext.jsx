"use client";

import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ==========================
  // Get Projects By City
  // ==========================
 const getProjectByCity = async (
  city = "faridabad",
   category = "commercial"
) => {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `https://faridabad-backend.onrender.com/api/projects/${city}/${ category}`
    );

    const data = await res.json();

    if (data.success) {
      setProjects(data.data || []);
    } else {
      setProjects([]);
      setError("No projects found");
    }
  } catch (err) {
    console.log(err);
    setProjects([]);
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        getProjectByCity,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);