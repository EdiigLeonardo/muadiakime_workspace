import { z } from 'zod';

// Sign-up form validation schema
export const signUpSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(100)
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
});

// Sign-in form validation schema
export const signInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

// Type inference for form data
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

// Validate form data and return errors if any
export const validateSignUp = (data: unknown) => {
  const result = signUpSchema.safeParse(data);
  if (!result.success) {
    // Convert Zod errors to a more usable format
    const formattedErrors: Record<string, string> = {};
    result.error.errors.forEach((error) => {
      if (error.path.length > 0) {
        formattedErrors[error.path[0].toString()] = error.message;
      }
    });
    return { success: false, errors: formattedErrors };
  }
  return { success: true, data: result.data };
};

export const validateSignIn = (data: unknown) => {
  const result = signInSchema.safeParse(data);
  if (!result.success) {
    // Convert Zod errors to a more usable format
    const formattedErrors: Record<string, string> = {};
    result.error.errors.forEach((error) => {
      if (error.path.length > 0) {
        formattedErrors[error.path[0].toString()] = error.message;
      }
    });
    return { success: false, errors: formattedErrors };
  }
  return { success: true, data: result.data };
};