'use client'

import { SalesChartProps } from '@/entities/sales-chart/model/types'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { CustomTooltip } from './custom-tooltip'

export const SalesChart = ({ data }: SalesChartProps) => {
	console.log('SalesChart data:', data)
	const sortedData = [...data].sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	)

	console.log('sortedData:', sortedData)

	return (
		<div className='w-full'>
			<ResponsiveContainer width='100%' aspect={4}>
				<AreaChart
					data={sortedData}
					responsive
					margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
				>
					<defs>
						<linearGradient id='colorY' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#4880FF' stopOpacity={0.2} />
							<stop offset='95%' stopColor='#4880FF' stopOpacity={0} />
						</linearGradient>
					</defs>
					<CartesianGrid
						vertical={false}
						stroke='#E0E6ED'
						strokeDasharray='0'
					/>
					<XAxis
						dataKey='x'
						type='number'
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A3ADC2', fontSize: 13, fontWeight: 500 }}
						tickFormatter={(value) => (value === 0 ? '' : `${value / 1000}k`)}
						interval={0}
					/>
					<YAxis
						type='number'
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A3ADC2', fontSize: 13, fontWeight: 500 }}
						tickFormatter={(value) => `${value}%`}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Area
						type='monotone'
						dataKey='y'
						stroke='#4880FF'
						strokeWidth={3}
						fillOpacity={1}
						fill='url(#colorY)'
						dot={{
							r: 4,
							fill: '#4880FF',
							stroke: '#fff',
							strokeWidth: 2,
						}}
						activeDot={{
							r: 6,
							fill: '#4880FF',
							stroke: '#fff',
							strokeWidth: 2,
						}}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}
