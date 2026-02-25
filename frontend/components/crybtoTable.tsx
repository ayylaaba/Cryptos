// "use client"

// import { useState, useEffect } from "react"
// import { TrendingUp, TrendingDown, Star } from "lucide-react"
// import Link from 'next/link'

// interface CryptoTableProps {
//   searchQuery: string
//   sortBy: string
//   coins: any[]
//   timeframe?: string
// }

// // ================ HELPER FUNCTIONS ================
// const formatPrice = (price: string | number) => {
//   const num = typeof price === 'string' ? parseFloat(price) : price
//   if (num < 0.01) return `$${num.toFixed(6)}`
//   if (num < 1) return `$${num.toFixed(4)}`
//   if (num < 100) return `$${num.toFixed(2)}`
//   return `$${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
// }

// const formatLargeNumber = (value: string | number) => {
//   const num = typeof value === 'string' ? parseFloat(value) : value
//   if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
//   if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
//   if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
//   if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
//   return `$${num.toFixed(2)}`
// }

// const formatSupply = (supply: string | number) => {
//   const num = typeof supply === 'string' ? parseFloat(supply) : supply
//   if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
//   if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
//   if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
//   return num.toLocaleString()
// }

// export function CryptoTable({ searchQuery, sortBy, coins = [] }: CryptoTableProps) {
//   const [watchlist, setWatchlist] = useState<string[]>([])

//   // Load watchlist from localStorage on mount
//   useEffect(() => {
//     const loadWatchlist = () => {
//       try {
//         const savedWatchlist = localStorage.getItem('crypto-watchlist')
//         if (savedWatchlist) {
//           const parsed = JSON.parse(savedWatchlist)
//           setWatchlist(parsed)
//           console.log('📋 Loaded watchlist from storage:', parsed)
//         }
//       } catch (error) {
//         console.error('Error loading watchlist:', error)
//       }
//     }
    
//     loadWatchlist()
    
//     // Listen for storage changes (in case watchlist is updated in another tab)
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === 'crypto-watchlist') {
//         loadWatchlist()
//       }
//     }
    
//     window.addEventListener('storage', handleStorageChange)
//     return () => window.removeEventListener('storage', handleStorageChange)
//   }, [])

//   // Save watchlist to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem('crypto-watchlist', JSON.stringify(watchlist))
//       console.log('💾 Saved watchlist to storage:', watchlist)
      
//       // Dispatch a custom event to notify other components
//       window.dispatchEvent(new CustomEvent('watchlistUpdated', { detail: watchlist }))
//     } catch (error) {
//       console.error('Error saving watchlist:', error)
//     }
//   }, [watchlist])

//   // Filter and sort coins
//   const filteredCoins = coins
//     .filter((coin) =>
//       coin?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       coin?.symbol?.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price':
//           return parseFloat(b.price || '0') - parseFloat(a.price || '0')
//         case '24h_change':
//           return parseFloat(b.change || '0') - parseFloat(a.change || '0')
//         case 'volume':
//           return parseFloat(b['24hVolume'] || b.volume || '0') - parseFloat(a['24hVolume'] || a.volume || '0')
//         default:
//           return parseFloat(b.marketCap || '0') - parseFloat(a.marketCap || '0')
//       }
//     })
//     .slice(0, 10)

//   const toggleWatchlist = (coinId: string) => {
//     setWatchlist(prev => {
//       const newWatchlist = prev.includes(coinId)
//         ? prev.filter(id => id !== coinId)
//         : [...prev, coinId]
      
//       console.log(`🔄 Toggled ${coinId}:`, newWatchlist)
//       return newWatchlist
//     })
//   }

//   return (
//     <div className="rounded-lg border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-border/30 bg-primary/5">
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">24h Change</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Market Cap</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">24h Volume</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Circulating Supply</th>
//               <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Watchlist</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCoins.length > 0 ? (
//               filteredCoins.map((coin, idx) => {
//                 const coinId = coin.uuid || coin.id
//                 const isInWatchlist = watchlist.includes(coinId)
                
//                 return (
//                   <tr
//                     key={coinId}
//                     className="border-b border-border/20 hover:bg-primary/5 transition-all duration-200 group animate-slide-in"
//                     style={{ animationDelay: `${idx * 0.05}s` }}
//                   >
//                     <td className="px-6 py-4 text-sm text-foreground font-medium">
//                       #{coin.rank || coin.marketCapRank || idx + 1}
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm">
//                       <Link href={`/coin/${coinId}`} className="flex items-center gap-3 group/link">
//                         <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
//                           {coin.iconUrl ? (
//                             <img 
//                               src={coin.iconUrl} 
//                               alt={coin.name}
//                               className="w-6 h-6 object-contain"
//                             />
//                           ) : (
//                             <span className="text-xs font-bold text-primary">
//                               {coin.symbol?.substring(0, 2) || '?'}
//                             </span>
//                           )}
//                         </div>
//                         <div>
//                           <p className="font-medium text-foreground group-hover/link:text-primary transition-colors">
//                             {coin.name}
//                           </p>
//                           <p className="text-xs text-muted-foreground">
//                             {coin.symbol}
//                           </p>
//                         </div>
//                       </Link>
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm font-medium text-foreground">
//                       {formatPrice(coin.price || 0)}
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm">
//                       <div
//                         className={`flex items-center gap-1 font-semibold px-3 py-1 rounded-lg w-fit ${
//                           parseFloat(coin.change || '0') >= 0 
//                             ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
//                             : "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
//                         }`}
//                       >
//                         {parseFloat(coin.change || '0') >= 0 ? (
//                           <TrendingUp size={16} />
//                         ) : (
//                           <TrendingDown size={16} />
//                         )}
//                         {parseFloat(coin.change || '0') >= 0 ? '+' : ''}
//                         {parseFloat(coin.change || '0').toFixed(2)}%
//                       </div>
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm text-foreground">
//                       {formatLargeNumber(coin.marketCap || 0)}
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm text-foreground">
//                       {formatLargeNumber(coin['24hVolume'] || coin.volume || 0)}
//                     </td>
                    
//                     <td className="px-6 py-4 text-sm text-foreground">
//                       {formatSupply(coin.circulatingSupply || 0)}
//                     </td>
                    
//                     <td className="px-6 py-4 text-center">
//                       <button
//                         onClick={() => toggleWatchlist(coinId)}
//                         className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary/20 transition-all hover:scale-110 group/btn"
//                         title={isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
//                       >
//                         <Star
//                           size={18}
//                           className={`transition-all ${
//                             isInWatchlist
//                               ? "fill-yellow-400 text-yellow-400 animate-pulse"
//                               : "text-gray-400 group-hover/btn:text-yellow-400"
//                           }`}
//                         />
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               })
//             ) : (
//               <tr>
//                 <td colSpan={8} className="px-6 py-12 text-center">
//                   <div className="text-muted-foreground flex flex-col items-center">
//                     <p className="text-lg font-medium">No cryptocurrencies found</p>
//                     <p className="text-sm mt-1">
//                       {searchQuery 
//                         ? `No results for "${searchQuery}"` 
//                         : "Loading market data..."}
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

