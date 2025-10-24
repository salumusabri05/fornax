
"use client";
import Hero3D from "./Hero3D";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";


// Simple Carousel component for demo (replace with a library for production)
function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex(i => (i === items.length - 1 ? 0 : i + 1));
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "340px" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", transition: "all 0.5s cubic-bezier(.77,0,.18,1)", minHeight: "320px" }}>
        {items[index]}
      </div>
      <button onClick={prev} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "#A855F7", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, fontSize: 18, cursor: "pointer", boxShadow: "0 0 8px #A855F7" }}>&lt;</button>
      <button onClick={next} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "#A855F7", color: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, fontSize: 18, cursor: "pointer", boxShadow: "0 0 8px #A855F7" }}>&gt;</button>
      {/* Carousel Dots */}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8 }}>
        {items.map((_, i) => (
          <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: i === index ? "#A855F7" : "#ddd", display: "inline-block", transition: "background 0.2s" }} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(120deg, #F8F8F9 60%, #A855F7 100%)', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* Animated background effect for hero */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '60vh', zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 60% 40%, #A855F7 0%, #F8F8F9 80%)', opacity: 0.25, animation: 'bgPulse 6s infinite alternate' }} />
      <Hero3D />
      {/* Hero & CTA Section - adaptive height, entrance animation */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }} style={{ width: '100%', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', zIndex: 2, position: 'relative', pointerEvents: 'none', paddingTop: '48px', paddingBottom: '24px' }}>
  <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }} style={{ color: '#111439', fontSize: '3.2rem', fontWeight: 800, textShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD', textAlign: 'center', letterSpacing: '0.01em', marginBottom: '18px', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 10, textTransform: 'uppercase', lineHeight: 1.1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'unset' }}>Igniting the Future of Finance.</motion.h1>
  <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6, ease: 'easeOut' }} style={{ color: '#A855F7', fontSize: '1.35rem', fontWeight: 500, textAlign: 'center', textShadow: '0 0 16px #6A0DAD', marginBottom: '32px', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'unset' }}>Where Artificial Intelligence Meets Blockchain Innovation.</motion.p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '24px', pointerEvents: 'auto', zIndex: 10, flexWrap: 'wrap' }}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD' }}
            style={{
              padding: '16px 36px',
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
              marginBottom: 12,
              display: 'inline-block',
              filter: 'brightness(1.2) drop-shadow(0 0 8px #A855F7)',
            }}
          >
            Explore Our Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #A855F7, 0 0 8px #6A0DAD' }}
            style={{
              padding: '16px 36px',
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
              marginBottom: 12,
              display: 'inline-block',
              filter: 'brightness(1.2) drop-shadow(0 0 8px #A855F7)',
            }}
          >
            Join the Future
          </motion.a>
        </div>
  </motion.div>
      {/* About Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 0 24px', color: '#111439', fontFamily: 'var(--font-poppins), Arial, Helvetica, sans-serif', zIndex: 3, position: 'relative', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ fontSize: '1.15rem', textAlign: 'center', lineHeight: '1.7', color: '#A855F7', marginBottom: '32px', textShadow: '0 0 16px #6A0DAD' }}
        >
          Fornax Labs is a software powerhouse shaping the future of financial intelligence through AI, Web3, and blockchain innovation.
        </motion.p>
      </section>
      {/* Featured Projects Section as Carousel with images/logos */}
      <section id="projects" style={{ width: '100%', background: 'rgba(106,13,173,0.08)', padding: '48px 0', marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} style={{ color: '#6A0DAD', fontSize: '2.2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center', textShadow: '0 0 16px #A855F7' }}>Featured Projects</motion.h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto', overflow: 'hidden' }}>
          <Carousel items={[
            <motion.div key={1} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 24px #A855F722', padding: '32px', minWidth: '260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src="/public/globe.svg" alt="Project Globe" loading="lazy" style={{ width: 64, height: 64, marginBottom: 18, borderRadius: '50%', boxShadow: '0 0 16px #A855F7', background: 'linear-gradient(120deg, #A855F7 60%, #6A0DAD 100%)' }} />
              <h3 style={{ color: '#6A0DAD', fontWeight: 700, fontSize: '1.25rem', marginBottom: '12px' }}>Globe AI</h3>
              <p style={{ color: '#111439', fontSize: '1rem', marginBottom: '8px' }}>AI-powered global finance analytics platform.</p>
            </motion.div>,
            <motion.div key={2} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 24px #A855F722', padding: '32px', minWidth: '260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src="/public/window.svg" alt="Project Window" loading="lazy" style={{ width: 64, height: 64, marginBottom: 18, borderRadius: '50%', boxShadow: '0 0 16px #A855F7', background: 'linear-gradient(120deg, #A855F7 60%, #6A0DAD 100%)' }} />
              <h3 style={{ color: '#6A0DAD', fontWeight: 700, fontSize: '1.25rem', marginBottom: '12px' }}>WindowChain</h3>
              <p style={{ color: '#111439', fontSize: '1rem', marginBottom: '8px' }}>Decentralized blockchain-based identity solution.</p>
            </motion.div>,
            <motion.div key={3} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 24px #A855F722', padding: '32px', minWidth: '260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src="/public/file.svg" alt="Project File" loading="lazy" style={{ width: 64, height: 64, marginBottom: 18, borderRadius: '50%', boxShadow: '0 0 16px #A855F7', background: 'linear-gradient(120deg, #A855F7 60%, #6A0DAD 100%)' }} />
              <h3 style={{ color: '#6A0DAD', fontWeight: 700, fontSize: '1.25rem', marginBottom: '12px' }}>FileX</h3>
              <p style={{ color: '#111439', fontSize: '1rem', marginBottom: '8px' }}>Secure file storage and sharing for Web3.</p>
            </motion.div>
          ]} />
        </div>
      </section>
      {/* Testimonials Section as Carousel with avatars */}
      <section style={{ width: '100%', background: 'rgba(168,85,247,0.08)', padding: '48px 0', marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} style={{ color: '#A855F7', fontSize: '2.2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center', textShadow: '0 0 16px #6A0DAD' }}>Testimonials</motion.h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto', overflow: 'hidden' }}>
          <Carousel items={[
            <motion.div key={1} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 24px #6A0DAD22', padding: '32px', minWidth: '260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FaUserCircle size={48} color="#A855F7" style={{ marginBottom: 18, boxShadow: '0 0 16px #A855F7' }} />
              <p style={{ color: '#111439', fontSize: '1rem', marginBottom: '8px', fontStyle: 'italic' }}>&quot;Fornax Labs delivered beyond expectations. Their tech is truly next-gen!&quot;</p>
              <span style={{ color: '#A855F7', fontWeight: 600 }}>— Sarah, FinTech CEO</span>
            </motion.div>,
            <motion.div key={2} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 0 24px #6A0DAD22', padding: '32px', minWidth: '260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FaUserCircle size={48} color="#A855F7" style={{ marginBottom: 18, boxShadow: '0 0 16px #A855F7' }} />
              <p style={{ color: '#111439', fontSize: '1rem', marginBottom: '8px', fontStyle: 'italic' }}>&quot;Their blockchain solutions are secure and easy to use.&quot;</p>
              <span style={{ color: '#A855F7', fontWeight: 600 }}>— Alex, Web3 Founder</span>
            </motion.div>
          ]} />
        </div>
      </section>
      {/* Responsive styles and animated background keyframes */}
      <style>{`
        @keyframes bgPulse {
          0% { opacity: 0.18; }
          100% { opacity: 0.32; }
        }
        @media (max-width: 900px) {
          .project-card, .testimonial-card {
            min-width: 220px !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 700px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          p, a {
            font-size: 1rem !important;
          }
          a {
            padding: 12px 20px !important;
          }
          section {
            padding: 32px 0 !important;
          }
          .hero-content {
            height: 100vh !important;
            width: 100vw !important;
            left: 0 !important;
          }
        }
        @media (max-width: 500px) {
          h1 {
            font-size: 1.2rem !important;
          }
          h2 {
            font-size: 1rem !important;
          }
          section {
            padding: 18px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
