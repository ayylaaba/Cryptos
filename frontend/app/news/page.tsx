// "use client"
// import React, { useState, useMemo, useEffect } from 'react' // Add useEffect
// import Headers from '@/components/ui/headers'
// import SearchBar from '@/components/search-bar'
// import { 
//   Clock, 
//   Newspaper, 
//   TrendingUp, 
//   Bookmark, 
//   Share2, 
//   ExternalLink, 
//   Filter, 
//   Sparkles,
//   Eye,
//   MessageSquare,
//   BookOpen,
//   BarChart2,
//   ChevronRight,
//   AlertCircle
// } from 'lucide-react'
// import CoinBackground from '@/components/coinBackground'
// import { useGetCryptoNewsQuery } from '@/app/services/cryptoNewsApi'

// // Import animations
// import { initNewsAnimations, initParallax, cleanupAnimations } from '@/lib/gsap/newsAnimations'

// // ... rest of your imports and interfaces

// const News = () => {
//     const [searchQuery, setSearchQuery] = useState("")
//     const [selectedCategory, setSelectedCategory] = useState("all")
//     const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([])
//     const [sortBy, setSortBy] = useState("latest")
//     const [animationsLoaded, setAnimationsLoaded] = useState(false)
    
//     const { data, isLoading, error } = useGetCryptoNewsQuery({ 
//         lang: 'EN'
//     });
    
//     // Initialize animations when data is loaded
//     useEffect(() => {
//         if (!isLoading && data && !animationsLoaded) {
//             // Small delay to ensure DOM is ready
//             const timer = setTimeout(() => {
//                 initNewsAnimations();
//                 initParallax();
//                 setAnimationsLoaded(true);
//             }, 100);
            
//             return () => clearTimeout(timer);
//         }
        
//         // Cleanup on unmount
//         return () => {
//             cleanupAnimations();
//         };
//     }, [isLoading, data, animationsLoaded]);

//     // Re-run animations when filtered news changes (for new cards)
//     useEffect(() => {
//         if (animationsLoaded && filteredNews.length > 0) {
//             // Small delay to ensure DOM updates
//             const timer = setTimeout(() => {
//                 // Re-run card animations for new items
//                 import('@/lib/gsap/newsAnimations').then(({ animateNewsCards }) => {
//                     animateNewsCards();
//                 });
//             }, 100);
            
//             return () => clearTimeout(timer);
//         }
//     }, [filteredNews.length, animationsLoaded, selectedCategory, searchQuery]);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
//             <Headers />
//             <CoinBackground />
//             <div className='relative z-10'>
//                 <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
//                     {/* Add class names for animation targets */}
                    
//                     {/* Header Section - Add classes */}
//                     <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-8 ml-4 mr-4 news-header">
//                         <div>
//                             <div className="flex items-center gap-3 mb-2 news-title">
//                                 <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
//                                     <Newspaper className="text-white" size={28} />
//                                 </div>
//                                 <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//                                     Crypto News Hub
//                                 </h1>
//                             </div>
//                             <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl news-description">
//                                 Stay updated with the latest cryptocurrency news, market analysis, and industry trends from trusted sources.
//                             </p>
//                         </div>
                        
//                         <div className="flex items-center gap-6 news-stats">
//                             <div className="text-right">
//                                 <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                     <Clock size={14} />
//                                     <span>Live updates</span>
//                                 </div>
//                                 <p className="text-gray-900 dark:text-white font-semibold mt-1">
//                                     {filteredNews.length} articles
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Search and Controls - Add classes */}
//                     <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg dark:border-gray-700 categories-container">
//                         {/* ... search bar content remains the same ... */}

