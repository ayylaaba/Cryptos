// "use client"
// import React from 'react'
// import Headers from '@/components/ui/headers'
// import SearchBar from '@/components/search-bar'
// import MarketStat from '@/components/marketStat'
// import PriceChart from '@/components/priceChart'
// import { CryptoTable } from '@/components/crybtoTable'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider,
// } from "@/components/ui/tooltip"
// import { AlertCircle } from "lucide-react"
// import { TrendingUp } from "lucide-react"
// import { useState } from 'react'

// const Dashboard = () => {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [sortBy, setSortBy] = useState("market_cap")

//   return (
//     <TooltipProvider>
//       <div >
//         <Headers />
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Announcement Banner */}
//           <div className='relative rounded-lg p-6 h-30 border-l-8 border-indigo-600 mt-20 bg-gradient-to-r  from-blue-400 to-indigo-400 flex flex-col gap-4 shadow-md'>
//             <div className='gap-1 flex items-center'>
//               <Tooltip>
//                 {/* Remove asChild or use it correctly with a single child */}
//                 <TooltipTrigger>
//                   <AlertCircle size={20} className='text-indigo-500 cursor-pointer' />
//                 </TooltipTrigger>
//                 <TooltipContent className="z-50 bg-white border shadow-lg">
//                   <p className='text-black font-stretch-105%'>Market Update Coming Soon!</p>
//                 </TooltipContent>
//               </Tooltip>

//               <span className="text-gray-600 font-semibold text-lg pl-2 top-2 relative flex flex-col">
//                 Stay tuned for exciting market updates!
//                 <p className='text-white/80 text-sm font-medium'>
//                   Our team is working hard to bring you the latest market insights and data visualizations.
//                 </p>
//               </span>
//             </div>
//           </div>

//           {/* search bar */}
//           <div className='w-full mx-auto mt-12 mb-16'>
//             <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search cryptocurrencies..." />
//           </div>

//           <div className='mt-8'>
//             <MarketStat />
//           </div>

//           <div className='my-16'>
//             <PriceChart />
//           </div>

//           <div className="mt-30">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-4 mr-12">
//                 <TrendingUp className="bg text-primary" size={24} />
//                 <h2 className="text-2xl font-bold text-black">Top Cryptocurrencies</h2>
//               </div>
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-4 py-2 rounded-lg border border-border/50 text-foreground text-sm hover:border-primary transition-all cursor-pointer bg-card/50 backdrop-blur-sm"
//               >
//                 <option value="market_cap">Market Cap</option>
//                 <option value="price">Price</option>
//                 <option value="24h_change">24h Change</option>
//               </select>
//             </div>
//             <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
//               <CryptoTable searchQuery={searchQuery} sortBy={sortBy} />
//             </div>
//           </div>

//         </main>
//       </div>
//     </TooltipProvider>
//   )
// }

// export default Dashboard

