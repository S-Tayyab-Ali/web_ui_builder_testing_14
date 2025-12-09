"use client";

import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { getCartItemCount } from "@/lib/cart";

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export default function Header({ onSearch, searchQuery = "" }: HeaderProps) {
  const [cartCount, setCartCount] = useState(0);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount());
    };

    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (value: string) => {
    setLocalSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              DC COMICS
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          {onSearch && (
            <div className="hidden md:flex flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search comics, characters..."
                value={localSearchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>
          )}

          {/* Cart Button */}
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-white/10 transition-all duration-300 group"
            >
              <ShoppingCart className="h-5 w-5 text-white/80 group-hover:text-red-400 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-red-500/50 animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Search */}
        {onSearch && (
          <div className="md:hidden pb-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search comics, characters..."
              value={localSearchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-blue-500/50 transition-all duration-300"
            />
          </div>
        )}
      </div>
    </header>
  );
}
