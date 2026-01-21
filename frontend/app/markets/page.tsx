"use client"
import { useState } from 'react'
import React from 'react'
import Headers from '@/components/ui/headers'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import { BarChart3, TrendingUp, TrendingDown, Globe, DollarSign, Activity, PieChart, Filter, ChevronRight, Sparkles, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import SearchBar from '@/components/search-bar'
import { CryptoTable } from '@/components/crybtoTable'

const Markets = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("all")
    const [timeframe, setTimeframe] = useState("24h")

    const marketStats = [
        {
            label: "Total Market Cap",
            value: "$2.41T",
            change: "+1.2%",
            changeValue: "+$28.6B",
            icon: Globe,
            color: "bg-blue-500",
            trend: "up",
            description: "Total cryptocurrency market valuation"
        },
        {
            label: "24h Volume",
            value: "$84.2B",
            change: "-5.4%",
            changeValue: "-$4.8B",
            icon: Activity,
            color: "bg-emerald-500",
            trend: "down",
            description: "24-hour trading volume across all markets"
        },
        {
            label: "BTC Dominance",
            value: "52.4%",
            change: "+0.1%",
            changeValue: "+0.12%",
            icon: PieChart,
            color: "bg-orange-500",
            trend: "up",
            description: "Bitcoin's share of total market cap"
        },
    ]

    const marketFilters = [
        { label: "All Assets", value: "all", count: 12450 },
        { label: "Gainers", value: "gainers", count: 8324 },
        { label: "Losers", value: "losers", count: 2894 },
        { label: "Top Volume", value: "volume", count: 150 },
        { label: "New Listings", value: "new", count: 42 },
    ]

    const timeframes = [
        { label: "24H", value: "24h" },
        { label: "7D", value: "7d" },
        { label: "30D", value: "30d" },
        { label: "90D", value: "90d" },
        { label: "1Y", value: "1y" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
            <Headers />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-8 ">
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                                <BarChart3 className="text-white" size={24} />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Crypto Markets
                            </h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                            Real-time market data, performance metrics, and comprehensive analysis of the cryptocurrency ecosystem.
                        </p>
                    </div>
                </div>

                {/* Market Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    {marketStats.map((stat, index) => (
                        <Card
                            key={index}
                            className="group border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Header with Icon and Trend */}
                            <div className="px-6">
                                <div className="flex items-start justify-between">
                                    <div className={`p-3 ${stat.color} rounded-xl shadow-md`}>
                                        <stat.icon className="text-white" size={22} />
                                    </div>
                                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight className="text-green-600 dark:text-green-400" size={16} />
                                        ) : (
                                            <ArrowDownRight className="text-red-600 dark:text-red-400" size={16} />
                                        )}
                                        <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <CardContent className="px-6">
                                <CardTitle className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">
                                    {stat.label}
                                </CardTitle>
                                <CardDescription className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {stat.value}
                                </CardDescription>

                                <div className="flex items-center justify-between">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        {stat.changeValue} {stat.trend === 'up' ? 'increase' : 'decrease'}
                                    </p>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">Today</span>
                                </div>
                            </CardContent>

                            {/* Footer */}
                            <CardFooter className="px-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {stat.description}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Quick Stats Bar */}
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">24h Gainers</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">8,324</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">24h Losers</p>
                            <p className="text-2xl font-bold text-red-600 dark:text-red-400">2,894</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Total Exchanges</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">782</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Active Markets</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">47,328</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Fear & Greed</p>
                            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">72</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">BTC 52W High</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">$69K</p>
                        </div>
                    </div>
                </div>

                {/* Controls Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Search Bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <SearchBar
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search by name, symbol, or market cap..."
                                />
                                {/* <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} /> */}
                            </div>
                        </div>

                        {/* Timeframe Selector */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm hidden md:block">
                                Timeframe:
                            </span>
                            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                                {timeframes.map((tf) => (
                                    <button
                                        key={tf.value}
                                        onClick={() => setTimeframe(tf.value)}
                                        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${timeframe === tf.value  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        {tf.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Table Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                    {/* Table Header */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                                    <Sparkles className="text-white" size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Market Overview
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                                        Ranked by market capitalization • Real-time updates
                                    </p>
                                </div>
                            </div>
                            <button className="hidden md:flex items-center gap-2 px-4 py-2.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg text-sm font-semibold transition-colors">
                                Export Data
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Table Content */}
                    <div className="p-1">
                        <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
                            <CryptoTable searchQuery={searchQuery} sortBy="market_cap" />
                        </div>
                    </div>

                    {/* Table Footer */}
                    <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Bullish (24h)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Bearish (24h)</span>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">New Listings</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                                    Load More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Insights */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Activity className="text-blue-500" size={20} />
                            Market Insights
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Total market cap increased by 1.2% in the last 24 hours</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Bitcoin dominance continues to rise, currently at 52.4%</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span>24h trading volume decreased by 5.4% to $84.2B</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Data Updates</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400 text-sm">Last Price Update</span>
                                <span className="text-gray-900 dark:text-white font-medium">Just now</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400 text-sm">Market Cap Refresh</span>
                                <span className="text-gray-900 dark:text-white font-medium">Every 5 mins</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-400 text-sm">API Status</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">Live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Markets