"use client"
import React from 'react'
import Headers from '@/components/ui/headers'
import SearchBar from '@/components/search-bar'
import MarketStat from '@/components/marketStat'
import PriceChart from '@/components/priceChart'
import { CryptoTable } from '@/components/crybtoTable'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { AlertCircle, TrendingUp, BarChart3, Activity, DollarSign, TrendingDown, Globe, Zap } from "lucide-react"
import { useState } from 'react'

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("market_cap")
  const [activeTimeframe, setActiveTimeframe] = useState("24h")

  const timeframes = [
    { label: "24H", value: "24h" },
    { label: "7D", value: "7d" },
    { label: "1M", value: "1m" },
    { label: "3M", value: "3m" },
  ]

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <Headers />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          {/* Announcement Banner - Modern Design */}
          <div className='relative mb-8 p-6 border-l-3 border-indigo-600 rounded-lg bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 shadow-lg'>
            <div className='absolute rounded-lg inset-0 bg-gradient-to-r from-white/20 to-transparent' ></div>
            <div className='flex items-center justify-between h-full'>  
              <div className="flex items-start gap-3">
                  <AlertCircle size={24} className="text-white transition-all hover:translate-y-[-2px]" />
                  <div >
                    <h3 className="text-white font-bold text-lg">Market Update Coming Soon!</h3>
                    <p className="text-white/90 text-sm mt-1 max-w-2xl">
                      Our team is working hard to bring you the latest market insights and data visualizations. 
                      New features include advanced analytics and portfolio tracking.
                    </p>
                  </div>
              </div>
              <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-black-600/10 hover:shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Search Bar - Enhanced */}
          <div className='mb-10'>
            <div className='max-w-2xl mx-auto relative left-30'>
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery} 
                placeholder="Search cryptocurrencies by name or symbol..." 
              />
            </div>
            <div className="flex flex-wrap gap-10 mt-4 justify-center ">
              <span className="text-sm text-green-600 flex items-center gap-1">
                <Globe size={14} className="mr-1 text-gray-600 dark:text-gray-400" /> 
                <p className="text-sm text-gray-600 dark:text-gray-400">Global Market Cap: $2.14T</p>
              </span>
              <span className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp size={14} className="mr-1" /> 
                <p className="text-sm text-green-600">+3.5% Today</p>
              </span>
              <span className="text-sm text-green-600 flex items-center gap-1">
                <Activity size={14} className="mr-1 text-gray-600 dark:text-gray-400" /> 
                <p className="text-sm text-gray-600 dark:text-gray-400">24h Volume: $89.2B</p>
              </span>
            </div>
          </div>

          {/* Market Stats Grid - Improved Layout */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="text-indigo-500" /> Market Overview
              </h2>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"> 
                {
                  timeframes.map(( tf,index) => (
                    <button
                      key={tf.value}
                      onClick={() => setActiveTimeframe(tf.value)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                        activeTimeframe === tf.value
                          ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                      }`}
                    >
                      {tf.label}
                    </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Market Cap</h3>
                  <DollarSign className="text-gray-400" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$2.14T</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500 text-sm font-medium">+3.5%</span>
                  <span className="text-gray-500 text-sm">Today</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Bitcoin Dominance</h3>
                  <Zap className="text-yellow-500" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">48.2%</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500 text-sm font-medium">+8.0%</span>
                  <span className="text-gray-500 text-sm">Today</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">24h Volume</h3>
                  <Activity className="text-blue-500" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$89.2B</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500 text-sm font-medium">+12.3%</span>
                  <span className="text-gray-500 text-sm">Today</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">ETH Dominance</h3>
                  <BarChart3 className="text-purple-500" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">18.5%</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500 text-sm font-medium">+12%</span>
                  <span className="text-gray-500 text-sm">Today</span>
                </div>
              </div>

            </div>
          </div>

          {/* Price Chart Section - Enhanced */}
          <div className="mb-16">
            <div className="bg-white h-160 dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    Bitcoin Price 24h
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Real-time market movement</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">$60,000</p>
                    <div className="flex items-center gap-2 mt-1">
                      <TrendingUp className="text-green-500" size={16} />
                      <span className="text-green-500 font-medium">+3.5%</span>
                      <span className="text-gray-500 text-sm">Today</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80">
                <PriceChart />
              </div>
            </div>
          </div>

          {/* Top Cryptocurrencies Table - Modern Design */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Top Cryptocurrencies</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Ranked by market capitalization</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2.5 pl-10 pr-8 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer bg-white dark:bg-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="market_cap">Market Cap</option>
                      <option value="price">Price</option>
                      <option value="24h_change">24h Change</option>
                      <option value="volume">24h Volume</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <BarChart3 size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
                  <CryptoTable searchQuery={searchQuery} sortBy={sortBy} />
                </div>
              </div>

              {/* Table Footer */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Showing top 5 cryptocurrencies
                </p>
                <button 
                  onClick={() => {/* Navigate to full assets page logic here */}}
                  className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg text-sm font-medium transition-colors">
                  View All Assets →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Total Cryptos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">12,450</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">24h Gainers</p>
                <p className="text-2xl font-bold text-green-500 mt-2">8,324</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">24h Losers</p>
                <p className="text-2xl font-bold text-red-500 mt-2">2,894</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Fear & Greed Index</p>
                <p className="text-2xl font-bold text-yellow-500 mt-2">72</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </TooltipProvider>
  )
}

export default Dashboard