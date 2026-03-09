'use server'

import { serverFetch } from '@/shared/api/server-fetch'

export async function getSalesChart(date: string) {
	const res = await serverFetch(`/dashboard/sales-chart?${date}`)
	console.log('res:', res)
	return res
}
