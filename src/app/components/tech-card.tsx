import Image from "next/image";

interface TechCardProps {
    description: string
    name: string
    color: string
}

export function TechCard({ description, name, color }: TechCardProps) {
    const style = {
        '--border-color': color,
    } as React.CSSProperties;

    return (
        <div style={style} className={`hover:border-[var(--border-color)] min-w-72 max-w-72 max-h-[84px] gap-4 flex flex-row items-center justify-start p-4 bg-neutral-950 rounded-lg border-[1px] border-neutral-700 hover:bg-neutral-700/20 transition-all duration-200`}>
            <Image
                src={"/logos/"+name+".png"}
                alt={name + "-logo"}
                width={50}
                height={50}
                className="rounded-md"
            />
            <div className="flex-1 min-w-0">
              <h3 className='capitalize text-zinc-200 font-bold text-lg'>{name}</h3>
              <p className='text-zinc-400 text-sm truncate'>{description}</p>
            </div>
        </div>
    )
}