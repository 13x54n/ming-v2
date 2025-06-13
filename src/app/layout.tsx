import type { Metadata } from "next";
import "./globals.css";
// import Menu from "@/components/menu";

import { RainbowKit } from "@/components/RainbowKitProvider";
import { NavbarProvider } from "@/components/Navbar";
import { WalletProvider } from "@/context/WalletContext";

export const metadata: Metadata = {
  title: "Ming Open Web HQ",
  description: "Powering the open web with blockchain and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative h-screen`}
      >
        <RainbowKit>
          <WalletProvider>
            <NavbarProvider />
            {children}
          </WalletProvider>
        </RainbowKit>
      </body>
    </html>
  );
}
