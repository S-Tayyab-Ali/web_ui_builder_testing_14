import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DC Comics Store - Digital Comic Books",
  description: "Browse and purchase premium DC Comics digital editions",
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
        <Script src="/error-capture.js" strategy="beforeInteractive" />
        <NextTopLoader color="#DC143C" showSpinner={false} height={3} />
        <Toaster position="top-right" theme="dark" richColors />
        {children}
      </body>
    </html>
  );
}


