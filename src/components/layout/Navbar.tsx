
"use client";

import Link from "next/link";
import { ShoppingCart, Heart, User, Search, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
            <PawPrint className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:inline-block">
            Dogs<span className="text-primary">Paradise</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link href="/pets" className="hover:text-primary transition-colors">Breeds</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>

        {/* Search Bar */}
        <div className={cn(
          "hidden md:flex flex-1 max-w-sm items-center relative transition-all duration-300",
          isSearchFocused ? "max-w-md" : "max-w-xs"
        )}>
          <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search breeds, puppies..."
            className="pl-10 bg-secondary border-none"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/wishlist">
              <Heart className="w-5 h-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-4 h-4 bg-accent text-[10px] flex items-center justify-center rounded-full text-white font-bold">
                2
              </div>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <User className="w-5 h-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
