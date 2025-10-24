"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://linkedin.com/in/salumusabri05", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/salumusabri05", icon: FaGithub, label: "GitHub" },
  { href: "https://twitter.com/fornaxlabs", icon: FaTwitter, label: "X" },
  { href: "https://t.me/fornaxlabs", icon: FaTelegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      background: "linear-gradient(90deg, #1E0A3C 0%, #A855F7 100%)",
      color: "#F8F8F9",
      padding: 0,
      overflow: "hidden",
      boxShadow: "0 -2px 24px #A855F744",
      width: "100vw",
      minWidth: "100vw",
      left: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* CTA Bar */}
      <motion.div
        className="footer-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          background: "linear-gradient(90deg, #A855F7 0%, #6A0DAD 100%)",
          color: "#fff",
          padding: "32px 0 24px 0",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 -2px 24px #A855F744",
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 24,
          width: '100vw',
          minWidth: '100vw',
          margin: 0,
        }}
      >
  <span style={{ flex: 1, minWidth: 220, textAlign: 'center', width: '100%' }}>Ready to forge the future? Join Fornax Labs today!</span>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 24px #A855F7" }}
          whileTap={{ scale: 0.97, boxShadow: "0 0 32px #A855F7" }}
          style={{
            background: "#A855F7",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 0 16px #A855F7",
            transition: "box-shadow 0.2s",
            minWidth: 180,
            margin: 0,
          }}
        >
          <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            Contact Us →
          </Link>
        </motion.button>
      </motion.div>
      {/* Responsive styles for CTA bar */}
      <style>{`
        @media (max-width: 700px) {
          .footer-cta {
            flex-direction: column !important;
            font-size: 1.1rem !important;
            padding: 18px 0 12px 0 !important;
            gap: 12px !important;
            width: 100vw !important;
            min-width: 100vw !important;
            margin: 0 !important;
          }
          .footer-cta span, .footer-cta button {
            min-width: unset !important;
            width: 100vw !important;
            font-size: 1rem !important;
            padding: 10px 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>

      {/* Animated Background Particles */}
      <div id="footer-particles" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Footer Content */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "48px 0 32px 0",
        position: "relative",
        zIndex: 1,
        width: "100vw",
        minWidth: "100vw",
        gap: 32,
      }}>
        {/* About Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ flex: 1, minWidth: 220, margin: "0 24px", maxWidth: 320 }}
        >
          <motion.h2
            whileHover={{ textShadow: "0 0 16px #A855F7" }}
            style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}
          >
            FORNAX LABS
          </motion.h2>
          <p style={{ color: "#F8F8F9", fontSize: "1rem", lineHeight: 1.6 }}>
            Forging intelligence and trust in the decentralized world.<br />
            AI, Web3, and FinTech solutions for the modern financial era.
          </p>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ flex: 1, minWidth: 180, margin: "0 24px", maxWidth: 220 }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                style={{ marginBottom: 8 }}
              >
                <Link
                  href={link.href}
                  style={{
                    color: "#F8F8F9",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    position: "relative",
                    transition: "color 0.2s"
                  }}
                >
                  <motion.span
                    whileHover={{ textShadow: "0 0 12px #A855F7", color: "#A855F7" }}
                    style={{ cursor: "pointer" }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ flex: 1, minWidth: 180, margin: "0 24px", maxWidth: 220 }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: 18 }}>
            {socials.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8, boxShadow: "0 0 16px #A855F7", border: "2px solid #A855F7" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(168,85,247,0.08)",
                  color: "#fff",
                  fontSize: 22,
                  boxShadow: "0 0 8px #A855F744",
                  border: "2px solid transparent",
                  transition: "box-shadow 0.2s, border 0.2s"
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{ flex: 1, minWidth: 220, margin: "0 24px", maxWidth: 320 }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Contact Info</h3>
          <div style={{ color: "#F8F8F9", fontSize: "1rem", lineHeight: 1.7 }}>
            <div>📍 Dar es Salaam, Tanzania</div>
            <div>📧 salumusabri05@gmail.com</div>
            <div>📱 +255 698 959 522</div>
            <div>🌐 www.fornaxlabs.com</div>
          </div>
        </motion.div>
      </div>

  {/* 3D Wave Animation Placeholder */}
  <div id="footer-wave" style={{ position: "absolute", left: 0, bottom: 0, width: "100vw", minWidth: "100vw", height: 60, zIndex: 0 }} />
      {/* Responsive styles for footer */}
      <style>{`
        @media (max-width: 900px) {
          .footer-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 24px !important;
            padding: 32px 0 24px 0 !important;
          }
        }
      `}</style>
  </footer>
  );
}
