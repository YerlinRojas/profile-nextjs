// lib/placeholder-data.ts

interface Project {
    id: string;
    name: string;
    description: string;
    image: string; // Añade la propiedad image si la necesitas
}

const projects: Project[] = [
    {
        id: "1",
        name: "Centro Medico Salud Femenina",
        description: "Este proyecto es un start kit web diseñada para un centro de ginecología y obstetricia. Se proyectan funcionalidades para que los pacientes y médicos puedan registrarse, acceder a servicios de laboratorio, camdoctor, chat y programar consultas.",
        image: "", // Añade la URL de la imagen si es necesario
    },
    {
        id: "2",
        name: "Proyecto 1",
        description: "",
        image: "",
    },
    {
        id: "3",
        name: "Proyecto 2",
        description: "",
        image: "",
    },
    {
        id: "4",
        name: "Proyecto 3",
        description: "",
        image: "",
    },
];

export default projects;
