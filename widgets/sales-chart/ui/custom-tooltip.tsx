import { TooltipProps } from '@/entities/sales-chart/model/types'

export const CustomTooltip = ({ active, payload }: TooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-[#4880FF] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg border-2 border-white transform -translate-y-2'>
				{payload[0].value.toFixed(2)}
			</div>
		)
	}
	return null
}
