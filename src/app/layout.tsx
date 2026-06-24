import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celina Da Silva | Elite Sports Photography",
  description:
    "Game-day coverage, athlete portraits, and high-impact sports imagery for teams, leagues, and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
