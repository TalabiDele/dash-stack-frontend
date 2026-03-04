import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { setTokenCookie } from '../api/auth.action'

export default function CallbackHandler() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	useEffect(() => {
		const handleAuth = async () => {
			if (token) {
				// Call the Server Action to securely store the JWT
				await setTokenCookie(token)

				// Push them to the protected route!
				router.push('/dashboard')
			} else {
				// If NestJS failed to send a token, kick them back to login
				router.push('/login?error=OAuthFailed')
			}
		}

		handleAuth()
	}, [token, router])

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
			<div className='w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
			<p className='mt-4 text-gray-600 font-medium'>Securing your session...</p>
		</div>
	)
}
