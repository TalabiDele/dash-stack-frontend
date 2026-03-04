import z from 'zod'
import { registerSchema } from './register.schema'

/** Raw form values — includes confirmPassword (used by the form only) */
export type RegisterFormValues = z.input<typeof registerSchema>

/** Transformed output — confirmPassword is stripped, safe to send to the API */
export type RegisterPayload = z.output<typeof registerSchema>
