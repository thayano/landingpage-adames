import { FooterComponent } from "@/components/shared/Footer";
import { NavBar } from "@/components/shared/NavBar";
import "../../styles/globals.css";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`antialiased bg-gray-50`}
            >
                <div className="flex flex-col min-h-screen">
                    <div className="hidden md:block">
                    </div>
                    <main className="">
                        <NavBar />
                        {children}
                    </main>
                    <FooterComponent />
                </div>
            </body>
        </html>
    );
}
