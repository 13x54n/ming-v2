"use client"

import React, { useEffect } from "react"
import { useAccount } from "wagmi"
import { useRouter } from "next/navigation"
import { useWalletDispatch } from "@/context/WalletContext"
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour } from "@/components/page/Skeletons"
import { FeatureCard } from "@/components/page/FeatureCard"
import { PointerHighlight } from "@/components/ui/pointer-highlight"

export default function Page(): React.ReactElement {
  const dispatch = useWalletDispatch()
  const { isConnected, address } = useAccount()
  const router = useRouter() // ✅ Next.js router for redirection

  useEffect(() => {
    const mockBalance = 1.2345

    if (isConnected) {
      dispatch({
        type: "connect",
        address: address ?? "Failed to get address",
        balance: mockBalance,
      })

      // ⏩ Redirect to /dashboard
      router.push("/dashboard")
    } else {
      dispatch({ type: "disconnect" })
    }
  }, [isConnected, address, dispatch, router]) // ✅ include router in deps

  const features = [
    {
      title: "🐛 Sunya - Smart Contract Vulnerability Detection",
      description: "Scan your smart contracts every commit. Works with EVM + Starknet.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "☁️ Ming | Starknet Grant Recipient - dApp Deployment",
      description: "Deploy your dApp in seconds locally in a container.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "🗂️ Rose - NFT ready Cloud Storage",
      description: "Store files, mint NFTs. Built on IPFS + Filecoin with deduplication & ERC721.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "🦄 Upcoming Project - Smart Crypto Trader BOT",
      description: "AI-powered trading bot that learns market patterns from X and trades on your behalf.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 max-w-8xl md:max-w-7xl mx-auto">
      <h4 className="text-3xl lg:text-5xl text-center font-medium tracking-tight text-black dark:text-white mt-4">
        Building tools for Web3.
      </h4>

      <div className="text-sm lg:text-base max-w-2xl mx-auto text-neutral-500 dark:text-neutral-300 text-center my-4">
        From contract scanners to dApp deployment, NFT cloud storage to AI trader bots —{" "}
        <PointerHighlight
          rectangleClassName="bg-green-200 dark:bg-green-700 border-green-300 dark:border-green-600 leading-loose"
          pointerClassName="text-green-500 h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          <span className="relative z-10">we’re building what Web3 needs.</span>
        </PointerHighlight>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 xl:border rounded-md dark:border-neutral-800">
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <FeatureCard {...feature} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
