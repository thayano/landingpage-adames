"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (

		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
			<div className="space-y-6 max-w-md">
				<div className="flex justify-center">
					<AlertTriangle className="h-16 w-16 text-destructive" />
				</div>
				<h1 className="text-3xl font-bold">Algo deu errado!</h1>
				<p className="text-muted-foreground">Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada.</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button onClick={() => reset()} className="flex items-center gap-2">
						<RefreshCw className="h-4 w-4" />
						Tentar novamente
					</Button>
					<Button variant="outline" asChild>
						<Link href="/" className="flex items-center gap-2">
							<ArrowLeft className="h-4 w-4" />
							Voltar para a página inicial
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

