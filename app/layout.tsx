import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Askhole",
  description: "Asking all the questions, making all the products.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed w-full z-10 top-4"> 
          <nav className="bg-[#FAFAFA50] backdrop-blur-md container max-w-fit mx-auto px-8 py-3 flex justify-center border border-gray-300 border-2 rounded-full drop-shadow-md">
            <ul className="flex space-x-8"> 
              <li><Link href="/">Home</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/imprint">Imprint</Link></li>
            </ul>
          </nav>
        </header>
        <main className="pt-32">
          {children}
        </main>
        <Footer />
      <Analytics />
      </body>
    </html>
  );
}