import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Shapeshifter",
  description:
    "Tailor your resume to any job description with AI-powered bullet rewriting, match scoring, and gap analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-4 text-center text-xs text-muted-foreground">
            <p>
              Resume Shapeshifter &mdash; Tailor your resume truthfully.
              Always verify generated content before use.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}