"use client"

import { TrendingUp, TrendingDown, Star } from "lucide-react"
import Link from 'next/link'
import { useWatchlist } from '@/app/hooks/useWatchlist'
import { useEffect } from "react"


interface CryptoTableProps {
  searchQuery: string
  sortBy: string
  coins: any[]
}

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

const formatSupply = (supply: string | number) => {
  const num = typeof supply === 'string' ? parseFloat(supply) : supply
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
  return num.toLocaleString()
}

export function CryptoTable({ searchQuery, sortBy, coins = [] }: CryptoTableProps) {
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  useEffect(() => {
    if (coins.length > 0) {
      console.log('🔍 First coin structure:', coins[0]);
      console.log('🔍 Coin ID example:', coins[0].uuid || coins[0].id);
    }
  }, [coins]);

  // Filter and sort coins
  const filteredCoins = coins
    .filter((coin) =>
      coin?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin?.symbol?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(b.price || '0') - parseFloat(a.price || '0')
        case '24h_change':
          return parseFloat(b.change || '0') - parseFloat(a.change || '0')
        case 'volume':
          return parseFloat(b['24hVolume'] || b.volume || '0') - parseFloat(a['24hVolume'] || a.volume || '0')
        default:
          return parseFloat(b.marketCap || '0') - parseFloat(a.marketCap || '0')
      }
    })
    .slice(0, 10)

  return (
    <div className="rounded-lg border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 bg-primary/5">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">24h Change</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Market Cap</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">24h Volume</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Circulating Supply</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Watchlist</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin, idx) => {
                const coinId = coin.uuid || coin.id
                const inWatchlist = isInWatchlist(coinId)
                
                return (
                  <tr
                    key={coinId}
                    className="border-b border-border/20 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <td className="px-6 py-4 text-sm text-foreground font-medium">
                      #{coin.rank || coin.marketCapRank || idx + 1}
                    </td>
                    
                    <td className="px-6 py-4 text-sm">
                      <Link href={`/coin/${coinId}`} className="flex items-center gap-3 group/link">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                          {coin.iconUrl ? (
                            <img 
                              src={coin.iconUrl} 
                              alt={coin.name}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <span className="text-xs font-bold text-primary">
                              {coin.symbol?.substring(0, 2) || '?'}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover/link:text-primary">
                            {coin.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{coin.symbol}</p>
                        </div>
                      </Link>
                    </td>
                    
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {formatPrice(coin.price || 0)}
                    </td>
                    
                    <td className="px-6 py-4 text-sm">
                      <div
                        className={`flex items-center gap-1 font-semibold px-3 py-1 rounded-lg w-fit ${
                          parseFloat(coin.change || '0') >= 0 
                            ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
                            : "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {parseFloat(coin.change || '0') >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {parseFloat(coin.change || '0') >= 0 ? '+' : ''}{parseFloat(coin.change || '0').toFixed(2)}%
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 text-sm text-foreground">
                      {formatLargeNumber(coin.marketCap || 0)}
                    </td>
                    
                    <td className="px-6 py-4 text-sm text-foreground">
                      {formatLargeNumber(coin['24hVolume'] || coin.volume || 0)}
                    </td>
                    
                    <td className="px-6 py-4 text-sm text-foreground">
                      {formatSupply(coin.circulatingSupply || 0)}
                    </td>
                    
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggleWatchlist(coinId)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary/20 transition-all hover:scale-110"
                      >
                        <Star
                          size={18}
                          className={inWatchlist 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-400 hover:text-yellow-400"
                          }
                        />
                      </button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center">
                  <p className="text-lg font-medium">No cryptocurrencies found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

