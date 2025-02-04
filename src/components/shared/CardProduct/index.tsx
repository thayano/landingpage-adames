import { Card } from "@/components/ui/card"
import Image from "next/image"
import cavalo from '../../../../public/cavalo.jpg'
import Link from "next/link"


export const CardProductComponent = () => {
    return (
        <Link href={'#'}>
            <Card className="flex flex-col items-center gap-4 bg-transparent border-0 hover:bg-white p-8">
                <Image src={cavalo} alt='teste' width={250} height={100} />
                <h2 className="text-xl font-semibold">Nossos Produtos</h2>
                <p className="text-justify text-muted-foreground font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, quam ut tristique faucibus, erat arcu semper justo, vitae laoreet lectus nunc vel neque. Sed vel elementum nunc, a vulputate ipsum.</p>
            </Card>
        </Link>
    )
}