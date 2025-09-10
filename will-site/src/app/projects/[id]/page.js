'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id);
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Project not found</h1>
          <button onClick={() => router.back()} className={styles.backButton}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Back to Projects
        </button>
        
        <div className={styles.header}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.projectIcon}>💻</span>
            </div>
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.shortDescription}>{project.description}</p>
            
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>{tech}</span>
              ))}
            </div>
            
            <div className={styles.links}>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.linkButton} ${styles.demoButton}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className={styles.sections}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Background</h2>
            <p className={styles.sectionContent}>{project.background}</p>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I Did</h2>
            <ul className={styles.achievementsList}>
              {project.whatIDid.map((achievement, index) => (
                <li key={index} className={styles.achievement}>
                  {achievement}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
