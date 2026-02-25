"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Headers from '@/components/ui/headers'
import CoinBackground from '@/components/coinBackground'
import PriceChart from '@/components/priceChart'
import { useGetCryptosQuery } from '@/app/services/cryptoApi'
import { useWatchlist } from '@/app/hooks/useWatchlist'
import { 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Twitter, 
  MessageCircle, 
  // Reddit,
  ChevronLeft,
  DollarSign,
  BarChart3,
  Activity,
  Clock,
  ExternalLink,
  Copy,
  CheckCheck
} from 'lucide-react'

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
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
  return `$${num.toFixed(2)}`
}

const formatNumber = (value: string | number) => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
  return num.toLocaleString()
}

const CoinDetails = () => {
  const params = useParams()
  const coinId = params.id as string

  console.log("Coin ID from URL: ", coinId) // Debugging log
  console.log("Coin params: ", params) // Debugging log
  
  const [copied, setCopied] = useState(false)
  const { data, isLoading } = useGetCryptosQuery(100)
  const { toggleWatchlist, isInWatchlist } = useWatchlist()
  
  const coins = data?.data?.coins || []
  const coin = coins.find(c => (c.uuid || c.id) === coinId)
  
  // Generate sparkline data if not available
  const generateSparkline = () => {
    const data = []
    const basePrice = parseFloat(coin?.price || '68000')
    for (let i = 0; i < 24; i++) {
      const change = (Math.random() - 0.5) * 0.02 // +/- 2%
      data.push(basePrice * (1 + change))
    }
    return data
  }

  const sparklineData = coin?.sparkline || generateSparkline()
  const priceChange = parseFloat(coin?.change || '2.5')
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        {/* <CoinBackground /> */}
        <Headers />
        <div className='flex items-center justify-center min-h-screen'>
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    )
  }

  if (!coin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        {/* <CoinBackground /> */}
        <Headers />
        <div className='flex items-center justify-center min-h-screen'>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Coin not found</h2>
            <Link href="/markets" className="mt-4 inline-block text-blue-500 hover:underline">
              Back to Markets
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const inWatchlist = isInWatchlist(coinId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* <CoinBackground /> */}
      <Headers />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        
        {/* Back Button */}
        <Link 
          href="/markets" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Markets</span>
        </Link>

        {/* Coin Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-yellow-500 to-amber-500 p-1">
                {coin.iconUrl ? (
                  <img 
                    src={coin.iconUrl} 
                    alt={coin.name}
                    className="w-full h-full object-contain bg-white rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {coin.symbol?.substring(0, 2)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {coin.name}
                  </h1>
                  <span className="text-xl text-gray-500 dark:text-gray-400">
                    {coin.symbol}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    Rank #{coin.rank}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} className="text-green-500" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(coin.price || 0)}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                    priceChange >= 0 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-600' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-600'
                  }`}>
                    {priceChange >= 0 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                    <span className="font-semibold">
                      {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                    </span>
                  </div>
                  <button
                    onClick={() => toggleWatchlist(coinId)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Star 
                      size={18} 
                      className={inWatchlist ? "fill-yellow-400 text-yellow-400" : ""} 
                    />
                    <span>{inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {coin.websiteUrl && (
                <a 
                  href={coin.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Globe size={18} />
                </a>
              )}
              {coin.twitterUrl && (
                <a 
                  href={coin.twitterUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
              {coin.redditUrl && (
                <a 
                  href={coin.redditUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Reddit size={18} />
                </a>
              )}
              {coin.discordUrl && (
                <a 
                  href={coin.discordUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="mb-6">
          <PriceChart 
            sparklineData={sparklineData}
            currentPrice={parseFloat(coin.price || '0')}
            priceChange={priceChange}
            coinName={coin.name}
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Market Cap</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatLargeNumber(coin.marketCap || 0)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">24h Volume</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatLargeNumber(coin['24hVolume'] || coin.volume || 0)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Circulating Supply</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatNumber(coin.circulatingSupply || 0)} {coin.symbol}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">All Time High</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatPrice(coin.allTimeHigh?.price || coin.price * 1.5)}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {coin.allTimeHigh?.timestamp 
                ? new Date(coin.allTimeHigh.timestamp).toLocaleDateString() 
                : 'N/A'}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">About {coin.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {coin.description || `${coin.name} (${coin.symbol}) is a cryptocurrency that aims to revolutionize the digital asset space. 
              With a market cap of ${formatLargeNumber(coin.marketCap || 0)} and 24h volume of ${formatLargeNumber(coin['24hVolume'] || 0)}, 
              it's one of the top cryptocurrencies in the market. The current price is ${formatPrice(coin.price || 0)} with a 
              ${priceChange >= 0 ? '+' : ''}${priceChange.toFixed(2)}% change in the last 24 hours.`}
            </p>
            
            {/* Contract Address if available */}
            {coin.contractAddress && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Contract Address</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                    {coin.contractAddress}
                  </code>
                  <button
                    onClick={() => copyToClipboard(coin.contractAddress)}
                    className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {copied ? <CheckCheck size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Market Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Market Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">Price</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(coin.price || 0)}
                </span>
              </div>
              
              <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">24h Change</span>
                <span className={`font-medium ${
                  priceChange >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                </span>
              </div>
              
              <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">24h High</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(coin.price * (1 + Math.abs(priceChange)/100))}
                </span>
              </div>
              
              <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">24h Low</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(coin.price * (1 - Math.abs(priceChange)/100))}
                </span>
              </div>
              
              <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">Volume/Market Cap</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {((coin['24hVolume'] || 0) / (coin.marketCap || 1) * 100).toFixed(2)}%
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">All Time High</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatPrice(coin.allTimeHigh?.price || coin.price * 1.5)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CoinDetails