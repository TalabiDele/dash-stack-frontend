import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-[8px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer',
	{
		variants: {
			variant: {
				primary: 'bg-[#4880FF] text-white hover:bg-[#4880FF]/90',
				secondary: 'bg-[#4379EE] text-white hover:bg-[#4379EE]/90',
				// The new link variant:
				link: 'bg-transparent text-[#5A8CFF] hover:underline underline-offset-4',
				outline:
					'border border-border text-foreground hover:bg-accent hover:text-accent-foreground',
				ghost: 'hover:bg-accent hover:text-accent-foreground text-foreground',
			},
			size: {
				default: 'h-11 px-4 py-2',
				sm: 'h-9 px-3 rounded-[6px]',
				lg: 'h-12 px-8 rounded-[8px]',
				icon: 'h-11 w-11',
				// Often, link buttons look better without standard padding so they sit inline:
				none: 'p-0 h-auto',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, rightIcon, children, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{children}
				{rightIcon && (
					<span className='ml-2 flex items-center justify-center'>
						{rightIcon}
					</span>
				)}
			</button>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
