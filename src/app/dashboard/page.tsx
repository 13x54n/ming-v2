// app/dashboard/page.tsx
"use client"

import ProtectedRoute from "@/components/auth/ProtectedRoute"

export default function page() {
  return (
    <ProtectedRoute>
      <div className="">
        🚀 Welcome to your dashboard, web3 wanderer.
      </div>
      {/* Put your real dashboard here */}
    </ProtectedRoute>
  )
}
