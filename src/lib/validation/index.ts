import * as z from 'zod';
export const Signupvalidation = z.object({
  name: z.string().min(2, { message: 'to short' }),
  username: z.string().min(2).max(50),
  email: z.string().min(8, { message: 'Too Short' }),
  password: z.string().min(8, { message: 'Password must be at least 8 digit' }),
});
