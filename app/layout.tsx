import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Background from "@/components/Background";

const geistMono = localFont({
  src: "./fonts/GeistMono.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jacquesSerif = localFont({
  src: "./fonts/Jacques.ttf",
  variable: "--font-jacques-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fusion Quiz",
  description: "Common interview questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${jacquesSerif.variable} relative min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute left-0 top-0 -z-10 size-full bg-background/20 backdrop-blur-md dark:bg-background/70 dark:backdrop-blur-xl lg:dark:bg-background/85">
            &nbsp;
          </div>

          <Background />

          <header>
            <Navigation />
          </header>

          <main className="mx-auto my-12 max-w-7xl px-3 font-geistMono md:my-14 md:px-8 lg:mt-32">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
