import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import { Navbar } from "@/components";

import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rest Countries",
    template: "Rest Countries Explorer",
  },
  description: "Explore detailed information about countries around the world.",
  keywords: [
    "countries",
    "restcountries",
    "rest countries",
    "country info",
    "explorer country",
  ],
  authors: [
    {
      name: "Darwin Saenz",
      url: "https://github.com/Dssaenz",
    },
  ],
  openGraph: {
    title: "Rest Countries Explorer",
    description:
      "Explore detailed information about countries around the world.",
    url: "https://rest-countries-hhv6.vercel.app",
    siteName: "Rest Countries Explorer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
