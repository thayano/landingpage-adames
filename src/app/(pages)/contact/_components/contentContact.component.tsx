import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContentContactComponent = () => {
    return (
        <div className="grid grid-cols-1 mx-auto max-w-2xl">
            <h3 className="text-lg font-medium">
                Se você se identifica com o perfil da empresa e busca se destacar no mercado de trabalho, venha fazer parte desta equipe.
            </h3>
            <section className="mt-10">
                <Input placeholder="Nome completo" className="px-8 py-6 rounded-full border-0 bg-[#E9E9E9]" />
                <div className="flex gap-4 mt-4">
                    <Input placeholder="Email" className="px-8 py-6 rounded-full border-0 bg-[#E9E9E9] " />
                    <Input placeholder="Telefone" className="px-8 py-6 rounded-full border-0 bg-[#E9E9E9]" />
                </div>
                <div className="flex gap-4 mt-4">
                    <Button className="px-8 py-6 rounded-full font-bold border-0" variant={"outline"}>Escolher arquivo</Button>
                </div>
                <div className="flex mt-4">
                    <Textarea placeholder="Type your message here." className="bg-[#E9E9E9] rounded-2xl p-4" />
                </div>
                <div className="flex mt-4 justify-end">
                    <Button className="px-8 py-6 rounded-full font-bold border-0">Enviar</Button>
                </div>
            </section>
        </div>
    )
}