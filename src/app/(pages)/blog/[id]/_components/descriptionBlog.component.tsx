import { GenericHero } from "@/components/shared/GenericHero"
import { DescriptionBlogContentComponent } from "./descriptionBlogContent.component"

export const DescriptionBlogComponent = () => {
    return (
        <div className='w-full'>
           <GenericHero />
           <DescriptionBlogContentComponent />
        </div>
    )
}
