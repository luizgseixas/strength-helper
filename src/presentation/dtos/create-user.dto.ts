import { z } from 'zod';

const passwordFormatRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?~-]).{8,}$/;

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  document: z.string(),
  phone: z.string().optional(),
  password: z.string().regex(passwordFormatRegex),
})

createUserSchema.parse({})