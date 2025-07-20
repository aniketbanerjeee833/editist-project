
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { POPUP_DELAY_SECONDS } from "@/config";
import { Hand, MessageSquare } from "lucide-react";

export function TimedPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Hand className="h-6 w-6 text-primary" />
            <span>Thinking About a Project?</span>
          </DialogTitle>
          <DialogDescription>
            You've been here for a little while. Have a question or an idea you'd like to discuss? We're here to help bring it to life.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Maybe Later</Button>
          <Button asChild>
            <Link href="/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Let's Talk
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
