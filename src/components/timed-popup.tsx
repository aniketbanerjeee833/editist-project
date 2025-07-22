
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
import { ArrowRight, MessageSquare } from "lucide-react";

const POPUP_DISMISSED_KEY = "popupDismissed";

export function TimedPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has already been dismissed in this session
    const dismissed = sessionStorage.getItem(POPUP_DISMISSED_KEY);
    if (dismissed === 'true') {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // If the dialog is being closed for any reason, set the session storage item
      sessionStorage.setItem(POPUP_DISMISSED_KEY, 'true');
    }
    setIsOpen(open);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg p-10 text-center">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl font-extrabold tracking-tight">
            Let's Build Something Great Together
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Reach out and let's start the conversation.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" onClick={() => handleOpenChange(false)}>Maybe Later</Button>
            <Button size="lg" asChild>
                <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
