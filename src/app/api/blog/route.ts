import axios from "axios";
import {  } from "next";

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

    if (!media_type || !quantity || typeof quantity != 'number') {
        return Response.json({ error: 'Parâmetros inválidos.' });
    }

    const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token'
    try {
        const response = await axios.get(`${url}=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });

        const data = await response.data;

        const filteredData = data.data.filter((item: InstagramMedia) => item.media_type == media_type).slice(0, quantity);
        return Response.json(filteredData);
    }
    catch (error) {
        console.error(error);
    }
}