//                         {/* Categories - Add class to each category button */}
//                         <div className="mt-6">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <Filter size={18} className="text-gray-400" />
//                                 <span className="text-gray-600 dark:text-gray-400 font-medium">Categories</span>
//                             </div>
//                             <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
//                                 {categories.map((category) => (
//                                     <button
//                                         key={category.name}
//                                         onClick={() => setSelectedCategory(category.name)}
//                                         className={`category-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 
//                                             ${selectedCategory === category.name
//                                                 ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800'
//                                                 : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
//                                             }`}
//                                     >
//                                         <category.icon size={16} />
//                                         <span className="max-w-[100px] truncate">{category.label}</span>
//                                         <span className={`text-xs px-2 py-1 rounded-full ${
//                                             selectedCategory === category.name
//                                                 ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300'
//                                                 : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
//                                         }`}>
//                                             {category.count}
//                                         </span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* News Grid - Add news-card class to each card */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
//                         {filteredNews.map((item) => (
//                             <div 
//                                 key={item.id} 
//                                 className="news-card group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
//                             >
//                                 {/* ... card content remains the same ... */}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Newsletter Section - Add classes */}
//                     <div className="newsletter-section bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
//                         <div className="newsletter-content flex flex-col lg:flex-row lg:items-center justify-between gap-8">
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Never Miss an Update</h3>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                     Subscribe to our newsletter and get the latest crypto news delivered to your inbox daily.
//                                 </p>
//                             </div>
//                             <div className="flex gap-3">
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="newsletter-input flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                                 />
//                                 <button className="newsletter-button px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Footer Stats - Add stat-number class to numbers */}
//                     <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
//                         <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
//                             <p className="text-gray-500 dark:text-gray-400 text-sm">Total Articles</p>
//                             <p className="stat-number text-2xl font-bold text-gray-900 dark:text-white mt-2">{newsItems.length}</p>
//                         </div>
//                         <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
//                             <p className="text-gray-500 dark:text-gray-400 text-sm">Sources</p>
//                             <p className="stat-number text-2xl font-bold text-gray-900 dark:text-white mt-2">
//                                 {new Set(newsItems.map(item => item.source)).size}
//                             </p>
//                         </div>
//                         <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
//                             <p className="text-gray-500 dark:text-gray-400 text-sm">Categories</p>
//                             <p className="stat-number text-2xl font-bold text-gray-900 dark:text-white mt-2">{categories.length - 1}</p>
//                         </div>
//                         <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700">
//                             <p className="text-gray-500 dark:text-gray-400 text-sm">Live Updates</p>
//                             <p className="stat-number text-2xl font-bold text-gray-900 dark:text-white mt-2">24/7</p>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default News;

"use client"
import React, { useState, useMemo, useEffect } from 'react'
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
  Eye,
  MessageSquare,
  BookOpen,
  BarChart2,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  AlertCircle
} from 'lucide-react'
import CoinBackground from '@/components/coinBackground'
import { useGetCryptoNewsQuery } from '@/app/services/cryptoNewsApi'

// Import animations
import { initNewsAnimations, initParallax, cleanupAnimations } from '@/lib/gsap/newsAnimations'

interface NewsItem {
  id: string;
  title: string;
  body: string;
  categories: string;
  source: string;
  source_info: {
    name: string;
    img: string;
    lang: string;
  };
  published_on: number;
  imageurl: string;
  url: string;
  tags: string;
}

