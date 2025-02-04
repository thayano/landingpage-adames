import { Title } from "../Title"

export const MapsComponent = () => {
    return (
        <div className="flex gap-4">
            <div className="bg-[#222222] w-4/6  rounded-2xl text-gray-200 p-10">
                <Title text="Adames" subTitle="Campo Grande, MS"></Title>
                <p className="text-sm text-gray-400">
                    Endereço: Rua 123, 12345 - Campo Grande, MS
                </p>
            </div>
            <div className="bg-yellow-300 w-2/6 h-20 rounded-2xl">
            </div>
        </div>
    )
}