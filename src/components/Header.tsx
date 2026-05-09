'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'خدماتنا', href: '/services' },
  { label: 'من نحن', href: '/about' },
  { label: 'تواصل معنا', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* CTA Button - Left in RTL */}
        <button className="hidden sm:flex items-center gap-2 bg-foreground text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-primary transition-all duration-300">
          استشارة مجاناً !
        </button>

        {/* Nav Links - Center */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-foreground/70">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="hover:text-primary transition-colors duration-200 relative group"
            >
              {link?.label}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Logo - Right in RTL */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <AppLogo size={36} />
            <span className="font-black text-2xl text-primary tracking-tight" style={{ fontFamily: 'Cairo, sans-serif' }}>
              رواد
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <button className="mt-4 bg-foreground text-white text-base font-bold px-8 py-3 rounded-full hover:bg-primary transition-all">
            استشارة مجاناً !
          </button>
        </div>
      )}
    </header>
  );
}