import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

interface SummaryCardProps {
	title: string
	value: string | number
	icon: LucideIcon
	trendValue: number | string
	iconColor: string
	iconBgColor: string
	isActive?: boolean
}

export const SummaryCard = ({
	title,
	value,
	icon: Icon,
	trendValue,
	iconColor,
	iconBgColor,
}: SummaryCardProps) => {
	const trend = Number(trendValue)
	const isUp = trend >= 0
	const TrendIcon = isUp ? TrendingUp : TrendingDown

	return (
		<div
			className={cn(
				'bg-white rounded-2xl p-6 flex flex-col gap-8 transition-all duration-300',
			)}
		>
			<div className='flex items-start justify-between'>
				<div className='flex flex-col gap-4'>
					<span className='text-sm font-semibold text-gray-500'>{title}</span>
					<span className='text-3xl font-bold text-gray-900'>{value}</span>
				</div>
				<div
					className={cn(
						'w-14 h-14 rounded-[22px] flex items-center justify-center',
						iconBgColor,
					)}
				>
					<Icon className={cn('w-7 h-7', iconColor)} />
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<div
					className={cn(
						'flex items-center gap-1 text-sm font-bold',
						isUp ? 'text-[#00B69B]' : 'text-[#F93C65]',
					)}
				>
					<TrendIcon className='w-4 h-4' />
					<span>{Math.abs(trend)}%</span>
				</div>
				<span className='text-sm font-semibold text-gray-500'>
					{isUp ? 'Up from yesterday' : 'Down from yesterday'}
				</span>
			</div>
		</div>
	)
}
