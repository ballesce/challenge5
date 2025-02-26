'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// 🔥 Komponen Navbar
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-green-400 font-extrabold text-2xl">Skripsi Online</h1>
        
        {/* Button Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link href="#">Home</Link>
          <Link href="#">Tentang</Link>
          <Link href="#">Layanan</Link>
          <Link href="#">Stories</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Latihan</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 mt-4 bg-black p-4 text-lg font-semibold">
          <Link href="#" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Tentang</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Layanan</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Stories</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="#" onClick={() => setIsOpen(false)}>Latihan</Link>
        </div>
      )}
    </nav>
  );
}