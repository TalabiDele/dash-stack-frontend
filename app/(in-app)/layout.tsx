// src/app/layout.tsx (or dashboard layout)
import { Sidebar } from '@/widgets/sidebar/ui/sidebar'
import { Header } from '@/widgets/header/ui/header'
import '../globals.css'
import { ThemeProvider } from '@/shared/lib/theme-provider'
import { QueryProvider } from '@/shared/api/query-provider'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='bg-[#F5F6FA] h-auto flex' suppressHydrationWarning>
				<QueryProvider>
					<ThemeProvider>
						<Sidebar />
						<div className='flex-1 ml-[260px] flex flex-col h-screen'>
							<Header />
							<main className='p-8 bg-[#F5F6FA] h-full'>{children}</main>
						</div>
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	)
}
