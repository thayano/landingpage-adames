
'use client'

import { GenericHero } from "@/components/shared/GenericHero"
import { ContentBlogComponent } from "./contentBlog.component"
import { BlogProvider } from "../context/blog.context"
import vaca_retangular from "../../../../../public/blog.jpg"


export const BlogComponent = () => {
    return (
        <div className='flex flex-col gap-40'>
            <BlogProvider>
                <GenericHero image={vaca_retangular} title="Blog"/>
                <ContentBlogComponent />
            </BlogProvider>
        </div>
    )
}