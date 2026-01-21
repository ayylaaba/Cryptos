// "use client"
// import React from 'react'
// import { useState } from 'react'
// import Headers from '@/components/ui/headers'
// import SearchBar from '@/components/search-bar'

// const News = () => {
//     const [searchQuery, setSearchQuery] = useState("")
//     const [selectedCategory, setSelectedCategory] = useState("all")
//     const categories = ["all", "Bitcoin", "Ethereum", "DeFi", "NFTs", "Regulations"]

//     // Mock data - replace with real API calls
//     const news = [
//         {
//             id: 1,
//             title: "Bitcoin Reaches New All-Time High Amid Institutional Investment",
//             category: "Bitcoin",
//             source: "CryptoNews",
//             date: "1 hour ago",
//             image: "/bitcoin-news.png",
//             description:
//                 "Bitcoin has reached a new milestone as institutional investors continue to pour money into the cryptocurrency market.",
//         },
//         {
//             id: 2,
//             title: "Ethereum 2.0 Update Brings Major Performance Improvements",
//             category: "Ethereum",
//             source: "BlockchainToday",
//             date: "3 hours ago",
//             image: "/ethereum-update-concept.png",
//             description:
//                 "The latest Ethereum upgrade delivers significant improvements in transaction speeds and reduced gas fees.",
//         },
//         {
//             id: 3,
//             title: "DeFi Protocols Record $200B Total Value Locked",
//             category: "DeFi",
//             source: "CoinDesk",
//             date: "5 hours ago",
//             image: "/defi-tokens.jpg",
//             description:
//                 "Decentralized Finance platforms have collectively reached a significant milestone in total value locked.",
//         },
//         {
//             id: 4,
//             title: "NFT Market Shows Signs of Recovery",
//             category: "NFTs",
//             source: "ArtBlock",
//             date: "6 hours ago",
//             image: "/nft-marketplace-concept.png",
//             description: "After months of decline, the NFT market is experiencing renewed interest and trading activity.",
//         },
//         {
//             id: 5,
//             title: "New Cryptocurrency Regulations Announced",
//             category: "Regulations",
//             source: "LegalNews",
//             date: "8 hours ago",
//             image: "/crypto-regulation.png",
//             description:
//                 "Regulatory bodies worldwide are implementing new rules to govern the cryptocurrency and digital asset market.",
//         },
//         {
//             id: 6,
//             title: "Layer 2 Solutions Gaining Traction in Web3",
//             category: "DeFi",
//             source: "TechCrypto",
//             date: "10 hours ago",
//             image: "/layer-2-scaling.jpg",
//             description: "Layer 2 scaling solutions continue to see increased adoption among cryptocurrency users.",
//         },
//     ]

//     return (
//         <div className='min-h-screen'>
//             <Headers />
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 ">
//                 <div className='flex flex-col gap-2'>
//                     <h1 className="text-4xl font-bold text-blue-400 mb-3">Cryptocurrency News</h1>
//                     <p className=' text-gray-600 font-medium' > Stay updated with the latest cryptocurrency news and trends.</p>
//                 </div>
//                 <div className='mt-8'>
//                     <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search news..." />
//                 </div>
//                 {/* display categories */}
//                 <div className='flex items-center gap-4 mt-6 overflow-x-auto'>
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setSelectedCategory(category)}
//                             className={`px-4 py-2 rounded-full border ${selectedCategory === category
//                                     ? 'bg-blue-400 text-white border-white'
//                                     :
//                                     'bg-white text-gray-700 border-gray-300 hover:bg-indigo-100'
//                                 } transition-colors whitespace-nowrap`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
//                     {news
//                         .filter((item) =>
//                             (selectedCategory === "all" || item.category === selectedCategory) &&
//                             (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                                 item.description.toLowerCase().includes(searchQuery.toLowerCase()))
//                         )
//                         .map((item) => (
//                             <div key={item.id} className="bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                                 <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//                                 <div className="p-4">
//                                     <h2 className="text-lg font-bold text-black mb-2">{item.title}</h2>
//                                     <p className="text-sm text-gray-700 mb-4">{item.description}</p>
//                                     <div className="flex items-center justify-between text-xs text-gray-500">
//                                         <span>{item.source}</span>
//                                         <span>{item.date}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default News


"use client"
import React, { useState } from 'react'
import Headers from '@/components/ui/headers'
import SearchBar from '@/components/search-bar'
import { 
  Clock, 
  Newspaper, 
  TrendingUp, 
  Bookmark, 
  Share2, 
  ExternalLink, 
  Filter, 
  Sparkles,
  Calendar,
  User,
  Eye,
  MessageSquare,
  BookOpen,
  BarChart2,
  ChevronRight
} from 'lucide-react'

