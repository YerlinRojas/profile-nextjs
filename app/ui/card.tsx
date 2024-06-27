"use client"
import { useState, useEffect, Suspense } from "react";
import { PropsWithChildren } from "react";
import { fetchProjects } from "../lib/data";
import { CardSkeleton } from "./skeletons";

interface Project {
    id: string;
    name: string;
    description: string;
}

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Suspense fallback= {<CardSkeleton/>}>
        <div>
            <h2>Proyectos:</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
            {children}
        </div>
        </Suspense>
    );
};
