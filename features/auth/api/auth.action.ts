'use server'

import { cookies } from 'next/headers'

export async function setTokenCookie(token: string) {
	const cookieStore = await cookies()
	cookieStore.set('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24, // 1 day
	})
}
