
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { MobileNav } from '@/components/layout/MobileNav';
import { WhatsAppFloating } from '@/components/whatsapp/WhatsAppFloating';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'PawMarket PetShop | Premium Pets & Supplies',
  description: 'Your one-stop destination for pets, premium food, and toys. Secure bookings and fast delivery.',
  manifest: '/manifest.json',
  themeColor: '#2E8B5A',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PawMarket',
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <MobileNav />
        <WhatsAppFloating />
        <Toaster />
      </body>
    </html>
  );
}
