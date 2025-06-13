"use client"

import { FeatureCard } from "@/components/FeatureCard"
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour } from "@/components/Skeletons"

export default function Page(): React.ReactElement {
  const features = [
    {
      title: "Sunya - Smart Contract Vulnerability Detection",
      description: "Scan your smart contracts every commit. Works with EVM + Starknet.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Ming | Starknet Grant Recipient - dApp Deployment",
      description: "Deploy your dApp in seconds locally in a container.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Rose - NFT ready Cloud Storage",
      description: "Store files, mint NFTs. Built on IPFS + Filecoin with deduplication & ERC721.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Upcoming Project - Smart Crypto Trader BOT",
      description: "AI-powered trading bot that learns market patterns from X and trades on your behalf.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 py-10 max-w-7xl mx-auto px-8">
      <h4 className="text-3xl lg:text-5xl text-center font-medium tracking-tight text-black dark:text-white">
        Building tools for Web3.
      </h4>
      <p className="text-sm lg:text-base max-w-2xl mx-auto text-neutral-500 dark:text-neutral-300 text-center my-4">
        From contract scanners to dApp deployment, NFT cloud storage to AI trader bots — we’re building what Web3 needs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </div>
  )
}
