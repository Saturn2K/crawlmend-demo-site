import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Example Studio — web design for small creative studios",
  description: "Example Studio builds fixed-scope websites for small creative studios.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/" className="brand">Example Studio</Link>
          <nav>
            <Link href="/services/web-design">Web design</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© Example Studio. A demo site for Crawlmend: not a real business.</footer>
      </body>
    </html>
  );
}
