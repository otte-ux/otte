import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "ESAS HOMES | Premium Real Estate",
  description:
    "Discover exceptional properties with ESAS HOMES. Premium real estate services for discerning buyers.",
  metadataBase: new URL("https://esashomes.com"),
  openGraph: {
    title: "ESAS HOMES | Premium Real Estate",
    description:
      "Discover exceptional properties with ESAS HOMES.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
