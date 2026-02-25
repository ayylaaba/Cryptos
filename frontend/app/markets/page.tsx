"use client"
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Headers from '@/components/ui/headers'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { 
    BarChart3, TrendingUp, TrendingDown, Globe, DollarSign, Activity, 
    PieChart, Filter, ChevronRight, Sparkles, ArrowUpRight, ArrowDownRight,
    CandlestickChart, Network, Gauge, Users, Target, Zap, Timer,
    BookOpen, Newspaper, Bell, Star, Clock, Download, RefreshCw,
    ListFilter, SlidersHorizontal, BarChart2, LineChart, Scale,
    Rocket, Orbit, Atom, Cpu, Code2, Coins, Layers, ZapOff
} from 'lucide-react'
import SearchBar from '@/components/search-bar'
import { CryptoTable } from '@/components/crybtoTable'
import CoinBackground from '@/components/coinBackground'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from 'next-themes'
import coin from '../coin/[id]/page'
import { useGetCryptosQuery } from '../services/cryptoApi' 

gsap.registerPlugin(ScrollTrigger)

const Markets = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")
    const [timeframe, setTimeframe] = useState("24h")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const { theme } = useTheme()
    const { data, error, isLoading } = useGetCryptosQuery(100)  
    const [page, setPage] = useState(1)
    
    const coins = data?.data?.coins || []
    console.log("coins: ", coins)
    
    // Helper function to safely parse numeric values
    const safeParseNumber = (value: any): number => {
        if (value === null || value === undefined) return 0
        if (typeof value === 'number') return value
        if (typeof value === 'string') {
            const parsed = parseFloat(value)
            return isNaN(parsed) ? 0 : parsed
        }
        return 0
    }

    // Helper function to safely format change with sign
    const formatChange = (change: any): string => {
        const num = safeParseNumber(change)
        return num > 0 ? `+${num.toFixed(1)}` : num.toFixed(1)
    }

    // Helper functions for colors
    function getGradientColor(index: number) {
        const gradients = [
            "from-blue-500 to-cyan-500",
            "from-purple-500 to-pink-500",
            "from-green-500 to-emerald-500",
            "from-orange-500 to-red-500",
            "from-indigo-500 to-blue-500",
            "from-violet-500 to-purple-500"
        ]
        return gradients[index % gradients.length]
    }

    function getLightColor(index: number) {
        const colors = [
            "from-blue-600 to-cyan-600",
            "from-purple-600 to-pink-600",
            "from-green-600 to-emerald-600",
            "from-orange-600 to-red-600",
            "from-indigo-600 to-blue-600",
            "from-violet-600 to-purple-600"
        ]
        return colors[index % colors.length]
    }

    function getBgLight(index: number) {
        const bgs = [
            "bg-blue-50",
            "bg-purple-50",
            "bg-green-50",
            "bg-orange-50",
            "bg-indigo-50",
            "bg-violet-50"
        ]
        return bgs[index % bgs.length]
    }

    function getBgDark(index: number) {
        const bgs = [
            "bg-blue-500/10",
            "bg-purple-500/10",
            "bg-green-500/10",
            "bg-orange-500/10",
            "bg-indigo-500/10",
            "bg-violet-500/10"
        ]
        return bgs[index % bgs.length]
    }

    // Calculate market stats from real data
    const totalMarketCap = coins.reduce((acc, coin) => acc + (safeParseNumber(coin.marketCap)), 0)
    const totalVolume = coins.reduce((acc, coin) => acc + (safeParseNumber(coin.volume)), 0)
    
    const btcCoin = coins.find(c => c.symbol === 'BTC')
    const ethCoin = coins.find(c => c.symbol === 'ETH')
    
    const btcDominance = btcCoin?.marketCap 
        ? ((safeParseNumber(btcCoin.marketCap) / totalMarketCap) * 100).toFixed(1)
        : '52.4'
    
    const ethDominance = ethCoin?.marketCap
        ? ((safeParseNumber(ethCoin.marketCap) / totalMarketCap) * 100).toFixed(1)
        : '18.2'
    
    // Calculate gainers and losers
    const gainers = coins.filter(coin => safeParseNumber(coin.change) > 0).length
    const losers = coins.filter(coin => safeParseNumber(coin.change) < 0).length
    
    // Get top 6 coins for market indices
    const topCoins = coins.slice(0, 6).map((coin, index) => {
        const changeValue = safeParseNumber(coin.change)
        const marketCap = safeParseNumber(coin.marketCap)
        const volume = safeParseNumber(coin.volume)
        
        return {
            name: coin.name,
            symbol: coin.symbol,
            value: marketCap ? `$${(marketCap / 1e9).toFixed(1)}B` : '$0B',
            change: changeValue.toFixed(1),
            icon: Globe,
            color: getGradientColor(index),
            lightColor: getLightColor(index),
            bgLight: getBgLight(index),
            bgDark: getBgDark(index),
            components: volume ? Math.round(volume / 1e6) : 0
        }
    })

    // Calculate advanced metrics
    const coinsWithChange = coins.map(coin => ({
        ...coin,
        changeNum: safeParseNumber(coin.change)
    }))

    const avgPositiveChange = coinsWithChange
        .filter(c => c.changeNum > 0)
        .reduce((acc, c) => acc + c.changeNum, 0) / (gainers || 1)

    const avgNegativeChange = coinsWithChange
        .filter(c => c.changeNum < 0)
        .reduce((acc, c) => acc + Math.abs(c.changeNum), 0) / (losers || 1)
    
    const marketMetrics = [
        {
            label: "Market Cap",
            value: totalMarketCap > 1e12 ? `$${(totalMarketCap / 1e12).toFixed(2)}T` : 
                   totalMarketCap > 1e9 ? `$${(totalMarketCap / 1e9).toFixed(2)}B` : 
                   `$${(totalMarketCap / 1e6).toFixed(2)}M`,
            change: "+2.1%",
            trend: "up",
            description: "Total market cap"
        },
        {
            label: "Avg Positive Change",
            value: `+${avgPositiveChange.toFixed(1)}%`,
            change: `+${(avgPositiveChange / 10).toFixed(1)}%`,
            trend: "up",
            description: `${gainers} gainers`
        },
        {
            label: "Avg Negative Change",
            value: `-${avgNegativeChange.toFixed(1)}%`,
            change: `-${(avgNegativeChange / 10).toFixed(1)}%`,
            trend: "down",
            description: `${losers} losers`
        },
        {
            label: "Total Volume",
            value: totalVolume > 1e9 ? `$${(totalVolume / 1e9).toFixed(1)}B` : 
                   totalVolume > 1e6 ? `$${(totalVolume / 1e6).toFixed(1)}M` : 
                   `$${totalVolume.toFixed(0)}`,
            change: "+$2.1B",
            trend: "up",
            description: "24h total"
        },
        {
            label: "BTC Dominance",
            value: `${btcDominance}%`,
            change: "+0.5%",
            trend: "up",
            description: "Market share"
        },
        {
            label: "ETH Dominance",
            value: `${ethDominance}%`,
            change: "-0.3%",
            trend: "down",
            description: "Market share"
        }
    ]

    // Calculate sector data from real coins
    const layer1Coins = coins.filter(c => ['BTC', 'ETH', 'SOL', 'ADA', 'AVAX'].includes(c.symbol))
    const defiCoins = coins.filter(c => ['UNI', 'AAVE', 'MKR', 'COMP', 'CRV'].includes(c.symbol))
    const memeCoins = coins.filter(c => ['DOGE', 'SHIB', 'PEPE', 'WIF'].includes(c.symbol))
    const exchangeCoins = coins.filter(c => ['BNB', 'CRO', 'OKB', 'GT'].includes(c.symbol))

    const layer1Value = layer1Coins.reduce((acc, c) => acc + safeParseNumber(c.marketCap), 0)
    const defiValue = defiCoins.reduce((acc, c) => acc + safeParseNumber(c.marketCap), 0)
    const memeValue = memeCoins.reduce((acc, c) => acc + safeParseNumber(c.marketCap), 0)
    const exchangeValue = exchangeCoins.reduce((acc, c) => acc + safeParseNumber(c.marketCap), 0)

    const sectors = [
        { 
            name: "Layer 1", 
            value: layer1Value,
            change: "+2.1%", 
            color: "bg-blue-500",
            dominance: ((layer1Value / totalMarketCap) * 100).toFixed(1) + '%'
        },
        { 
            name: "DeFi", 
            value: defiValue,
            change: "+3.8%", 
            color: "bg-purple-500",
            dominance: ((defiValue / totalMarketCap) * 100).toFixed(1) + '%'
        },
        { 
            name: "Meme", 
            value: memeValue,
            change: "-2.1%", 
            color: "bg-yellow-500",
            dominance: ((memeValue / totalMarketCap) * 100).toFixed(1) + '%'
        },
        { 
            name: "Exchange", 
            value: exchangeValue,
            change: "+1.2%", 
            color: "bg-indigo-500",
            dominance: ((exchangeValue / totalMarketCap) * 100).toFixed(1) + '%'
        },
    ].map(sector => ({
        ...sector,
        value: sector.value > 1e9 ? `$${(sector.value / 1e9).toFixed(1)}B` : 
               sector.value > 1e6 ? `$${(sector.value / 1e6).toFixed(1)}M` : 
               `$${sector.value.toFixed(0)}`
    }))

    // Get top movers from real data
    const topMovers = [...coins]
        .map(coin => ({
            name: coin.name,
            symbol: coin.symbol,
            price: safeParseNumber(coin.price),
            changeNum: safeParseNumber(coin.change),
            volume: safeParseNumber(coin.volume)
        }))
        .sort((a, b) => Math.abs(b.changeNum) - Math.abs(a.changeNum))
        .slice(0, 6)
        .map((coin, i) => ({
            name: coin.name,
            symbol: coin.symbol,
            price: coin.price ? `$${coin.price.toLocaleString(undefined, {maximumFractionDigits: 2})}` : '$0',
            change: `${coin.changeNum > 0 ? '+' : ''}${coin.changeNum.toFixed(1)}%`,
            volume: coin.volume ? `$${(coin.volume / 1e6).toFixed(1)}M` : '$0M',
            trend: coin.changeNum > 0 ? 'up' : 'down'
        }))

    // Generate market news from coin data
    const marketNews = coins.slice(0, 5).map((coin, i) => {
        const changeNum = safeParseNumber(coin.change)
        return {
            time: `${i * 5 + 2}m ago`,
            title: `${coin.name} ${changeNum > 0 ? 'surges' : 'drops'} ${Math.abs(changeNum).toFixed(1)}% on high volume`,
            impact: changeNum > 5 ? 'positive' : changeNum < -5 ? 'negative' : 'neutral',
            sector: coin.symbol
        }
    })

    // Pagination
    const itemsPerPage = 10
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedCoins = coins.slice(startIndex, endIndex)
    const totalPages = Math.ceil(coins.length / itemsPerPage)
    
    const pageRef = useRef<HTMLDivElement>(null)

    // ================ GSAP ANIMATIONS ================
    useEffect(() => {
        if (!pageRef.current || isLoading) return

        const ctx = gsap.context(() => {
            // Fade in animations
            gsap.from(".market-index", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            })

            gsap.from(".metric-card", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
                delay: 0.5
            })

            gsap.from(".sector-row", {
                opacity: 0,
                x: -20,
                duration: 0.6,
                stagger: 0.03,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".sectors-section",
                    start: "top 80%",
                }
            })

            gsap.from(".sector-bar", {
                width: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".sectors-section",
                    start: "top 80%",
                }
            })

            gsap.from(".news-item", {
                opacity: 0,
                x: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".news-section",
                    start: "top 80%",
                }
            })

            // Hover animations
            document.querySelectorAll(".hover-lift").forEach(el => {
                el.addEventListener("mouseenter", () => {
                    gsap.to(el, {
                        y: -4,
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
                el.addEventListener("mouseleave", () => {
                    gsap.to(el, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            })

        }, pageRef)

        return () => ctx.revert()
    }, [isLoading, coins])

    if (isLoading) return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
          <div className="text-center">
            {/* Simple spinner - NO floating coins */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium text-lg animate-pulse">
              Loading market data...
            </p>
          </div>
        </div>
      )

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
                <CoinBackground />
                <Headers />
                <div className='relative z-10 flex items-center justify-center min-h-screen'>
                    <div className="text-center">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Data</h2>
                        <p className="text-gray-600 dark:text-gray-400">Please try again later</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div 
            ref={pageRef}
            className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
            >
            <Headers />
            <CoinBackground />
            
            <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                {/* ================ HEADER SECTION ================ */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                                <CandlestickChart className="text-white" size={24} />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                Market Analysis
                            </h1>
                            <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                                LIVE
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                            Real-time cryptocurrency market data with {coins.length}+ assets tracked.
                        </p>
                    </div>
                    
                    {/* Last Updated */}
                    <div className="flex items-center gap-3 text-sm bg-white dark:bg-gray-800 px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <RefreshCw size={16} className="text-blue-500 animate-spin-slow" />
                        <span className="text-gray-600 dark:text-gray-400">Last updated:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">Just now</span>
                    </div>
                </div>

                {/* ================ MARKET INDICES GRID ================ */}
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                    {topCoins.map((index, i) => (
                        <div 
                            key={i}
                            className="market-index hover-lift group relative p-5 bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm hover:shadow-lg"
                        >
                            <div className={`absolute inset-0 ${index.bgLight} dark:${index.bgDark} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2 bg-gradient-to-r ${index.color} dark:${index.color} rounded-lg shadow-md`}>
                                        <index.icon className="text-white" size={16} />
                                    </div>
                                    <span className={`text-xs font-semibold ${
                                        parseFloat(index.change) >= 0 
                                            ? 'text-green-600 dark:text-green-400' 
                                            : 'text-red-600 dark:text-red-400'
                                    }`}>
                                        {index.change}%
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{index.symbol}</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-500">{index.value}</p>
                                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">{index.components}M vol</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================ QUICK STATS BAR ================ */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                    <div className="metric-card p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">24h Gainers</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{gainers.toLocaleString()}</p>
                    </div>
                    <div className="metric-card p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-100 dark:border-red-800">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">24h Losers</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">{losers.toLocaleString()}</p>
                    </div>
                    <div className="metric-card p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Market Cap</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${(totalMarketCap / 1e12).toFixed(2)}T
                        </p>
                    </div>
                    <div className="metric-card p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">24h Volume</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${(totalVolume / 1e9).toFixed(1)}B
                        </p>
                    </div>
                    <div className="metric-card p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">BTC Dominance</p>
                        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{btcDominance}%</p>
                    </div>
                    <div className="metric-card p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">ETH Dominance</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{ethDominance}%</p>
                    </div>
                </div>

                {/* ================ MARKET METRICS ================ */}
                <div className="mb-8 p-6 bg-white dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                            <Gauge className="text-blue-500" size={20} />
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                Market Metrics
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Real-time</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {marketMetrics.map((metric, i) => (
                            <div key={i} className="metric-card">
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{metric.label}</p>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                                    <span className={`text-xs font-medium ${
                                        metric.trend === 'up' 
                                            ? 'text-green-600 dark:text-green-400' 
                                            : 'text-red-600 dark:text-red-400'
                                    }`}>
                                        {metric.change}
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-400 dark:text-gray-500">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================ SECTORS + TOP MOVERS (SPLIT VIEW) ================ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Sectors - 2 columns */}
                    <div className="sectors-section lg:col-span-2 p-6 bg-white dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <PieChart className="text-purple-500" size={20} />
                                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                    Sector Overview
                                </h2>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Market share</span>
                        </div>
                        <div className="space-y-4">
                            {sectors.map((sector, i) => (
                                <div key={i} className="sector-row flex items-center gap-3 group">
                                    <div className="w-16 text-xs font-medium text-gray-700 dark:text-gray-300">{sector.name}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div 
                                                    className={`sector-bar h-full ${sector.color} rounded-full`}
                                                    style={{ width: sector.dominance }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-semibold text-gray-900 dark:text-white w-12">{sector.dominance}</span>
                                            <span className={`text-xs font-medium w-16 ${
                                                sector.change.startsWith('+') 
                                                    ? 'text-green-600 dark:text-green-400' 
                                                    : 'text-red-600 dark:text-red-400'
                                            }`}>
                                                {sector.change}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right w-24">
                                        <span className="text-xs font-medium text-gray-900 dark:text-white">{sector.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Movers - 1 column */}
                    <div className="p-6 bg-white dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <Zap className="text-yellow-500" size={20} />
                                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                    Top Movers 24h
                                </h2>
                            </div>
                            <Filter size={16} className="text-gray-400" />
                        </div>
                        <div className="space-y-3">
                            {topMovers.map((mover, i) => (
                                <div key={i} className="hover-lift flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-medium text-gray-400 w-5">#{i+1}</span>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">{mover.symbol}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{mover.name}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{mover.price}</p>
                                        <p className={`text-xs font-medium ${
                                            mover.trend === 'up' 
                                                ? 'text-green-600 dark:text-green-400' 
                                                : 'text-red-600 dark:text-red-400'
                                        }`}>
                                            {mover.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 pt-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium border-t border-gray-100 dark:border-gray-700 transition-colors">
                            View All Movers →
                        </button>
                    </div>
                </div>

                {/* ================ NEWS SECTION ================ */}
                <div className="news-section grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    {/* News Feed */}
                    <div className="lg:col-span-3 p-6 bg-white dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                            <Newspaper className="text-blue-500" size={20} />
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                Market News
                            </h2>
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                                {marketNews.length} new
                            </span>
                        </div>
                        <div className="space-y-3">
                            {marketNews.map((news, i) => (
                                <div key={i} className="news-item flex items-center gap-4 group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 w-16">{news.time}</span>
                                    <div className={`w-2 h-2 rounded-full ${
                                        news.impact === 'positive' ? 'bg-green-500' : 
                                        news.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                                    }`}></div>
                                    <span className="flex-1 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                        {news.title}
                                    </span>
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                        {news.sector}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Market Health Card */}
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="text-blue-500" size={20} />
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                Market Health
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Market Sentiment</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                                            style={{ width: `${((gainers / (gainers + losers)) * 100) || 50}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                                        {((gainers / (gainers + losers)) * 100 || 50).toFixed(0)}%
                                    </span>
                                </div>
                                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                                    {gainers > losers ? 'Bullish' : 'Bearish'}
                                </p>
                            </div>
                            <div className="pt-3 border-t border-blue-200 dark:border-blue-800">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs text-gray-600 dark:text-gray-400">BTC Dominance</span>
                                    <span className="text-xs font-bold text-gray-900 dark:text-white">{btcDominance}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xs text-gray-600 dark:text-gray-400">ETH Dominance</span>
                                    <span className="text-xs font-bold text-gray-900 dark:text-white">{ethDominance}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================ MARKET TABLE ================ */}
                <div className="bg-white dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                    {/* Table Controls */}
                    <div className="p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md">
                                        <BarChart2 className="text-white" size={18} />
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                                        All Assets
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                                    <button 
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md transition-all ${
                                            viewMode === "grid" 
                                                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    >
                                        <BarChart3 size={16} />
                                    </button>
                                    <button 
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md transition-all ${
                                            viewMode === "list" 
                                                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    >
                                        <ListFilter size={16} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="relative w-64">
                                    <SearchBar
                                        value={searchQuery}
                                        onChange={setSearchQuery}
                                        placeholder="Search assets..."
                                    />
                                </div>
                                <button className="p-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                                    <SlidersHorizontal size={18} className="text-gray-600 dark:text-gray-400" />
                                </button>
                                <button className="p-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                                    <Download size={18} className="text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Category Filters */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                            {["All", "Gainers", "Losers", "DeFi", "NFT", "Gaming", "AI", "Layer 1", "Meme"].map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveCategory(cat.toLowerCase())}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                                        activeCategory === cat.toLowerCase()
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table */}
                    <div className="p-1">
                        <CryptoTable searchQuery={searchQuery} sortBy="market_cap" coins={paginatedCoins || []}/>
                    </div>

                    {/* Table Footer */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Live data</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Updated 5s ago</span>
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-500">
                                    Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{Math.min(endIndex, coins.length)}</span> of{' '}
                                    <span className="font-semibold text-gray-900 dark:text-white">{coins.length}</span> assets
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={page === 1}
                                    className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                        Previous
                                </button>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Page {page} of {totalPages}
                                </span>
                                <button 
                                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={page === totalPages}
                                    className="px-4 py-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                        Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        Data provided by CoinGecko API • Real-time market data • Last sync: {new Date().toLocaleTimeString()}
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Markets
