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
                    className="relative text-orange-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-orange-500 before:origin-center before:h-[1.5px] before:w-0 hover:before:w-[50%] before:bottom-1 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-orange-500 after:origin-center after:h-[1.5px] after:w-0 hover:after:w-[50%] after:bottom-1 after:right-[50%]"
                >
                    Matteo Vanzan
                </a>
            </div>
        </footer>
    )
}