export interface SalesDataPoint {
	x: number
	y: number
	date: string
}

export interface SalesChartProps {
	data: SalesDataPoint[]
}

export interface TooltipProps {
	active?: boolean
	payload?: any[]
}
