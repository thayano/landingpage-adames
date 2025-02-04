import Image from "next/image"
import vaca_retangular from "../../../../public/vaca_retangular.png"
import { Title } from "../Title"

export const GenericHero = () => {
    return (
        <div className='relative h-96'>
            <Image src={vaca_retangular} fill alt='image hero' style={{objectFit: 'cover'}}/>
            <div className="absolute z-10 text-white flex justify-center w-full items-center h-full">
                <Title text='Blog'/>
            </div>
        </div>
    )
}