import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRACKED - Technical Community",
  description: "Join the ultimate technical community for developers, engineers, and tech enthusiasts. Access expert resources, mentorship, and career growth opportunities.",
  keywords: "technical community, developers, programming, software engineering, mentorship, career growth",
  authors: [{ name: "CRACKED Community" }],
  openGraph: {
    title: "CRACKED - Technical Community",
    description: "Join the ultimate technical community for developers, engineers, and tech enthusiasts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRACKED - Technical Community",
    description: "Join the ultimate technical community for developers, engineers, and tech enthusiasts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
