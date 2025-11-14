// src/app/layout.tsx
import "@/styles/globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Playfair_Display, Inter } from "next/font/google"
import React from "react";

// Import fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: "700", variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
    title: "Blog Name",
    description: "A coffee, brunch & travel journal.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-sans flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
