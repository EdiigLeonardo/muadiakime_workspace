// app/checkout/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function CheckoutPage() {
  // State for form fields
  const [form, setForm] = React.useState({
    firstName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
    cashOnDelivery: false,
    coupon: false,
    placeOrder: false,
    discount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => {
      if (id === "discount") {
        return {
          ...prev,
          discount: prev.coupon ? value : "",
        };
      }
      return {
        ...prev,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  // Handle Place Order
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare payload for backend
    const payload = {
      ...form,
      order: [
        { name: "LCD Monitor", price: 650 },
        { name: "H1 Gamepad", price: 100 },
      ],
      subtotal: 1750,
      shipping: "Free",
      total: 1750,
      paymentMethod: form.cashOnDelivery ? "Cash on delivery" : "VISA",
    };
    // TODO: Send payload to backend (e.g., fetch/axios)
    console.log("Order payload:", payload);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-8">
        Account / My Account / Product / View Cart /{" "}
        <span className="font-semibold">CheckOut</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Billing Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Billing Form */}
        <div>
          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <div>
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="address">Street Address*</Label>
              <Input
                id="address"
                required
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </Label>
              <Input
                id="apartment"
                value={form.apartment}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="city">Town/City*</Label>
              <Input
                id="city"
                required
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address*</Label>
              <Input
                id="email"
                required
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <Checkbox
                id="saveInfo"
                checked={form.saveInfo}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, saveInfo: !!checked }))
                }
              />
              <Label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </Label>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>LCD Monitor</span>
              <span className="font-medium">$650</span>
            </div>

            <div className="flex justify-between">
              <span>H1 Gamepad</span>
              <span className="font-medium">$100</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">$1750</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>$1750</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Bank</span>
              <span>VISA</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cashOnDelivery"
                checked={form.cashOnDelivery}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, cashOnDelivery: !!checked }))
                }
              />
              <Label htmlFor="cashOnDelivery">Cash on delivery</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="coupon"
                checked={form.coupon}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, coupon: !!checked }))
                }
              />
              <Label htmlFor="coupon">Coupon Code</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="placeOrder"
                checked={form.placeOrder}
                onCheckedChange={(checked) =>
                  setForm((f) => ({ ...f, placeOrder: !!checked }))
                }
              />
              <Label htmlFor="placeOrder">Place Order</Label>
            </div>
          </div>
          <div className="w-full flex mb-4 gap-3">
            <Input
              id="discount"
              required
              type="text"
              className="w-1/2"
              value={form.discount}
              onChange={handleChange}
            />
            <Button className="w-1/2 ">Apply Coupon</Button>
          </div>
          <form onSubmit={handlePlaceOrder}>
            <Button className="w-full" type="submit">
              Place Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
