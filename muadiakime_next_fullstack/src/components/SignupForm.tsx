"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import React, { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid justify-self-center max-w-md  space-y-6 border-red-500 rounded-2xl border-2 lg:p-6 md:p-3 sm:p-1 lg:w-1/2 md:w-full">
      <h2 className="text-2xl font-bold">Create an account</h2>
      <p className="text-sm text-muted-foreground">Enter your details below</p>
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

        <Button className="w-full bg-red-500 hover:bg-red-600">
          Create Account
        </Button>
      </form>
      <Separator />
      <Button variant="outline" className="w-full">
        Sign up with Google
      </Button>
      <p className="text-sm text-center">
        Already have account?{" "}
        <a href="/login" className="text-red-500 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
