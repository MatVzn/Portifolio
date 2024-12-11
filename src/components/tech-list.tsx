import { TechCard } from "./tech-card";

const Techs = [
    {
        name: "HTML",
        imgName: 'html',
        description: "Marcação",
        color: "#DD561F",
    },
    {
        name: "CSS",
        imgName: 'css',
        description: "Estilização",
        color: "#274FE3",
    },
    {
        name: "javascript",
        imgName: 'javascript',
        description: "Linguagem de programação",
        color: "#F4DE1B",
    },
    {
        name: "react",
        imgName: 'react',
        description: "Biblioteca",
        color: "#00D8FE",
    },
    {
        name:"vue",
        imgName: 'vue',
        description: 'Framework',
        color: "#54BC8B"
    },
    {
        name: "tailwind",
        imgName: 'tailwind',
        description: "Framework",
        color: "#38BDF9",
    },
    {
        name: "typescript",
        imgName: 'typescript',
        description: "Linguagem de programação",
        color: "#027BCD",
    },
    {
        name: "Next.js",
        imgName: 'nextjs',
        description: "Framework",
        color: "#FFF"
    },
    {
        name: "git",
        imgName: 'git',
        description: "Versionamento",
        color: "#F05033"
    },
    {
        name: "github",
        imgName: 'github',
        description: "Repositórios",
        color: "#3C74C1"
    },
    {
        name: "notion",
        imgName: 'notion',
        description: "Organização",
        color: "#FFF"
    },
    {
        name: "figma",
        imgName: 'figma',
        description: "Design & Inspiração",
        color: "#A159F9"
    }
]

export function TechList() {
    
    return(
        <div className='w-auto flex flex-col gap-4 items-center justify-center sm:grid sm:grid-cols-2 sm:justify-items-center xl:grid-cols-3 2xl:grid-cols-4'>
            {Techs.map((tech) => (
                <TechCard 
                    key={tech.name} 
                    name={tech.name} 
                    description={tech.description} 
                    color={tech.color}
                    imgName={tech.imgName}
                />
            ))}
        </div>
        
    )
    
}