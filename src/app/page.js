"use client";
import Hero3D from "./Hero3D";
import { motion } from "framer-motion";

export default function Home() {
  return (
  <div style={{ minHeight: '100vh', background: '#F8F8F9', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <Hero3D />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 2, pointerEvents: 'none' }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ color: '#fff', fontSize: '3.2rem', fontWeight: 800, textShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD', textAlign: 'center', letterSpacing: '0.01em', marginBottom: '18px', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 10 }}
        >
          Igniting the Future of Finance.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          style={{ color: '#A855F7', fontSize: '1.35rem', fontWeight: 500, textAlign: 'center', textShadow: '0 0 16px #6A0DAD', marginBottom: '32px', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 10 }}
        >
          Where Artificial Intelligence Meets Blockchain Innovation.
        </motion.p>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '24px', pointerEvents: 'auto', zIndex: 10 }}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD' }}
            style={{
              padding: '18px 44px',
              borderRadius: '32px',
              background: 'linear-gradient(90deg, #6A0DAD 60%, #A855F7 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.15rem',
              boxShadow: '0 0 24px #A855F7',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s',
              outline: 'none',
              fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif',
            }}
          >
            Explore Our Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD' }}
            style={{
              padding: '18px 44px',
              borderRadius: '32px',
              background: 'linear-gradient(90deg, #A855F7 60%, #6A0DAD 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.15rem',
              boxShadow: '0 0 24px #6A0DAD',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s',
              outline: 'none',
              fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif',
            }}
          >
            Join the Future
          </motion.a>
        </div>
      </div>
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 0 24px', color: '#fff', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 3, position: 'relative' }}>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ fontSize: '1.15rem', textAlign: 'center', lineHeight: '1.7', color: '#A855F7', marginBottom: '32px', textShadow: '0 0 16px #6A0DAD' }}
        >
          Fornax Labs is a software powerhouse shaping the future of financial intelligence through AI, Web3, and blockchain innovation.
        </motion.p>
      </section>
    </div>
  );
}
