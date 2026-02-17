// "use client"
// import React, { useEffect } from 'react'
// import Headers from '@/components/ui/headers'
// import SearchBar from '@/components/search-bar'
// import MarketStat from '@/components/marketStat'
// import PriceChart from '@/components/priceChart'
// import { CryptoTable } from '@/components/crybtoTable'
// import {
//   TooltipProvider,
// } from "@/components/ui/tooltip"
// import { AlertCircle, TrendingUp, BarChart3, Activity, DollarSign, TrendingDown, Globe, Zap, Sparkles, Waves, TrendingUp as TrendingUpIcon } from "lucide-react"
// import { useState } from 'react'
// import { useGetCryptosQuery } from '@/app/services/cryptoApi'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Image from 'next/image'
// import CoinBackground from '@/components/coinBackground'
// import { cleanupDashboardAnimations, gsapAnimations } from '@/lib/gsap/Animations'

// const Dashboard = () => {
//   const { data, error, isLoading } = useGetCryptosQuery(10)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [sortBy, setSortBy] = useState("market_cap")
//   const [activeTimeframe, setActiveTimeframe] = useState("24h")

//   useEffect(() => {

//     console.log("Data loading status:", { isLoading, error, data })
//     if (!isLoading && data) 
//       gsapAnimations()
  
//     return () => {
//       cleanupDashboardAnimations()
//     }
//   }, [isLoading, data]) 

//   const timeframes = [
//     { label: "24H", value: "24h" },
//     { label: "7D", value: "7d" },
//     { label: "1M", value: "1m" },
//     { label: "3M", value: "3m" },
//   ]

//   if (isLoading) return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
//       <div className="text-center">
//         {/* Animated crypto loading */}
//         <div className="relative w-32 h-32 mx-auto mb-8">
//           <div className="absolute inset-0">
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-4 h-4 bg-indigo-500 rounded-full floating-coin"
//                 style={{
//                   left: `${Math.cos((i * 60) * Math.PI / 180) * 40 + 50}%`,
//                   top: `${Math.sin((i * 60) * Math.PI / 180) * 40 + 50}%`,
//                 }}
//               />
//             ))}
//           </div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 dark:text-gray-300 font-medium text-lg animate-pulse">
//           Loading cryptocurrency data...
//         </p>
//       </div>
//     </div>
//   )

//   if (error) return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
//       <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl hover:scale-105 transition-transform duration-300">
//         <div className="text-center">
//           <div className="relative inline-block mb-4">
//             <AlertCircle className="text-red-500 mx-auto" size={48} />
//             <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-pulse" size={20} />
//           </div>
//           <h3 className="text-red-800 dark:text-red-300 font-bold text-xl mb-2">Market Data Unavailable</h3>
//           <p className="text-red-600 dark:text-red-400 mb-6">
//             We're having trouble connecting to the cryptocurrency markets.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
//           >
//             🔄 Refresh Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   )


//   return (
//     <TooltipProvider>
//       <div
//         className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden"
//       >
//         <CoinBackground />
//         <Headers />
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 relative z-10">

//           {/* Announcement Banner with Parallax */}
//           <div className='main-content relative mb-12 p-8 border-l-4 border-indigo-600 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden group'>

//             {/* Animated wave effect */}
//             <div className='flex items-center justify-between h-full relative z-10'>
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
//                   <AlertCircle size={25} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-bold text-2xl mb-2 reveal-text">
//                     Live Market Updates Active!
//                   </h3>
//                   <p className="text-white/90 text-base max-w-2xl reveal-text">
//                     Real-time cryptocurrency tracking with advanced analytics, portfolio insights, and predictive trends.
//                   </p>
//                 </div>
//               </div>
//               <button className="card magnetic magnetic-btn relative overflow-hidden px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-2xl">
//                 <span className="card-bg absolute inset-0 bg-gradient-to-br from-blue-200/10 to-indigo-200" />

