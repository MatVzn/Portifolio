import Image from "next/image";
import MyPicture from "@/../public/eu.jpg"

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { GithubIcon } from "../../public/github";
import { IconButton } from "./components/icon-button";
import { LinkedinIcon } from "../../public/linkedin";
import { ChevronDown, CircleUserRoundIcon, FolderIcon, HomeIcon, MailIcon } from "lucide-react";
import { Line } from "./components/line";
import { ProjectCard } from "./components/project-card";
import { Title } from "./components/title";
import { TechList } from "./components/tech-list";
import { ProjectList } from "./components/project-list";
import { CvButton } from "./components/cv-button";
import { EmailButton } from "./components/email-button";
import { NavLink } from "./components/nav-link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">

      <div className="hidden overflow-y-hidden lg:block w-60 h-full bg-neutral-950 z-20 border-r-[1px] border-neutral-700 fixed">

        <div className="h-32 border-b-[1px] border-neutral-700 items-start flex flex-col justify-center pl-7">
          <a href="/">
            <h1 className="text-zinc-200 text-xl font-medium hover:text-green-500 transition-all duration-300">Matteo Vanzan</h1>
          </a>
          <p className="text-zinc-400">Desenvoledor Front-End</p>
        </div>

        <nav className="flex flex-col">
          <NavLink href="/">
            <HomeIcon strokeWidth="2px" size={18}/>
            Home
          </NavLink>
          <NavLink href="#about">
            <CircleUserRoundIcon strokeWidth="2px" size={18}/>
            Sobre
          </NavLink>
          <NavLink href="#projects">
            <FolderIcon strokeWidth="2px" size={18}/>
            Projetos
          </NavLink>
          <NavLink href="#contact">
            <MailIcon strokeWidth="2px" size={18}/>
            Contato 
          </NavLink>
        </nav>

      </div>

      <div className="flex flex-col lg:w-[calc(100dvw-240px)] lg:ml-60 overflow-x-hidden">

        <Header/>

        <main className="h-auto flex flex-col px-6 pt-8 md:px-10">
          <div className='min-h-[calc(100dvh-98px)] flex flex-col justify-between lg:min-h-[calc(100dvh-40px)]'>
            <div className='flex flex-col gap-8'>

              <div className="flex flex-row justify-between items-start ">
                <div className='min-w-24'>
                  <Image
                    src={MyPicture}
                    alt="My picture"
                    className="rounded-md"
                    width={96}
                    height={96}
                    priority
                  />
                </div>
                <a href="#contact">
                  <button className="py-2 px-4 items-center justify-center flex flex-row gap-3 rounded-full text-green-500 bg-green-900/30 hover:bg-green-900/50 transition-all duration-200">
                    <span className="flex items-center justify-center bg-green-500 min-w-2 min-h-2 rounded-full">
                      <span className="bg-green-500/70 min-w-2 min-h-2 rounded-full animate-ping"></span>
                    </span> 
                    <p className='text-sm line-clamp-1 sm:text-base'>Open to Work</p>
                  </button>
                </a>
              </div>

              <div className='flex flex-col gap-4'>
                <div>
                  <h1 className='text-3xl font-semibold'>Olá, eu sou o Matteo</h1>
                  <p className='text-xl text-green-500'>Desenvolvedor Front-End</p>
                </div>

                <p className='text-lg text-zinc-400'>
                  Atualmente estou estudando desenvolvimento web com foco front-end, criando interfaces responsivas e otimizadas. Tenho experiência em HTML, CSS, JavaScript, React e frameworks modernos. Sempre buscando melhorar a experiência do usuário.
                </p>

                <div className="flex flex-row gap-2">
                  <CvButton/>
                  <EmailButton/>
                </div>

                <div className='hidden sm:flex flex-row gap-4'>
                  <IconButton href='https://github.com/MatVzn' target="_blank">
                      <GithubIcon/>
                  </IconButton>  
                  <IconButton href='https://www.linkedin.com/in/matvzn/' target="_blank">
                      <LinkedinIcon/>
                  </IconButton>
                </div>
              </div>

            </div>
            <a href="#projects" className='scale-x-125 flex my-6 items-center justify-center'>
              <ChevronDown className='text-zinc-400 hover:text-zinc-200 transition-all duration-200 animate-bounce'/>
            </a>
          </div>
          
          <Line/>

          <div id='projects' className='flex flex-col gap-8 items-center mb-10'>
            <Title>Projetos</Title>
              
            <ProjectList/>
          </div>

          <Line/>
          
          <div className='flex flex-col gap-8 items-center mb-10'>
            <Title>Ferramentas</Title>
            
            <TechList/>
          </div>

          <Line/>
        </main>

        <Title>Entre em contato</Title>

        <Footer/>
      </div>

    </div>
  )
}