"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "../layout";
import React, { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details below"
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Add validation logic here if needed
        }}
      >
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {/* Example error message for Name */}
        <p className="text-xs text-red-500">Name is required.</p>

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
          Password must be at least 6 characters.
        </p>

        <Button className="w-full bg-gray-900">Create Account</Button>
      </form>
      <Separator />
      <Button variant="outline" className="w-full">
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