import { Title } from "../Title"
import Image, { StaticImageData } from "next/image"

interface GenericHeroProps {
    image: StaticImageData,
    title: string
}

export const GenericHero = ({ image, title }: GenericHeroProps ) => {
    return (
        <div className='relative h-96'>
            <Image src={image} fill alt='image hero' style={{ objectFit: 'cover' }} />
            <div className="absolute z-10 text-white flex justify-center w-full items-center h-full">
                <Title text={title} />
            </div>
        </div>
    )
}