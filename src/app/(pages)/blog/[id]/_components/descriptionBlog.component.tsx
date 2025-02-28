import { GenericHero } from "@/components/shared/GenericHero"
import { DescriptionBlogContentComponent } from "./descriptionBlogContent.component"

interface DescriptionBlogComponentProps {
    post_id: string
}

export const DescriptionBlogComponent = ({ post_id }: DescriptionBlogComponentProps) => {
    return (
        <div className='w-full'>
            <GenericHero />
            <DescriptionBlogContentComponent post_id={post_id} />
        </div>
    )
}
