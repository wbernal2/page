// src/components/ProjectsList.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProjectsList.module.css';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => (
  <Link href={`/projects/${project.id}`} className={styles.projectCard}>
    <div className={styles.cardImage}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      ) : (
        <div className={styles.imagePlaceholder}>
          <span className={styles.projectIcon}>💻</span>
        </div>
      )}
      {project.featured && (
        <div className={styles.featuredBadge}>Featured</div>
      )}
    </div>
    
    <div className={styles.cardContent}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </div>
  </Link>
);

export default function ProjectsList() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const hasMoreProjects = otherProjects.length > 0;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionDescription}>
          Click on any project to learn more about it
        </p>
        
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMoreProjects && (
          <>
            {showAll && (
              <>
                <h3 className={styles.moreProjectsTitle}>More Projects</h3>
                <div className={styles.moreProjectsGrid}>
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </>
            )}
            
            <div className={styles.viewMoreSection}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className={styles.viewMoreButton}
              >
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>View More Projects ({otherProjects.length})</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
