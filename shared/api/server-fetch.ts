// src/shared/api/serverFetch.ts
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function serverFetch(endpoint: string, options: RequestInit = {}) {
	// 1. Grab the secure cookie directly from the incoming request headers
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value

	// 2. Attach the token to the NestJS request
	const headers = new Headers(options.headers)
	headers.set('Content-Type', 'application/json')
	if (token) {
		headers.set('Authorization', `Bearer ${token}`)
	}

	// 3. Make the server-to-server request
	const res = await fetch(`${BASE_URL}${endpoint}`, {
		...options,
		headers,
	})

	// 4. Handle Unauthorized (Token expired or missing)
	if (res.status === 401) {
		// Instantly kick them back to login if NestJS rejects the token
		cookieStore.delete('token')
		redirect('/login')
	}

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
