'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ImageCardComponent } from "../../ImageCard";
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogContext } from "@/app/(pages)/blog/context/blog.context";
import { news } from "@/app/(pages)/blog/_data/data";

interface InstagramPost {
    id: string;
    caption: string;
    media_url: string;
    media_type: string;
    timestamp: string;
    permalink: string;
}

export const CardBlogComponent = () => {
    const [instagramFeed, setInstagramFeed] = useState<InstagramPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const path = usePathname()
    const { option } = useContext(BlogContext);

    useEffect(() => {
        if (option != 'NEWS') {
            fetchInstagramFeed()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option]);

    async function fetchInstagramFeed() {
        setIsLoading(true);
        try {
            const data = { media_type: option, quantity: validPath() }
            console.log(option, 'oi')
            const response = await axios.post('api/blog', data);
            setInstagramFeed(response.data)
        } catch (err) {
            console.error("Error fetching Instagram feed:", err);
            setError('error fetching Instagram feed');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <div>Carregando Instagram Feed...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    function validPath() {
        if (path.includes('/blog')) {
            return 24
        }
        return 3
    }

    return (
        <div>
            <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20">
                {option != 'NEWS' ?
                    instagramFeed && instagramFeed.length > 0 ? (
                        instagramFeed.map((post) => (
                            <Card key={post.id} className="flex flex-col border-0 gap-6 bg-transparent mb-20">
                                {post.media_type == 'IMAGE' || post.media_type == 'CAROUSEL_ALBUM' ? (
                                    <ImageCardComponent title="" link={`blog/${post.id}`} className="max-h-[440px]">
                                        <Image
                                            src={post.media_url}
                                            unoptimized={true}
                                            alt={post.caption}
                                            width={540} height={500}
                                        />
                                    </ImageCardComponent>
                                ) : (
                                    <video width="500" height="570" controls>
                                        <source src={post.media_url} type="video/mp4" />
                                        <track
                                            src="/path/to/captions.vtt"
                                            kind="subtitles"
                                            srcLang="en"
                                            label="English"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <p className="line-clamp-3 text-muted-foreground font-medium mt-8">{post.caption}</p>
                            </Card>
                        ))
                    ) : (
                        <div>Imagens indisponíveis no momento.</div>
                    ) :
                    news.map((item, index) => (
                        <Link href={`blog/${item.id}`} key={index} className="p-6 hover:bg-gray-100 rounded-2xl">
                            <div >
                                <div className="text-lg font-semibold py-2">{item.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: item.content }}
                                    className="line-clamp-2 text-muted-foreground"></div>
                            </div>
                        </Link>
                    )
                    )}
            </section>
            <div className="flex justify-center">
                {path.includes('/home') && (
                    <Link href="/blog" className="" >
                        <Button className="rounded-full bg-gray-800 px-6">Veja mais</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};