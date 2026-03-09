'use client'

import { useQuery } from '@tanstack/react-query'
import { Users, Box, BarChart3, History } from 'lucide-react'
import { SummaryCard } from './summary-card'
import { getSummary } from '@/entities/summary/api/summary'

export const SummaryCards = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['summary'],
		queryFn: () => getSummary(),
	})

	if (isLoading) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse'>
				{[1, 2, 3, 4].map((i) => (
					<div key={i} className='h-[160px] bg-gray-100 rounded-2xl'></div>
				))}
			</div>
		)
	}

	if (error || !data) {
		return (
			<div className='text-rose-500 font-semibold p-4 bg-rose-50 rounded-lg'>
				{error instanceof Error ? error.message : 'An error occurred'}
			</div>
		)
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
			<SummaryCard
				title='Total User'
				value={data.users.total.toLocaleString()}
				trendValue={data.users.percentageChange}
				icon={Users}
				iconColor='text-[#8280FF]'
				iconBgColor='bg-[#E5E4FF]'
				isActive={true}
			/>
			<SummaryCard
				title='Total Order'
				value={data.orders.total.toLocaleString()}
				trendValue={data.orders.percentageChange}
				icon={Box}
				iconColor='text-[#FEC53D]'
				iconBgColor='bg-[#FFF3D6]'
			/>
			<SummaryCard
				title='Total Sales'
				value={`$${data.sales.total.toLocaleString()}`}
				trendValue={data.sales.percentageChange}
				icon={BarChart3}
				iconColor='text-[#4AD991]'
				iconBgColor='bg-[#D9F7E8]'
			/>
			<SummaryCard
				title='Total Pending'
				value={data.pending.total.toLocaleString()}
				trendValue={data.pending.percentageChange}
				icon={History}
				iconColor='text-[#FF9066]'
				iconBgColor='bg-[#FFEADA]'
			/>
		</div>
	)
}
