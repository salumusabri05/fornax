import Footer from "../Footer";

export default function Services() {
  return (
    <div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 0 24px', fontFamily: 'var(--font-sans), Arial, Helvetica, sans-serif' }}>
        <h1 style={{ color: '#8f5cff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '18px', textAlign: 'left', letterSpacing: '0.01em' }}>
          Our Services
        </h1>
        <ul style={{ color: '#2d044d', fontSize: '1.15rem', marginBottom: '32px', maxWidth: '700px', textAlign: 'left', lineHeight: '1.7', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '12px', paddingLeft: '0.5em', position: 'relative' }}><span style={{ color: '#8f5cff', fontWeight: 700, marginRight: '8px' }}>•</span>FinTech Solutions</li>
          <li style={{ marginBottom: '12px', paddingLeft: '0.5em', position: 'relative' }}><span style={{ color: '#8f5cff', fontWeight: 700, marginRight: '8px' }}>•</span>Web3 Development</li>
          <li style={{ marginBottom: '12px', paddingLeft: '0.5em', position: 'relative' }}><span style={{ color: '#8f5cff', fontWeight: 700, marginRight: '8px' }}>•</span>AI & Machine Learning</li>
          <li style={{ marginBottom: '12px', paddingLeft: '0.5em', position: 'relative' }}><span style={{ color: '#8f5cff', fontWeight: 700, marginRight: '8px' }}>•</span>Blockchain Integration</li>
          <li style={{ marginBottom: '12px', paddingLeft: '0.5em', position: 'relative' }}><span style={{ color: '#8f5cff', fontWeight: 700, marginRight: '8px' }}>•</span>Smart Financial Systems</li>
        </ul>
        <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, #8f5cff 60%, #c084fc 100%)', borderRadius: '2px', margin: '24px 0' }} />
      </div>
    </div>
  );
}
