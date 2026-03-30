import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmut Yusuf Öz — Software Engineer",
  description:
    "Portfolio of Mahmut Yusuf Öz. Building mobile, web, and intelligent systems. Flutter developer, React, AI/ML, autonomous systems.",
  openGraph: {
    title: "Mahmut Yusuf Öz — Systems & Software",
    description: "I ship real products to real users. Mobile, web, and intelligent systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
