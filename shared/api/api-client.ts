const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export const apiClient = async (
	endpoint: string,
	options: RequestInit = {},
) => {
	const res = await fetch(`${BASE_URL}${endpoint}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	})

	if (!res.ok) {
		const errorData = await res.json()
		throw new Error(errorData.message || 'Something went wrong')
	}

	return res.json()
}
