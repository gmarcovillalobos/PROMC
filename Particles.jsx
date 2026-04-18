import React, { useEffect } from 'react';
import './Particles.css';

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 25 + 's';
      particle.style.animationDuration = (15 + Math.random() * 35) + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.2;
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="particles-container">
      <div className="particles" id="particles"></div>
      <div className="background-glow"></div>
    </div>
  );
};

export default Particles;
