import Image from "next/image"
import logo from "../../../../public/logo_adames.svg"

const usefulLinks = [
    { href: '/privacy', label: 'Política de Privacidade' },
    { href: '/terms', label: 'Termos de Serviço' },
  ];

export const FooterComponent = () => {
    return (
        <footer className="mt-40 py-20 bg-gray-900 text-white w-full"> 
            <div className="container mx-auto max-w-screen-2xl"> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 "> 
                    <div className="flex justify-center md:justify-start">
                        <Image src={logo} alt="logo" width={200} height={50} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-4">Links Úteis</h3> 
                        {usefulLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="hover:text-gray-300 transition duration-100" 
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-4">Outros Links</h3> 
                        {usefulLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="hover:text-gray-300 transition duration-100" 
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
} 