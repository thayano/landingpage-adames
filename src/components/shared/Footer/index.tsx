import Image from "next/image"
import logo from "../../../../public/logo_adames.svg"
import logo_yt from "../../../../public/logo_yt.png"
import logo_insta from "../../../../public/logo_nsta.png"
import logo_linkedin from "../../../../public/logo_linkedIn.png"
import Link from "next/link";

const usefulLinks = [
    { href: '/about', label: 'Quem somos' },
    { href: '/product', label: 'Produtos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Trabalhe conosco' },
    { href: '/contact', label: 'Sobre a Lgpd' },
];

const productsLinks = [
    { href: '/product?prod=equinos', label: 'Equinos' },
    { href: '/product?prod=bezerros', label: 'Bezerros' },
    { href: '/product?prod=boi_corte', label: 'Gado de Corte' },
    { href: '/product?prod=boi_leite', label: 'Gado de Leite' },
];

const links_socials = [
    { href: 'https://www.youtube.com/@adamesnutricaoanimal2477', image: logo_yt },
    { href: 'https://www.instagram.com/adamesnutricaoanimal/', image: logo_insta },
    { href: 'https://www.linkedin.com/company/adames-nutricao-animal/?originalSubdomain=br', image: logo_linkedin },
]
export const FooterComponent = () => {
    return (
        <footer className="mt-40 bg-gray-900 text-gray-400 w-full px-10">
            <div className="container mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
                    <div className="flex flex-col justify-center md:justify-start">
                        <Image src={logo} alt="logo" width={200} height={50} />
                        <p className="text-sm mt-4 w-52">Tradição, inovação e confiança em nutrição animal</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-gray-200">Adames MS</h3>
                            <p className="text-sm hover:text-white">Campo Grande – MS</p>
                            <p className="text-sm hover:text-white">Av. Edgar Lopes de Farias, 87</p>
                            <p className="text-sm hover:text-white">Fone: (67) 3378-2100</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-gray-200">Adames MT</h3>
                            <p className="text-sm hover:text-white">Pontes e Lacerda – MT</p>
                            <p className="text-sm hover:text-white">Rodovia BR 174-B</p>
                            <p className="text-sm hover:text-white">Fone: (65) 3266-1110 / 3266-1957 </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-4 text-gray-200">Links Úteis</h3>
                        {usefulLinks.map((link, index) => (
                            <Link href={link.href} target="_blank" key={index}
                                className="text-sm hover:text-white transition duration-100">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-4 text-gray-200">Produtos</h3>
                        {productsLinks.map((link, index) => (
                            <Link href={link.href} target="_blank" key={index}
                                className="text-sm hover:text-white transition duration-100">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-center grid gird-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800 text-xs py-4 text-muted-foreground">
                    <p>© 2025-2025 Adames. Todos os direitos reservados.</p>
                    <div className="flex gap-6 justify-center">
                        {links_socials.map(link => (
                            <Link href={link.href} target="_blank" key={link.href}>
                                <Image src={link.image} alt="logo" width={15} height={15} />
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-600"><Link href={'https://www.linkedin.com/in/ttdavalo/?originalSubdomain=br'} target="_blank">Developed by <span className="hover:text-white">@thayano</span></Link></p>
                </div>
            </div>
        </footer>
    )
} 