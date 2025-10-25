import React from 'react';

const About: React.FC = () => (
  <div className="container" style={{ maxWidth: 900 }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#283593', marginBottom: 12 }}>About Me</h1>
    <div style={{ height: 4, width: 64, background: 'linear-gradient(90deg,#60a5fa,#34d399)', borderRadius: 4, marginBottom: 16 }} />
    <p style={{ color: '#475569', fontSize: '1.05rem' }}>
      I am a passionate UI designer with a knack for creating visually appealing and user-friendly interfaces.
      With experience in various design tools and a strong understanding of user experience principles,
      I strive to deliver designs that not only look good but also provide an intuitive user experience.
    </p>
  </div>
);

export default About;
