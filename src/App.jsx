import React from 'react';
import TerminalIntro from './components/TerminalIntro';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectShowcase from './components/ProjectShowcase';
import ContactTerminal from './components/ContactTerminal';
import HUDBackground from './components/HUDBackground';
import Internships from './components/Internships';
import './App.css';

function App() {
  return (
    <>
      <HUDBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <TerminalIntro />
        <ExperienceTimeline />
        <Internships />
        <ProjectShowcase />
        <ContactTerminal />
      </div>
    </>
  );
}

export default App;
