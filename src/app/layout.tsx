import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Menu from "@/components/menu";

import { RainbowKit } from "@/components/RainbowKitProvider";
import { NavbarProvider } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ming Open Web HQ",
  description: "Powering the open web with blockchain and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Floating Dock links

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen`}
      >
        <RainbowKit>
          <NavbarProvider />
          {children}
          <div className="fixed bottom-20 left-[50%] translate-x-[-50%] translate-y-[50%] z-10 ">
          </div>
        </RainbowKit>
      </body>
    </html>
  );
}
