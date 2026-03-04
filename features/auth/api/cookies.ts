'use server'

import { cookies } from 'next/headers'

export async function setAuthCookie(token: string) {
	const cookieStore = await cookies()
	cookieStore.set('token', token, {
		httpOnly: true, // Javascript cannot access this cookie
		secure: process.env.NODE_ENV === 'production', // HTTPS only in production
		sameSite: 'lax', // CSRF protection
		path: '/',
		maxAge: 60 * 60 * 24, // 1 day
	})
}

export async function deleteAuthCookie() {
	const cookieStore = await cookies()
	cookieStore.delete('token')
}
