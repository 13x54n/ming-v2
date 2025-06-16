import type React from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import ProtectedRoute from "@/components/auth/ProtectedRoute"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </ProtectedRoute>
  )
}
