import { DescriptionBlogComponent } from "./_components/descriptionBlog.component";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const post_id = (await params).id

    return <DescriptionBlogComponent post_id={post_id} />
}