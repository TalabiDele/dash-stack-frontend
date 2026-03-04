import { toast } from 'sonner'

export const useNotify = () => {
	return {
		success: (title: string, description?: string) => {
			toast.success(title, {
				description,
			})
		},
		error: (title: string, description?: string) => {
			toast.error(title, {
				description,
			})
		},
		warning: (title: string, description?: string) => {
			toast.warning(title, {
				description,
			})
		},
		// Useful for loading states before a promise resolves
		promise: <T>(
			promise: Promise<T>,
			messages: { loading: string; success: string; error: string },
		) => {
			toast.promise(promise, {
				loading: messages.loading,
				success: messages.success,
				error: messages.error,
			})
		},
	}
}
