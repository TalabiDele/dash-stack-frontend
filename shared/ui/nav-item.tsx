// src/shared/ui/NavItem.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItemProps } from '../lib/types'

export const NavItem = ({ label, href, icon: Icon }: NavItemProps) => {
	const pathname = usePathname()
	// Check if the current route matches the link href
	const isActive = pathname === href || pathname.startsWith(`${href}/`)

	return (
		<div
			className={`flex items-center gap-4 rounded-lg mb-2 transition-all font-medium cursor-pointer`}
		>
			{isActive && (
				<div className='border-l-6 border-blue-500 rounded-xl h-full'></div>
			)}
			<Link
				href={href}
				className={`flex items-center gap-4 px-6 py-3 mx-4 rounded-lg transition-all font-medium cursor-pointer ${
					isActive
						? 'bg-blue-500 text-white'
						: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 ml-10'
				}`}
			>
				<Icon className='w-5 h-5' strokeWidth={isActive ? 2.5 : 2} />
				<span>{label}</span>
			</Link>
		</div>
	)
}