const News = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([])
    const [sortBy, setSortBy] = useState("latest")
    
    const categories = [
        { name: "all", label: "All News", icon: Newspaper, count: 246 },
        { name: "Bitcoin", label: "Bitcoin", icon: TrendingUp, count: 42 },
        { name: "Ethereum", label: "Ethereum", icon: BarChart2, count: 38 },
        { name: "DeFi", label: "DeFi", icon: BookOpen, count: 56 },
        { name: "NFTs", label: "NFTs", icon: Sparkles, count: 31 },
        { name: "Regulations", label: "Regulations", icon: Filter, count: 28 },
        { name: "Layer 2", label: "Layer 2", icon: TrendingUp, count: 19 },
        { name: "Web3", label: "Web3", icon: MessageSquare, count: 34 },
    ]

    const sortOptions = [
        { value: "latest", label: "Latest" },
        { value: "trending", label: "Trending" },
        { value: "popular", label: "Most Popular" },
    ]

    // Mock data - replace with real API calls
    const news = [
        {
            id: 1,
            title: "Bitcoin Reaches New All-Time High Amid Institutional Investment",
            category: "Bitcoin",
            source: "CryptoNews",
            author: "Alex Johnson",
            date: "1 hour ago",
            readTime: "4 min read",
            views: "12.4k",
            comments: 245,
            image: "/bitcoin-news.png",
            description: "Bitcoin has reached a new milestone as institutional investors continue to pour money into the cryptocurrency market.",
            trending: true,
            sentiment: "positive"
        },
        {
            id: 2,
            title: "Ethereum 2.0 Update Brings Major Performance Improvements",
            category: "Ethereum",
            source: "BlockchainToday",
            author: "Maria Chen",
            date: "3 hours ago",
            readTime: "6 min read",
            views: "8.7k",
            comments: 189,
            image: "/ethereum-update-concept.png",
            description: "The latest Ethereum upgrade delivers significant improvements in transaction speeds and reduced gas fees.",
            trending: true,
            sentiment: "positive"
        },
        {
            id: 3,
            title: "DeFi Protocols Record $200B Total Value Locked",
            category: "DeFi",
            source: "CoinDesk",
            author: "Robert Kim",
            date: "5 hours ago",
            readTime: "5 min read",
            views: "15.2k",
            comments: 312,
            image: "/defi-tokens.jpg",
            description: "Decentralized Finance platforms have collectively reached a significant milestone in total value locked.",
            trending: false,
            sentiment: "positive"
        },
        {
            id: 4,
            title: "NFT Market Shows Signs of Recovery",
            category: "NFTs",
            source: "ArtBlock",
            author: "Sarah Williams",
            date: "6 hours ago",
            readTime: "3 min read",
            views: "6.3k",
            comments: 142,
            image: "/nft-marketplace-concept.png",
            description: "After months of decline, the NFT market is experiencing renewed interest and trading activity.",
            trending: true,
            sentiment: "neutral"
        },
        {
            id: 5,
            title: "New Cryptocurrency Regulations Announced",
            category: "Regulations",
            source: "LegalNews",
            author: "James Wilson",
            date: "8 hours ago",
            readTime: "7 min read",
            views: "9.8k",
            comments: 267,
            image: "/crypto-regulation.png",
            description: "Regulatory bodies worldwide are implementing new rules to govern the cryptocurrency and digital asset market.",
            trending: false,
            sentiment: "neutral"
        },
        {
            id: 6,
            title: "Layer 2 Solutions Gaining Traction in Web3",
            category: "Layer 2",
            source: "TechCrypto",
            author: "David Lee",
            date: "10 hours ago",
            readTime: "4 min read",
            views: "7.5k",
            comments: 198,
            image: "/layer-2-scaling.jpg",
            description: "Layer 2 scaling solutions continue to see increased adoption among cryptocurrency users.",
            trending: false,
            sentiment: "positive"
        },
        {
            id: 7,
            title: "Web3 Gaming Market Expected to Reach $50B by 2025",
            category: "Web3",
            source: "GameFi Daily",
            author: "Emma Davis",
            date: "12 hours ago",
            readTime: "5 min read",
            views: "11.3k",
            comments: 324,
            image: "/web3-gaming.jpg",
            description: "The Web3 gaming sector is rapidly expanding with new investment and user adoption.",
            trending: true,
            sentiment: "positive"
        },
        {
            id: 8,
            title: "Stablecoin Regulations: What You Need to Know",
            category: "Regulations",
            source: "CryptoLegal",
            author: "Michael Brown",
            date: "14 hours ago",
            readTime: "6 min read",
            views: "5.2k",
            comments: 87,
            image: "/stablecoin-regs.jpg",
            description: "Latest developments in stablecoin regulations and their impact on the market.",
            trending: false,
            sentiment: "neutral"
        },
        {
            id: 9,
            title: "Bitcoin Halving 2024: Market Impact Analysis",
            category: "Bitcoin",
            source: "MarketWatch",
            author: "Lisa Rodriguez",
            date: "1 day ago",
            readTime: "8 min read",
            views: "18.7k",
            comments: 421,
            image: "/bitcoin-halving.jpg",
            description: "In-depth analysis of the upcoming Bitcoin halving and its potential effects on prices.",
            trending: true,
            sentiment: "positive"
        },
    ]

    const toggleBookmark = (id: number) => {
        setBookmarkedItems(prev => 
            prev.includes(id) 
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }

    const getSentimentColor = (sentiment: string) => {
        switch(sentiment) {
            case 'positive': return 'text-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            case 'negative': return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
            default: return 'text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
        }
    }

    const getSentimentIcon = (sentiment: string) => {
        switch(sentiment) {
            case 'positive': return '📈'
            case 'negative': return '📉'
            default: return '📊'
        }
    }

    const filteredNews = news
        .filter((item) =>
            (selectedCategory === "all" || item.category === selectedCategory) &&
            (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime()
            if (sortBy === "trending") return (b.trending ? 1 : 0) - (a.trending ? 1 : 0)
            return parseInt(b.views.replace('k', '')) - parseInt(a.views.replace('k', ''))
        })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
            <Headers />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-8 ">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                                <Newspaper className="text-white" size={28} />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Crypto News Hub
                            </h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                            Stay updated with the latest cryptocurrency news, market analysis, and industry trends from trusted sources.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <Clock size={14} />
                                <span>Last updated: 2 min ago</span>
                            </div>
                            <p className="text-gray-900 dark:text-white font-semibold mt-1">
                                {filteredNews.length} articles
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search and Controls */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex-1">
                            <div className="relative">
                                <SearchBar 
                                    value={searchQuery} 
                                    onChange={setSearchQuery} 
                                    placeholder="Search articles, topics, or authors..." 
                                />
                                <BookOpen className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 dark:text-gray-400 font-medium text-sm whitespace-nowrap">
                                    Sort by:
                                </span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer bg-white dark:bg-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mt-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Filter size={18} className="text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Categories</span>
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto pb-3">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                                        selectedCategory === category.name
                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <category.icon size={16} />
                                    {category.label}
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        selectedCategory === category.name
                                            ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300'
                                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                                    }`}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured News Banner */}
                {filteredNews.filter(n => n.trending).length > 0 && (
                    <div className="mb-10">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
                            <div className="relative z-10 p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles className="text-white" size={20} />
                                    <span className="text-white/90 font-semibold text-sm">TRENDING NOW</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {filteredNews.find(n => n.trending)?.title}
                                </h2>
                                <p className="text-white/80 mb-6 max-w-2xl">
                                    {filteredNews.find(n => n.trending)?.description}
                                </p>
                                <div className="flex items-center gap-6">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 shadow-lg">
                                        Read Article
                                        <ExternalLink size={16} />
                                    </button>
                                    <div className="flex items-center gap-4 text-white/70 text-sm">
                                        <span className="flex items-center gap-1">
                                            <Eye size={14} />
                                            {filteredNews.find(n => n.trending)?.views} views
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageSquare size={14} />
                                            {filteredNews.find(n => n.trending)?.comments} comments
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                    {filteredNews.map((item) => (
                        <div 
                            key={item.id} 
                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getSentimentColor(item.sentiment)} border`}>
                                        {getSentimentIcon(item.sentiment)} {item.category}
                                    </span>
                                </div>
                                
                                {/* Trending Badge */}
                                {item.trending && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                            <Sparkles size={10} /> Trending
                                        </span>
                                    </div>
                                )}
                                
                                {/* Bookmark Button */}
                                <button
                                    onClick={() => toggleBookmark(item.id)}
                                    className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                                >
                                    <Bookmark 
                                        size={18} 
                                        className={bookmarkedItems.includes(item.id) ? "text-blue-500 fill-blue-500" : "text-gray-500"} 
                                    />
                                </button>
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">
                                                {item.source.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.source}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">By {item.author}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                        <Share2 size={18} className="text-gray-500" />
                                    </button>
                                </div>
                                
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h2>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                    {item.description}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {item.date}
                                        </span>
                                        <span>•</span>
                                        <span>{item.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <Eye size={12} />
                                            {item.views}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <MessageSquare size={12} />
                                            {item.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover Read More */}
                            <div className="px-6 pb-6">
                                <button className="w-full flex items-center justify-center gap-2 py-3 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">
                                    Read Full Article
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results State */}
                {filteredNews.length === 0 && (
                    <div className="text-center py-16">
                        <Newspaper className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                )}

                {/* Newsletter Subscription */}
                <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Never Miss an Update</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Subscribe to our newsletter and get the latest crypto news delivered to your inbox daily.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Total Articles</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">2,456</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Sources</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">127</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Daily Readers</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">124K</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Latest Update</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">2 min ago</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default News