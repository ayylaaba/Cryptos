import React from 'react'
import {
    Card,
    // CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react"

  const stats = [
    {
      label: "Total Market Cap",
      value: "$2.14T",
      change: "+3.5%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: "24h Volume",
      value: "$89.2B",
      change: "+12.3%",
      isPositive: true,
      icon: Activity,
    },
    {
      label: "BTC Dominance",
      value: "48.2%",
      change: "-0.8%",
      isPositive: false,
      icon: TrendingUp,
    },
    {
      label: "ETH Dominance",
      value: "18.5%",
      change: "+1.2%",
      isPositive: true,
      icon: TrendingDown,
    },
  ]

const marketStat = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-8'>
        {stats.map((stat,index)  => {
            const Icon = stat.icon
            return (
            <Card key={index} className="bg-gradient-to-r from-blue-400 to-indigo-400 border border-border/30 shadow-md
            hover:translate-y-[-2px] transition-all duration-300  animate-slide-in"
            style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                <CardTitle className="text-foreground/80">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 `}>
                  <Icon size={32} className="text-white"/>
                </div>
                <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                    </p>
                </div>
                </CardContent>
            </Card>
            )
        })}
    </div>
  )
}

export default marketStat
