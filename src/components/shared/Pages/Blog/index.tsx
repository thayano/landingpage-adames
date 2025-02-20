'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ImageCardComponent } from "../../ImageCard";
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";

interface InstagramPost {
    id: string;
    caption: string;
    media_url: string;
    permalink: string;
}

export const CardBlogComponent = () => {
    const [instagramFeed, setInstagramFeed] = useState<InstagramPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const path = usePathname()
    console.log(path)

    useEffect(() => {
        async function fetchInstagramFeed() {
            setIsLoading(true);
            try {
                const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch Instagram feed");
                }
                const data = await response.json();
                setInstagramFeed(lengthInstagramFeed(data.data))
            } catch (err) {
                console.error("Error fetching Instagram feed:", err);
                setError('error fetching Instagram feed');
            } finally {
                setIsLoading(false);
            }
        }

        fetchInstagramFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <div>Loading Instagram Feed...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    function lengthInstagramFeed(data:[]) {
        if(path != '/blog') {
            return data.slice(0, 3);
        }
        return data
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 mt-20">
            {instagramFeed && instagramFeed.length > 0 ? (
                instagramFeed.map((post) => (
                    <Card key={post.id} className="flex flex-col border-0 h-96 gap-6 bg-transparent">
                        <ImageCardComponent title="" link={post.permalink}>
                            <Image src={post.media_url} alt={post.caption} fill style={{ objectFit: 'cover' }} />
                        </ImageCardComponent>
                        <h3 className="uppercase font-semibold">{post.caption.split(' ')[0]}</h3>
                        <p className="text-justify line-clamp-4 text-muted-foreground font-medium">{post.caption}</p>
                    </Card>
                ))
            ) : (
                <div>No Instagram posts available.</div>
            )}
        </section>
    );
};