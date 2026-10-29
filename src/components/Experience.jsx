import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  const { experience } = portfolioData;

    const groupedExperience = experience.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16">
          <p className="text-accent font-medium tracking-wider text-sm uppercase mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">Experience & Education</h2>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedExperience).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-text/50 uppercase tracking-wider mb-6">
                {category}
              </h3>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                      <h4 className="text-xl font-heading font-semibold text-text group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-sm text-text/40 font-mono">{item.year}</span>
                    </div>
                    <p className="text-accent/80 text-sm font-medium mb-2">{item.subtitle}</p>
                    <p className="text-text/60 text-sm leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;