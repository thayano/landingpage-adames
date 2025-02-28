'use client'

import { GenericHero } from "@/components/shared/GenericHero"
import { ContentBlogComponent } from "./contentBlog.component"
import { BlogProvider } from "../context/blog.context"

export const BlogComponent = () => {
    return (
        <div className='flex flex-col gap-40'>
            <BlogProvider>
                <GenericHero />
                <ContentBlogComponent />
            </BlogProvider>
        </div>
    )
}