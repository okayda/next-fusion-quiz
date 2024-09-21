import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jacquesSerif = localFont({
  src: "./fonts/Jacques.ttf",
  variable: "--font-jacques-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gemini AI Quiz",
  description: "Common interview questions with the help of Generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jacquesSerif.variable} relative min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navigation />
          </header>

          <main className="mx-auto max-w-7xl px-3 md:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
