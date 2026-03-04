'use server'

import { cookies } from 'next/headers'
import { RegisterPayload } from '../models/register.types'
import { loginFormValues } from '../models/login.types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function loginAction(data: loginFormValues) {
	const res = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const result = await res.json()

	if (!res.ok) {
		throw new Error(result.message || 'Login failed')
	}

	const cookieStore = await cookies()

	cookieStore.set('token', result.access_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24, // 1 day
	})

	return result
}

export async function registerAction(data: RegisterPayload) {
	const res = await fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const result = await res.json()

	if (!res.ok) {
		throw new Error(result.message || 'Registration failed')
	}

	return result
}

export async function forgotPasswordAction(email: string) {
	const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email }),
	})

	const result = await res.json()

	if (!res.ok) {
		throw new Error(result.message || 'Failed to send reset email')
	}

	return result
}

export async function resetPasswordAction(data: any) {
	const res = await fetch(`${BASE_URL}/auth/reset-password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const result = await res.json()

	if (!res.ok) {
		throw new Error(result.message || 'Password reset failed')
	}

	return result
}
