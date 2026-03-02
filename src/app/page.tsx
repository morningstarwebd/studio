
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShieldCheck, Truck, Clock, PawPrint, Info, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const featuredPets = [
  { id: 1, name: "Luna", breed: "Golden Retriever", age: "2 Months", gender: "Female", price: "$1,200", image: "pet-puppy" },
  { id: 2, name: "Simba", breed: "Persian Cat", age: "3 Months", gender: "Male", price: "$850", image: "pet-kitten" },
  { id: 3, name: "Coco", breed: "Holland Lop", age: "4 Months", gender: "Female", price: "$200", image: "pet-rabbit" },
];

const breedCatalog = [
  { id: "pug", name: "Cheerful Pugs", description: "The perfect companion for city living.", image: "breed-pug" },
  { id: "siamese", name: "Elegant Siamese", description: "Intelligent, social, and very vocal.", image: "breed-siamese" },
  { id: "beagle", name: "Active Beagles", description: "Merry dogs with a sense of adventure.", image: "breed-beagle" },
  { id: "golden", name: "Golden Retrievers", description: "Loyal friends with a heart of gold.", image: "hero-dog" },
];

const testimonials = [
  { name: "Sarah Jenkins", role: "Pet Parent", text: "Found my best friend Luna here. The health checks and documentation provided were top-notch!", avatar: "https://picsum.photos/seed/user1/100/100" },
  { name: "David Chen", role: "Golden Member", text: "Best place for premium pet supplies. Their delivery is incredibly fast and secure.", avatar: "https://picsum.photos/seed/user2/100/100" },
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
          </motion.div>
        </div>
      </section>

      {/* Breed Lookbook Section - The "Page Turner" feel */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Discover Our Lookbook</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">Flip through our curated collection of premium breeds. Find the personality that matches yours.</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {breedCatalog.map((breed) => {
                const imgData = PlaceHolderImages.find(i => i.id === breed.image);
                return (
                  <CarouselItem key={breed.id} className="pl-4 md:pl-8 basis-[85%] md:basis-1/2 lg:basis-1/3">
                    <Link href={`/pets?search=${breed.id}`}>
                      <motion.div 
                        whileHover={{ y: -10 }}
                        className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
                      >
                        <Image 
                          src={imgData?.imageUrl || ""} 
                          alt={breed.name} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={imgData?.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{breed.name}</h3>
                          <p className="text-sm text-white/70 mb-4 line-clamp-2">{breed.description}</p>
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform text-accent">
                            Explore Breed <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              <CarouselNext className="bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            </div>
          </Carousel>
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
            {featuredPets.map((pet) => {
              const petImg = PlaceHolderImages.find(i => i.id === pet.image);
              return (
                <motion.div 
                  key={pet.id} 
                  variants={fadeIn}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                    <Image 
                      src={petImg?.imageUrl || ""} 
                      alt={pet.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={petImg?.imageHint}
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-headline font-bold mb-6">Why Choose PawMarket?</h2>
              <p className="text-muted-foreground mb-8">We provide a seamless experience for pet lovers, ensuring every animal finds a loving home and every owner gets the best supplies.</p>
              <ul className="space-y-4">
                {[
                  "Vet-Certified Health Checks",
                  "Ethical Breeding Practices",
                  "Global Shipping Standards",
                  "24/7 Expert Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Secure Payment", desc: "100% encrypted transactions" },
                { icon: Truck, title: "Fast Delivery", desc: "Same day dispatch for toys & food" },
                { icon: Heart, title: "Pet Insurance", desc: "Get covered from day one" },
                { icon: Clock, title: "Quick Booking", desc: "Reserve your pet in 3 simple steps" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="px-4">
                      <p className="text-2xl md:text-3xl font-accent italic leading-relaxed mb-8">"{t.text}"</p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                          <img src={t.avatar} alt={t.name} />
                        </div>
                        <h4 className="font-bold text-xl">{t.name}</h4>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-primary-foreground text-center">
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
