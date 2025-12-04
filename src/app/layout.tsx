import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "antd/dist/reset.css";
import "./globals.css";
import "react-phone-input-2/lib/material.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ConfigProvider } from "antd";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Litoflex",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="/cool-font/stylesheet.css"
				/>
			</head>
			<body
				className={`${inter.className} antialiased flex flex-col`}
			>
				<ConfigProvider
					theme={{
						token: {
							fontFamily: "Euclid Square",
						},
					}}
				>
					<Header />
					<div className="page flex-1 flex flex-col">
						{children}
					</div>
					<Footer />
				</ConfigProvider>
			</body>
		</html>
	);
}
