import { GenericHero } from "@/components/shared/GenericHero"
import { DescriptionBlogContentComponent } from "./descriptionBlogContent.component"
import vaca_retangular from "@/public/blog.jpg"

interface DescriptionBlogComponentProps {
    post_id: string
}

export const DescriptionBlogComponent = ({ post_id }: DescriptionBlogComponentProps) => {
    return (
        <div className='w-full'>
            <GenericHero image={vaca_retangular} title="Blog"/>
            <DescriptionBlogContentComponent post_id={post_id} />
        </div>
    )
}
