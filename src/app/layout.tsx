import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import React from "react";

export const metadata = {
    title: "Blog Name",
    description: "A coffee, brunch & travel journal.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    )
}
