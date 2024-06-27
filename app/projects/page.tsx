'use client'
import React, { useState, useEffect } from "react";
import { fetchProjects } from "../lib/data";
import { Projects } from "../lib/definitions"; // Asegúrate de importar el tipo Project

const Page = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const projectsData = await fetchProjects();
              setProjects(projectsData);
              setLoading(false); // Marcamos que la carga ha finalizado
          } catch (error) {
              console.error('Error fetching projects:', error);
              setError('Failed to fetch projects data.');
              setLoading(false); // Marcamos que la carga ha finalizado con error
          }
      };

      fetchData();
  }, []);

  if (loading) {
      return <p>Cargando proyectos...</p>;
  }

  if (error) {
      return <p>Error al cargar proyectos: {error}</p>;
  }

  return (
      <div>
          <h1>Proyectos</h1>
          {projects.map(project => (
              <div key={project.id}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <img src={project.imagen} alt={project.name} />
              </div>
          ))}
      </div>
  );
};

export default Page