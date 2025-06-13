import type { Metadata } from "next";
import "./globals.css";
// import Menu from "@/components/menu";

import { RainbowKit } from "@/components/RainbowKitProvider";
import { NavbarProvider } from "@/components/Navbar";

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
        className={`antialiased relative h-screen`}
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
