import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers"
// import Menu from "@/components/menu";

import { RainbowKit } from "@/components/RainbowKitProvider";
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

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  return (
    <html lang="en">
      <body
        className={`antialiased relative h-screen`}
      >
        <RainbowKit>
          <WalletProvider>
            {children}
          </WalletProvider>
        </RainbowKit>
      </body>
    </html>
  );
}
