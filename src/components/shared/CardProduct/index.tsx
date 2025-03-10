'use client'

import { Card } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

interface CardProductComponentProps {
    image: StaticImageData,
    title: string,
    description: string,
    link: string 
}

export const CardProductComponent: React.FC<CardProductComponentProps> = ({ image, title, description, link }) => {
    return (
        <Link href={link} className="bg-gray-100 rounded-3xl hover:bg-white transition-all">
            <Card className="flex flex-col items-center gap-4 bg-transparent border-0 md:p-8 px-4">
                <Image src={image} alt='teste' width={250} height={100} />
                <h2 className="text-xl font-semibold text-start">{title}</h2>
                <p className="text-justify text-muted-foreground font-medium">{description}</p>
            </Card>
        </Link>
    )
}