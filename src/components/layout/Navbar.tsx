
"use client";

import Link from "next/link";
import { Bike, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-secondary p-2 rounded-full text-primary">
              <Bike className="h-6 w-6" />
            </div>
            <span className="font-headline text-2xl tracking-tighter uppercase">
              Envios <span className="text-secondary">Dosruedas</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">
              Inicio
            </Link>
            <Link href="/components-library" className="text-sm font-medium hover:text-secondary transition-colors">
              Librería UI
            </Link>
            <Link href="/design-tokens" className="text-sm font-medium hover:text-secondary transition-colors">
              Tokens
            </Link>
            <Button variant="secondary" size="sm" className="font-bold">
              Solicitar Envío
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 bg-primary p-4 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <Link href="/" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link href="/components-library" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
            Librería UI
          </Link>
          <Link href="/design-tokens" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
            Tokens
          </Link>
          <Button variant="secondary" className="w-full font-bold">
            Solicitar Envío
          </Button>
        </div>
      )}
    </nav>
  );
}
