import { Title } from "@/components/shared/Title"
import { Card } from "@/components/ui/card"

export const ProductPresentationComponent = () => {
    return (
        <div className="px-32">
            <header className="py-2">
                <Title 
                    text="Nossos Produtos"
                    subTitle="Lorem ipsum dolor sit amet consectetur."    
                    align="center"
                />
            </header>
            <section className="grid grid-cols-3 mt-20 h-[600] gap-6">
                <div className="flex flex-col gap-6">
                    {/* <div className="border-2 flex-grow rounded-2xl">cavalo</div> */}
                    <Card className="flex-grow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        ovelha
                    </Card>
                    <Card className="flex-grow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        ovelha
                    </Card>
                    {/* <div className="border-2 flex-grow rounded-2xl">ovelha</div> */}
                </div>
                <div>
                    <Card className="flex-grow h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        ovelha
                    </Card>
                </div>
                <div className="flex flex-col gap-6">
                    <Card className="flex-grow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        ovelha
                    </Card>
                    <Card className="flex-grow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        ovelha
                    </Card>
                </div>
            </section>
        </div>
    )
} 