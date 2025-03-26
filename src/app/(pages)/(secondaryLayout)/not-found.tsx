import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
			<div className="space-y-6 max-w-md">
				<h1 className="text-6xl font-bold text-primary">404</h1>
				<h2 className="text-2xl font-semibold">Página não encontrada</h2>
				<p className="text-muted-foreground">Desculpe, a página que você está procurando não existe ou foi movida.</p>
				<Button asChild className="mt-4">
					<Link href="/" className="flex items-center gap-2">
						<ArrowLeft className="h-4 w-4" />
						Voltar para a página inicial
					</Link>
				</Button>
			</div>
		</div>
	)
}

