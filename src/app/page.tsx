import Image from "next/image";
import MyPicture from "@/../public/eu.jpg"

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { IconButton } from "../components/icon-button";
import { LinkedinIcon } from "../../public/linkedin";
import { ChevronDown } from "lucide-react";
import { Line } from "../components/line";
import { Title } from "../components/title";
import { TechList } from "../components/tech-list";
import { ProjectList } from "../components/project-list";
import { CvButton } from "../components/cv-button";
import { EmailButton } from "../components/email-button";
import { NavLink } from "../components/nav-link";
import { StatusButton } from "../components/status-button";
import { GripIcon } from "../../public/animated-icons/grip-icon";
import { UserIcon } from "../../public/animated-icons/user-icon";
import { AtSignIcon } from "../../public/animated-icons/at-sign-icon";
import { GithubIcon } from "../../public/animated-icons/github-icon";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">

      <aside className="hidden overflow-y-hidden lg:block w-60 h-full bg-neutral-950 z-20 border-r-[1px] border-neutral-700 fixed">

        <div className="h-32 border-b-[1px] border-neutral-700 items-start flex flex-col justify-center pl-7">
          <a href="/">
            <h1 className="text-zinc-200 text-xl font-medium hover:text-orange-500 transition-all duration-300">Matteo Vanzan</h1>
          </a>
          <p className="text-zinc-400">Desenvoledor Front-End</p>
        </div>

        <nav className="flex flex-col">
          <NavLink id="aboutIcon" href="#about">
            <UserIcon parentSelector="#aboutIcon"/>
            Sobre
          </NavLink>
          <NavLink id="projectsButton" href="#projects">
            <GripIcon parentSelector="#projectsButton"/>
            Projetos
          </NavLink>
          <NavLink id="contactButton" href="#contact">
            <AtSignIcon parentSelector="#contactButton"/>
            Contato 
          </NavLink>
        </nav>

      </aside>

      <div className="flex flex-col lg:w-[calc(100dvw-240px)] lg:ml-60 overflow-x-hidden">

        <Header/>

        <main className="h-auto flex flex-col px-6 pt-8 md:px-10">
          <div className='min-h-[calc(100dvh-168px)] flex flex-col justify-between lg:min-h-[calc(100dvh-112px)] 2xl:pt-12'>
            <div className='flex flex-col gap-4 sm:gap-8 xl:justify-start'>

              <div className="flex flex-col min-[350px]:flex-row justify-start items-start gap-8 xl:gap-8 2xl:px-12">
                <div className='min-w-24 xl:min-w-80'>
                  <Image
                    src={MyPicture}
                    alt="My picture"
                    className="shadow-md shadow-orange-500/30 rounded-md xl:hidden transition-all duration-500"
                    width={150}
                    height={150}
                    priority
                  />
                  <Image
                    src={MyPicture}
                    alt="My picture"
                    className="shadow-xl shadow-orange-500/30 hidden rounded-md xl:block transition-all duration-500"
                    width={320}
                    height={320}
                    priority
                  />
                </div>
                
                <div className='hidden flex-col gap-4 xl:flex xl:max-w-[35dvw] 2xl:text-left'>
                  <div>
                    <h1 className='text-3xl font-semibold'>Olá, eu sou o Matteo</h1>
                    <p className='text-xl text-orange-500'>Desenvolvedor Front-End</p>
                  </div>

                  <p className='text-lg text-zinc-400'>
                    Atualmente estou estudando desenvolvimento web com foco front-end, criando interfaces responsivas e otimizadas. Tenho experiência em HTML, CSS, JavaScript, React e frameworks modernos. Sempre buscando melhorar a experiência do usuário.
                  </p>

                  <div className="flex flex-row gap-2">
                    <CvButton/>
                    <EmailButton/>
                  </div>

                  <div className='hidden sm:flex flex-row gap-2'>
                    <IconButton id="githubButton1" href='https://github.com/MatVzn' target="_blank">
                      <GithubIcon size={20} parentSelector="#githubButton1"/>
                    </IconButton>  
                    <IconButton href='https://www.linkedin.com/in/matvzn/' target="_blank">
                      <LinkedinIcon/>
                    </IconButton>
                  </div>
                </div>

                <StatusButton/>
              </div>

              <div className='flex flex-col gap-4 xl:hidden'>
                <div>
                  <h1 className='text-3xl font-semibold'>Olá, eu sou o Matteo</h1>
                  <p className='text-xl text-orange-500'>Desenvolvedor Front-End</p>
                </div>

                <p className='text-lg text-zinc-400'>
                  Atualmente estou estudando desenvolvimento web com foco front-end, criando interfaces responsivas e otimizadas. Tenho experiência em HTML, CSS, JavaScript, React e frameworks modernos. Sempre buscando melhorar a experiência do usuário.
                </p>

                <div className="flex flex-row gap-2">
                  <CvButton/>
                  <EmailButton/>
                </div>

                <div className='hidden sm:flex flex-row gap-4'>
                  <IconButton id="githubButton2" href='https://github.com/MatVzn' target="_blank">
                      <GithubIcon size={20} parentSelector="#githubButton2"/>
                  </IconButton>  
                  <IconButton href='https://www.linkedin.com/in/matvzn/' target="_blank">
                      <LinkedinIcon/>
                  </IconButton>
                </div>
              </div>

            </div>
          </div>

          <a href="#projects" className='flex my-6 items-center justify-center xl:scale-150'>
            <ChevronDown className='text-zinc-400 hover:text-zinc-200 transition-all duration-200 animate-bounce'/>
          </a>
          
          <Line/>

          <div id='projects' className='flex flex-col gap-12 items-center mb-10'>
            <Title>Principais Projetos</Title>
              
            <ProjectList/>
          </div>

          <Line/>
          
          <div className='flex flex-col gap-12 items-center mb-10'>
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