"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold border-r pr-6 inline-block align-middle mr-5">
          404
        </h1>
        <div className="inline-block align-middle">
          <h2 className="text-2xl font-normal leading-tight">
            This page could not be found.
          </h2>
        </div>
        <Button asChild className="mt-8 block mx-auto">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  );
}
