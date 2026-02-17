// "use client"

// import { useState, useEffect } from "react"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// const PriceChart = ( ) => {

//     const [mounted, setMounted] = useState(false)
//     const data = [
//         { time: "00:00", price: 42500 },
//         { time: "04:00", price: 42800 },
//         { time: "08:00", price: 41900 },
//         { time: "12:00", price: 43200 },
//         { time: "16:00", price: 43800 },
//         { time: "20:00", price: 44200 },
//         { time: "24:00", price: 44500 },
//     ]

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     return (
//         <div className="w-full h-120 bg-card/50 backdrop-blur-sm p-4 rounded-lg gap-6 flex flex-col shadow-lg">
//             <div className="flex items-center justify-between mb-10">
//                 <div >
//                     <h3> 
//                         <span className="text-lg font-bold text-blue-300">Bitcoin Price 24h</span>
//                         <p className="text-sm text-gray-200 my-1">Real-time market movement</p>
//                     </h3>
//                 </div>
//                 <div className=" px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 text-success font-semibold text-sm">
//                     +3.5%
//                 </div>
//             </div>
//             {
//                 mounted && (
//                     <ResponsiveContainer width={"100%"} height={"100%"} className="relative bottom-10">
//                         <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//                             <CartesianGrid strokeDasharray="3 5" stroke="#443" />
//                             <XAxis dataKey="time" stroke="#ffff" />
//                             <YAxis dataKey="price" stroke="#ffff" />
//                             <Tooltip contentStyle={{ backgroundColor: '#222', borderColor: '#444' }} itemStyle={{ color: '#fff' }} />
//                             <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} dot={false} />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 )}
//         </div>
//     )
// }

// export default PriceChart

"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown, Clock } from "lucide-react"

interface PriceChartProps {
  sparklineData?: number[] // Array of price points for the last 24 hours
  currentPrice?: number
  priceChange?: number
}

const PriceChart = ({ 
  sparklineData = [], 
  currentPrice = 68840, 
  priceChange = 2.12 
}: PriceChartProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Format sparkline data for chart
  const chartData = sparklineData.map((price, index) => ({
    time: `${index}:00`,
    price: price
  }))

  // If no sparkline data, use sample data
  const data = chartData.length ? chartData : [
    { time: "00:00", price: 67494 },
    { time: "04:00", price: 65868 },
    { time: "08:00", price: 66307 },
    { time: "12:00", price: 66608 },
    { time: "16:00", price: 66330 },
    { time: "20:00", price: 66948 },
    { time: "24:00", price: 67382 },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bitcoin Price</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last 24 hours</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatPrice(currentPrice)}
          </span>
          <div className={`flex items-center gap-1 mt-1 ${
            priceChange >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {priceChange >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="font-semibold">{priceChange >= 0 ? '+' : ''}{priceChange}%</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      {mounted && (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#000000"  opacity={0.2} />
              <XAxis dataKey="time" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis 
                stroke="#6b7280" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Price']}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={priceChange >= 0 ? '#10b981' : '#ef4444'}
                strokeWidth={2.5}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default PriceChart