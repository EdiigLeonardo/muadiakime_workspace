// components/Header.tsx
"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
// import { MegaMenu } from "./MegaMenu";
import { CartModal } from "./CartModal";
import Image from "next/image";
import { useAuth } from "@/lib/hooks/useAuth";
// import { Button } from "./ui/button";

export default function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  const [cartItems] = useState(3);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favoriteItems] = useState(5);
  const pathname = usePathname();

  return (
    <header className="w-full border-b min-h-['70px']">
      {/* Top banner */}
      <div className="bg-black text-white text-sm text-center py-1 px-4">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link href="#" className="underline font-semibold ml-1">
          ShopNow
        </Link>
        <span className="float-right mr-4 hidden sm:inline">English ▼</span>
      </div>

      {/* Main header */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Muadiakimi
        </Link>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            href="/"
            className={`hover:underline ${
              pathname === "/" ? "font-semibold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/contactos"
            className={`hover:underline ${
              pathname === "/contactos" ? "font-semibold underline" : ""
            }`}
          >
            Contactos
          </Link>
          <Link
            href="/sobre"
            className={`hover:underline ${
              pathname === "/sobre" ? "font-semibold underline" : ""
            }`}
          >
            Sobre Nós
          </Link>
          {!isAuthenticated && (
            <Link
              href="/auth/sign-in"
              className={`hover:underline ${
                pathname === "/auth/sign-in" ? "font-semibold underline" : ""
              }`}
            >
              Login
            </Link>
          )}
        </nav>

        {/* Search input + Icons */}
        <div className="flex items-center gap-4">
          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <Input placeholder="What are you looking for?" className="pr-10" />
            <Search className="absolute top-1/2 right-3 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>

          {/* Icons */}
          <Link href="/favoritos" className="h-full">
            <div className="relative cursor-pointer">
              <Heart className="z-2" />
              {favoriteItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1 z-3">
                  {favoriteItems}
                </span>
              )}
            </div>
          </Link>

          {/* Cart icon with badge */}
          <div className="relative cursor-pointer">
            <ShoppingCart
              onClick={() => setIsCartOpen(true)}
              className="relative"
            />
            {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartItems}
              </span>
            )}
          </div>

          {/* User icon or avatar */}
          {isAuthenticated ? (
            <div className="relative group">
              <Avatar className="relative w-10 h-10 cursor-pointer">
                {user?.image ? (
                  <Image src={user.image} alt={user.name || "User Avatar"} fill />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                )}
              </Avatar>
              
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/conta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <Link href="/auth/sign-in">
              <User className="h-5 w-5 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {/* {isAuthenticated && <MegaMenu />} */}
    </header>
  );
}
