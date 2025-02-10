import { Title } from "../Title"

export const MapsComponent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#222222] w-full rounded-2xl text-gray-200 md:p-10 p-8">
                <Title text="Adames" subTitle="Campo Grande, MS"></Title>
                <p className="text-sm text-gray-400">
                    Endereço: Rua 123, 12345 - Campo Grande, MS
                </p>
            </div>
            <div className="bg-yellow-300 rounded-2xl">
            </div>
        </div>
    )
}