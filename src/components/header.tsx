
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sheet on navigation
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">
            Glitch Launch
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
               <SheetHeader className="p-6 pb-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
               </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="p-6">
                   <Link href="/" className="text-2xl font-bold text-primary" onClick={handleLinkClick}>
                      Glitch Launch
                    </Link>
                </div>

                <nav className="flex-grow flex flex-col justify-center">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                         <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="text-2xl font-medium text-center block py-4 hover:text-primary transition-colors duration-300"
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                         </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 mt-auto text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Glitch Launch
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
