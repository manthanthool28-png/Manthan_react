import React from 'react';

const Home: React.FC = () => (
  <div className="container">
    <div className="home-content">
      <div className="text-block">
        <h1 style={{ marginBottom: 12, fontSize: '2rem', fontWeight: 900, color: '#283593' }}>
          Think. Feel. Create.
        </h1>
        <p style={{ color: '#475569', marginBottom: 16 }}>
          Great design starts with empathy. I think deeply about people and craft experiences that feel intuitive, joyful, and real.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/portfolio" className="project-link" style={{ textDecoration: 'none' }}>
            View Projects →
          </a>
          <a href="/about" className="project-link" style={{ textDecoration: 'none' }}>
            About Me
          </a>
        </div>
      </div>
      <div className="image-block">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </div>
  </div>
);

export default Home;
