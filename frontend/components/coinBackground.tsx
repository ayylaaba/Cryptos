"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'


const CoinBackground = () => {
    const coins = [
        "/currencies/bitcoin.png",
        "/currencies/bnb.png",
        "/currencies/dogCoin.png",
        "/currencies/usdt.png",
        "/currencies/shiba.png",
    ]
    type CoinItem = {
        id: number
        src: string
        left: string
        top: string
        delay: string
    }
    const [items, setItems] = useState<CoinItem[]>([])
    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            src: coins[Math.floor(Math.random() * coins.length)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${i * 0.1}s`,
        }))
        setItems(generated)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
          {items.map((coin) => (
            <Image
              key={coin.id}
              src={coin.src}
              alt="coin"
              width={24}
              height={24}
              className="floating-coin absolute opacity-70 dark:opacity-80"
              style={{
                left: coin.left,
                top: coin.top,
                animationDelay: coin.delay,
              }}
            />
          ))}
        </div>
  )
}

export default CoinBackground
