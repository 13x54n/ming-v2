"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Activity } from "lucide-react"

export function DefiBotPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">DeFi Bot</h1>
        <p className="text-muted-foreground">Automated DeFi trading and yield farming</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5.2% today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">24h Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$234</div>
            <p className="text-xs text-muted-foreground">+1.9%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">APY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4%</div>
            <p className="text-xs text-muted-foreground">average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Active Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Uniswap V3 LP", apy: "15.2%", status: "Active" },
              { name: "Compound Lending", apy: "8.7%", status: "Active" },
              { name: "Arbitrage Bot", apy: "22.1%", status: "Paused" },
            ].map((strategy) => (
              <div key={strategy.name} className="flex items-center justify-between p-3 border rounded">
                <div>
                  <p className="font-medium">{strategy.name}</p>
                  <p className="text-sm text-muted-foreground">APY: {strategy.apy}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      strategy.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {strategy.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              Start New Strategy
            </Button>
            <Button variant="outline" className="w-full">
              <Activity className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full">
              <DollarSign className="mr-2 h-4 w-4" />
              Withdraw Funds
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
