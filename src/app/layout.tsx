import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esel und Esel",
  description: "I ",
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
        <footer className="container mx-auto p-4 text-center text-sm text-gray-500">
        <p>
          Created using Next.js, React.js, TypeScript, and Tailwind CSS. Repository hosted on <a href="https://github.com/yourusername/yourrepo" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>. Content managed with <a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" className="underline">Obsidian</a>.
        </p>
      </footer>
      </body>
    </html>
  );
}