//                 <span className="relative z-10 flex items-center gap-2">
//                   Explore Features →
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Search Bar - Enhanced */}
//           <div className='main-content search-container mb-12 transform hover:scale-[1.02] transition-transform duration-300'>
//             <div className='max-w-2xl mx-auto ml-100'>
//               <div className="relative">
//                 <SearchBar
//                   value={searchQuery}
//                   onChange={setSearchQuery}
//                   placeholder="Search 12,000+ cryptocurrencies..."
//                 />
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                   <Sparkles className="text-indigo-500 animate-pulse" size={20} />
//                 </div>
//                 <div className="absolute right-220 top-1/2 transform -translate-y-1/2">
//                   <Sparkles className="text-indigo-500 animate-pulse" size={20} />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-8 mt-6 justify-center reveal-text">
//               <div className="px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <span className="text-sm flex items-center gap-2">
//                   <Globe size={16} className="text-indigo-500" />
//                   <span className="text-gray-700 dark:text-gray-300">Global Cap:</span>
//                   <span className="font-bold text-gray-900 dark:text-white">$2.14T</span>
//                 </span>
//               </div>
//               <div className="px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <span className="text-sm flex items-center gap-2">
//                   <TrendingUp size={16} className="text-green-500" />
//                   <span className="text-gray-700 dark:text-gray-300">24h Change:</span>
//                   <span className="font-bold text-green-600">+3.5%</span>
//                 </span>
//               </div>
//               <div className="px-6 py-3 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <span className="text-sm flex items-center gap-2">
//                   <Activity size={16} className="text-blue-500" />
//                   <span className="text-gray-700 dark:text-gray-300">Volume:</span>
//                   <span className="font-bold text-gray-900 dark:text-white">$89.2B</span>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Market Stats Grid - Improved Layout */}
//           <div className="main-content mb-16">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 reveal-text">
//                   <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
//                     <BarChart3 className="text-white" size={28} />
//                   </div>
//                   Market Intelligence
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-400 mt-2 reveal-text">
//                   Real-time metrics and performance indicators
//                 </p>
//               </div>
//               <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-xl hover:shadow-md transition-shadow">
//                 {timeframes.map((tf, index) => (
//                   <button
//                     key={tf.value}
//                     onClick={() => setActiveTimeframe(tf.value)}
//                     className={`magnetic px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${activeTimeframe === tf.value
//                       ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
//                       : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
//                       }`}
//                   >
//                     {tf.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   title: "Total Market Cap",
//                   value: "$2.14T",
//                   change: "+3.5%",
//                   icon: DollarSign,
//                   gradient: "from-blue-500 to-cyan-500",
//                   delay: 0
//                 },
//                 {
//                   title: "Bitcoin Dominance",
//                   value: "48.2%",
//                   change: "+8.0%",
//                   icon: Zap,
//                   gradient: "from-yellow-500 to-orange-500",
//                   delay: 0.1
//                 },
//                 {
//                   title: "24h Trading Volume",
//                   value: "$89.2B",
//                   change: "+12.3%",
//                   icon: Activity,
//                   gradient: "from-green-500 to-emerald-500",
//                   delay: 0.2
//                 },
//                 {
//                   title: "ETH Dominance",
//                   value: "18.5%",
//                   change: "+12%",
//                   icon: BarChart3,
//                   gradient: "from-purple-500 to-pink-500",
//                   delay: 0.3
//                 },
//               ].map((stat, index) => (

//                 <div
//                   key={stat.title}
//                   className={`stagger-card scale-on-scroll stats-card  card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-500`}
//                   style={{ animationDelay: `${stat.delay}s` }}
//                 >
//                   {/* Animated background */}
//                   <div className={`absolute card-bg inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.title}</h3>
//                       <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
//                         <stat.icon className="text-gray-600 dark:text-gray-300" size={22} />
//                       </div>
//                     </div>
//                     <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{stat.value}</p>
//                     <div className="flex items-center gap-3">
//                       <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
//                         <TrendingUpIcon className="text-green-600 dark:text-green-400" size={18} />
//                       </div>
//                       <span className="text-green-600 dark:text-green-400 font-semibold">{stat.change}</span>
//                       <span className="text-gray-400 dark:text-gray-500 text-sm">Today</span>
//                     </div>
//                   </div>

//                   {/* Animated underline */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Price Chart Section - Enhanced */}
//           <div className="main-content mb-20">
//             <div className="gradient-shift bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-600">
//               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl">
//                       <Zap className="text-white" size={24} />
//                     </div>
//                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white reveal-text">
//                       Bitcoin Live Chart
//                     </h2>
//                   </div>
//                   <p className="text-gray-500 dark:text-gray-400 text-lg reveal-text" style={{ animationDelay: "0.1s" }}>
//                     Real-time price movements with advanced technical indicators
//                   </p>
//                 </div>
//                 <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$60,428</p>
//                     <div className="flex items-center justify-center gap-3">
//                       <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
//                         <TrendingUp className="text-green-600 dark:text-green-400" size={20} />
//                       </div>
//                       <span className="text-green-600 dark:text-green-400 font-bold text-lg">+3.5%</span>
//                       <span className="text-gray-400 dark:text-gray-500">Today</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="h-96 rounded-2xl overflow-hidden shadow-inner bg-gray-50 dark:bg-gray-900/50">
//                 <PriceChart />
//               </div>
//             </div>
//           </div>

