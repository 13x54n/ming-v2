import type * as React from "react"
import { Code, Rocket, Settings, Search, Shield, Globe, Coins, Users, Key, Bell, FileText } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Separator } from "../ui/separator"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Code",
      url: "#",
      icon: Code,
      items: [
        {
          title: "Code Inspector",
          url: "#",
          icon: Search,
          isActive: true,
        },
        {
          title: "Audit",
          url: "#",
          icon: Shield,
        },
      ],
    },
    {
      title: "Deploy",
      url: "#",
      icon: Rocket,
      items: [
        {
          title: "Deploy dApp",
          url: "#",
          icon: Globe,
        },
        {
          title: "Deploy Tokens",
          url: "#",
          icon: Coins,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "User Management",
          url: "#",
          icon: Users,
        },
        {
          title: "API Keys",
          url: "#",
          icon: Key,
        },
        {
          title: "Notifications",
          url: "#",
          icon: Bell,
        },
        {
          title: "Logs",
          url: "#",
          icon: FileText,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-row justify-center py-4 items-center ">
        <Image
          src="https://avatars.githubusercontent.com/u/179059125?s=48&v=4"
          alt="Ming Open Web HQ Logo"
          width={30}
          height={30}
          className="rounded-sm"
        />
        <h1 className="text-sm font-bold">Ming Open Web HQ</h1>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild isActive={subItem.isActive}>
                      <a href={subItem.url} className="flex items-center gap-2">
                        <subItem.icon className="h-4 w-4" />
                        <span>{subItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <Separator className="mt-2"/>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
