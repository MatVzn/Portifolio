import { TechCard } from "./tech-card";

const Techs = [
    {
        name: "HTML",
        description: "Marcação",
        color: "#DD561F",
    },
    {
        name: "CSS",
        description: "Estilização",
        color: "#1375B6",
    },
    {
        name: "javascript",
        description: "Linguagem de programação",
        color: "#F4DE1B",
    },
    {
        name: "react",
        description: "Biblioteca",
        color: "#00D8FE",
    },
    {
        name: "tailwind",
        description: "Framework",
        color: "#38BDF9",
    },
    {
        name: "typescript",
        description: "Linguagem de programação",
        color: "#027BCD",
    },
    {
        name: "git",
        description: "Versionamento",
        color: "#F05033"
    },
    {
        name: "github",
        description: "Repositórios",
        color: "#3C74C1"
    },
    {
        name: "notion",
        description: "Organização",
        color: "#FFF"
    },
    {
        name: "figma",
        description: "Design & Inspiração",
        color: "#A159F9"
    }
]

export function TechList() {
    
    return(
        <div className='w-auto flex flex-col gap-4 items-center justify-center sm:grid sm:grid-cols-2 sm:justify-items-center xl:grid-cols-3'>
            {Techs.map((tech) => (
                <TechCard 
                    key={tech.name} 
                    name={tech.name} 
                    description={tech.description} 
                    color={tech.color}
                />
            ))}
        </div>
        
    )
    
}