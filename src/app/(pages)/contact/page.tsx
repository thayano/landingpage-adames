import { Metadata } from "next";
import { ContactComponent } from "./_components/contact.component";

export const metadata: Metadata = {
	title: "Contato - Adames",
	description: "...",
};

export default function Contact() {
    return (
        <ContactComponent />
    );
}