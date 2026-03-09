import { LucideIcon } from 'lucide-react'

export interface SummaryItem {
	total: number | string
	percentageChange: number
	percentageChangeLabel: string
}

interface SummaryMetric {
	total: number
	percentageChange: number
}

export interface SummaryData {
	orders: SummaryMetric
	pending: SummaryMetric
	sales: SummaryMetric
	users: SummaryMetric
}

export interface SummaryCardProps {
	title: string
	value: string | number
	icon: LucideIcon
	trend: 'up' | 'down'
	trendValue: number | string
	trendLabel: number
	iconColor: string
	iconBgColor: string
	isActive?: boolean
}
