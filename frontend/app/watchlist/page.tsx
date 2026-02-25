"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Headers from '@/components/ui/headers'
import CoinBackground from '@/components/coinBackground'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { 
  Star, TrendingUp, TrendingDown, Trash2, RefreshCw,
  ArrowUpRight, ArrowDownRight, ChevronRight
} from 'lucide-react'
import { useWatchlist } from '@/app/hooks/useWatchlist'

// ================ HELPER FUNCTIONS ================
const formatPrice = (price: string | number) => {
  const num = typeof price === 'string' ? parseFloat(price) : price
  if (num < 0.01) return `$${num.toFixed(6)}`
  if (num < 1) return `$${num.toFixed(4)}`
  if (num < 100) return `$${num.toFixed(2)}`
  return `$${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const formatLargeNumber = (value: string | number) => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
  return `$${num.toFixed(2)}`
}

const Watchlist = () => {
  const { watchlist, removeFromWatchlist, toggleWatchlist } = useWatchlist()
  const { data, isLoading } = useGetCryptosQuery(100)
  
  const coins = data?.data?.coins || []
  
  // Get watchlist coins
  const watchlistCoins = coins
    .filter(coin => {
      const coinId = coin.uuid || coin.id
      return watchlist.includes(coinId)
    })
    .map(coin => ({
      ...coin,
      id: coin.uuid || coin.id,
      price: parseFloat(coin.price) || 0,
      change: parseFloat(coin.change) || 0,
      marketCap: parseFloat(coin.marketCap) || 0,
      volume: parseFloat(coin['24hVolume']) || 0,
    }))

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
            Loading your favorite crypto assets...
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* <CoinBackground /> */}
      <Headers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg">
            <Star className="text-white" size={24} fill="white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Watchlist
          </h1>
          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
            {watchlistCoins.length} {watchlistCoins.length === 1 ? 'asset' : 'assets'}
          </span>
        </div>

        {watchlistCoins.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlistCoins.map((coin) => (
              <div
                key={coin.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg transition-all"
              >
                {/* Header with Rank and Remove */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-yellow-400 dark:bg-gray-700 px-2 py-1 rounded">
                    #{coin.rank}
                  </span>
                  <button
                    onClick={() => removeFromWatchlist(coin.id)}
                    className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>

                {/* Coin Info */}
                <Link href={`/coin/${coin.id}`} className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={coin.iconUrl} alt={coin.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white hover:text-yellow-600">
                      {coin.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{coin.symbol}</p>
                  </div>
                </Link>

                {/* Price and Change */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(coin.price)}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                    coin.change >= 0 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-600' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-600'
                  }`}>
                    {coin.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span className="font-semibold">
                      {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* Market Cap and Volume */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Market Cap</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {formatLargeNumber(coin.marketCap)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">24h Volume</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {formatLargeNumber(coin.volume)}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <Link href={`/coin/${coin.id}`} className="block mt-4">
                  <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg hover:shadow-lg transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mb-6">
              <Star size={48} className="text-white" fill="white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Your watchlist is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start tracking your favorite cryptocurrencies by clicking the star icon in the markets page.
            </p>
            <Link href="/markets">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg hover:shadow-lg transition-all">
                Explore Markets
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

export default Watchlist

