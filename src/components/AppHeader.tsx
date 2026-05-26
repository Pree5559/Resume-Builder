"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Resume Shapeshifter
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm">
              Input
            </Button>
          </Link>
          <Link href="/analysis">
            <Button variant="ghost" size="sm">
              Analysis
            </Button>
          </Link>
          <Link href="/export">
            <Button variant="ghost" size="sm">
              Export
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}