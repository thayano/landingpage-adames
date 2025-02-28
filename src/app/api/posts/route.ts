import axios from "axios";
import {  } from "next";

export async function POST(
    req: Request
) {
    const { post_id } = await req.json()

    if (!post_id ||  typeof post_id != 'string') {
        return Response.json({ error: 'Parâmetros inválidos.' });
    }

    const url = `https://graph.instagram.com/v22.0/${post_id}?fields=id,media_type,media_url,owner,timestamp,caption&access_token`
    try {
        const response = await axios.get(`${url}=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });

        const data = await response.data;
        return Response.json(data);
    }
    catch (error) {
        console.error(error);
        return Response.json({error: 'error'});
    }
}
