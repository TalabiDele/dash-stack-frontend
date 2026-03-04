import * as React from 'react'
import { cn } from '../../lib/utils'
import { Eye, EyeOff } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/** The text for the input label */
	label?: string
	/** An optional icon to display on the left side of the input */
	leftIcon?: React.ReactNode
	/** Determines the border radius. 'form' = 8px, 'regular' = 19px */
	radiusVariant?: 'form' | 'regular'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, type, label, leftIcon, radiusVariant = 'form', id, ...props },
		ref,
	) => {
		// State for password visibility toggle
		const [showPassword, setShowPassword] = React.useState(false)

		// Auto-generate an ID for the label/input connection if one isn't provided
		const generatedId = React.useId()
		const inputId = id || generatedId

		const isPasswordType = type === 'password'
		const currentInputType = isPasswordType
			? showPassword
				? 'text'
				: 'password'
			: type

		// Map the variant to the exact requested border radiuses
		const radiusClass =
			radiusVariant === 'regular' ? 'rounded-[19px]' : 'rounded-[8px]'

		return (
			<div className='w-full space-y-3 text-left'>
				{/* Render Label if provided */}
				{label && (
					<label
						htmlFor={inputId}
						className='block text-sm mb-1 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left transition-colors'
					>
						{label}
					</label>
				)}

				<div className='relative text-left'>
					{/* Left Icon */}
					{leftIcon && (
						<div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center justify-center pointer-events-none transition-colors'>
							{leftIcon}
						</div>
					)}

					{/* Main Input Field */}
					<input
						id={inputId}
						type={currentInputType}
						className={cn(
							'flex h-11 w-full border border-border bg-muted px-3 py-2 text-sm text-foreground transition-colors',
							'file:border-0 file:bg-transparent file:text-sm file:font-medium',
							'placeholder:text-muted-foreground',
							'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent',
							'disabled:cursor-not-allowed disabled:opacity-50',
							radiusClass,
							leftIcon && 'pl-10', // Add left padding so text doesn't overlap icon
							isPasswordType && 'pr-10', // Add right padding for the eye icon
							className,
						)}
						ref={ref}
						{...props}
					/>

					{/* Password Toggle Button */}
					{isPasswordType && (
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#202224] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#202224] rounded-sm'
							aria-label={showPassword ? 'Hide password' : 'Show password'}
						>
							{showPassword ? (
								<EyeOff size={18} strokeWidth={2} />
							) : (
								<Eye size={18} strokeWidth={2} />
							)}
						</button>
					)}
				</div>
			</div>
		)
	},
)

Input.displayName = 'Input'

export { Input }
