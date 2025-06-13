'use client';

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconLink } from "@tabler/icons-react";

export default function page() {
  const features = [
    {
      title: "Sunya - Smart Contract Vulnerability Detection",
      description:
        "Every git you push, every commit you make, scan your smart contract for vulnerabilities and give you a report. Designed for EVM Chain, and Starknet.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Ming | Starknet Grant Recipient - dApp Deployment",
      description:
        "Deploy your dApp in seconds on Peers Local PC as a containerized application.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Rose - NFT ready Cloud Storage",
      description:
        "Smart storage solution built on top of IPFS & Filecoin, benchmarking deduplication process, and optionally enabling proof of ownership using ERC721. BUIDL for humans.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Upcoming Project - Smart Crypto Trader BOT",
      description:
        "A smart crypto trader bot that uses AI to analyze market trends from X and make trades on your behalf. The aim is to be capable of support various trading strategies.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Building tools for Web3.
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We developed tools to help you like detect vulnerabilities in your Smart Contract(Sunya), deploy your dApp in seconds (Ming), deploy your cloud files as NFT on blockchain (Rose), and Local IPFS Gateway. We are building tools to help you build on Web3.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div>
      <p className="text-sm ">
        Appreciated by Voyager, Dynamic, and Herodotus at StarkHack.
      </p>
      <div className="relative flex items-center py-2 gap-1">
        <IconLink className="text-sm text-neutral-500 dark:text-neutral-300" width={16} height={16} />
        <Link
          href="https://ethglobal.com/showcase/sunya-r55oq"
          target="_blank"
          aria-label="Sunya - Smart Contract Vulnerability Detection"
          className="text-sm text-neutral-500 dark:text-neutral-300 font-normal underline"
        >
          Project Link</Link>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="h-30 md:h-30  flex3flex-col items-start relative bg-transparent dark:bg-transparent">
      <p className="text-sm ">
        Rose is a NFT ready cloud storage, you can store your files and mint them as NFT on blockchain.
      </p>
      <div className="relative flex items-center py-2 gap-1">
        <IconLink className="text-sm text-neutral-500 dark:text-neutral-300" width={16} height={16} />
        <Link
          href="https://github.com/MingInc"
          target="_blank"
          aria-label="Rose - NFT ready Cloud Storage"
          className="text-sm text-neutral-500 dark:text-neutral-300 font-normal underline"
        >
          GitHub Link</Link>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {

  return (
    <div className="h-30 md:h-30  flex flex-col items-start relative bg-transparent dark:bg-transparent">
      <p className="text-sm ">
        Ming is a Starknet Grant Recipient, we are building tools to help you deploy your dApp in seconds.
      </p>
      <div className="relative flex items-center py-2 gap-1">
        <IconLink className="text-sm text-neutral-500 dark:text-neutral-300" width={16} height={16} />
        <Link
          href="https://github.com/MingInc"
          target="_blank"
          aria-label="Ming | Starknet Grant Recipient - dApp Deployment"
          className="text-sm text-neutral-500 dark:text-neutral-300 font-normal underline"
        >
          GitHub Link</Link>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-30 md:h-30  flex flex-col items-start relative bg-transparent dark:bg-transparent">
      <p className="text-sm ">
        Coming Soon...
      </p>
    </div>
  );
};


