'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerSchema } from './register.schema'
import { RegisterFormValues, RegisterPayload } from './register.types'
import { useNotify } from '@/shared/lib/use-notify'
import { setAuthCookie } from '../api/cookies'
import { ErrorResponse } from '@/shared/lib/types'
import { registerAction } from '../api/auth.api'

export const useRegisterForm = () => {
	const router = useRouter()
	const notify = useNotify()

	const form = useForm<RegisterFormValues, unknown, RegisterPayload>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const passwordValue = form.watch('password') || ''

	const passwordRequirements = [
		{ label: 'At least 8 characters', isMet: passwordValue.length >= 8 },
		{ label: 'One uppercase letter', isMet: /[A-Z]/.test(passwordValue) },
		{ label: 'One lowercase letter', isMet: /[a-z]/.test(passwordValue) },
		{ label: 'One number', isMet: /[0-9]/.test(passwordValue) },
		{
			label: 'One special character',
			isMet: /[^A-Za-z0-9]/.test(passwordValue),
		},
	]

	const onSubmit = async (data: RegisterPayload) => {
		const payload = {
			...data,
			provider: 'local',
		}
		try {
			// 1. ONLY Register the user
			await registerAction(payload)

			// REMOVED: The auto-login and cookie setting logic.
			// The API no longer hands out an access token here.

			// 2. Success feedback & redirect to Login page
			notify.success('Registration successful! Please log in.')
			router.push('/login') // <--- Send them to prove their identity
		} catch (error: unknown) {
			console.log(error)
			const err = error as ErrorResponse
			const errorMessage = err.message || 'Something went wrong.'
			form.setError('root', { message: errorMessage })

			notify.error(errorMessage)
		}
	}

	return {
		form,
		passwordValue,
		passwordRequirements,
		onSubmit: form.handleSubmit(onSubmit),
		isSubmitting: form.formState.isSubmitting,
		errors: form.formState.errors,
	}
}
