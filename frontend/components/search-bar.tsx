import { Search } from 'lucide-react'
import React from 'react'

// pass a props object if needed in the future
interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div>
        <div className='w-full max-w-md'>
            <div className='relative'>
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className='w-full pl-10 pr-4 py-2 rounded-lg border border-border/30 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-primary transition-all'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60' size={16} />
            </div>
        </div>
    </div>
  )
}
export default SearchBar
