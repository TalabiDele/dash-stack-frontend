'use client'

// src/widgets/sidebar/ui/Sidebar.tsx
import {
	primaryNavItems,
	pageNavItems,
	bottomNavItems,
} from '@/shared/lib/navigation'
import { NavItemProps } from '@/shared/lib/types'
import Link from 'next/link'
import { NavItem } from '@/shared/ui/nav-item'

export const Sidebar = () => {
	return (
		<aside className='w-[260px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 overflow-y-auto custom-scrollbar'>
			{/* 1. Logo Section */}
			<div className='flex items-center justify-center h-20 shrink-0'>
				<Link
					href='/dashboard'
					className='text-2xl font-extrabold tracking-tight'
				>
					<span className='text-blue-500'>Dash</span>
					<span className='text-gray-800'>Stack</span>
				</Link>
			</div>

			{/* 2. Main Navigation Area */}
			<div className='flex flex-col flex-1 py-4'>
				{/* Primary Links */}
				<div className='flex flex-col gap-1'>
					{primaryNavItems.map((item: NavItemProps) => (
						<NavItem key={item.label} {...item} />
					))}
				</div>

				{/* Pages Section */}
				<div className='px-10 mb-2'></div>
				<div className='flex flex-col gap-1'>
					{pageNavItems.map((item: NavItemProps) => (
						<NavItem key={item.label} {...item} />
					))}
				</div>
			</div>

			{/* 3. Bottom Links (Settings & Logout) */}
			<div className='mt-auto py-6 flex flex-col gap-1 border-t border-gray-50 shrink-0'>
				{bottomNavItems.map((item: NavItemProps) => (
					<NavItem key={item.label} {...item} />
				))}
			</div>
		</aside>
	)
}
