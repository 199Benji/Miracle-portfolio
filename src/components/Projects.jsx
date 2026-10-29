import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;
  
  // Use an array to track multiple open projects
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleProject = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id) 
        : [...prev, id] 
    );
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-accent font-medium tracking-wider text-sm uppercase mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">Projects I've Built</h2>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedIds.includes(project.id);
            
            return (
              <div 
                key={project.id} 
                className="border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/30 transition-colors duration-300 overflow-hidden"
              >
                {/* Clickable Header Row */}
                <button 
                  onClick={() => toggleProject(project.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl md:text-2xl font-heading font-semibold transition-colors duration-300 ${isExpanded ? 'text-accent' : 'text-text'}`}>
                        {project.title}
                      </h3>
                      <span className="text-xs text-text/40 font-mono border border-white/10 px-2 py-0.5 rounded">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-text/60 font-medium">
                      {project.shortTech}
                    </p>
                  </div>

                  {/* The Plus / Minus Icon */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-500 ${isExpanded ? 'bg-accent/10 border-accent rotate-45' : 'hover:border-accent hover:text-accent'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                {/* Expandable Content Area (Safe Animation) */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                    <div className="flex flex-col md:flex-row gap-8">
                      
                      {/* Project Image */}
                      <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-white/10 bg-bg">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      {/* Details & Links */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-text/70 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-lg text-sm font-medium text-text/80 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            View Code
                          </a>
                          
                          {project.liveLink && project.liveLink !== "#" && (
                            <a 
                              href={project.liveLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-bg rounded-lg text-sm font-bold hover:bg-accent/90 transition-all duration-300"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;