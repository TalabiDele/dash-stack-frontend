import z from 'zod'
import { loginSchema } from './login.schema'

export type loginFormValues = z.input<typeof loginSchema>
