"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import ProtectedRoute from "@/components/auth/ProtectedRoute"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { PageProvider, usePageContext } from "@/context/DashboardSidebarContext"

// Import all page components
import { CodeInspectorPage } from "@/components/dashboard/code-inspector"
import { IPFSStoragePage } from "@/components/dashboard/ipfs-storage"
import { DefiBotPage } from "@/components/dashboard/defi-bot"
import { SettingsGeneralPage } from "@/components/dashboard/settings-general"

// Page component mapping
const pageComponents = {
  "code-inspector": CodeInspectorPage,
  "ipfs-storage": IPFSStoragePage,
  "defi-bot": DefiBotPage,
  general: SettingsGeneralPage,
  team: () => <div className="p-8">Team settings coming soon...</div>,
  billing: () => <div className="p-8">Billing settings coming soon...</div>,
  limits: () => <div className="p-8">Limits settings coming soon...</div>,
}

function DashboardContent() {
  const { currentPage, breadcrumb } = usePageContext()
  const PageComponent = pageComponents[currentPage]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{breadcrumb.section}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumb.page}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="ml-auto">
            <ConnectButton
              label="🦊 login"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>
        </header>

        <div className="flex flex-1 flex-col p-4">
          <PageComponent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default function Page() {
  return (
    <ProtectedRoute>
      <PageProvider>
        <DashboardContent />
      </PageProvider>
    </ProtectedRoute>
  )
}
