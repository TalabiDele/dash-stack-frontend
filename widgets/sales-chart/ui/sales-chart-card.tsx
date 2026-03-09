'use client'

import { getSalesChart } from '@/entities/sales-chart/api/sales-chart'
import { useQuery } from '@tanstack/react-query'
import { SalesChart } from './sales-chart'
import { ChevronDown } from 'lucide-react'

const SalesChartCard = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['sales-chart'],
		queryFn: () => getSalesChart('2026-3'),
	})

	console.log('data:', data)

	if (isLoading) {
		return (
			<div className='bg-white rounded-2xl p-8 h-[420px] animate-pulse flex flex-col gap-6'>
				<div className='h-8 w-48 bg-gray-100 rounded-lg'></div>
				<div className='flex-1 bg-gray-50 rounded-xl'></div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='bg-white rounded-2xl p-8 h-[420px] flex items-center justify-center'>
				<div className='text-rose-500 font-semibold bg-rose-50 px-6 py-3 rounded-xl border border-rose-100'>
					Error:{' '}
					{error instanceof Error ? error.message : 'Failed to load chart'}
				</div>
			</div>
		)
	}

	return (
		<div className='bg-white rounded-2xl p-8 flex flex-col'>
			<div className='flex items-center justify-between shrink-0 mb-6'>
				<h2 className='text-2xl font-bold text-[#202224] tracking-tight'>
					Sales Details
				</h2>
				<button className='flex items-center gap-2 px-3 py-1.5 border border-[#D5D5D5] rounded-lg text-sm font-semibold text-[#3D434A] hover:bg-gray-50 transition-colors'>
					<span>October</span>
					<ChevronDown className='h-4 w-4 text-[#979797]' />
				</button>
			</div>

			<div className='w-full'>{data && <SalesChart data={data} />}</div>
		</div>
	)
}

export default SalesChartCard
