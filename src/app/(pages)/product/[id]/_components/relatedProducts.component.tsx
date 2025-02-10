import { Title } from "@/components/shared/Title"
import { Card } from "@/components/ui/card"

export const RelatedProductComponent = () => {
    return (
        <div className=''>
            <Card className="bg-[#222222] rounded-3xl  p-10 text-center text-white">
                <Title text="Produtos Relacionadas"></Title>
            </Card>
            <main className="grid grid-cols-3 gap-20 py-10 px-20">
                {/* <CardProductComponent/>
                <CardProductComponent/>
                <CardProductComponent/> */}
            </main>
        </div>
    )
}