import { GenericHero } from "@/components/shared/GenericHero"
import { ContentContactComponent } from "./contentContact.component"

export const ContactComponent = () => {
    return (
        <div className="flex flex-col gap-10">
            <GenericHero />
            <ContentContactComponent />
        </div>
    )
}