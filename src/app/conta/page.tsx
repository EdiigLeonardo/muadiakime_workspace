// app/my-account/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "address" | "payment">(
    "profile"
  );
  const [formData, setFormData] = useState({
    profile: {
      firstName: "Mid",
      lastName: "Rimel",
      email: "rimellill@gmail.com",
      address: "Kingston, 5236, United State",
    },
    address: {
      street: "",
      city: "",
      zip: "",
      country: "",
    },
    payment: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const handleChange = (form: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [form]: {
        ...prev[form as keyof typeof formData],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    // Aqui você pode enviar todos os dados de uma vez
    // ou apenas os dados do formulário ativo
    console.log("Dados salvos:", formData);
    // Simular salvamento
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-8">
        Home / <span className="text-black font-medium">My Account</span>
      </div>

      {/* Welcome Header */}
      <h1 className="text-2xl font-bold mb-6">Welcome! Mid Rimel</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Navigation */}
        <div className="w-full md:w-64 space-y-4">
          <h2 className="font-bold text-lg">Manage My Account</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`block text-left w-full ${
                activeTab === "profile"
                  ? "font-medium text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className={`block text-left w-full ${
                activeTab === "address"
                  ? "font-medium text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Address Book
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`block text-left w-full ${
                activeTab === "payment"
                  ? "font-medium text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              My Payment Options
            </button>
          </nav>
        </div>

        {/* Right Content - Dynamic Form */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <>
              <h2 className="font-bold text-lg mb-6">Edit Your Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input
                    value={formData.profile.firstName}
                    onChange={(e) =>
                      handleChange("profile", "firstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input
                    value={formData.profile.lastName}
                    onChange={(e) =>
                      handleChange("profile", "lastName", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    value={formData.profile.email}
                    onChange={(e) =>
                      handleChange("profile", "email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <Input
                    value={formData.profile.address}
                    onChange={(e) =>
                      handleChange("profile", "address", e.target.value)
                    }
                  />
                </div>
              </div>
              <Separator className="my-6" />
              <h3 className="font-bold text-lg mb-4">Password Changes</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Current Password
                  </label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm New Password
                  </label>
                  <Input type="password" />
                </div>
              </div>
            </>
          )}

          {activeTab === "address" && (
            <>
              <h2 className="font-bold text-lg mb-6">Address Book</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Street Address
                  </label>
                  <Input
                    value={formData.address.street}
                    onChange={(e) =>
                      handleChange("address", "street", e.target.value)
                    }
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <Input
                      value={formData.address.city}
                      onChange={(e) =>
                        handleChange("address", "city", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ZIP Code
                    </label>
                    <Input
                      value={formData.address.zip}
                      onChange={(e) =>
                        handleChange("address", "zip", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <Input
                    value={formData.address.country}
                    onChange={(e) =>
                      handleChange("address", "country", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === "payment" && (
            <>
              <h2 className="font-bold text-lg mb-6">Payment Options</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <Input
                    value={formData.payment.cardNumber}
                    onChange={(e) =>
                      handleChange("payment", "cardNumber", e.target.value)
                    }
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Expiry Date
                    </label>
                    <Input
                      value={formData.payment.expiry}
                      onChange={(e) =>
                        handleChange("payment", "expiry", e.target.value)
                      }
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      CVV
                    </label>
                    <Input
                      value={formData.payment.cvv}
                      onChange={(e) =>
                        handleChange("payment", "cvv", e.target.value)
                      }
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Action Buttons - Shared for all forms */}
          <div className="flex gap-4">
            <Button variant="outline" className="px-8">
              Cancel
            </Button>
            <Button className="px-8" onClick={handleSubmit}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
