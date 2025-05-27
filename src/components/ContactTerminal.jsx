import React from 'react';
import '../App.css';

const contact = {
  email: "chancec63@gmail.com",
  linkedin: "https://www.linkedin.com/in/chance--coleman/",
  website: "https://www.chance-coleman.com"
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
    </section>
  );
};

export default ContactTerminal;
