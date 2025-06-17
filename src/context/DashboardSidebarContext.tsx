"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type PageType = "code-inspector" | "ipfs-storage" | "defi-bot" | "general" | "team" | "billing" | "limits"

interface PageContextType {
    currentPage: PageType
    setCurrentPage: (page: PageType) => void
    breadcrumb: {
        section: string
        page: string
    }
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function usePageContext() {
    const context = useContext(PageContext)
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider")
    }
    return context
}

const pageConfig = {
    "code-inspector": { section: "Models", page: "Code Inspector" },
    "ipfs-storage": { section: "Models", page: "IPFS Storage" },
    "defi-bot": { section: "Models", page: "DeFi Bot" },
    general: { section: "Settings", page: "General" },
    team: { section: "Settings", page: "Team" },
    billing: { section: "Settings", page: "Billing" },
    limits: { section: "Settings", page: "Limits" },
}

export function PageProvider({ children }: { children: ReactNode }) {
    const [currentPage, setCurrentPage] = useState<PageType>("code-inspector")

    const breadcrumb = pageConfig[currentPage]

    return <PageContext.Provider value={{ currentPage, setCurrentPage, breadcrumb }}>{children}</PageContext.Provider>
}
