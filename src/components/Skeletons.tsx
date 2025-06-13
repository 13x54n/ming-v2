// components/Skeletons.tsx
import Link from "next/link"
import { IconLink } from "@tabler/icons-react"

export const SkeletonOne = () => (
  <div>
    <p className="text-sm">Appreciated by Voyager, Dynamic, and Herodotus at StarkHack.</p>
    <div className="flex items-center py-2 gap-1">
      <IconLink className="text-neutral-500 dark:text-neutral-300" width={16} height={16} />
      <Link
        href="https://ethglobal.com/showcase/sunya-r55oq"
        target="_blank"
        className="text-sm text-neutral-500 dark:text-neutral-300 underline"
      >
        Project Link
      </Link>
    </div>
  </div>
)

export const SkeletonTwo = () => (
  <div className="flex flex-col items-start">
    <p className="text-sm">Ming is a Starknet Grant Recipient helping you deploy dApps in seconds.</p>
    <div className="flex items-center py-2 gap-1">
      <IconLink className="text-neutral-500 dark:text-neutral-300" width={16} height={16} />
      <Link
        href="https://github.com/MingInc"
        target="_blank"
        className="text-sm text-neutral-500 dark:text-neutral-300 underline"
      >
        GitHub Link
      </Link>
    </div>
  </div>
)

export const SkeletonThree = () => (
  <div className="flex flex-col items-start">
    <p className="text-sm">Store and mint your files as NFTs. Rose makes IPFS feel like home.</p>
    <div className="flex items-center py-2 gap-1">
      <IconLink className="text-neutral-500 dark:text-neutral-300" width={16} height={16} />
      <Link
        href="https://github.com/MingInc"
        target="_blank"
        className="text-sm text-neutral-500 dark:text-neutral-300 underline"
      >
        GitHub Link
      </Link>
    </div>
  </div>
)

export const SkeletonFour = () => (
  <div className="flex flex-col items-start">
    <p className="text-sm">Coming soon… something for the traders out there.</p>
  </div>
)
