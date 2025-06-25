import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: "Personal portofolio of Alex P.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased h-dvh lg:h-[calc(100vh-10rem)] min-w-80`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Image
            src={"/IMG/keyboard.jpg"}
            alt="header image of keyboard"
            width={1920}
            height={249}
            className="w-full h-40 object-cover hidden lg:block"
          />
          <div className="flex h-full">
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
