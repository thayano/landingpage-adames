import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface FloatingButtonProps {
    onClick?: () => void
  }
  
  export function FloatingButton({ onClick }: FloatingButtonProps) {
    return (
      <Link href='#' target="_blank">
        <Button
          className="fixed z-50 bottom-4 right-4 rounded-full p-0 size-14 shadow-lg hover:shadow-xl transition-shadow bg-[#128c7e]"
          onClick={onClick}
        >
          <MessageCircle style={{ width: '20px', height: '20px' }} />
        </Button>
      </Link>
    )
  }
  
  