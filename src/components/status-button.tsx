import { RocketIcon } from "../../public/animated-icons/rocket";

export function StatusButton() {
    return (
        <div className="w-auto min-w-[190px] relative">
            <div
                className="absolute inset-0 rounded-full border-2 border-transparent overflow-hidden z-0"
                style={{
                    boxShadow: '0 0 4px #6366f1',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '150%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(0deg)',
                        width: '300%',
                        height: '300%',
                        backgroundImage:
                            'conic-gradient(rgba(0,0,0,0), #6366f1, rgba(0,0,0,0) 25%)',
                        filter: 'blur(30px)',
                        animation: 'rotate 4s linear infinite',
                    }}
                ></div>
            </div>

            <div className="py-2 px-4 items-center justify-center flex flex-row gap-3 rounded-full text-indigo-500 bg-indigo-900/30 hover:bg-indigo-900/40 transition-all duration-200 relative z-10">
                <RocketIcon />
                <p className="line-clamp-1 text-base select-none">Working at GoMind</p>
            </div>
        </div>
    );
}

{/* <span className="flex items-center justify-center bg-indigo-500 min-w-2 min-h-2 rounded-full">
<span className="bg-indigo-500/70 min-w-2 min-h-2 rounded-full animate-ping"></span></span>  */}
{/* Tag <a> e depois <button> com href="#contact" aqui abaixo */}