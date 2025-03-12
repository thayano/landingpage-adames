import Image from "next/image"
import cenario from "../../../../../public/cenario.jpg"
import simgleLogo from "../../../../../public/simple_logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export const DoubtComponent = () => {
    return (
        <div className="relative h-screen md:h-[1024px] rounded-3xl overflow-hidden">
            <Image
                src={cenario}
                alt="ovelha"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-3xl"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl"></div>
            <div className="absolute inset-0 flex items-end justify-center py-10 md:py-20 px-5 md:px-20"> 
                <div className="bg-[#222222] w-full md:w-3/4 rounded-3xl p-5 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-5 md:gap-8"> 
                    <div className=" flex justify-center md:justify-start items-center"> 
                        <Image src={simgleLogo} alt="logo" width={200} height={50} className="md:h-44 h-22 w-16 md:min-w-44" /> 
                    </div>
                    <div className="md:px-8"> 
                        <div className="flex-1 flex flex-col text-white gap-4">
                            <h3 className="text-2xl text-start font-semibold">Precisa de mais informações? Fale com a gente! </h3>
                            <p className=" text-sm md:text-base text-justify text-gray-400">
                            Se quer saber mais sobre nossos produtos, soluções ou qualquer outro assunto, estamos à disposição! Nossa equipe terá o prazer em ajudar. Entre em contato pelos nossos canais e vamos conversar!
                            </p>
                            <div className="flex flex-col lg:flex-row gap-3 md:gap-6"> 
                                <Input
                                    placeholder="Insira seu email"
                                    className="w-full border-0 bg-[#404040] rounded-full px-4 md:px-8 py-2 md:py-3"
                                />
                                <Button className="rounded-full px-4 md:px-6 py-2 md:py-3 bg-gray-500 hover:bg-gray-700 font-bold text-white">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}