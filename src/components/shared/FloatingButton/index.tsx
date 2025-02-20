
import Image from "next/image"
import Link from "next/link"
import wpp from '../../../../public/whatsapp.png'

// interface FloatingButtonProps {
//     onClick?: () => void
//   }
  
  export function FloatingButton() {
    return (
      <Link href='https://wa.me/5511999998888?text=Olá, gostaria de saber mais sobre os seus produtos' target="_blank" className="">
        <Image src={wpp} alt="wpp" className="fixed z-50 bottom-2 right-2 size-24 opacity-60 hover:opacity-100 hover:scale-110 transition-transform"></Image>
      </Link>
    )
  }
  
  