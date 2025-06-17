// components/Header.tsx
"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, User } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
// import { MegaMenu } from "./MegaMenu";
import { CartModal } from "./CartModal";
import Image from "next/image";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItems, setCartItems] = useState(3);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState(5);
  const pathname = usePathname();
  if (isLoggedIn === null) {
    console.log(() => {
      setIsLoggedIn(true);
      setIsCartOpen(true);
      setCartItems(5);
      setFavoriteItems(4);
    });
  }

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
            href="/contact"
            className={`hover:underline ${
              pathname === "/contact" ? "font-semibold underline" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`hover:underline ${
              pathname === "/about" ? "font-semibold underline" : ""
            }`}
          >
            About
          </Link>
          {!isLoggedIn && (
            <Link
              href="/sign-up"
              className={`hover:underline ${
                pathname === "/sign-up" ? "font-semibold underline" : ""
              }`}
            >
              Sign Up
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
          <Link href="/wishlist" className="h-full">
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
          {isLoggedIn ? (
            <div className="relative">
              <Avatar className="relative w-10 h-10 cursor-pointer">
                <Image src="https://i.pravatar.cc/40" alt="User Avatar" fill />
              </Avatar>
            </div>
          ) : (
            <Link href="/login">
              <User className="h-5 w-5 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {/* {isLoggedIn && <MegaMenu />} */}
    </header>
  );
}
