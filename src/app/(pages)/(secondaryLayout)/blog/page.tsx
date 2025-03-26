import { Metadata } from "next";
import { BlogComponent } from "./_components/blog.component";

export const metadata: Metadata = {
	title: "Blog - Adames",
	description: "...",
};
export default function Blog() {
    return (
        <BlogComponent />
    );
}