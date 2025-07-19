import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Instagram, Youtube } from "lucide-react"
import Link from 'next/link';
import CustomCursor from '@/components/custom-cursor';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Glitch Launch',
  description: 'The future of awesome is here.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <CustomCursor />
        <Header />

        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="border-t bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <h2 className="text-xl font-bold mb-2">Glitch Launch</h2>
                <p className="text-muted-foreground text-sm">The future of awesome is here. Build faster, better, and more beautifully than ever before.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                  <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Glitch Launch. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
