import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { NavBar } from "@/components/shared/NavBar";
import ErrorBoundary from "@/components/utils/error-boundary";
import { FooterComponent } from "@/components/shared/Footer";
import { FloatingButton } from "@/components/shared/FloatingButton";
import { Toaster } from "@/components/ui/toaster";
import { CommoditiesComponent } from "@/components/shared/Commodities";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Adames",
	description: "...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="ligth"
					enableSystem
					disableTransitionOnChange
				>
					<ErrorBoundary>
						<Toaster />
						<FloatingButton />
						<div className="flex flex-col min-h-screen">
							<div className="hidden md:block">
								<CommoditiesComponent />
							</div>
							<main className="container mx-auto flex-1 px-4 md:px-8 lg:px-4 max-w-screen-2xl md:mt-12">
								<NavBar />
								{children}
							</main>
							<FooterComponent />
						</div>
					</ErrorBoundary>
				</ThemeProvider>
			</body>
		</html>
	);
}
