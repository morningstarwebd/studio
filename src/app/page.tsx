
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShieldCheck, Truck, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const featuredPets = [
  { id: 1, name: "Luna", breed: "Golden Retriever", age: "2 Months", gender: "Female", price: "$1,200", image: PlaceHolderImages.find(i => i.id === "pet-puppy") },
  { id: 2, name: "Simba", breed: "Persian Cat", age: "3 Months", gender: "Male", price: "$850", image: PlaceHolderImages.find(i => i.id === "pet-kitten") },
  { id: 3, name: "Coco", breed: "Holland Lop", age: "4 Months", gender: "Female", price: "$200", image: PlaceHolderImages.find(i => i.id === "pet-rabbit") },
];

export default function Home() {
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-dog");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6">
              NEW ARRIVALS 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1] mb-6">
              Find Your <span className="text-primary italic font-accent">Perfect</span> Companion Today.
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Expertly bred, health-checked pets and premium quality supplies. 
              Everything your furry, feathered, or scaled friend needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg" asChild>
                <Link href="/pets">
                  Adopt a Pet <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-2" asChild>
                <Link href="/shop">Browse Supplies</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-muted">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <div className="flex text-accent gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground">Loved by 10,000+ Pet Owners</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={heroImg?.imageUrl || ""} 
                alt={heroImg?.description || "Hero Pet"}
                fill
                className="object-cover"
                data-ai-hint={heroImg?.imageHint}
              />
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border flex items-center gap-3"
            >
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Health Guarantee</p>
                <p className="font-bold">100% Certified</p>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border flex items-center gap-3"
            >
              <div className="bg-accent/10 p-2 rounded-full text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Fast Delivery</p>
                <p className="font-bold">Same Day Shipping</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-4xl font-headline font-bold mb-4">Meet Our Newest Friends</h2>
              <p className="text-muted-foreground max-w-md">Healthy, happy pets ready for their forever homes. Each one comes with complete documentation.</p>
            </motion.div>
            <Button variant="link" className="text-primary font-bold gap-2 text-lg" asChild>
              <Link href="/pets">View All Pets <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredPets.map((pet) => (
              <motion.div 
                key={pet.id} 
                variants={fadeIn}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                  <Image 
                    src={pet.image?.imageUrl || ""} 
                    alt={pet.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint={pet.image?.imageHint}
                  />
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full hover:bg-white text-primary">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-primary uppercase">{pet.breed}</span>
                      <span className="font-bold text-lg">{pet.price}</span>
                    </div>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>{pet.age}</span>
                      <span>•</span>
                      <span>{pet.gender}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold px-2">{pet.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Premium Quality", desc: "Handpicked supplies and healthy, vet-checked pets." },
              { icon: Truck, title: "Secure Delivery", desc: "Safe transportation with real-time tracking for all orders." },
              { icon: Heart, title: "Expert Support", desc: "Get professional advice for your pet's well-being anytime." },
              { icon: Clock, title: "Quick Booking", desc: "Seamless multi-step booking for your favorite pet." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-primary-foreground text-center">
            {/* Background Paw Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10"><PawPrint className="w-24 h-24 rotate-12" /></div>
              <div className="absolute bottom-10 right-10"><PawPrint className="w-24 h-24 -rotate-12" /></div>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Ready to welcome a new family member?</h2>
              <p className="text-xl text-primary-foreground/80 mb-12">
                Join thousands of happy pet parents. Start your journey with PawMarket today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold rounded-2xl" asChild>
                  <Link href="/pets">Get Started Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl border-2 border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <Link href="/shop">Explore Shop</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
