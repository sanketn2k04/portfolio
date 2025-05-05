import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
// Remove the direct import
// import MeomojiSmile from "../../public/assets/memoji-smile.png"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL('https://sanketnabade.tech/'),
  title: "Sanket Nabade",
  description: "Sanket Nabade Portfolio",
  icons: {
    icon: [
      {
        url: '/assets/memoji-smile.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/assets/memoji-smile.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/assets/memoji-smile.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/assets/memoji-smile.png',
        sizes: '180x180',
        type: 'image/x-icon'
      }
    ]
  },
  openGraph: {
    title: 'Sanket Nabade',
    description: 'Sanket Nabade Portfolio',
    images: [{
      url: '/assets/memoji-smile.png',
      width: 180,
      height: 180,
      alt: 'Sanket Nabade'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/memoji-smile.png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
