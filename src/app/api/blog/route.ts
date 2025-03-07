import axios from "axios";
import { } from "next";

interface InstagramMedia {
    id: string;
    caption?: { text: string };
    media_url: string;
    media_type: string;
    timestamp: string;
    permalink: string;
}

export async function POST(
    req: Request
) {
    const { media_type, quantity } = await req.json()

    if (!quantity || typeof quantity != 'number') {
        return Response.json({ error: 'Parâmetros inválidos.' });
    }

    const media = [media_type]

    if (media_type == 'IMAGE') {
        media.push('CAROUSEL_ALBUM')
    }

    if (media_type == 'VIDEO') {
        media.push('REELS')
    }

    const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token'
    try {
        const response = await axios.get(`${url}=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });

        const { data } = await response.data;

        if (media_type) {
            const filteredData = data.filter((item: InstagramMedia) => media.includes(item.media_type)).slice(0, quantity);
            return Response.json(filteredData);
        }

        const filteredData = data.slice(0, quantity);
        return Response.json(filteredData);


    }
    catch (error) {
        console.error(error);
    }
}
