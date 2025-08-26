"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "../layout";
import React, { useState } from "react";

export default function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to sign in"
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Add sign in logic here
        }}
      >
        <Input
          placeholder="Email or Phone Number"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email tel"
          inputMode="email"
        />
        <p className="text-xs text-red-500">
          Valid email or phone is required.
        </p>

        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="text-xs text-red-500">
          Password is required.
        </p>

        <Button className="w-full bg-gray-900">Sign In</Button>
      </form>
      <Separator />
      <Button variant="outline" className="w-full">
        Sign in with Google
      </Button>
      <p className="text-sm text-center">
        Don&#39;t have an account?{" "}
        <a href="/auth/sign-up" className="hover:underline">
          Sign up
        </a>
      </p>
    </AuthLayout>
  );
}