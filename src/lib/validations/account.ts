import { z } from 'zod';

// Profile form validation schema
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  address: z.string().optional(),
});

// Address form validation schema
export const addressSchema = z.object({
  street: z.string().min(5, { message: 'Street address is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  zip: z.string().min(4, { message: 'ZIP code is required' }),
  country: z.string().min(2, { message: 'Country is required' }),
});

// Payment form validation schema
export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(13, { message: 'Card number must be at least 13 digits' })
    .max(19, { message: 'Card number must be at most 19 digits' })
    .regex(/^[0-9\s-]+$/, { message: 'Please enter a valid card number' }),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, { message: 'Please enter a valid expiry date (MM/YY)' }),
  cvv: z
    .string()
    .length(3, { message: 'CVV must be 3 digits' })
    .regex(/^[0-9]+$/, { message: 'CVV must contain only numbers' }),
});

// Type inference for form data
export type ProfileFormData = z.infer<typeof profileSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;

// Validate form data and return errors if any
export const validateProfile = (data: unknown) => {
  const result = profileSchema.safeParse(data);
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

export const validateAddress = (data: unknown) => {
  const result = addressSchema.safeParse(data);
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

export const validatePayment = (data: unknown) => {
  const result = paymentSchema.safeParse(data);
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