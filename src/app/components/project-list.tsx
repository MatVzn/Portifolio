import { ExternalLinkIcon } from "lucide-react";
import { ProjectCard } from "./project-card"

const Projects = [
    {
        name: "Mangá Dōjō",
        description: "Liderando uma equipe de desenvolvedores de um projeto voluntário de tradução e divulgação de mangás. Foco em aprimorar minhas habilidades em React e Tailwind, além do constante desenvolvimento de novas features e manutenção do site.",
        imagePath: "/projects/mangadojo.jpg",
        stack: ["HTML", "ReactJs", "NextJs", "Tailwind"],
        year: "Atualmente",
        pageLink: "https://mangadojo.com.br/",
        githubLink: "none"
    },
    {
        name: "Checklist",
        description: "Projeto focado em aprimorar minhas habilidades em JavaScript. Utilizando principalmente a manipulação do DOM para a criação de tarefas e LocalStorage para o armazenamento do estado da página diretamente no navegador do usuário.",
        imagePath: "/projects/checklist.jpg",
        stack: ["HTML", "CSS", "Javascript"],
        year: "2024",
        pageLink: "https://matvzn.github.io/Checklist/",
        githubLink: "https://github.com/MatVzn/Checklist"
    },
    {
        name: "Menu Online",
        description: "Projeto criado a partir de um curso online. Focado em criar um menu para pedidos online com o redirecionamento automático para o envio do pedido por Whatsapp.",
        imagePath: "/projects/menuonline.jpg",
        stack: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
        year: "2023",
        pageLink: "https://matvzn.github.io/WebMenu/",
        githubLink: "https://github.com/MatVzn/WebMenu"
    }
]

export function ProjectList() {

    const firstColItems = Projects.filter((_, index) => index % 2 === 0);
    const secondColItems = Projects.filter((_, index) => index % 2 !== 0);

    return(
        <>
        <div className='w-auto h-auto flex flex-col gap-8 justify-start items-start md:hidden 2xl:grid-cols-3 2xl:grid'>
            {Projects.map((project) => (
                <ProjectCard 
                    key={project.name}
                    name={project.name}  
                    year={project.year}
                    stack={project.stack}
                    imagePath={project.imagePath}
                    description={project.description}
                    pageLink={project.pageLink}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
        
        <div className='hidden grid-cols-2 gap-8 md:grid 2xl:hidden'>
            <div className="flex flex-col gap-8">
                {firstColItems.map((project) => (
                    <ProjectCard 
                        key={project.name}
                        name={project.name}  
                        year={project.year}
                        stack={project.stack}
                        imagePath={project.imagePath}
                        description={project.description}
                        pageLink={project.pageLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {secondColItems.map((project) => (
                    <ProjectCard 
                        key={project.name}
                        name={project.name}  
                        year={project.year}
                        stack={project.stack}
                        imagePath={project.imagePath}
                        description={project.description}
                        pageLink={project.pageLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>

        <a href="https://github.com/MatVzn?tab=repositories" target="_blank" className="rounded-full hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 border-[1px] border-neutral-700 text-base transition-all duration-300 py-2 px-4">
            <button className="flex flex-row gap-2 items-center justify-center">
                <ExternalLinkIcon className="size-4"/>
                <p className="pt-0.5">Mais projetos</p>
            </button>
        </a>
        </>
    )
}