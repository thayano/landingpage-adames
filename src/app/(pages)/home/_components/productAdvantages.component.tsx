import { Title } from "@/components/shared/Title"
import { Card } from "@/components/ui/card"

export const ProductAdvantagesComponent = () => {
    return (
        <div>
            <Title 
                text="Vantagens da empresa ou produtos"
                subTitle="Lorem ipsum dolor sit amet consectetur. Urna hendrerit consectetur libero ac pharetra "
                align="center"
                className="text-4xl"
            />
            <section className="mt-20">
                <div className="gap-28 justify-center text-center grid grid-cols-1 md:grid-cols-4">
                    <Card className="flex flex-col gap-4 items-center border-0">
                        <div className="size-20 rounded-full bg-slate-500"></div>
                        <div className="font-bold uppercase">titulo</div>
                        <div className="w-40">Lorem ipsum dolor sit amet consectetur</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0">
                        <div className="size-20 rounded-full bg-slate-500"></div>
                        <div className="font-bold uppercase">titulo</div>
                        <div className="w-40">Lorem ipsum dolor sit amet consectetur</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0">
                        <div className="size-20 rounded-full bg-slate-500"></div>
                        <div className="font-bold uppercase">titulo</div>
                        <div className="w-40">Lorem ipsum dolor sit amet consectetur</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0">
                        <div className="size-20 rounded-full bg-slate-500"></div>
                        <div className="font-bold uppercase">titulo</div>
                        <div className="w-40">Lorem ipsum dolor sit amet consectetur</div>
                    </Card>
                </div>
            </section>
        </div>
    )
}