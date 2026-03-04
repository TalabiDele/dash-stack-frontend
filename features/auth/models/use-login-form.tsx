'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerSchema } from './register.schema'
import { RegisterFormValues, RegisterPayload } from './register.types'
import { useNotify } from '@/shared/lib/use-notify'
import { setAuthCookie } from '../api/cookies'
import { ErrorResponse } from '@/shared/lib/types'
import { loginAction, registerAction } from '../api/auth.api'
import { loginSchema } from './login.schema'
import { loginFormValues } from './login.types'

export const useLoginForm = () => {
	const router = useRouter()
	const notify = useNotify()

	const form = useForm<loginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: loginFormValues) => {
		const payload = {
			...data,
			provider: 'local',
		}
		try {
			await loginAction(payload)
			notify.success('Login successful!')
			router.push('/dashboard')
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
		onSubmit: form.handleSubmit(onSubmit),
		isSubmitting: form.formState.isSubmitting,
		errors: form.formState.errors,
	}
}
