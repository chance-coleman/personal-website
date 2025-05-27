import React from 'react';
import '../App.css';
import { resumeData } from '../resume-data';

const Internships = () => (
  <section className="internships-section" id="internships">
    <h2 className="section-title">Internships</h2>
    {resumeData.internships.map((intern, idx) => (
      <div key={idx} className="internship-item">
        <strong>{intern.company}</strong>, {intern.location} — {intern.title}
        <p style={{ marginTop: '0.3rem', color: '#00ffcc', fontSize: '1rem' }}>{intern.description}</p>
      </div>
    ))}
  </section>
);

export default Internships;
