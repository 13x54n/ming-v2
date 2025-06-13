// components/FeatureCard.tsx
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  skeleton: ReactElement
  className?: string
}

export const FeatureCard = ({ title, description, skeleton, className }: FeatureCardProps): ReactElement => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
      <p className="text-xl md:text-2xl tracking-tight text-black dark:text-white">{title}</p>
      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 font-normal my-2 max-w-sm">
        {description}
      </p>
      <div className="w-full h-full">{skeleton}</div>
    </div>
  )
}
