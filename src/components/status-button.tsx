import { BriefcaseBusiness, BriefcaseIcon } from "lucide-react";

export function StatusButton() {
    return (
        <div className="w-auto min-w-[170px] sm:min-w-[183px] relative">
            <div
                className="absolute inset-0 rounded-full border-2 border-transparent overflow-hidden z-0"
                style={{
                    boxShadow: '0 0 4px #E37D00FF',
                }}
            >
                <div
                    className="absolute top-[150%] left-[50%] w-[300%] h-[300%] blur-[30px]"
                    style={{
                        transform: 'translate(-50%, -50%) rotate(0deg)',
                        backgroundImage:
                            'conic-gradient(rgba(0,0,0,0), #FFB656FF, rgba(0,0,0,0) 25%)',
                        animation: 'rotate 4s linear infinite',
                    }}
                ></div>
            </div>

            <a href="https://www.autou.io/" target="_blank" className="py-2 px-4 items-center justify-center flex flex-row gap-3 rounded-full text-orange-500 bg-orange-900/30 hover:bg-orange-900/40 transition-all duration-200 relative z-0">
               <BriefcaseBusiness className="size-4 sm:size-5"/>
               <button className="pt-0.5 line-clamp-1 text-sm sm:text-base select-none">
                  Working at AutoU
               </button>
            </a>
            {/* <a href="#contact" className="py-2 px-4 items-center justify-center flex flex-row gap-3 rounded-full text-green-500 bg-green-900/30 hover:bg-green-900/40 transition-all duration-200 relative z-0">
                <span className="flex items-center justify-center bg-green-500 min-w-2 min-h-2 rounded-full">
                    <span className="bg-green-500/70 min-w-2 min-h-2 rounded-full animate-ping"></span>
                </span>  
                <button className="line-clamp-1 text-base select-none">
                    Open to work
                </button>
            </a> */}
        </div>
    );
}