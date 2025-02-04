import { cn } from "@/lib/utils"
import { ITitleProps } from "@/types/Title"

export const Title: React.FC<ITitleProps> = ({ text, align = 'left', subTitle }) => {
    return (
        <div className={cn(`text-${align} flex flex-col gap-6`)}>
            <h1 className={cn(`font-semibold text-5xl`)}>
                {text}
            </h1>
            {subTitle && <p className="font-semibold text-lg opacity-40">{subTitle}</p>}
        </div>
    )
}