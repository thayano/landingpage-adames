import React from 'react'
import { HomeComponent } from './_components/home.component'

export default function Home() {
  let instagramFeed = null;
  let error = null;
  async function getPost() {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=IGAAJSIIrCP1lBZAE1mdFFETFMtY1FoMTB0YVBwSjlURVFXVDk1dGM0VENpNDJIM2xUMENaSzFaS25pMlZASZAzZAkTVc4T19ST0ZAwa0pqSGZAta2NYNGl1U19iNkF0ei1VeHFVTFFtQ2YwNlk5M3I2dHZAyaGgwQzlNNjZAfenZAoVU82OAZDZD`;
      const data = await fetch(url);
      console.log("data", data);
      if (!data.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }
      instagramFeed = await data.json();
      console.log("Instagram feed:", instagramFeed);
    } catch (err: any) {
      console.error("Error fetching Instagram feed:", err.message);
      error = err.message;

    }
  }

  getPost()
  return (
    <HomeComponent />
  )
}
