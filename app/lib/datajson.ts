import projectsData from './placeholder-datajs';

interface Project {
    id: string;
    name: string;
    description: string;
}


export async function fetchProjects(): Promise<Project[]> {
    // Simulando una pequeña demora
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Devolver los datos del archivo JSON local
    return projectsData.projects as Project[];
}
