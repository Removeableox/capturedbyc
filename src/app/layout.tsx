import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
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
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <form name="contact" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="date" name="event-date" />
          <input type="text" name="sport" />
        </form>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
