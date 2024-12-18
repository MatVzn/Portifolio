import { GithubIcon } from "../../public/animated-icons/github-icon";
import { LinkedinIcon } from "../../public/linkedin";
import { CvButton } from "./cv-button";
import { EmailButton } from "./email-button";
import { IconButton } from "./icon-button";

export function Footer() {
    return(
        <footer id="contact" className="mt-10 flex flex-col items-center justify-center pb-10">
            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                <div className='flex flex-row gap-2'>
                    <IconButton id="githubButton3" href='https://github.com/MatVzn' target="_blank">
                        <GithubIcon size={20} parentSelector="#githubButton3"/>
                    </IconButton>  
                    <IconButton href='https://www.linkedin.com/in/matvzn/' target="_blank">
                        <LinkedinIcon/>
                    </IconButton>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center sm:flex-row">
                    <CvButton/>
                    <EmailButton/>
                </div>
            </div>
            <div className="mt-6 flex flex-row text-zinc-200">
                <p>Feito por&nbsp;</p>
                <a 
                    href="https://github.com/MatVzn" 
                    className="text-green-500 relative after:content-[''] after:absolute after:w-0 after:h-[1.5px] after:bg-green-500 after:bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Matteo Vanzan</a>
            </div>
        </footer>
    )
}