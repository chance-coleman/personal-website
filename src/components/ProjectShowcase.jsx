import React from 'react';
import '../App.css';
import { resumeData } from '../resume-data';

const ProjectShowcase = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      {resumeData.projects.map((proj, idx) => (
        <div key={idx} className="project-card" aria-label={`Project: ${proj.name}`}>
          <div className="project-name">{proj.name}</div>
          <div className="project-tech">{proj.tech}</div>
          <div className="project-desc">{proj.description}</div>
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
