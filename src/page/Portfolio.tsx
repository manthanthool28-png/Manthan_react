import React from 'react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => (
  <div className="container">
    <h1>Portfolio</h1>
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.id} className="project-card">
          <h2>{p.title}</h2>
          <p>{p.summary}</p>
          <p className="meta">Tech: {p.tech.join(', ')}</p>
          {p.link ? (
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View
            </a>
          ) : (
            <span className="project-link disabled">No link</span>
          )}
        </article>
      ))}
    </div>
  </div>
);

export default Portfolio;
