import type { Metadata } from "next";
import { Inter, Space_Grotesk, Bangers } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suryansh Sharma — Portfolio",
  description: "Software Engineer & AI Systems Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${bangers.variable}`}>
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
