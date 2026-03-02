"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShieldCheck, Truck, Clock, PawPrint, CheckCircle2, Quote, Syringe, HeadphonesIcon, Package } from "lucide-react";
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

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const popularBreeds = [
  { id: 1, name: "Golden Retriever", description: "Your loyal companion with a heart of gold.", image: "hero-dog" },
  { id: 2, name: "Siberian Husky", description: "Experience the thrill of the wild with a Husky's spirit by your side.", image: "breed-beagle" },
  { id: 3, name: "German Shepherd", description: "Noble guardians, loyal friends, and your steadfast protectors.", image: "breed-beagle" },
  { id: 4, name: "Shih Tzu", description: "Small in size, big in personality — your devoted lap companion.", image: "breed-siamese" },
];

const breedCatalog = [
  { id: "golden", name: "Golden Retrievers", description: "Your loyal companion with a heart of gold.", image: "hero-dog" },
  { id: "husky", name: "Siberian Huskies", description: "Experience the thrill of the wild with a Husky's spirit.", image: "breed-beagle" },
  { id: "german", name: "German Shepherds", description: "Noble guardians, loyal friends, and steadfast protectors.", image: "breed-beagle" },
  { id: "shih-tzu", name: "Shih Tzu", description: "Small in size, big in personality.", image: "breed-siamese" },
  { id: "rottweiler", name: "Rottweilers", description: "Confident, courageous, and fiercely loyal.", image: "breed-pug" },
];

const testimonials = [
  { name: "Natasha Emily Vikram", role: "Pet Parent", text: "Dogs Paradise is genuine and their puppies are very well taken care of. Highly recommend to anyone looking for a furry friend!", avatar: "https://picsum.photos/seed/natasha/100/100" },
  { name: "Pavan Katakam", role: "Golden Retriever Owner", text: "Best quality puppies! The owner is a very humble person who truly cares about the dogs. Got my Golden from here.", avatar: "https://picsum.photos/seed/pavan/100/100" },
  { name: "Chiranjeevi Naidu", role: "Beagle Owner", text: "Highly recommended! Got a quality Beagle from Richie. The puppy is healthy, playful, and everything was smooth.", avatar: "https://picsum.photos/seed/chiru/100/100" },
];

export default function Home() {
  const heroImg = PlaceHolderImages.find(i => i.id === "hero-dog");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary/5 py-16 md:py-0">
        <div className="container mx-auto px-4 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6">
              PREMIUM DOG BREEDING & ADOPTION
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1] mb-6">
              Where Dreams Meet <span className="text-primary italic font-accent">Wagging Tails!</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              More than just a breeding camp — we are a haven for dogs and dog lovers.
              Dedicated to connecting deserving dogs with loving families through responsible breeding and compassionate adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg" asChild>
                <Link href="/pets">
                  Explore Breeds <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-2 bg-white" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-muted">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Happy pet parent" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <div className="flex text-accent gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground">Trusted by 500+ Happy Families</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={heroImg?.imageUrl || ""}
                alt={heroImg?.description || "Beautiful puppy"}
                fill
                className="object-cover"
                data-ai-hint={heroImg?.imageHint}
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border flex items-center gap-3"
            >
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Health Guarantee</p>
                <p className="font-bold text-sm md:text-base">100% Vaccinated</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Thinking of getting a puppy? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="flex-1"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/id/1025/800/500"
                  alt="Happy puppies"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="flex-1 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-headline font-bold">Thinking of getting a puppy?</h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                It's not a home if everything isn't covered with dog hair. Getting a new dog is a fun, demanding, and rewarding experience.
                You may help your puppy settle in faster if you're well prepared, and it will be more pleasurable for you as well.
              </p>
              <Button size="lg" className="rounded-xl" asChild>
                <Link href="/pets">
                  Find Your Puppy <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breed Lookbook Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Our Premium Breeds</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm md:text-base">Every puppy comes from top pedigree lineage. Find the breed that matches your lifestyle.</p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {breedCatalog.map((breed, idx) => {
                const imgData = PlaceHolderImages.find(i => i.id === breed.image);
                return (
                  <CarouselItem key={`${breed.id}-${idx}`} className="pl-4 md:pl-8 basis-[85%] md:basis-1/2 lg:basis-1/3">
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
                            Learn More <ArrowRight className="w-4 h-4" />
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

      {/* Popular Breeds Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Popular Breeds</h2>
              <p className="text-muted-foreground max-w-md text-sm md:text-base">Every puppy comes with complete vaccine records, pedigree documentation, and our health guarantee.</p>
            </motion.div>
            <Button variant="link" className="text-primary font-bold gap-2 md:text-lg p-0" asChild>
              <Link href="/pets">View All Breeds <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:grid md:grid-cols-4 md:gap-8 pb-4"
          >
            {popularBreeds.map((breed) => {
              const breedImg = PlaceHolderImages.find(i => i.id === breed.image);
              return (
                <motion.div
                  key={breed.id}
                  variants={fadeIn}
                  className="group cursor-pointer min-w-[280px] w-[80vw] md:w-auto snap-center shrink-0"
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                    <Image
                      src={breedImg?.imageUrl || ""}
                      alt={breed.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={breedImg?.imageHint}
                    />
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full hover:bg-white text-primary">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm text-muted-foreground line-clamp-2">{breed.description}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold px-2">{breed.name}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="md:col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Why Choose Dogs Paradise?</h2>
              <p className="text-muted-foreground mb-8 text-sm md:text-base">We are dedicated to connecting deserving dogs with loving families through responsible breeding and compassionate adoption.</p>
              <ul className="space-y-4">
                {[
                  "Top Quality Breeds with Pedigree Lineage",
                  "Immunized with Puppy DP Vaccine",
                  "24/7 After Sales Support",
                  "Doorstep Delivery Available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="md:col-span-2 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 md:gap-6 hide-scrollbar"
            >
              {[
                { icon: ShieldCheck, title: "Top Pedigree Lineage", desc: "Every puppy comes from champion bloodlines with verified pedigree" },
                { icon: Truck, title: "Doorstep Delivery", desc: "Safe and comfortable delivery right to your doorstep" },
                { icon: Heart, title: "Health Guaranteed", desc: "All puppies are immunized with DP vaccine and health records" },
                { icon: Clock, title: "24/7 Expert Support", desc: "Professional guidance and after-sales support around the clock" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow min-w-[280px] w-[80vw] md:w-auto snap-center shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm flex-1">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="px-4">
                      <p className="text-2xl md:text-3xl font-accent italic leading-relaxed mb-8">&quot;{t.text}&quot;</p>
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[3rem] p-10 md:p-24 relative overflow-hidden text-primary-foreground text-center"
          >
            {/* Background Paw Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10"><PawPrint className="w-24 h-24 rotate-12" /></div>
              <div className="absolute bottom-10 right-10"><PawPrint className="w-24 h-24 -rotate-12" /></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-headline font-bold mb-8">Ready to bring home your new best friend?</h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-12">
                Join hundreds of happy families who found their perfect companion through Dogs Paradise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold rounded-2xl" asChild>
                  <Link href="/pets">Explore Breeds</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl border-2 border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <Link href="/about">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
