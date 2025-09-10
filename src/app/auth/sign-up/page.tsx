"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "../layout";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useZodForm } from "@/lib/hooks/useZodForm";
import { signUpSchema, type SignUpFormData } from "@/lib/validations/auth";

export default function SignUpPage() {
  const router = useRouter();
  const [generalError, setGeneralError] = useState("");
  
  const initialValues: SignUpFormData = {
    name: "",
    email: "",
    password: "",
  };
  
  const form = useZodForm({
    schema: signUpSchema,
    initialValues,
    onSubmit: async () => {
      setGeneralError("");
      
      try {
        // In a real application, you would make an API call to register the user
        // For this example, we'll simulate a successful registration and then sign in
        
        // Here you would typically call your API to create the user
        // const response = await fetch('/api/auth/register', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
        // const responseData = await response.json();
        
        // For demo purposes, we'll just redirect to sign-in
        router.push('/auth/sign-in?registered=true');
      } catch {
        setGeneralError("An error occurred during registration. Please try again.");
      }
    },
  });
  
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = form;

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details below"
    >
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
        </div>
        
        {generalError && <p className="text-xs text-red-500">{generalError}</p>}


        <Button className="w-full bg-gray-900" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
      <Separator />
      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => signIn("google", { callbackUrl: "/" })}
        disabled={isSubmitting}
      >
        Sign up with Google
      </Button>
      <p className="text-sm text-center">
        Already have account?{" "}
        <a href="/auth/sign-in" className="hover:underline">
          Log in
        </a>
      </p>
    </AuthLayout>
  );
}