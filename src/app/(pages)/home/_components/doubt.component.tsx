import Image from "next/image"
import cenario from "../../../../../public/cenario.jpg"
import simgleLogo from "../../../../../public/simple_logo.png"
import { Title } from "@/components/shared/Title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export const DoubtComponent = () =>{
    return (
        <div className="relative h-[1024px] rounded-3xl">
            <Image src={cenario} alt="ovelha" fill style={{ objectFit: 'cover' }} className="rounded-3xl"/>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl"></div>
            <div className="relative flex items-end h-full justify-center py-20 px-20">
                <div className="gap-10 bg-[#222222] w-3/4 rounded-3xl p-20 flex">
                    <div className="w-96">
                        <Image src={simgleLogo} alt="logo"></Image>
                    </div>
                    <div className="gap-y-6 flex flex-col text-white">
                        <Title text="Alguma Duvida?"></Title>
                        <p className="w-4/5">Lorem ipsum dolor sit amet consectetur. Urna hendrerit consectetur libero ac pharetra turpis massa malesuada mollis. Dignissim eu commodo sagittis tempus vitae porcta </p>
                        <div className=" flex gap-6">
                            <Input placeholder="Insira seu email" className="w-96 border-0 bg-[#404040] rounded-full px-8"  />
                            <Button className="rounded-full px-6 opacity-80 hover:opacity-100 font-bold hover:text-white py-4">Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}