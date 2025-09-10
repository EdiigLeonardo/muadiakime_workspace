import { z } from 'zod';

// Checkout form validation schema
export const checkoutSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }).trim(),
  company: z.string().optional().nullable(),
  address: z.string().min(5, { message: 'Address is required' }).trim(),
  apartment: z.string().optional().nullable(),
  city: z.string().min(2, { message: 'City is required' }).trim(),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .regex(/^\+?[0-9\s-()]+$/, { message: 'Please enter a valid phone number' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email address' }).toLowerCase().trim(),
  saveInfo: z.boolean().optional().default(false),
  cashOnDelivery: z.boolean().optional().default(false),
  coupon: z.boolean().optional().default(false),
  discount: z.string().optional().nullable(),
});

// Type inference for form data
export type CheckoutFormData = z.infer<typeof checkoutSchema>;

// Validate form data and return errors if any
export const validateCheckout = (data: unknown) => {
  const result = checkoutSchema.safeParse(data);
  if (!result.success) {
    // Convert Zod errors to a more usable format
    const formattedErrors: Record<string, string> = {};
    result.error.issues.forEach((error) => {
      if (error.path.length > 0) {
        formattedErrors[error.path[0].toString()] = error.message;
      }
    });
    return { success: false, errors: formattedErrors };
  }
  return { success: true, data: result.data };
};