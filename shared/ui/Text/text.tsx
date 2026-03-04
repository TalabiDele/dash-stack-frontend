import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const typographyVariants = cva('text-foreground transition-colors', {
	variants: {
		variant: {
			h1: 'scroll-m-20 text-[32px] font-semibold tracking-tight lg:text-[30px]',
			h2: 'scroll-m-20 border-b pb-2 text-[28px] font-semibold tracking-tight first:mt-0',
			h3: 'scroll-m-20 text-[24px] font-semibold tracking-tight',
			h4: 'scroll-m-20 text-[20px] font-semibold tracking-tight',
			p: 'leading-7 text-muted-foreground [&:not(:first-child)]:mt-6',
			blockquote: 'mt-6 border-l-2 pl-6 italic text-muted-foreground',
			lead: 'text-[18px] text-muted-foreground',
		},
	},
	defaultVariants: {
		variant: 'p',
	},
})

// Automatically map variants to proper HTML tags
const variantElementMap: Record<
	NonNullable<VariantProps<typeof typographyVariants>['variant']>,
	React.ElementType
> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	p: 'p',
	blockquote: 'blockquote',
	lead: 'p',
}

export interface TypographyProps
	extends
		React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {
	as?: React.ElementType
}

const Text = React.forwardRef<HTMLElement, TypographyProps>(
	({ className, variant, as, ...props }, ref) => {
		const Comp = as || (variant ? variantElementMap[variant] : 'p')

		return (
			<Comp
				className={cn(typographyVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Text.displayName = 'Text'

export { Text, typographyVariants }
