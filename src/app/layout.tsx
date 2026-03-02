
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { WhatsAppFloating } from '@/components/whatsapp/WhatsAppFloating';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Dogs Paradise | Premium Dog Breeding & Adoption',
  description: 'Where Dreams Meet Wagging Tails! Dogs Paradise is a premium dog breeding and adoption service in Bengaluru. Top quality breeds with pedigree lineage, immunized puppies, and doorstep delivery.',
  manifest: '/manifest.json',
  themeColor: '#F06B7A',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DogsParadise',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:ital,wght@1,400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <WhatsAppFloating />
        <Toaster />
      </body>
    </html>
  );
}
