import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import "./globals.css";
import Container from "./_components/container";
import { Intro } from "./_components/intro";

export const metadata: Metadata = {
	title: `Catherine's Portfolio`,
	description: `Obsessed with anything video games and tech, I like to create intuitive and engaging user experiences for users!`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			</head>
			<body>
				<div className="lines" />
				<div className="min-h-screen">
					<main className="main">
						<Container>
							<Intro />
							{children}
						</Container>
					</main>
				</div>
			</body>
		</html>
	);
}
