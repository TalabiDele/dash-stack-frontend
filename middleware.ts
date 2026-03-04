// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 1. Define your route categories
const authRoutes = [
	'/login',
	'/register',
	'/forgot-password',
	'/reset-password',
]
const protectedRoutePrefixes = ['/dashboard', '/settings', '/profile']

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	// 2. Grab the HTTP-Only cookie
	const token = request.cookies.get('token')?.value

	// 3. Check what kind of route the user is trying to visit
	const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))
	const isProtectedRoute = protectedRoutePrefixes.some((route) =>
		pathname.startsWith(route),
	)

	// 4. LOGIC: Not logged in, trying to access protected route -> Kick to Login
	if (isProtectedRoute && !token) {
		// We append the original URL so you could redirect them back after they log in (optional)
		const loginUrl = new URL('/login', request.url)
		loginUrl.searchParams.set('callbackUrl', pathname)
		return NextResponse.redirect(loginUrl)
	}

	// 5. LOGIC: Logged in, trying to access auth route -> Kick to Dashboard
	if (isAuthRoute && token) {
		const dashboardUrl = new URL('/dashboard', request.url)
		return NextResponse.redirect(dashboardUrl)
	}

	// 6. Otherwise, let the request proceed normally
	return NextResponse.next()
}

// 7. Configure which paths the middleware should actually run on
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (Next.js API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder files (images, fonts, etc.)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
}
