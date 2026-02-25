import { useState, useEffect } from 'react';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    // Initialize with localStorage data synchronously
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('watchlist');
      console.log('📂 Initial load from localStorage:', stored);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('❌ Failed to parse watchlist', e);
        }
      }
    }
    return [];
  });

  // Save to localStorage whenever watchlist changes
  useEffect(() => {
    console.log('💾 Saving to localStorage:', watchlist);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (coinId: string) => {
    console.log('➕ Adding to watchlist:', coinId);
    setWatchlist(prev => [...prev, coinId]);
  };

  const removeFromWatchlist = (coinId: string) => {
    console.log('➖ Removing from watchlist:', coinId);
    setWatchlist(prev => prev.filter(id => id !== coinId));
  };

  const toggleWatchlist = (coinId: string) => {
    console.log('🔄 Toggling watchlist for:', coinId);
    console.log('Current watchlist:', watchlist);
    
    setWatchlist(prev => {
      const newWatchlist = prev.includes(coinId) 
        ? prev.filter(id => id !== coinId)
        : [...prev, coinId];
      
      console.log('New watchlist will be:', newWatchlist);
      return newWatchlist;
    });
  };

  const isInWatchlist = (coinId: string) => {
    return watchlist.includes(coinId);
  };

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    toggleWatchlist,
    isInWatchlist
  };
};