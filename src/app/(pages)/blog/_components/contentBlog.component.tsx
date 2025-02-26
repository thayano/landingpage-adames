
import { CardBlogComponent } from "@/components/shared/Pages/Blog"
import { Title } from "@/components/shared/Title"
import { Button } from "@/components/ui/button"

export const ContentBlogComponent = () => {
    return (
        <div className="flex flex-col gap-28">
            <div className="w-full flex justify-center gap-10">
                <div className="max-w-2xl md:max-w-4xl flex gap-2">
                    <Button className="rounded-full px-6">Blog</Button>
                    <Button className="rounded-full px-6">Noticias</Button>
                    <Button className="rounded-full px-6">Ver Todas</Button>
                </div>
            </div>
            <Title text="Destaques" align="center" className="text-4xl" />
            <CardBlogComponent />
        </div>

    )
}