"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  // { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-700 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logojohannus.png"
              alt="Johannus Logo"
              height={32}
              width={30}
              className="rounded-sm"
            />
            <span className="text-xl font-black text-gray-100">Johannus</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-100 transition-colors hover:text-purple-300 duration-200 relative group"
              >
                <span>{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* GitHub Button */}
            <Button
              variant="outline"
              asChild
              className="z-20 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:scale-95 bg-transparent"
            >
              <a
                href="https://github.com/johannus22"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0 text-gray-100 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-900 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm font-medium text-gray-100 hover:text-gray-300 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
