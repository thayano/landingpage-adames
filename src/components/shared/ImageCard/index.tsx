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
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 hover:to-black/10"></div> */}
                {/* <div className="flex justify-end">
                        <button className="rounded-full size-8 border bg-transparent flex justify-center items-center opacity-70 hover:opacity-100 hover:bg-slate-100 hover:text-gray-800 transition delay-75 ">
                        <LuArrowUpRight />
                        </button>
                        </div> */}
                {title && (
                    <div className="relative p-6 text-white">
                        <h3 className="text-2xl font-bold uppercase">{title}</h3>
                    </div>
                )}
            </Link>
        </Card>
    )
} 