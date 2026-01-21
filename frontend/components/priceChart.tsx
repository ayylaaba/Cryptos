"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const PriceChart = () => {

    const [mounted, setMounted] = useState(false)
    const data = [
        { time: "00:00", price: 42500 },
        { time: "04:00", price: 42800 },
        { time: "08:00", price: 41900 },
        { time: "12:00", price: 43200 },
        { time: "16:00", price: 43800 },
        { time: "20:00", price: 44200 },
        { time: "24:00", price: 44500 },
    ]

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="w-full h-120 bg-card/50 backdrop-blur-sm p-4 rounded-lg gap-6 flex flex-col shadow-lg">
            <div className="flex items-center justify-between mb-10">
                <div >
                    <h3> 
                        <span className="text-lg font-bold text-blue-300">Bitcoin Price 24h</span>
                        <p className="text-sm text-gray-200 my-1">Real-time market movement</p>
                    </h3>
                </div>
                <div className=" px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 text-success font-semibold text-sm">
                    +3.5%
                </div>
            </div>
            {
                mounted && (
                    <ResponsiveContainer width={"100%"} height={"100%"} className="relative bottom-10">
                        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 5" stroke="#443" />
                            <XAxis dataKey="time" stroke="#ffff" />
                            <YAxis dataKey="price" stroke="#ffff" />
                            <Tooltip contentStyle={{ backgroundColor: '#222', borderColor: '#444' }} itemStyle={{ color: '#fff' }} />
                            <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                )}
        </div>
    )
}

export default PriceChart
