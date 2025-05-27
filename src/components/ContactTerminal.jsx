import React from 'react';
import '../App.css';

const contact = {
  email: "chancec63@gmail.com",
  linkedin: "https://www.linkedin.com/in/chance--coleman/",
  website: "https://chance-coleman.github.io/personal-website/",
  github: "https://github.com/chance-coleman"
};

const ContactTerminal = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      <p>
        📧 Email: <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
      </p>
      <p>
        💼 LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">chance--coleman</a>
      </p>
      <p>
        🐙 Github: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">chance-coleman</a>
      </p>
    </section>
  );
};

export default ContactTerminal;