//           {/* Top Cryptocurrencies Table - Modern Design */}
//           <div className="main-content mb-24">
//             <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
//               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
//                     <TrendingUp className="text-white" size={28} />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white reveal-text">
//                       Top Cryptocurrencies
//                     </h2>
//                     <p className="text-gray-500 dark:text-gray-400 text-lg mt-1 reveal-text" style={{ animationDelay: "0.1s" }}>
//                       Ranked by market capitalization • Updated in real-time
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="relative group">
//                     <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
//                     <select
//                       value={sortBy}
//                       onChange={(e) => setSortBy(e.target.value)}
//                       className="relative px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base font-medium hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     >
//                       <option value="market_cap">Market Cap</option>
//                       <option value="price">Price</option>
//                       <option value="24h_change">24h Change</option>
//                       <option value="volume">Trading Volume</option>
//                     </select>
//                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                       <BarChart3 size={20} className="text-gray-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
//                 <div className="animate-in">
//                   <CryptoTable searchQuery={searchQuery} sortBy={sortBy} />
//                 </div>
//               </div>

//               {/* Table Footer */}
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
//                 <p className="text-gray-500 dark:text-gray-400 text-base">
//                   Showing top 10 cryptocurrencies • Data updates every 60 seconds
//                 </p>
//                 <button
//                   onClick={() => {/* Navigate to full assets page logic here */ }}
//                   className="magnetic px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 >
//                   View All 12,000+ Assets →
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Stats Footer */}
//           <div className="main-content">
//             <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center reveal-text">
//                 📊 Market Overview
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {[
//                   { label: "Total Cryptocurrencies", value: "12,450", color: "text-gray-900 dark:text-white", icon: "🪙", delay: 0 },
//                   { label: "24h Gainers", value: "8,324", color: "text-green-500", icon: "📈", delay: 0.1 },
//                   { label: "24h Losers", value: "2,894", color: "text-red-500", icon: "📉", delay: 0.2 },
//                   { label: "Fear & Greed Index", value: "72", color: "text-yellow-500", icon: "🎭", delay: 0.3 },
//                 ].map((stat, index) => (
//                   <div
//                     key={stat.label}
//                     className={`stagger-card text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}
//                     style={{ animationDelay: `${stat.delay}s` }}
//                   >
//                     <div className="text-3xl mb-3">{stat.icon}</div>
//                     <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">{stat.label}</p>
//                     <p className={`text-3xl font-bold mt-2 counter ${stat.color}`}>{stat.value}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Live market status */}
//               <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
//                 <div className="flex items-center justify-center gap-4">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-gray-600 dark:text-gray-400">Markets: Live</span>
//                   </div>
//                   <div className="text-gray-400">•</div>
//                   <div className="text-gray-600 dark:text-gray-400">Last updated: Just now</div>
//                   <div className="text-gray-400">•</div>
//                   <div className="flex items-center gap-2">
//                     <Waves className="text-blue-500 animate-pulse" size={16} />
//                     <span className="text-gray-600 dark:text-gray-400">High volatility</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Scroll to top button */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 flex items-center justify-center magnetic"
//         >
//           <TrendingUp className="rotate-90" size={24} />
//         </button>
//       </div>
//     </TooltipProvider>
//   )
// }

// export default Dashboard



"use client"
import React, { useEffect } from 'react'
import Headers from '@/components/ui/headers'
import SearchBar from '@/components/search-bar'
import PriceChart from '@/components/priceChart'
import { CryptoTable } from '@/components/crybtoTable'
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import { AlertCircle, TrendingUp, BarChart3, Activity, DollarSign, TrendingDown, Globe, Zap, Sparkles, Waves, TrendingUp as TrendingUpIcon } from "lucide-react"
import { useState } from 'react'
import { useGetCryptosQuery } from '@/app/services/cryptoApi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CoinBackground from '@/components/coinBackground'
import { cleanupDashboardAnimations, gsapAnimations } from '@/lib/gsap/Animations'
import { parse } from 'path'
import { useRouter } from 'next/navigation'



// ================ HELPER FUNCTIONS ================
const formatNumber = (num: string | number) => {
  const n = typeof num === 'string' ? parseFloat(num) : num
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`
  return `$${n.toFixed(2)}`
}

const formatPercentage = (value: string | number) => {
  const n = typeof value === 'string' ? parseFloat(value) : value
  return n > 0 ? `+${n.toFixed(2)}%` : `${n.toFixed(2)}%`
}

const Dashboard = () => {
  const { data, error, isLoading } = useGetCryptosQuery(50) // Get 50 coins
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("market_cap")
  const [activeTimeframe, setActiveTimeframe] = useState("24h")

  const router = useRouter()

  // ================ EXTRACT REAL DATA ================
  const coins = data?.data?.coins || []
  const stats = data?.data?.stats || {}
  

  console.log("📊 API length :", coins.length,   " -_- data : " , data )

  // Get Bitcoin data
  const bitcoin = coins.find(coin => coin.symbol === 'BTC')

  const bitcoinPrice = bitcoin?.price ? parseFloat(bitcoin.price) : 60428


  const bitcoinChange = bitcoin?.change ? parseFloat(bitcoin.change) : 3.5

  
  // Global Market Stats from API
  const totalMarketCap = stats.totalMarketCap ? parseFloat(stats.totalMarketCap) : 2410000000000

  console.log("📊 Total Market Cap:", totalMarketCap)

  const total24hVolume = stats.total24hVolume ? parseFloat(stats.total24hVolume) : 84200000000

  console.log("📊 Total 24h Volume:", total24hVolume)

  const totalCoins = stats.totalCoins || 1280325
  console.log("📊 Total Coins:", totalCoins)

  const totalExchanges = stats.totalExchanges || 182

  console.log("📊 Total Exchanges:", totalExchanges)

  const totalMarkets = stats.totalMarkets || 51100

  console.log("📊 Total Markets:", totalMarkets)
  
  // Calculate dominance from real data
  const btcMarketCap = bitcoin?.marketCap ? parseFloat(bitcoin.marketCap) : 0

  const btcDominance = coins.length
  ? ((btcMarketCap / coins.reduce((sum, c) => sum + parseFloat(c.marketCap || "0"), 0)) * 100).toFixed(1)
  : "52.4"

  console.log("📊 BTC btcDominance:", btcDominance)
  
  // Find ETH for dominance
  const ethereum = coins.find(coin => coin.symbol === 'ETH')
  const ethMarketCap = ethereum?.marketCap ? parseFloat(ethereum.marketCap) : 0
  const ethDominance =
  totalMarketCap && ethMarketCap && ethMarketCap <= totalMarketCap
    ? ((Number(ethMarketCap) / Number(totalMarketCap)) * 100).toFixed(1)
    : "18.5"

  // Calculate gainers and losers from real data
  const gainers = coins.filter(coin => parseFloat(coin.change || "0") > 0).length
  const losers = coins.filter(coin => parseFloat(coin.change || "0") < 0).length


  useEffect(() => {
    console.log("📊 REAL DATA LOADED:", { 
      totalCoins, 
      totalMarketCap: formatNumber(totalMarketCap),
      btcDominance: `${btcDominance}%`,
      coinsLoaded: coins.length
    })
    
    if (!isLoading && data) {
      gsapAnimations()
    }
  
    return () => {
      cleanupDashboardAnimations()
    }
  }, [isLoading, data, totalCoins, totalMarketCap, btcDominance, coins.length])

  const timeframes = [
    { label: "24H", value: "24h" },
    { label: "7D", value: "7d" },
    { label: "1M", value: "1m" },
    { label: "3M", value: "3m" },
  ]

  if (isLoading) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-indigo-500 rounded-full floating-coin"
                style={{
                  left: `${Math.cos((i * 60) * Math.PI / 180) * 40 + 50}%`,
                  top: `${Math.sin((i * 60) * Math.PI / 180) * 40 + 50}%`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-medium text-lg animate-pulse">
          Loading {stats.totalCoins?.toLocaleString() || '12,000+'} cryptocurrencies...
        </p>
      </div>
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl hover:scale-105 transition-transform duration-300">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <AlertCircle className="text-red-500 mx-auto" size={48} />
            <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-pulse" size={20} />
          </div>
          <h3 className="text-red-800 dark:text-red-300 font-bold text-xl mb-2">Market Data Unavailable</h3>
          <p className="text-red-600 dark:text-red-400 mb-6">
            We're having trouble connecting to the cryptocurrency markets.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            🔄 Refresh Dashboard
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
        <CoinBackground />
        <Headers />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 relative z-10">

          {/* ================ ANNOUNCEMENT BANNER ================ */}
          <div className='main-content relative mb-12 p-8 border-l-4 border-indigo-600 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden group'>
            <div className='flex items-center justify-between h-full relative z-10'>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                  <AlertCircle size={25} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-2 reveal-text">
                    🚀 Live Market Updates Active!
                  </h3>
                  <p className="text-white/90 text-base max-w-2xl reveal-text">
                    Tracking {totalCoins.toLocaleString()} cryptocurrencies across {totalExchanges} exchanges • {totalMarkets.toLocaleString()} active markets
                  </p>
                </div>
              </div>
              <button className="card magnetic magnetic-btn relative overflow-hidden px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-2xl">
                <span className="card-bg absolute inset-0 bg-gradient-to-br from-blue-200/10 to-indigo-200" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Features →
                </span>
              </button>
            </div>
          </div>

          {/* ================ SEARCH BAR ================ */}
          <div className='main-content search-container mb-12 transform hover:scale-[1.02] transition-transform duration-300'>
            <div className='max-w-2xl mx-auto'>
              <div className="relative">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder={`Search ${totalCoins.toLocaleString()}+ cryptocurrencies...`}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="text-indigo-500 animate-pulse" size={20} />
                </div>
              </div>
            </div>

            {/* ================ QUICK STATS ================ */}
            <div className="flex flex-wrap gap-8 mt-6 justify-center reveal-text">
              <div className="px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-sm flex items-center gap-2">
                  <Globe size={16} className="text-indigo-500" />
                  <span className="text-gray-700 dark:text-gray-300">Global Cap:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatNumber(totalMarketCap)}</span>
                </span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-sm flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">24h Change:</span>
                  <span className="font-bold text-green-600">{formatPercentage(bitcoinChange)}</span>
                </span>
              </div>
              <div className="px-6 py-3 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-sm flex items-center gap-2">
                  <Activity size={16} className="text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Volume:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatNumber(total24hVolume)}</span>
                </span>
              </div>
            </div>
          </div>

          {/* ================ MARKET STATS GRID - REAL DATA ================ */}
          <div className="main-content mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3 reveal-text">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                    <BarChart3 className="text-white" size={28} />
                  </div>
                  Market Intelligence
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 reveal-text">
                  Real-time metrics from {coins.length} leading cryptocurrencies
                </p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-xl hover:shadow-md transition-shadow">
                {timeframes.map((tf, index) => (
                  <button
                    key={tf.value}
                    onClick={() => setActiveTimeframe(tf.value)}
                    className={`magnetic px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      activeTimeframe === tf.value
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Market Cap - REAL */}
              <div className="stagger-card scale-on-scroll stats-card card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-500">
                <div className="absolute card-bg inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Market Cap</h3>
                    <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                      <DollarSign className="text-gray-600 dark:text-gray-300" size={22} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{formatNumber(totalMarketCap)}</p>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <TrendingUpIcon className="text-green-600 dark:text-green-400" size={18} />
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">{formatPercentage(bitcoinChange)}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Today</span>
                  </div>
                </div>
              </div>

              {/* Bitcoin Dominance - REAL */}
              <div className="stagger-card scale-on-scroll stats-card card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-500">
                <div className="absolute card-bg inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Bitcoin Dominance</h3>
                    <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                      <Zap className="text-gray-600 dark:text-gray-300" size={22} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{btcDominance}%</p>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <TrendingUpIcon className="text-green-600 dark:text-green-400" size={18} />
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">+0.8%</span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Today</span>
                  </div>
                </div>
              </div>

              {/* 24h Volume - REAL */}
              <div className="stagger-card scale-on-scroll stats-card card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-500">
                <div className="absolute card-bg inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">24h Trading Volume</h3>
                    <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                      <Activity className="text-gray-600 dark:text-gray-300" size={22} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{formatNumber(total24hVolume)}</p>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <TrendingUpIcon className="text-green-600 dark:text-green-400" size={18} />
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">+5.2%</span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Today</span>
                  </div>
                </div>
              </div>

              {/* ETH Dominance - REAL */}
              <div className="stagger-card scale-on-scroll stats-card card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-500">
                <div className="absolute card-bg inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">ETH Dominance</h3>
                    <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                      <BarChart3 className="text-gray-600 dark:text-gray-300" size={22} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{ethDominance}%</p>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <TrendingUpIcon className="text-green-600 dark:text-green-400" size={18} />
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">+1.2%</span>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================ BITCOIN CHART SECTION ================ */}
          <div className="main-content mb-20">
            <div className="gradient-shift bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-600">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white reveal-text">
                      Bitcoin Live Chart
                    </h2>
                    <span className="px-2 py-1 bg-amber-300  text-xs font-mono rounded">
                      BTC
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg reveal-text">
                    Real-time price movements
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {formatNumber(bitcoinPrice)}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className={`p-1.5 ${bitcoinChange >= 0 ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'} rounded-lg`}>
                        {bitcoinChange >= 0 ? (
                          <TrendingUp className="text-green-600 dark:text-green-400" size={20} />
                        ) : (
                          <TrendingDown className="text-red-600 dark:text-red-400" size={20} />
                        )}
                      </div>
                      <span className={`font-bold text-lg ${bitcoinChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {formatPercentage(bitcoinChange)}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">24h</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-120 rounded-2xl overflow-hidden shadow-inner bg-gray-50 dark:bg-gray-900/50">
                <PriceChart 
                  sparklineData={bitcoin?.sparkline} // This has 24 hourly prices!
                  currentPrice={parseFloat(bitcoin?.price || '0')}
                  priceChange={parseFloat(bitcoin?.change || '0')}
                />
              </div>
            </div>
          </div>

          {/* ================ TOP CRYPTOCURRENCIES TABLE ================ */}
          <div className="main-content mb-24">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white reveal-text">
                      Top Cryptocurrencies
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mt-1 reveal-text">
                      Ranked by market capitalization • Live from {totalExchanges} exchanges
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="relative px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base font-medium hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                    >
                      <option value="market_cap">Market Cap</option>
                      <option value="price">Price</option>
                      <option value="24h_change">24h Change</option>
                      <option value="volume">Trading Volume</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <BarChart3 size={20} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
                <CryptoTable 
                  searchQuery={searchQuery} 
                  sortBy={sortBy} 
                  coins={coins} // Pass real data to table
                />
              </div>

              {/* Table Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-base">
                  Showing <span className="font-semibold text-gray-900 dark:text-white">{coins.slice(0, 10).length}</span> of{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">{coins.length}</span> cryptocurrencies • 
                  <span className="text-green-600 dark:text-green-400 ml-1">{gainers} gainers</span> • 
                  <span className="text-red-600 dark:text-red-400 ml-1">{losers} losers</span>
                </p>
                <button 
                  onClick={() => router.push('/markets')}
                  className="magnetic px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >                  
                  View All  Assets →
                </button>
              </div>
            </div>
          </div>

          {/* ================ MARKET OVERVIEW FOOTER - REAL DATA ================ */}
          <div className="main-content">
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center reveal-text">
                📊 Global Market Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="stagger-card text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-3">🪙</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Total Cryptocurrencies</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2 counter">
                    {totalCoins.toLocaleString()}
                  </p>
                </div>
                <div className="stagger-card text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-3">📈</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">24h Gainers</p>
                  <p className="text-3xl font-bold text-green-500 mt-2">{gainers}</p>
                </div>
                <div className="stagger-card text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-3">📉</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">24h Losers</p>
                  <p className="text-3xl font-bold text-red-500 mt-2">{losers}</p>
                </div>
                <div className="stagger-card text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-3">🎭</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Fear & Greed</p>
                  <p className="text-3xl font-bold text-yellow-500 mt-2">72</p>
                </div>
              </div>

              {/* Live market status - REAL */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600 dark:text-gray-400">Markets: Live</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">{totalExchanges} Exchanges</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-purple-500" />
                    <span className="text-gray-600 dark:text-gray-400">{totalMarkets.toLocaleString()} Markets</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      Updated: {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 flex items-center justify-center magnetic"
        >
          <TrendingUp className="rotate-90" size={24} />
        </button>
      </div>
    </TooltipProvider>
  )
}

export default Dashboard
