"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import { usePageContext } from "@/context/DashboardSidebarContext"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const pageMapping = {
  "Code Inspector": "code-inspector",
  "IPFS Storage": "ipfs-storage",
  "DeFi Bot": "defi-bot",
  General: "general",
  Team: "team",
  Billing: "billing",
  Limits: "limits",
} as const

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
}) {
  const { currentPage, setCurrentPage } = usePageContext()

  const handlePageChange = (pageTitle: string) => {
    const pageKey = pageMapping[pageTitle as keyof typeof pageMapping]
    if (pageKey) {
      setCurrentPage(pageKey)
    }
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        onClick={() => handlePageChange(subItem.title)}
                        isActive={currentPage === pageMapping[subItem.title as keyof typeof pageMapping]}
                      >
                        {subItem.icon && <subItem.icon />}
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
