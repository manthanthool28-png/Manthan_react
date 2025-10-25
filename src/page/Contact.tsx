import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      // Replace this with EmailJS / your API later
      await new Promise((res) => setTimeout(res, 900));
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <div className="container" style={{ maxWidth: 950 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#283593', marginBottom: 8 }}>
            Contact
          </h1>
          <p style={{ color: '#475569' }}>
            Have an idea you’d like to bring to life? Get in touch !!
          </p>
        </div>

        <div className="contact-container">
          {/* Info column */}
          <div className="contact-info">
            <img src="/profile.jpg" alt="Your avatar" className="contact-hero" />
            <h1 style={{ marginTop: 12 }}>Manthan Thool</h1>
            <p>UI/UX Designer</p>

            <div style={{ marginTop: 12, lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong> <a href="mailto:manthanthool28@gmail.com">manthanthool28@gmail.com</a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manthanthool28" target="_blank" rel="noreferrer">manthanthool28</a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>Behance:</strong> <a href="https://www.behance.net/manthanthool" target="_blank" rel="noreferrer">manthanthool</a>
              </p>
            </div>
          </div>

          {/* Form column */}
          <form className="contact-form" onSubmit={onSubmit} aria-label="Contact form">
            <label htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? 'Sending…' : 'Send message'}
            </button>

            {sent && (
              <div className="success-message" role="status" aria-live="polite">
                Thanks! Your message was sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
