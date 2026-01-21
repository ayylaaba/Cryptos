"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, Star } from "lucide-react"

interface CryptoTableProps {
  searchQuery: string
  sortBy: string
}

export function CryptoTable({ searchQuery, sortBy }: CryptoTableProps) {
  const cryptos = [
    {
      id: 1,
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$44,523.00",
      change24h: 3.5,
      marketCap: "$876.5B",
      volume24h: "$28.4B",
      circulating: "21.0M",
    },
    {
      id: 2,
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,847.50",
      change24h: 2.8,
      marketCap: "$342.1B",
      volume24h: "$14.2B",
      circulating: "120.1M",
    },
    {
      id: 3,
      rank: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      change24h: 0.1,
      marketCap: "$112.3B",
      volume24h: "$36.5B",
      circulating: "112.3B",
    },
    {
      id: 4,
      rank: 4,
      name: "BNB",
      symbol: "BNB",
      price: "$612.45",
      change24h: -1.2,
      marketCap: "$92.8B",
      volume24h: "$1.9B",
      circulating: "151.5M",
    },
    {
      id: 5,
      rank: 5,
      name: "Cardano",
      symbol: "ADA",
      price: "$1.02",
      change24h: 5.3,
      marketCap: "$36.8B",
      volume24h: "$0.8B",
      circulating: "36.0B",
    },
  ]

  const [watchlist, setWatchlist] = useState<number[]>([])

  const filtered = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleWatchlist = (id: number) => {
    setWatchlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))
  }

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
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Circulating</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((crypto, idx) => (
                <tr
                  key={crypto.id}
                  className="border-b border-border/20 hover:bg-primary/5 transition-all duration-200 group animate-slide-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <td className="px-6 py-4 text-sm text-foreground font-medium">#{crypto.rank}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">
                        {crypto.symbol.substring(0, 2)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {crypto.name}
                        </p>
                        <p className="text-xs text-gray-200 dark:text-muted-foreground">{crypto.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{crypto.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <div
                      className={`flex items-center gap-1 font-semibold px-3 py-1 rounded-lg w-fit ${
                        crypto.change24h >= 0 ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {crypto.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {crypto.change24h >= 0 ? "+" : ""}
                      {crypto.change24h}%
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{crypto.marketCap}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{crypto.volume24h}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{crypto.circulating}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleWatchlist(crypto.id)}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary/20 transition-all hover:scale-110 group/btn"
                    >
                    {/* make star yellow after click */}
                        <Star
                            size={18}
                            className={`transition-all ${
                            watchlist.includes(crypto.id)
                                ? "fill-amber-400 text-amber-400 animate-glow-pulse"
                                : "text-muted-foreground group-hover/btn:text-amber-50"
                            }`}
                        />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center">
                  <div className="text-muted-black flex flex-col items-center">
                    <p className="text-lg font-medium">No cryptocurrencies found</p>
                    <p className="text-sm mt-1">Try adjusting your search query</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

