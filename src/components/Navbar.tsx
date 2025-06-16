"use client";
import {
  Navbar,
  NavBody,
  // NavItems,
  MobileNav,
  NavbarLogo,
  // NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/header";
import { useState } from "react";
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';


export function NavbarProvider() {
//   const navItems = [
//     {
//       name: "Features",
//       link: "#features",
//     },
//     {
//       name: "Pricing",
//       link: "#pricing",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ];

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
  <div className="relative w-full border-b border-neutral-200">
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        {/* <NavItems items={navItems} /> */}
          <ConnectButton label="🦊 login" accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }} showBalance={{
            smallScreen: false,
            largeScreen: true,
          }} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))} */}
          <div className="flex w-full flex-col gap-4">
            <ConnectButton label="🦊 login" accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }} showBalance={{
              smallScreen: false,
              largeScreen: true,
            }} />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>

    {/* Navbar */}
  </div>
);
}
