
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Instagram, Youtube } from "lucide-react";
import Link from 'next/link';
import CustomCursor from '@/components/custom-cursor';
import { Header } from '@/components/header';
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: 'Editist | Professional Video Editing Services',
  description: 'High-quality, professional video editing services to bring your vision to life. We specialize in cinematic editing, color grading, and motion graphics.',
  keywords: ['video editing', 'professional video editing', 'cinematic editing', 'color grading', 'motion graphics', 'post-production', 'video services'],
  authors: [{ name: 'Editist' }],
  openGraph: {
    title: 'Editist | Professional Video Editing Services',
    description: 'High-quality, professional video editing services to bring your vision to life.',
    url: 'https://editist.com', // Replace with your actual domain
    siteName: 'Editist',
    images: [
      {
        url: 'https://editist.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Editist Video Editing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editist | Professional Video Editing Services',
    description: 'High-quality, professional video editing services to bring your vision to life.',
    images: ['https://editist.com/twitter-image.png'], // Replace with your actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://editist.com', // Replace with your actual domain
  },
};

export const viewport: Viewport = {
  themeColor: '#111827',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Analytics />
        <CustomCursor />
        <Header />

        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="border-t bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-xl font-bold mb-2">Editist</h2>
                <p className="text-muted-foreground text-sm">High-quality, professional video editing services to bring your vision to life. We specialize in cinematic editing, color grading, and motion graphics to make your content stand out.</p>
              </div>
              <div className="md:col-start-4">
                <h3 className="font-semibold mb-4">Explore</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/projects" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">&copy; 2023 Editist. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="https://www.instagram.com/shakhar_editist_" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
