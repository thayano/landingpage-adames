import { GenericHero } from "@/components/shared/GenericHero"
import { ContentBlogComponent } from "./contentBlog.component"

export const BlogComponent = () => {
    return (
        <div className='flex flex-col gap-40'>
            <GenericHero/>
            <ContentBlogComponent />
        </div>
    )
}