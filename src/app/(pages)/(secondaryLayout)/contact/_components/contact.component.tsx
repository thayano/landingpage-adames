import { GenericHero } from "@/components/shared/GenericHero"
import { ContentContactComponent } from "./contentContact.component"
import vaca_retangular from "@/public/cattle-5683463_1280.jpg"

export const ContactComponent = () => {
    return (
        <div className="flex flex-col gap-10">
            <GenericHero title="Trabalhe Conosco" image={vaca_retangular}/>
            <ContentContactComponent />
        </div>
    )
}