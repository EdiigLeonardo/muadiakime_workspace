import { useState } from 'react';
import { z } from 'zod';

type ValidationResult<T> = {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
};

type UseZodFormProps<T extends z.ZodType<any, any, any>> = {
  schema: T;
  initialValues: z.infer<T>;
  onSubmit: (submitData: z.infer<T>) => void | Promise<void>;
};

export function useZodForm<T extends z.ZodType<any, any, any>>({
  schema,
  initialValues,
  onSubmit,
}: UseZodFormProps<T>) {
  type FormData = z.infer<T>;
  
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: unknown) => {
    try {
      // Verifica se o schema é um objeto Zod e tem a propriedade shape
      if (schema instanceof z.ZodObject) {
        const fieldSchema = schema.shape[name as string];
        if (fieldSchema) {
          fieldSchema.parse(value);
          return {};
        }
      }
      
      // Fallback: valida o objeto completo e extrai o erro do campo específico
      const tempData = { ...formData, [name]: value };
      const result = schema.safeParse(tempData);
      
      if (result.success) {
        return {};
      }
      
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path.length > 0 && issue.path[0] === name) {
          fieldErrors[name as string] = issue.message;
        }
      });
      
      return fieldErrors;
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path.length > 0 && issue.path[0] === name) {
            fieldErrors[name as string] = issue.message;
          }
        });
        return fieldErrors;
      }
      return { [name as string]: 'Erro de validação' };
    }
  };

  const validateForm = (): ValidationResult<FormData> => {
    const result = schema.safeParse(formData);
    
    if (!result.success) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? target.checked : value;
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    
    // Validate the field
    const fieldErrors = validateField(name as keyof FormData, newValue);
    
    // Update errors
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (Object.keys(fieldErrors).length === 0) {
        delete newErrors[name];
      } else {
        newErrors[name] = fieldErrors[name] || '';
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationResult = validateForm();
    
    if (!validationResult.success) {
      setErrors(validationResult.errors || {});
      setIsSubmitting(false);
      return;
    }
    
    // Clear errors
    setErrors({});
    
    try {
      await onSubmit(validationResult.data as FormData);
    } catch (error) {
      // Handle error silently or log for debugging
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função auxiliar para definir valores manualmente
  const setFieldValue = (name: keyof FormData, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Validar o campo após definir o valor
    const fieldErrors = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name as string]: fieldErrors[name as string] || '',
    }));
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFormData,
    setFieldValue,
    validateForm,
    validateField,
  };
}