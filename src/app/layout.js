"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { poppins } from "./fonts";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Footer from "./Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Fornax Labs</title>
        <meta name="description" content="Fornax Labs - Next Generation AI, Web3, and FinTech" />
        <link rel="icon" type="image/webp" href="/icons/fornax_icon.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        style={{ margin: 0, background: 'linear-gradient(180deg, #111439 0%, #6A0DAD 100%)', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', minHeight: '100vh' }}
      >
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            width: '100vw',
            minWidth: '100vw',
            left: 0,
            background: 'linear-gradient(90deg, #A855F7 0%, #6A0DAD 60%, #F8F8F9 100%)',
            padding: '18px 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(168,85,247,0.12)',
            position: 'relative',
          }}
        >
          {/* Hamburger menu for mobile */}
          <div className="nav-hamburger" style={{ display: 'none', position: 'absolute', left: 24, top: 18, zIndex: 20 }}>
            <FiMenu
              size={40}
              color="#A855F7"
              style={{
                cursor: 'pointer',
                filter: 'drop-shadow(0 0 8px #A855F7)',
                background: '#fff',
                borderRadius: '8px',
                padding: '4px',
                boxShadow: '0 0 16px #A855F7',
                border: '2px solid #A855F7',
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          {/* Desktop nav links */}
          <div className="nav-links" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/team', label: 'Team' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: href === '/' ? 0.1 : 0.2, ease: 'easeOut' }}
                style={{ display: 'inline-block', margin: '8px 12px' }}
              >
                <Link
                  href={href}
                  style={{
                    color: pathname === href && href !== '/' ? '#A855F7' : '#fff',
                    margin: '0 8px',
                    textDecoration: 'none',
                    fontWeight: pathname === href && href !== '/' ? 800 : 'bold',
                    fontSize: pathname === href && href !== '/' ? '1.18rem' : '1.1rem',
                    textShadow: pathname === href && href !== '/' ? '0 0 16px #A855F7' : 'none',
                    transition: 'color 0.2s, font-size 0.2s',
                    position: 'relative',
                    padding: '8px 0',
                    borderRadius: 6,
                    display: 'inline-block',
                  }}
                >
                  {label}
                  {pathname === href && href !== '/' && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: -4,
                        width: '100%',
                        height: '3px',
                        background: 'linear-gradient(90deg, #A855F7 0%, #6A0DAD 100%)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Mobile nav links (animated) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: 60,
                  left: 0,
                  width: '100vw',
                  background: 'linear-gradient(90deg, #A855F7 0%, #6A0DAD 60%, #F8F8F9 100%)',
                  boxShadow: '0 2px 8px rgba(168,85,247,0.12)',
                  zIndex: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 0',
                }}
                className="mobile-nav-dropdown"
              >
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/team', label: 'Team' },
                  { href: '/contact', label: 'Contact' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      color: pathname === href && href !== '/' ? '#A855F7' : '#fff',
                      margin: '12px 0',
                      textDecoration: 'none',
                      fontWeight: pathname === href && href !== '/' ? 800 : 'bold',
                      fontSize: pathname === href && href !== '/' ? '1.18rem' : '1.1rem',
                      textShadow: pathname === href && href !== '/' ? '0 0 16px #A855F7' : 'none',
                      transition: 'color 0.2s, font-size 0.2s',
                      position: 'relative',
                      padding: '8px 0',
                      borderRadius: 6,
                      display: 'block',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
      {/* Responsive styles for nav and layout */}
      <style>{`
        @media (max-width: 900px) {
          nav {
            flex-direction: column !important;
            align-items: center !important;
            padding: 12px 0 !important;
          }
          .nav-links {
            display: none !important;
          }
          .nav-hamburger {
            display: block !important;
          }
          .mobile-nav-dropdown {
            position: static !important;
            top: unset !important;
            left: unset !important;
            width: 100vw !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
      </motion.nav>
        <div style={{ width: '100vw', minWidth: '100vw', margin: 0, padding: 0 }}>
          {children}
        </div>
      {/* Responsive styles for nav and layout */}
      <style>{`
        @media (max-width: 900px) {
          nav {
            flex-direction: column !important;
            align-items: center !important;
            padding: 12px 0 !important;
          }
          .main-content {
            padding: 0 !important;
          }
        }
      `}</style>
        <Footer />
      </body>
    </html>
  );
}
