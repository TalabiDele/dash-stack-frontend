'use client'

import { Search, Bell, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Header = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<header className='h-20 bg-white flex items-center justify-between px-8 sticky top-0 z-10 border-b border-gray-100'>
			{/* Left side: Search Bar */}
			<div className='flex-1 max-w-md'>
				<div className='relative group'>
					<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
						<Search className='h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors' />
					</div>
					<input
						type='text'
						placeholder='Search'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='block w-full pl-11 pr-4 py-2.5 bg-[#F5F6FA] border border-transparent rounded-full text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-200 transition-all'
					/>
				</div>
			</div>

			{/* Right side: Notifications, Language, User Profile */}
			<div className='flex items-center gap-8'>
				{/* Notifications */}
				<button className='relative p-2 text-blue-500 hover:bg-gray-50 rounded-full transition-colors'>
					<Bell className='h-6 w-6' />
					<span className='absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white border-2 border-white'>
						6
					</span>
				</button>

				{/* Language Selector */}
				<button className='flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition-colors'>
					<div className='w-8 h-6 relative overflow-hidden rounded-sm shadow-sm'>
						<Image
							src='https://flagcdn.com/gb.svg'
							alt='English'
							fill
							className='object-cover'
						/>
					</div>
					<span className='text-sm font-semibold text-gray-600'>English</span>
					<ChevronDown className='h-4 w-4 text-gray-400' />
				</button>

				{/* User Profile */}
				<button className='flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors'>
					<div className='flex items-center gap-3'>
						<div className='w-12 h-12 relative rounded-full overflow-hidden border-2 border-gray-50'>
							<Image
								src='/assets/user-avatar.png' // I'll move the generated image here
								alt='User Avatar'
								fill
								className='object-cover'
							/>
						</div>
						<div className='flex flex-col items-start'>
							<span className='text-sm font-bold text-gray-800 leading-tight'>
								Moni Roy
							</span>
							<span className='text-xs font-semibold text-gray-500'>Admin</span>
						</div>
					</div>
					<div className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center'>
						<ChevronDown className='h-4 w-4 text-gray-400' />
					</div>
				</button>
			</div>
		</header>
	)
}
