// components/FeatureCard.tsx
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"
import { FollowerPointerCard } from "../ui/following-pointer"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  skeleton: ReactElement
  className?: string
}

const TitleComponent = ({
  title,
}: {
  title: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src="https://avatars.githubusercontent.com/u/179059125?s=48&v=4"
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

export const FeatureCard = ({ title, description, skeleton, className }: FeatureCardProps): ReactElement => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
      <FollowerPointerCard
        title={
          <TitleComponent
            title={title}
          />
        }
      >
      <p className="text-xl md:text-2xl tracking-tight text-black dark:text-white">{title}</p>
      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 font-normal my-2 max-w-sm">
        {description}
      </p>
      <div className="w-full h-full">{skeleton}</div>
      </FollowerPointerCard>
    </div>
  )
}
