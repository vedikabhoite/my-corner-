import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vedikabhoite.com";
const siteTitle = "vedika. — a little corner of the internet";
const siteDescription =
  "A place for my thoughts, ideas, little obsessions, things I'm learning, places I've been, and everything in between.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — vedika.",
  },
  description: siteDescription,
  authors: [{ name: "Vedika Bhoite", url: siteUrl }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "vedika.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/vinvietnam.jpeg",
        width: 1200,
        height: 1500,
        alt: "vedika.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#faf7f2",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vedika Bhoite",
  url: siteUrl,
  description: siteDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
