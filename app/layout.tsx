import type {Metadata} from "next";
import React from "react";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Navbar from "../lib/components/navbar";


export const metadata: Metadata = {
    title: "Alex's portofolio",

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`antialiased text-foreground-main bg-background-main h-screen pt-22 `}
        >
        <ThemeProvider defaultTheme='dark' enableColorScheme={true}>
            <Navbar/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
