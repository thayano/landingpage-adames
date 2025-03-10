import { Card } from "@/components/ui/card"
// import { LuArrowUpRight } from "react-icons/lu"
import { ReactNode } from "react"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import { cn } from "@/lib/utils"

export interface IImageCardComponentProps {
    title: string,
    children: ReactNode,
    link: Url,
    className?: string
}

export const ImageCardComponent: React.FC<IImageCardComponentProps> = ({ title, children, link = '#', className }) => {
    return (
        <Card className={cn('relative flex-grow transition delay-150 duration-300 ease-in-out hover:-translate-y-1              hover:scale-110 overflow-hidden flex-1 ', className)}>
            <Link href={link}>
                {children}

                {title && (
                    <div className="absolute bottom-0 left-0 w-full p-4">
                        <h3 className="text-2xl font-bold uppercase text-white">{title}</h3>
                    </div>
                )}
            </Link>
        </Card>
    )
} 