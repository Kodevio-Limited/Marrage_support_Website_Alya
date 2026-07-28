'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 + i * 0.05 },
  }),
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Shorts', href: '/shorts' },
    { label: 'News', href: '/news' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'Consultation', href: '/consultation' },
    { label: 'Emirates', href: '/emirates' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[#E8CFC1] bg-white/95 backdrop-blur-md transition-all duration-300"
    >
      <Container className="flex h-[100px] items-center justify-between py-[10px] !max-w-[1440px] !px-[10px] gap-[10px]">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <Link href="/" className="group flex items-center focus:outline-none">
            <Image
              src="/Static/logo.png"
              alt="ALIA Logo"
              width={80}
              height={75}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-[20px] lg:flex max-w-[680px]">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              custom={i}
              variants={navLinkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="relative text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-[#781E36] py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#781E36] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions (Language Dropdown + CTA) */}
        <motion.div
          className="hidden items-center gap-4 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          {/* Language Dropdown */}
          <div className="relative">
            <motion.button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-[40px] w-[120px] items-center justify-center gap-2 rounded-xl border border-[#E8CFC1] bg-[#FAEDE6] text-xs font-bold text-[#781E36] transition-all duration-300 hover:border-[#781E36] hover:bg-[#781E36] hover:text-white shadow-xs cursor-pointer"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" className="shrink-0">
                <rect x="0" y="0" width="5" height="14" fill="#FF0000" />
                <rect x="5" y="0" width="15" height="4.67" fill="#009E00" />
                <rect x="5" y="4.67" width="15" height="4.66" fill="#FFFFFF" />
                <rect x="5" y="9.33" width="15" height="4.67" fill="#000000" />
              </svg>
              <span>Arabic</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </motion.button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-2 w-[160px] rounded-xl border border-[#E8CFC1] bg-white shadow-xl z-50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setLangOpen(false)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-xs font-bold text-[#781E36] hover:bg-[#FAEDE6] transition-colors"
                  >
                    <svg width="20" height="14" viewBox="0 0 20 14" className="shrink-0">
                      <rect x="0" y="0" width="5" height="14" fill="#FF0000" />
                      <rect x="5" y="0" width="15" height="4.67" fill="#009E00" />
                      <rect x="5" y="4.67" width="15" height="4.66" fill="#FFFFFF" />
                      <rect x="5" y="9.33" width="15" height="4.67" fill="#000000" />
                    </svg>
                    Arabic
                  </button>
                  <button
                    type="button"
                    onClick={() => setLangOpen(false)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-[#FAEDE6] transition-colors border-t border-[#E8CFC1]/60"
                  >
                    <svg width="20" height="14" viewBox="0 0 20 14" className="shrink-0">
                      <rect x="0" y="0" width="20" height="14" fill="#012169" />
                      <polygon points="0,0 20,14 20,0" fill="white" opacity="0.3" />
                      <polygon points="0,14 20,0 0,0" fill="white" opacity="0.3" />
                      <rect x="9" y="0" width="2" height="14" fill="white" />
                      <rect x="0" y="6" width="20" height="2" fill="white" />
                      <rect x="9" y="0" width="2" height="14" fill="#E4002B" />
                      <rect x="0" y="6" width="20" height="2" fill="#E4002B" />
                    </svg>
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button href="#cta" size="sm" variant="primary">
              Apply Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-[#FAEDE6] lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#781E36]" /> : <Menu className="h-6 w-6 text-[#781E36]" />}
        </motion.button>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#E8CFC1] bg-white shadow-xl lg:hidden"
          >
            <div className="px-6 py-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-semibold text-gray-800 hover:text-[#781E36] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 flex flex-col gap-3 pt-4 border-t border-[#E8CFC1]"
                >
                  <button
                    type="button"
                    className="flex h-[40px] w-full items-center justify-center gap-2 rounded-xl border border-[#E8CFC1] bg-[#FAEDE6] text-xs font-bold text-[#781E36]"
                  >
                    <svg width="20" height="14" viewBox="0 0 20 14" className="shrink-0">
                      <rect x="0" y="0" width="5" height="14" fill="#FF0000" />
                      <rect x="5" y="0" width="15" height="4.67" fill="#009E00" />
                      <rect x="5" y="4.67" width="15" height="4.66" fill="#FFFFFF" />
                      <rect x="5" y="9.33" width="15" height="4.67" fill="#000000" />
                    </svg>
                    <span>Arabic</span>
                  </button>
                  <Button href="#cta" size="md" variant="primary" className="w-full">
                    Apply Now
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