const News = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([])
    const [sortBy, setSortBy] = useState("latest")
    const [animationsLoaded, setAnimationsLoaded] = useState(false)
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10) // Show 10 items per page
    
    const { data, isLoading, error } = useGetCryptoNewsQuery({ 
        lang: 'EN'
    });
    
    console.log('cryptoNews ->>:', data);

    // ============ HELPER FUNCTIONS ============

    const getTimeAgo = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'week', seconds: 604800 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
        ];
        
        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count > 0) {
                return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
            }
        }
        
        return 'just now';
    };

    const getSentimentFromText = (text: string) => {
        const positiveWords = ['surge', 'rally', 'gain', 'high', 'bull', 'breakthrough', 'success', 'soar', 'jump', 'rise'];
        const negativeWords = ['crash', 'drop', 'fall', 'low', 'bear', 'scam', 'loss', 'hack', 'slump', 'plunge'];
        
        const lowerText = text.toLowerCase();
        
        const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
        const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
        
        if (positiveCount > negativeCount) return 'positive';
        if (negativeCount > positiveCount) return 'negative';
        return 'neutral';
    };

    const getCategoryIcon = (category: string) => {
        const categoryLower = category.toLowerCase();
        if (categoryLower.includes('btc') || categoryLower.includes('bitcoin')) return TrendingUp;
        if (categoryLower.includes('eth') || categoryLower.includes('ethereum')) return BarChart2;
        if (categoryLower.includes('defi')) return BookOpen;
        if (categoryLower.includes('nft')) return Sparkles;
        if (categoryLower.includes('regulation') || categoryLower.includes('legal')) return Filter;
        if (categoryLower.includes('market') || categoryLower.includes('trading')) return TrendingUp;
        if (categoryLower.includes('technology') || categoryLower.includes('tech')) return BarChart2;
        return Newspaper;
    };

    // ============ DATA TRANSFORMATION ============

    const newsItems = useMemo(() => {
        if (!data?.Data) return [];
        
        return data.Data.map((item: NewsItem) => {
            const categoryList = item.categories?.split('|') || ['General'];
            const primaryCategory = categoryList[0] || 'General';
            
            const wordsPerMinute = 200;
            const wordCount = item.body?.split(/\s+/).length || 0;
            const readTimeMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
            
            const date = new Date(item.published_on * 1000);
            const timeAgo = getTimeAgo(date);
            
            return {
                id: item.id,
                title: item.title,
                description: item.body?.substring(0, 150) + '...',
                fullDescription: item.body,
                category: primaryCategory,
                allCategories: categoryList,
                source: item.source_info?.name || item.source,
                sourceLogo: item.source_info?.img,
                author: item.source,
                date: date.toISOString(),
                timeAgo: timeAgo,
                readTime: `${readTimeMinutes} min read`,
                image: item.imageurl || 'https://images.cryptocompare.com/news/default/news.png',
                url: item.url,
                tags: item.tags?.split('|') || [],
                trending: false,
                sentiment: getSentimentFromText(item.title + ' ' + item.body),
            };
        });
    }, [data]);

    // ============ CATEGORIES ============

    const categories = useMemo(() => {
        const categoryMap = new Map();
        
        newsItems.forEach(item => {
            item.allCategories.forEach((cat: string) => {
                if (cat && cat !== '') {
                    const count = categoryMap.get(cat) || 0;
                    categoryMap.set(cat, count + 1);
                }
            });
        });
        
        const dynamicCategories = Array.from(categoryMap.entries())
            .map(([name, count]) => ({
                name: name.toLowerCase(),
                label: name,
                icon: getCategoryIcon(name),
                count
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
        
        return [
            { name: "all", label: "All News", icon: Newspaper, count: newsItems.length },
            ...dynamicCategories
        ];
    }, [newsItems]);

    const sortOptions = [
        { id: 1, value: "latest", label: "Latest" },
        { id: 2, value: "oldest", label: "Oldest" },
        { id: 3, value: "a-z", label: "A-Z" },
    ];

    const toggleBookmark = (id: string) => {
        setBookmarkedItems(prev => 
            prev.includes(id) 
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    const getSentimentColor = (sentiment: string) => {
        switch(sentiment) {
            case 'positive': return 'text-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
            case 'negative': return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
            default: return 'text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700';
        }
    };

    const getSentimentIcon = (sentiment: string) => {
        switch(sentiment) {
            case 'positive': return '📈';
            case 'negative': return '📉';
            default: return '📊';
        }
    };

    // ============ FILTERED NEWS ============

    const filteredNews = useMemo(() => {
        return newsItems
            .filter((item) => {
                const matchesCategory = selectedCategory === "all" || 
                    item.allCategories.some((cat: string) => 
                        cat.toLowerCase() === selectedCategory.toLowerCase()
                    );
                
                const matchesSearch = searchQuery === "" ||
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.tags.some((tag: string) => 
                        tag.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                
                return matchesCategory && matchesSearch;
            })
            .sort((a, b) => {
                if (sortBy === "latest") {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                }
                if (sortBy === "oldest") {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                }
                if (sortBy === "a-z") {
                    return a.title.localeCompare(b.title);
                }
                return 0;
            });
    }, [newsItems, selectedCategory, searchQuery, sortBy]);

    // ============ PAGINATION LOGIC ============

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery, sortBy]);

    // Calculate pagination values
    const totalItems = filteredNews.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

    // Pagination handlers
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            // Scroll to top of news grid
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ============ ANIMATION EFFECTS ============

    // Initialize animations when data is loaded
    useEffect(() => {
        if (!isLoading && data && !animationsLoaded) {
            const timer = setTimeout(() => {
                initNewsAnimations();
                initParallax();
                setAnimationsLoaded(true);
            }, 100);
            
            return () => clearTimeout(timer);
        }
        
        return () => {
            cleanupAnimations();
        };
    }, [isLoading, data, animationsLoaded]);

    // Re-run animations when current items change
    useEffect(() => {
        if (animationsLoaded && currentItems.length > 0) {
            const timer = setTimeout(() => {
                import('@/lib/gsap/newsAnimations').then(({ animateNewsCards }) => {
                    animateNewsCards();
                });
            }, 100);
            
            return () => clearTimeout(timer);
        }
    }, [currentItems.length, animationsLoaded]);

    // ============ LOADING STATE ============

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
                Loading latest crypto news..
            </p>
          </div>
        </div>
      )


    // ============ ERROR STATE ============

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
                <Headers />
                <CoinBackground />
                <div className='relative z-10 flex items-center justify-center min-h-screen'>
                    <div className="text-center max-w-md mx-auto p-8">
                        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Error Loading News</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            We couldn't load the latest news. Please try again later.
                        </p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ============ RENDER ============

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
            <Headers />
            <CoinBackground />
            <div className='relative z-10'>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-8 ml-4 mr-4 news-header">
                        <div>
                            <div className="flex items-center gap-3 mb-2 news-title">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                                    <Newspaper className="text-white" size={28} />
                                </div>
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    Crypto News Hub
                                </h1>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl news-description">
                                Stay updated with the latest cryptocurrency news, market analysis, and industry trends from trusted sources.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6 news-stats">
                            <div className="text-right">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <Clock size={14} />
                                    <span>Live updates</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-semibold mt-1">
                                    {totalItems} articles
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Search and Controls */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg dark:border-gray-700 categories-container">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="relative">
                                    <SearchBar 
                                        value={searchQuery} 
                                        onChange={setSearchQuery} 
                                        placeholder="Search articles, topics, or tags..." 
                                    />
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
                                            <option key={option.id} value={option.value}>
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
                            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`category-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 
                                            ${selectedCategory === category.name
                                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
                                            }`}
                                    >
                                        <category.icon size={16} />
                                        <span className="max-w-[100px] truncate">{category.label}</span>
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

                    {/* News Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                        {currentItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="news-card group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://images.cryptocompare.com/news/default/news.png';
                                        }}
                                    />
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getSentimentColor(item.sentiment)} border shadow-lg backdrop-blur-sm`}>
                                            {getSentimentIcon(item.sentiment)} {item.category}
                                        </span>
                                    </div>
                                    
                                    {/* Bookmark Button */}
                                    <button
                                        onClick={() => toggleBookmark(item.id)}
                                        className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
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
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-xs">
                                                    {item.source?.charAt(0) || 'N'}
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.source}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.timeAgo}</p>
                                            </div>
                                        </div>
                                        <a 
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={18} className="text-gray-500" />
                                        </a>
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
                                                {item.readTime}
                                            </span>
                                        </div>
                                        {item.tags.length > 0 && (
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                #{item.tags[0]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Read More Link */}
                                <div className="px-6 pb-6">
                                    <a 
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 py-3 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30"
                                    >
                                        Read Full Article
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Showing <span className="font-semibold">{indexOfFirstItem + 1}</span> to{' '}
                                <span className="font-semibold">
                                    {Math.min(indexOfLastItem, totalItems)}
                                </span>{' '}
                                of <span className="font-semibold">{totalItems}</span> articles
                            </div>
                            
                            <div className="flex items-center gap-2">
                                {/* First Page Button */}
                                <button
                                    onClick={goToFirstPage}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg border ${
                                        currentPage === 1
                                            ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                                    } transition-all`}
                                >
                                    <ChevronsLeft size={20} />
                                </button>
                                
                                {/* Previous Button */}
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg border ${
                                        currentPage === 1
                                            ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                                    } transition-all`}
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                
                                {/* Page Numbers */}
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        // Show pages around current page
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }
                                        
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => {
                                                    setCurrentPage(pageNum);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                                                    currentPage === pageNum
                                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                                        : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                {/* Next Button */}
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg border ${
                                        currentPage === totalPages
                                            ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                                    } transition-all`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                                
                                {/* Last Page Button */}
                                <button
                                    onClick={goToLastPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg border ${
                                        currentPage === totalPages
                                            ? 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                                    } transition-all`}
                                >
                                    <ChevronsRight size={20} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* No Results State */}
                    {totalItems === 0 && (
                        <div className="text-center py-16">
                            <Newspaper className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                Try adjusting your search or filter to find what you're looking for.
                            </p>
                        </div>
                    )}

                    {/* Newsletter Section */}
                    <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                        <div className="newsletter-content flex flex-col lg:flex-row lg:items-center justify-between gap-8">
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
                                    className="newsletter-input flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <button className="newsletter-button px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default News;
