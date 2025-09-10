"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "../layout";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useZodForm } from "@/lib/hooks/useZodForm";
import { signInSchema } from "@/lib/validations/auth";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [generalError, setGeneralError] = useState("");
  const isRegistered = searchParams.get("registered") === "true";
  
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useZodForm({
    schema: signInSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      setGeneralError("");
      
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl,
        });
        
        if (!result?.error) {
          router.replace(callbackUrl);
        } else {
          setGeneralError("Invalid email or password");
        }
      } catch {
        setGeneralError("An error occurred. Please try again.");
      }
    },
  });

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to sign in"
    >
      {isRegistered && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
          Account created successfully! Please sign in with your credentials.
        </div>
      )}
      
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
            aria-label="Email"
            required
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            aria-label="Password"
            required
          />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </div>
        
        {generalError && <p className="text-xs text-red-500 text-center">{generalError}</p>}

        <Button 
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-800" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <Separator className="my-6" />

      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => signIn("google", { callbackUrl })}
        disabled={isSubmitting}
        type="button"
      >
        Sign in with Google
      </Button>

      <p className="text-sm text-center mt-4">
        Don&#39;t have an account?{" "}
        <Link href="/auth/sign-up" className="text-gray-900 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}