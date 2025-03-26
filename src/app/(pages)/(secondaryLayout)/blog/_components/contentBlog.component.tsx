
import { CardBlogComponent } from "@/components/shared/Pages/Blog"
import { Title } from "@/components/shared/Title"
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import { BlogContext } from "../context/blog.context";

export const ContentBlogComponent = () => {
    const { updateOption } = useContext(BlogContext);

    function getBlogContext(value: string) {
        updateOption(value);
    }

    return (
        <div className="flex flex-col gap-28">
            <header className="flex justify-center items-center">
                <section className="w-4/6">
                    <Title
                        subTitle="Acompanhe o nosso crescimento e as novidades que nos impulsionam. Explore conteúdos especializados sobre nutrição animal, suplementação e técnicas que garantem resultados eficazes para o seu rebanho."
                        text="Adames Conecta!"
                        align="center"
                        className="text-4xl" />
                </section>
            </header>
            <div className="w-full flex justify-center gap-10">
                <div className="max-w-2xl md:max-w-4xl flex md:gap-8 gap-2">
                    <Button className="rounded-full px-6" onClick={() => getBlogContext('VIDEO')}>Videos</Button>
                    <Button className="rounded-full px-6" onClick={() => getBlogContext('IMAGE')}>Posts</Button>
                    <Button className="rounded-full px-6" onClick={() => getBlogContext('NEWS')}>Noticias</Button>
                </div>
            </div>
            <CardBlogComponent />
        </div>

    )
}