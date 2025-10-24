"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { poppins } from "./fonts";
import Link from "next/link";
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
            width: '100%',
            background: 'linear-gradient(90deg, #A855F7 0%, #6A0DAD 60%, #F8F8F9 100%)',
            padding: '18px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(168,85,247,0.12)'
          }}
        >
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
              style={{ display: 'inline-block' }}
            >
              <Link
                href={href}
                style={{
                  color: pathname === href && href !== '/' ? '#A855F7' : '#fff',
                  margin: '0 24px',
                  textDecoration: 'none',
                  fontWeight: pathname === href && href !== '/' ? 800 : 'bold',
                  fontSize: pathname === href && href !== '/' ? '1.18rem' : '1.1rem',
                  textShadow: pathname === href && href !== '/' ? '0 0 16px #A855F7' : 'none',
                  transition: 'color 0.2s, font-size 0.2s',
                  position: 'relative',
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
        </motion.nav>
        {children}
      </body>
    </html>
  );
}
