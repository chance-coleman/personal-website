import React, { useEffect, useState } from 'react';
import '../App.css';

const TerminalIntro = () => {
  const message = "Hello. I'm Chance Coleman — IAM Engineer & Full Stack Developer.";
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    let currentText = '';
    const interval = setInterval(() => {
      currentText += message.charAt(i);
      setText(currentText);
      i++;
      if (i >= message.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return <div className="terminal-intro">{text}</div>;
};

export default TerminalIntro;
