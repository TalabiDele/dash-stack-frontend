// src/app/layout.tsx (or dashboard layout)
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import '../globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gray-50 flex'>
				<Sidebar />

				<main className='flex-1 ml-[260px] min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
