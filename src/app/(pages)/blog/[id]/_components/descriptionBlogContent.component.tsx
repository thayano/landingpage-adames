'use client'

import { Title } from "@/components/shared/Title"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import insta_logo_color from '../../../../../../public/insta_logo_color.png'
import { X } from "lucide-react"

interface DescriptionBlogContentComponentProps {
    post_id: string
}

interface MediaItem {
    id: string;
    media_type: "IMAGE";
    media_url: string;
    caption: string
    timestamp: string
    permalink: string
    children: childrenMediaData[]
}

interface childrenMediaData {
    id: number
    media_type: string
    media_url: string
}

export const DescriptionBlogContentComponent = ({ post_id }: DescriptionBlogContentComponentProps) => {
    const [content, setContent] = useState<MediaItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [imageLoading, setImageLoading] = useState(true)

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

    const openLightbox = (image: string) => {
        setImageLoading(true)
        setSelectedImage(image)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
    }

    return (
        <div className="grid grid-cols-1 mx-auto md:w-3/4 gap-6 md:mt-40 mt-20">
            {content && (
                <>
                    <Title text={setTitle(content.caption)} className="md:text-4xl text-lg" />
                    <p className="mt-10">{content.caption}</p>
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
                    <div className="flex items-center justify-between md:py-4 mt-2">
                        <div className="text-xs text-muted-foreground">
                            Atualizado: <span className="">{dateFormat(content.timestamp)}</span>
                        </div>
                        <div>
                            <Link href={content.permalink} target="_blank">
                                <Image src={insta_logo_color} alt="insta logo" width={20} height={20} quality={100} />
                            </Link>
                        </div>
                    </div>
                    <div className="border-b"></div>
                    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                        {content.children.length > 0 ? content.children.map((filho, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => openLightbox(filho.media_url)}
                            >
                                <Image
                                    src={filho.media_url}
                                    unoptimized={true}
                                    width={400}
                                    height={400}
                                    alt="image"
                                    className=""
                                />
                            </div>
                        )) : ''}

                        {selectedImage && (
                            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                                <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" onClick={closeLightbox}>
                                    <X size={32} />
                                    <span className="sr-only">Close</span>
                                </button>
                                <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
                                    {imageLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                                        </div>
                                    )}
                                    <Image
                                        src={selectedImage || "/placeholder.svg"}
                                        alt={selectedImage}
                                        fill
                                        className="object-contain"
                                        onLoadingComplete={() => setImageLoading(false)}
                                        onLoad={() => setImageLoading(false)}
                                        sizes="100vw"
                                    />
                                </div>
                            </div>
                        )}
                    </section>
                </>
            )}
        </div>
    )
}


