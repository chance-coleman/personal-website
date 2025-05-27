import React from 'react';
import '../App.css';
import { resumeData } from '../resume-data';

const SkillHeatmap = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-grid">
        {resumeData.skills.map((skill, idx) => (
          <div className="skill-item" key={idx} title={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillHeatmap;
