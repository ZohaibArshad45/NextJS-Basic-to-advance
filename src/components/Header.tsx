'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="fixed top-0 w-full bg-gray-100 shadow-md z-50">
    <nav className=" top-0 w-full bg-gray-200 shadow-md z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center py-4">
          {/* Logo or Brand */}
          <div className="text-xl font-bold text-blue-600">NEXT JS</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow transition">
                🏠 Home
              </Button>
            </Link>
            <Link href="/about">
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow transition">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow transition">
                Contact
              </Button>
            </Link>
            <Link href="/blog">
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow transition">
                Blog
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 ">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col bg-gray-100 items-center space-y-3 py-4 ">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                🏠 Home
              </Button>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                About
              </Button>
            </Link>
            <Link href="/waiting" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                Team
              </Button>
            </Link>
            <Link href="/waiting" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
