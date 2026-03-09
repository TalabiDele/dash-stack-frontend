'use server'

import { serverFetch } from '@/shared/api/server-fetch'
import { SummaryData } from '../model/types'

export async function getSummary(): Promise<SummaryData> {
	return serverFetch('/dashboard/summary')
}
