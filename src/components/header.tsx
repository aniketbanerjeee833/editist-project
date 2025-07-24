"use client";

import { useState } from "react";
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

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">
            Editist
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-sm border-0 flex flex-col">
                <SheetHeader className="flex flex-row justify-between items-center">
                    <SheetTitle asChild>
                      <Link href="/" className="text-2xl font-bold text-primary" onClick={handleLinkClick}>
                        Editist
                      </Link>
                    </SheetTitle>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X />
                        <span className="sr-only">Close Menu</span>
                      </Button>
                    </SheetClose>
                </SheetHeader>
                <motion.div
                  className="flex flex-col items-center justify-center flex-1 gap-8"
                  variants={menuVariants}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={linkVariants}>
                       <Link
                          href={link.href}
                          className="text-3xl font-semibold text-foreground transition-colors hover:text-primary"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                    </motion.div>
                  ))}
                </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
