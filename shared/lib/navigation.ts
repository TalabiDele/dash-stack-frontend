// src/shared/config/navigation.ts
import {
	LayoutDashboard,
	Box,
	Heart,
	Inbox,
	ListOrdered,
	Activity,
	Tag,
	Calendar,
	CheckSquare,
	Contact,
	FileText,
	Layers,
	Users,
	Table,
	Settings,
	LogOut,
} from 'lucide-react'

export const primaryNavItems = [
	{ label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
	{ label: 'Products', href: '/products', icon: Box },
	{ label: 'Inbox', href: '/inbox', icon: Inbox },
	{ label: 'Order Lists', href: '/orders', icon: ListOrdered },
]

export const pageNavItems = [
	{ label: 'Calender', href: '/calendar', icon: Calendar },
	{ label: 'Contact', href: '/contact', icon: Contact },
]

export const bottomNavItems = [
	{ label: 'Settings', href: '/settings', icon: Settings },
	{ label: 'Logout', href: '/login', icon: LogOut }, // We can intercept this with a logout action later
]
