import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  // Safety check: if skills is missing, use an empty object so it doesn't crash
  const skills = portfolioData.skills || {};

  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-medium tracking-wider text-sm uppercase mb-2">Core Competencies</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">My Technical Pillars</h2>
        </div>

        {/* 3-Column Grid for the 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-semibold text-accent mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-bg border border-white/5 rounded-lg text-xs text-text/70 hover:text-text hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;