import { LucideIcon } from 'lucide-react'

export interface ApiResponse<T> {
	data: T
	message: string
	status: string
	timestamp: string
}

export interface ErrorResponse {
	message: string
	statusCode: number
}

export interface NavItemProps {
	label: string
	href: string
	icon: LucideIcon
}
