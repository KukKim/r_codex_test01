import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Who is DK?",
  description: "Personal site for DK"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <nav className="menu" aria-label="Main navigation">
              <Link href="/">Who is DK?</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contacts">Contacts</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
