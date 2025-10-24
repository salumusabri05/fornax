export default function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 0 24px', fontFamily: 'var(--font-sans), Arial, Helvetica, sans-serif' }}>
      <h1 style={{ color: '#8f5cff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '18px', textAlign: 'left', letterSpacing: '0.01em' }}>
        About Fornax Labs
      </h1>
      <p style={{ color: '#2d044d', fontSize: '1.15rem', marginBottom: '32px', maxWidth: '700px', textAlign: 'left', lineHeight: '1.6' }}>
        Fornax Labs is a source of energy, creation, and transformation in FinTech, Web3, AI, Blockchain, and Smart Financial Systems.<br />
        <span style={{ color: '#8f5cff', fontWeight: 600 }}>Forging intelligence and trust in the new digital economy.</span>
      </p>
      <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, #8f5cff 60%, #c084fc 100%)', borderRadius: '2px', margin: '24px 0' }} />
    </div>
  );
}
