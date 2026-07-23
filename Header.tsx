"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#143D2B]/95 backdrop-blur shadow-lg border-b border-[#D4AF37]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="MFJ Travel & Transfers"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8 text-[#F7F3EA] font-medium">

          <Link href="/">Home</Link>

          <Link href="/services">Services</Link>

          <Link href="/tours">Tours</Link>

          <Link href="/about">About</Link>

          <Link href="/reviews">Reviews</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <a
            href="tel:+353872602717"
            className="flex items-center gap-2 border border-[#D4AF37] rounded-full px-4 py-2 text-[#F7F3EA] hover:bg-[#D4AF37] hover:text-black transition"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href="https://wa.me/353872602717"
            target="_blank"
            className="flex items-center gap-2 border border-green-500 rounded-full px-4 py-2 text-white bg-green-700 hover:bg-green-600 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <Link
            href="/booking"
            className="rounded-full bg-[#143D2B] border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 font-semibold hover:bg-[#1d5a40] transition"
          >
            BOOK NOW
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-[#D4AF37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-[#143D2B] border-t border-[#D4AF37]">

          <nav className="flex flex-col p-6 gap-5 text-white">

            <Link href="/">Home</Link>

            <Link href="/services">Services</Link>

            <Link href="/tours">Tours</Link>

            <Link href="/about">About</Link>

            <Link href="/reviews">Reviews</Link>

            <Link href="/gallery">Gallery</Link>

            <Link href="/contact">Contact</Link>

            <Link
              href="/booking"
              className="mt-4 bg-[#D4AF37] text-black text-center rounded-full py-3 font-semibold"
            >
              BOOK NOW
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}