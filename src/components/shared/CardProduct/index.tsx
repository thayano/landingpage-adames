import { Card } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

interface CardProductComponentProps {
    image: StaticImageData,
    title: string,
    description: string,
}

export const CardProductComponent: React.FC<CardProductComponentProps> = ({ image, title, description }) => {
    return (
        <Link href={'#'}>
            <Card className="flex flex-col items-center gap-4 bg-transparent border-0 hover:bg-white md:p-8 p-4">
                <Image src={image} alt='teste' width={250} height={100} />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-justify text-muted-foreground font-medium">{description}</p>
            </Card>
        </Link>
    )
}