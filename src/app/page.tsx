"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MyPicture from "@/../public/eu.png";

import Beams from "@/components/ui/Beams";
import SideRays from "@/components/ui/SideRays";
import TextType from "@/components/ui/TextType";
import ShinyText from "@/components/ui/ShinyText";
import { cn } from "cn";
import {
  ArrowDownIcon,
} from "lucide-react";
import ContactButton from "@/components/ContactButton";
import { DownloadIcon, type DownloadIconHandle } from "@/components/ui/DownloadIcon";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { buttonVariants } from "@/components/ui/Button";

const skills = ["React.js", "TypeScript", "CSS", "Tailwind", "Vue"];

export default function Home() {
  const cvIconRef = useRef<DownloadIconHandle>(null);

  return (
    <main className="relative min-h-dvh w-full overflow-x-hidden bg-black text-white">

      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#aaaaaa"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          beamColor="#000000"
          backgroundColor="#000000"
        />
      </div>

      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={1}
          origin="bottom-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1}
          opacity={1}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-6 py-10 sm:px-8">
        <h1 className="sr-only">
          Matteo Vanzan — Desenvolvedor Front-End
        </h1>

        <section className="flex flex-1 flex-col justify-center py-12">
          <Image
            src={MyPicture}
            alt="Matteo Vanzan"
            width={120}
            height={120}
            priority
            className="size-20 rounded-full object-cover object-top transition-transform duration-300 hover:scale-105 sm:size-28"
          />

          <TextType
            text={["Bem vindo ao meu portfólio!", "Matteo Vanzan"]}
            typingSpeed={50}
            pauseDuration={1000}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            loop={false}
            className="mt-6 text-xl font-normal sm:mt-8 sm:text-2xl"
          />

          <div className="mt-4 flex flex-col gap-1 text-base text-zinc-300 sm:text-lg">
            <p>
              Desenvolvedor Front-End que transforma ideias em experiências visuais.
            </p>
            <p>
              Foco em design, experiência do usuário e na construção de produtos digitais, 
              sempre buscando equilíbrio entre estética e funcionalidade.
            </p>
            <p>
              Trabalhando atualmente na&nbsp;
              <Link
                href="https://www.sesatech.com.br"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <ShinyText
                  text="Sesatech ⚡"
                  speed={2.3}
                  delay={0.5}
                  color="#7CDB86"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </Link>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <h2 className="text-lg font-normal sm:text-xl">
              Principais habilidades
            </h2>
            <ul className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1 text-base text-zinc-400 sm:text-lg">
              {skills.map((skill, i) => (
                <li key={skill} className="flex items-center gap-2">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="inline-block size-1 rounded-full bg-zinc-500"
                    />
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ContactButton />

            <Link
              href="/curriculo.pdf"
              download
              onMouseEnter={() => cvIconRef.current?.startAnimation()}
              onMouseLeave={() => cvIconRef.current?.stopAnimation()}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "cursor-pointer pr-4 gap-2 rounded-full hover:bg-zinc-900 hover:text-white"
              )}
            >
              Baixar currículo
              <DownloadIcon ref={cvIconRef} size={20} />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="https://www.linkedin.com/in/matvzn/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Matteo Vanzan"
                className={cn(
                  buttonVariants({ variant: "default", size: "icon-lg" }),
                  "size-11 cursor-pointer rounded-full border border-white hover:bg-white hover:text-black"
                )}
              >
                <LinkedinIcon size={18} />
              </Link>

              <Link
                href="https://github.com/MatVzn"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Matteo Vanzan"
                className={cn(
                  buttonVariants({ variant: "default", size: "icon-lg" }),
                  "size-11 cursor-pointer rounded-full border border-white hover:bg-white hover:text-black"
                )}
              >
                <GithubIcon size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* <Link
          href="#projetos"
          className="mx-auto flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
        >
          Ver meus projetos
          <ArrowDownIcon
            size={16}
            className="animate-bounce motion-reduce:animate-none"
          />
        </Link> */}
      </div>
    </main>
  );
}