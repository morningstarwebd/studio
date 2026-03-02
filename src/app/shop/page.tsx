
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Heart, Star, Tag, Package, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

const products = [
  { id: 1, name: "Royal Canin Puppy Food", category: "Food", price: 54.99, rating: 4.8, stock: 24, image: "prod-food", tag: "Best Seller" },
  { id: 2, name: "Indestructible Chew Toy", category: "Toys", price: 15.50, rating: 4.5, stock: 120, image: "prod-toy", tag: "New" },
  { id: 3, name: "Organic Lavender Shampoo", category: "Grooming", price: 12.00, rating: 4.9, stock: 45, image: "prod-shampoo", tag: "Offer" },
  { id: 4, name: "Adjustable Leather Leash", category: "Accessories", price: 22.99, rating: 4.7, stock: 15, image: "prod-toy", tag: null },
  { id: 5, name: "Premium Bird Seed Mix", category: "Food", price: 18.00, rating: 4.6, stock: 80, image: "prod-food", tag: null },
  { id: 6, name: "Orthopedic Pet Bed", category: "Comfort", price: 89.99, rating: 5.0, stock: 8, image: "prod-shampoo", tag: "Luxury" },
];

const categories = ["All", "Food", "Toys", "Grooming", "Accessories", "Comfort"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { toast } = useToast();

  const filteredProducts = products.filter(p => activeCategory === "All" || p.category === activeCategory);

  const handleAddToCart = (name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your shopping bag.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner for Shop */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[300px] rounded-[2rem] overflow-hidden mb-12 bg-primary flex items-center p-12 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/seed/shop/1200/400" alt="Shop Banner" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-xl">
          <Badge className="bg-accent text-white mb-4 border-none font-bold">UP TO 40% OFF</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Summer Sale on All Pet Toys & Treats!</h1>
          <p className="text-primary-foreground/80 mb-6">Stock up on your pet's favorite essentials this season.</p>
          <Button variant="secondary" size="lg" className="rounded-xl font-bold">Shop Sale Now</Button>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-64 space-y-8">
          <div>
            <h3 className="font-headline font-bold text-xl mb-4">Categories</h3>
            <div className="flex flex-col gap-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-left transition-colors ${
                    activeCategory === cat ? "bg-primary text-white" : "hover:bg-secondary"
                  }`}
                >
                  <span className="font-medium">{cat}</span>
                  <span className="text-xs opacity-60">
                    {cat === "All" ? products.length : products.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-[2rem] border border-primary/10">
            <Tag className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold mb-2">Member Discounts</h4>
            <p className="text-sm text-muted-foreground mb-4">Join our PawRewards program and save 15% on every order.</p>
            <Button variant="outline" className="w-full rounded-xl border-primary/20 text-primary font-bold">Join Now</Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground font-medium">Showing {filteredProducts.length} products</p>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search shop..." className="pl-10 h-10 rounded-xl bg-secondary border-none w-48 lg:w-64" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => {
              const imgData = PlaceHolderImages.find(i => i.id === product.image);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[2rem] border border-transparent hover:border-primary/10 hover:shadow-xl transition-all group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[2rem]">
                    <Image
                      src={imgData?.imageUrl || ""}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={imgData?.imageHint}
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-white border-none font-bold">
                          {product.tag}
                        </Badge>
                      </div>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-white"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-accent mb-2">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-bold">{product.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">(45 reviews)</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-primary font-bold text-xl mb-4">${product.price}</p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-xs font-bold ${product.stock < 10 ? 'text-destructive' : 'text-primary'}`}>
                        {product.stock < 10 ? `Only ${product.stock} left!` : 'In Stock'}
                      </span>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full h-12 rounded-xl flex items-center justify-center gap-2 group-hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
