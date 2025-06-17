"use client"

import type * as React from "react"
import {
  Bot,
  Building2,
  Code,
  CreditCard,
  Database,
  MaximizeIcon as Limit,
  Settings,
  Settings2,
  TrendingUp,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ming Open Web HQs",
      plan: "Free",
      icon: Building2,
    },
  ],
  navMain: [
    {
      title: "Models",
      url: "#",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Code Inspector",
          url: "#",
          icon: Code,
        },
        {
          title: "IPFS Storage",
          url: "#",
          icon: Database,
        },
        {
          title: "DeFi Bot",
          url: "#",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
          icon: Settings,
        },
        {
          title: "Team",
          url: "#",
          icon: Users,
        },
        {
          title: "Billing",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "Limits",
          url: "#",
          icon: Limit,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
