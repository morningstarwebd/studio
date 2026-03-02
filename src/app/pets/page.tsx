
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Heart, 
  ArrowUpDown,
  PawPrint,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const pets = [
  { id: 1, name: "Luna", breed: "Golden Retriever", age: "2 Months", gender: "Female", category: "Dog", price: 1200, rating: 4.8, image: "pet-puppy" },
  { id: 2, name: "Simba", breed: "Persian Cat", age: "3 Months", gender: "Male", category: "Cat", price: 850, rating: 4.9, image: "pet-kitten" },
  { id: 3, name: "Coco", breed: "Holland Lop", age: "4 Months", gender: "Female", category: "Rabbit", price: 200, rating: 4.7, image: "pet-rabbit" },
  { id: 4, name: "Mango", breed: "Macaw", age: "1 Year", gender: "Male", category: "Bird", price: 1500, rating: 5.0, image: "pet-parrot" },
  { id: 5, name: "Bella", breed: "French Bulldog", age: "3 Months", gender: "Female", category: "Dog", price: 2400, rating: 4.9, image: "pet-puppy" },
  { id: 6, name: "Oliver", breed: "Maine Coon", age: "5 Months", gender: "Male", category: "Cat", price: 1100, rating: 4.6, image: "pet-kitten" },
];

const categories = ["All", "Dog", "Cat", "Bird", "Rabbit", "Fish"];

export default function PetsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPets = pets.filter(pet => {
    const matchesCategory = activeCategory === "All" || pet.category === activeCategory;
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-headline font-bold mb-2">Find Your New Best Friend</h1>
        <p className="text-muted-foreground">Browse through our healthy and happy pets ready for adoption.</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name or breed..." 
            className="pl-10 h-12 rounded-xl bg-secondary border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-6"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden rounded-xl h-12 px-6 gap-2">
                <Filter className="w-4 h-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-[2rem]">
              <SheetHeader>
                <SheetTitle>Filter Pets</SheetTitle>
                <SheetDescription>Narrow down your search</SheetDescription>
              </SheetHeader>
              <div className="py-8 space-y-6">
                <div>
                  <h4 className="font-bold mb-4">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <Button
                        key={cat}
                        variant={activeCategory === cat ? "default" : "secondary"}
                        onClick={() => setActiveCategory(cat)}
                        className="rounded-full"
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px] h-12 rounded-xl">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Pets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPets.map((pet, idx) => {
          const imgData = PlaceHolderImages.find(i => i.id === pet.image);
          return (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-transparent hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={imgData?.imageUrl || ""}
                  alt={pet.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint={imgData?.imageHint}
                />
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-white">
                  <Heart className="w-5 h-5" />
                </Button>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur text-primary border-none font-bold px-3 py-1">
                    {pet.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{pet.name}</h3>
                    <p className="text-sm text-muted-foreground">{pet.breed}</p>
                  </div>
                  <span className="font-bold text-lg text-primary">${pet.price}</span>
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs font-medium text-muted-foreground bg-secondary/50 p-3 rounded-xl">
                  <div className="flex items-center gap-1">
                    <PawPrint className="w-3 h-3" /> {pet.age}
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUpDown className="w-3 h-3" /> {pet.gender}
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-accent">
                    <Star className="w-3 h-3 fill-current" /> {pet.rating}
                  </div>
                </div>
                <Button className="w-full mt-6 rounded-xl h-11" asChild>
                  <Link href={`/pets/${pet.id}`}>View Details</Link>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredPets.length === 0 && (
        <div className="py-24 text-center">
          <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
            <Search className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No pets found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search keywords.</p>
          <Button variant="link" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4">
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}
