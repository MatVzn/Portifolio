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
                <span className="text-green-500">Matteo Vanzan</span>
            </div>
        </footer>
    )
}