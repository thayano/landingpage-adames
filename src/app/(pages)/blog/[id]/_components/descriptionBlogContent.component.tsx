'use client'

import { Title } from "@/components/shared/Title"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import insta_logo_color from '../../../../../../public/insta_logo_color.png'

interface DescriptionBlogContentComponentProps {
    post_id: string
}

interface MediaItem {
    id: string;
    media_type: "IMAGE";
    media_url: string;
    caption: string
    timestamp: string
}

export const DescriptionBlogContentComponent = ({ post_id }: DescriptionBlogContentComponentProps) => {
    const [content, setContent] = useState<MediaItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPostContent = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ post_id: post_id }),
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const result = await response.json();
                setContent(result);
                console.log('Post obtido com sucesso:', result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro inesperado");
                }
                console.error('Erro ao obter o post:', err);
            } finally {
                setLoading(false);
            }
        };

        getPostContent();
    }, [post_id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    function setTitle(text: string | null) {
        if (!text) return ''
        return text.split(' ').slice(0, 4).join(' ') + '.'
    }

    function dateFormat(date: string) {
        const data = new Date(date);
        return data.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <div className="grid grid-cols-1 mx-auto md:w-3/4 gap-6 md:mt-40 mt-20">
            {content && (
                <>
                    <Title text={setTitle(content.caption)} className="md:text-4xl text-lg"/>
                    <p className="mt-10">{content.caption}</p>
                    <div className="flex items-center justify-between pt-14">
                        <div className="text-sm text-muted-foreground">
                            Atualizado: <span className="">{dateFormat(content.timestamp)}</span>
                        </div>
                        <div>
                            <Link href={content.media_url}>
                                <Image src={insta_logo_color} alt="insta logo" width={20} height={20} quality={100}/>
                            </Link>
                        </div>
                    </div>
                    <div className="border-b"></div>
                    <section className="flex flex-col items-center">
                        <Image
                            src={content.media_url}
                            unoptimized={true}
                            width={800}
                            height={800}
                            alt="image"
                            className="rounded-2xl py-10"
                        />

                    </section>
                </>
            )}
        </div>
    )
}
