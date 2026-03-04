// src/app/oauth/callback/page.tsx
'use client'

import { Suspense } from 'react'
import CallbackHandler from '@/features/auth/lib/callback-handler'

// 2. The Page wrapper with Suspense (Required by Next.js App Router)
export default function OAuthCallbackPage() {
	return (
		<Suspense
			fallback={
				<div className='min-h-screen flex items-center justify-center'>
					Loading...
				</div>
			}
		>
			<CallbackHandler />
		</Suspense>
	)
}
