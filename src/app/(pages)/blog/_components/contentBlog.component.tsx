import { CardBlogComponent } from "@/components/shared/Pages/Blog"
import { Button } from "@/components/ui/button"

export const ContentBlogComponent = () => {
    return (
        <div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-2 mb-20">
                <Button className="rounded-full px-6">Blog</Button>
                <Button className="rounded-full px-6">Noticias</Button>
                <Button className="rounded-full px-6">Ver Todas</Button>
            </div>
            <CardBlogComponent/>
            <CardBlogComponent/>
        </div>

    )
}