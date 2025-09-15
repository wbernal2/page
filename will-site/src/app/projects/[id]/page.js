'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id);
  
  const project = projects.find(p => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Debug log to check images array
  if (project && project.images) {
    console.log('Project images:', project.images);
    console.log('Current image:', project.images[currentImageIndex]);
  }
  
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
        
        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.shortDescription}>{project.description}</p>
          <div className={styles.technologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Image Section - Top Half Priority */}
        <div className={styles.imageSection}>
          {project.images && project.images.length > 0 ? (
            <>
              <div className={styles.mainImage}>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className={styles.projectImage}
                  onError={(e) => {
                    console.log('Image failed to load:', project.images[currentImageIndex]);
                    e.target.src = '/placeholder-project.jpg'; // fallback image
                  }}
                />
              </div>
              {project.images.length > 1 && (
                <div className={styles.imageSlider}>
                  <button
                    className={`${styles.sliderButton} ${styles.prevButton}`}
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )}
                    disabled={project.images.length <= 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                    </svg>
                  </button>
                  <div className={styles.imageIndicators}>
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`${styles.indicator} ${
                          index === currentImageIndex ? styles.active : ''
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                  <button
                    className={`${styles.sliderButton} ${styles.nextButton}`}
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )}
                    disabled={project.images.length <= 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.projectIcon}>💻</span>
            </div>
          )}
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
