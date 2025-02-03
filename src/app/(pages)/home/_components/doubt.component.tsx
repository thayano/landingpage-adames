import Image from "next/image"
import cenario from "../../../../../public/cenario.jpg"


export const DoubtComponent = () =>{
    return (
        <div className="relative h-[800px] rounded-2xl">
            <Image src={cenario} alt="ovelha" fill style={{ objectFit: 'cover' }} />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div> */}
            <div className="bg-white inset-0  w-96 h-96 rounded-2xl">oi</div>

        </div>
    )
}