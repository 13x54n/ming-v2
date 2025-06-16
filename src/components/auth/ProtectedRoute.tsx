// components/auth/ProtectedRoute.tsx
"use client"

import { useAccount } from "wagmi"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isConnected } = useAccount()
    const router = useRouter()

    
    useEffect(() => {
        if (!isConnected) {
            router.push("/") // redirect to homepage or login page
        }
    }, [isConnected, router])
    
    if (!isConnected) {
        return (
            <div className="text-center text-black-400 mt-20 animate-pulse">
                ⏳ Checking wallet connection...
            </div>
        )
    }

    return <>{children}</>
}
