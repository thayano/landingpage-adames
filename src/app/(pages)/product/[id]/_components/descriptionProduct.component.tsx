import Image from "next/image"
import produto from '../../../../../../public/home1.jpg'
import { Badge } from "@/components/ui/badge"
import { Title } from "@/components/shared/Title"

export const DescriptionProductComponent = () => {
    return (
        <div className='mt-40'>
            <main className="grid grid-cols-2 gap-20">
                <div>
                    <Image src={produto} alt="product description"></Image>
                </div>
                <div className="flex justify-center">
                    <article className="flex flex-col gap-4 w-4/5">
                        <div>
                            <Badge variant="outline">Racao</Badge>
                        </div>
                        <Title text="Potencial A Prime Beef Pro@"/>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, quam ut tristique faucibus, velit velit cursus velit, a ultricies lectus velit id turpis. Sed et consectetur neque, vel consectetur diam. Sed nec velit nec felis fermentum vestibulum vitae in velit.</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, quam ut tristique faucibus, velit velit cursus velit, a ultricies lectus velit id turpis. Sed et consectetur neque, vel consectetur diam. Sed nec velit nec felis fermentum vestibulum vitae in velit.</p>
                    </article>

                </div>
            </main>
        </div>
    )
}