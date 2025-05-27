import React from 'react';
import '../App.css';
import { resumeData } from '../resume-data';

const ExperienceTimeline = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      {resumeData.experience.map((job, idx) => (
        <div className="experience-item" key={idx}>
          <h3>{job.title} — {job.company}</h3>
          <p>{job.location} | {job.dates}</p>
          <ul>
            {job.bullets.map((bullet, bidx) => (
              <li key={bidx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceTimeline;
