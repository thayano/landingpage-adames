import Image from "next/image"
import logo from "../../../../public/logo_adames.svg"

export const FooterComponent = () => {
    return (
        <footer className="h-96">
            <section>
                <div className="gap-10 grid grid-cols-3">
                    <Image src={logo} alt="logo" width={200}/>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold py-4">Links Uteis</h3>
                        <a href="#" className=" hover:text-gray-300">Política de Privacidade</a>
                        <a href="#" className=" hover:text-gray-300">Termos de Serviço</a>

                    </div>
                    <div className="flex flex-col">
                    <h3 className="text-lg font-bold py-4">Links Uteis</h3>

                        <a href="#" className=" hover:text-gray-300">Política de Privacidade</a>
                        <a href="#" className=" hover:text-gray-300">Termos de Serviço</a>

                    </div>
                </div>
            </section>

        </footer>
    )
} 