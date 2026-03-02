
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Breeds", href: "/pets" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingBag, label: "Gallery", href: "/shop" },
  { icon: User, label: "Me", href: "/profile" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t pb-safe">
      <div className="flex justify-around items-center h-16">
        {items.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all",
                isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
