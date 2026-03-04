import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const { name, email, subject, message } = form;
    const mailto = `mailto:mbinanafana1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-num">05 /</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-inner">
          <div>
            <div className="contact-text">
              <h3>Travaillons<br />ensemble ✦</h3>
              <p>
                Disponible pour des missions freelance, des collaborations ou
                des opportunités de poste. N'hésitez pas à me contacter.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:mbinanafana1@gmail.com" className="contact-link">
                <span className="contact-link-icon">✉</span>
                <div>
                  <div className="contact-link-info">Email</div>
                  <div className="contact-link-val">mbinanafana1@gmail.com</div>
                </div>
              </a>
              <a href="tel:+261383668336" className="contact-link">
                <span className="contact-link-icon">✆</span>
                <div>
                  <div className="contact-link-info">Téléphone</div>
                  <div className="contact-link-val">+261 38 36 683 36</div>
                </div>
              </a>
              <div className="contact-link" style={{ cursor: 'default' }}>
                <span className="contact-link-icon">📍</span>
                <div>
                  <div className="contact-link-info">Localisation</div>
                  <div className="contact-link-val">Fianarantsoa, Madagascar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label>Votre nom</label>
              <input name="name" placeholder="Ex: Alice Martin"
                value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="alice@exemple.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sujet</label>
              <input name="subject" placeholder="Proposition de collaboration..."
                value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Décrivez votre projet ou votre demande..."
                value={form.message} onChange={handleChange} />
            </div>
            <button className="btn-submit" onClick={handleSubmit}>
              Envoyer le message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}