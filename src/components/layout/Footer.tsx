import Link from "next/link";
import { PawPrint, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-24 md:pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <PawPrint className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <span className="font-headline font-bold text-xl tracking-tight">
                                Dogs<span className="text-primary">Paradise</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Where Dreams Meet Wagging Tails! We are a premium dog breeding and adoption service dedicated to connecting deserving dogs with loving families.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Button variant="ghost" size="icon" className="h-10 w-10 bg-background rounded-full hover:text-primary hover:bg-background/80" asChild>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 bg-background rounded-full hover:text-primary hover:bg-background/80" asChild>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-headline font-bold text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/pets" className="hover:text-primary transition-colors">Premium Breeds</Link></li>
                            <li><Link href="/shop" className="hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-headline font-bold text-lg">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>23, 5th Cross, Narayanappa Block, Benson Town, Bengaluru, Karnataka 560046</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 9060602037</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@dogsparaside.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4 text-sm">
                        <h3 className="font-headline font-bold text-lg">Newsletter</h3>
                        <p className="text-muted-foreground">
                            Subscribe to get updates on new puppy arrivals, care tips, and exclusive offers.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Your email address"
                                className="bg-background border-none rounded-xl h-12"
                            />
                            <Button className="h-12 px-6 rounded-xl">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground text-center md:text-left">
                    <p>© {new Date().getFullYear()} DogsParadise. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
