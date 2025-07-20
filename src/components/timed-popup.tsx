
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
          <Button variant="outline" onClick={() => handleOpenChange(false)}>Maybe Later</Button>
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
