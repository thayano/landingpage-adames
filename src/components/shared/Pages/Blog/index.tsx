'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ImageCardComponent } from "../../ImageCard";
import { useEffect, useState } from 'react';
import axios from "axios";
import { usePathname } from "next/navigation";

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

    useEffect(() => {
        async function fetchInstagramFeed() {
            setIsLoading(true);
            try {
                const response = await axios.post('api/blog', { media_type: 'IMAGE', quantity: validPath() });
                setInstagramFeed(response.data)
            } catch (err) {
                console.error("Error fetching Instagram feed:", err);
                setError('error fetching Instagram feed');
            } finally {
                setIsLoading(false);
            }
        }

        fetchInstagramFeed();

    }, []);

    if (isLoading) {
        return <div>Carregando Instagram Feed...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    function validPath() {
        if (path.includes('/blog')) {
            return 9
        }
        return 3
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20">
            {instagramFeed && instagramFeed.length > 0 ? (
                instagramFeed.map((post) => (
                    <Card key={post.id} className="flex flex-col border-0 gap-6 bg-transparent h-[540px]">
                        <ImageCardComponent title="" link={post.permalink} >
                            <Image src={post.media_url} alt={post.caption} width={540} height={400} style={{ objectFit: 'contain' }} />
                        </ImageCardComponent>
                        <h3 className="uppercase font-semibold">{post.caption.split(' ').slice(0, 4).join(' ')}</h3>
                        <p className="text-justify line-clamp-3 text-muted-foreground font-medium">{post.caption}</p>
                    </Card>
                ))
            ) : (
                <div>Imagens indisponíveis no momento.</div>
            )}
        </section>
    );
};