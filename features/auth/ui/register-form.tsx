'use client'

import { Text } from '@/shared/ui/Text/text'
import React, { useState } from 'react'
import { useRegisterForm } from '../models/use-register-form'
import { Input } from '@/shared/ui/input/input'
import { ArrowRight, Lock, Mail, User } from 'lucide-react'
import { Button } from '@/shared/ui/button/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import PasswordRequirements from './password-requirements'
import { GoogleAuthButton } from './google-auth-button'

const RegisterForm = () => {
	const {
		form,
		passwordValue,
		passwordRequirements,
		onSubmit,
		isSubmitting,
		errors,
	} = useRegisterForm()

	const { register } = form
	const [isPasswordFocused, setIsPasswordFocused] = useState(false)

	return (
		<div>
			<Text variant='h1' className='mb-0 leading-0'>
				Create an Account
			</Text>
			<Text variant={'p'}>Create a account to continue</Text>

			<form onSubmit={onSubmit} className='space-y-5 mt-8 mb-6'>
				<div>
					<Input
						label='Full Name'
						type='text'
						placeholder='John Doe'
						leftIcon={<User size={18} />}
						{...register('fullName')}
					/>
					{errors.fullName && (
						<Text
							variant='p'
							className='text-left mt-0 text-xs text-red-500 leading-0'
						>
							{errors.fullName.message}
						</Text>
					)}
				</div>

				<div>
					<Input
						label='Email Address'
						type='email'
						placeholder='name@example.com'
						leftIcon={<Mail size={18} />}
						{...register('email')}
					/>
					{errors.email && (
						<Text
							variant='p'
							className='text-left mt-0 text-xs text-red-500 leading-0'
						>
							{errors.email.message}
						</Text>
					)}
				</div>

				<div className='relative'>
					<Input
						label='Password'
						type='password'
						placeholder='Create a strong password'
						leftIcon={<Lock size={18} />}
						{...register('password')}
						onFocus={() => setIsPasswordFocused(true)}
						onBlur={() => setIsPasswordFocused(false)}
					/>
					{errors.password && !passwordValue && (
						<Text
							variant='p'
							className='text-left mt-1 text-xs text-red-500 leading-0'
						>
							{errors.password.message}
						</Text>
					)}
					<PasswordRequirements
						requirements={passwordRequirements}
						visible={isPasswordFocused}
					/>
				</div>

				<div>
					<Input
						label='Confirm Password'
						type='password'
						placeholder='Repeat your password'
						leftIcon={<Lock size={18} />}
						{...register('confirmPassword')}
					/>
					{errors.confirmPassword && (
						<Text
							variant='p'
							className='text-left mt-1 text-xs text-red-500 leading-0'
						>
							{errors.confirmPassword.message}
						</Text>
					)}
				</div>

				<div className='pt-2'>
					<Button
						type='submit'
						variant='primary'
						className='w-full'
						disabled={isSubmitting}
						rightIcon={!isSubmitting && <ArrowRight size={18} />}
					>
						{isSubmitting ? 'Creating account...' : 'Register'}
					</Button>
				</div>
			</form>

			<GoogleAuthButton actionText='Sign up' />

			<div className='flex items-center justify-center gap-2'>
				<Text variant='p'>Already have an account?</Text>
				<Button variant='link' className='p-0 h-auto'>
					<Link href='/login'>Login</Link>
				</Button>
			</div>
		</div>
	)
}

export default RegisterForm
