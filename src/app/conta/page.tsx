// app/my-account/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useZodForm } from "@/lib/hooks/useZodForm";
import { profileSchema, addressSchema, paymentSchema } from "@/lib/validations/account";

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "address" | "payment">(
    "profile"
  );
  const [successMessage, setSuccessMessage] = useState("");
  
  // Profile form
  const {
    formData: profileData,
    errors: profileErrors,
    isSubmitting: isProfileSubmitting,
    handleChange: handleProfileChange,
    handleSubmit: handleProfileSubmit,
  } = useZodForm({
    schema: profileSchema,
    initialValues: {
      firstName: "Mid",
      lastName: "Rimel",
      email: "rimellill@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }
  });
  
  // Address form
  const {
    formData: addressData,
    errors: addressErrors,
    isSubmitting: isAddressSubmitting,
    handleChange: handleAddressChange,
    handleSubmit: handleAddressSubmit,
  } = useZodForm({
    schema: addressSchema,
    initialValues: {
      street: "",
      city: "",
      zip: "",
      country: "",
    }
  });
  
  // Payment form
  const {
    formData: paymentData,
    errors: paymentErrors,
    isSubmitting: isPaymentSubmitting,
    handleChange: handlePaymentChange,
    handleSubmit: handlePaymentSubmit,
  } = useZodForm({
    schema: paymentSchema,
    initialValues: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    }
  });
  
  const handleSubmit = () => {
    setSuccessMessage("");
    
    if (activeTab === "profile") {
      handleProfileSubmit((validData) => {
        // eslint-disable-next-line no-console
        console.log("Profile data saved:", validData);
        setSuccessMessage("Profile updated successfully!");
      })();
    } else if (activeTab === "address") {
      handleAddressSubmit((validData) => {
        // eslint-disable-next-line no-console
        console.log("Address data saved:", validData);
        setSuccessMessage("Address updated successfully!");
      })();
    } else if (activeTab === "payment") {
      handlePaymentSubmit((validData) => {
        // eslint-disable-next-line no-console
        console.log("Payment data saved:", validData);
        setSuccessMessage("Payment information updated successfully!");
      })();
    }
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
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {successMessage}
                </div>
              )}
              <h2 className="font-bold text-lg mb-6">Edit Your Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.firstName && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.lastName && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.email && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <Input
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.address && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.address}</p>
                  )}
                </div>
              </div>
              <Separator className="my-6" />
              <h3 className="font-bold text-lg mb-4">Password Changes</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Current Password
                  </label>
                  <Input 
                    type="password" 
                    name="currentPassword"
                    value={profileData.currentPassword}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.currentPassword && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.currentPassword}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <Input 
                    type="password" 
                    name="newPassword"
                    value={profileData.newPassword}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.newPassword && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.newPassword}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm New Password
                  </label>
                  <Input 
                    type="password" 
                    name="confirmPassword"
                    value={profileData.confirmPassword}
                    onChange={handleProfileChange}
                  />
                  {profileErrors.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">{profileErrors.confirmPassword}</p>
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "address" && (
            <>
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {successMessage}
                </div>
              )}
              <h2 className="font-bold text-lg mb-6">Address Book</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Street Address
                  </label>
                  <Input
                    name="street"
                    value={addressData.street}
                    onChange={handleAddressChange}
                  />
                  {addressErrors.street && (
                    <p className="text-xs text-red-500 mt-1">{addressErrors.street}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <Input
                      name="city"
                      value={addressData.city}
                      onChange={handleAddressChange}
                    />
                    {addressErrors.city && (
                      <p className="text-xs text-red-500 mt-1">{addressErrors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ZIP Code
                    </label>
                    <Input
                      name="zip"
                      value={addressData.zip}
                      onChange={handleAddressChange}
                    />
                    {addressErrors.zip && (
                      <p className="text-xs text-red-500 mt-1">{addressErrors.zip}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <Input
                    name="country"
                    value={addressData.country}
                    onChange={handleAddressChange}
                  />
                  {addressErrors.country && (
                    <p className="text-xs text-red-500 mt-1">{addressErrors.country}</p>
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "payment" && (
            <>
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {successMessage}
                </div>
              )}
              <h2 className="font-bold text-lg mb-6">Payment Options</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <Input
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="1234 5678 9012 3456"
                  />
                  {paymentErrors.cardNumber && (
                    <p className="text-xs text-red-500 mt-1">{paymentErrors.cardNumber}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Expiry Date
                    </label>
                    <Input
                      name="expiry"
                      value={paymentData.expiry}
                      onChange={handlePaymentChange}
                      placeholder="MM/YY"
                    />
                    {paymentErrors.expiry && (
                      <p className="text-xs text-red-500 mt-1">{paymentErrors.expiry}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      CVV
                    </label>
                    <Input
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      placeholder="123"
                    />
                    {paymentErrors.cvv && (
                      <p className="text-xs text-red-500 mt-1">{paymentErrors.cvv}</p>
                    )}
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
            <Button 
              className="px-8" 
              onClick={handleSubmit} 
              disabled={isProfileSubmitting || isAddressSubmitting || isPaymentSubmitting}
            >
              {(isProfileSubmitting || isAddressSubmitting || isPaymentSubmitting) ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
