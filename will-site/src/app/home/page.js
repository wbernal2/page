// src/app/home/page.js
'use client';

// import FloatingPcScene from '../components/FloatingPcScene'; // Removed 3D component
import Navigation from '../components/Navigation';
import Education from '../components/Education';
import ProjectsList from '../components/ProjectsList';
import SkillsShowcase from '../components/SkillsShowcase';
import Contact from '../components/Contact';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span>Hi,</span> I&apos;m <span className={styles.highlight}>Will Bernal</span>
            </h1>
            <p className={styles.heroDescription}>
              I am a Software Developer
            </p>
            <div className={styles.heroActions}>
              <a 
                href="#projects" 
                className={styles.primaryButton}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className={styles.secondaryButton}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.profilePhotoLarge}>
              <Image 
                src="/Will_Selfie.JPG" 
                alt="William Bernal" 
                width={500}
                height={500}
                className={styles.actualPhotoLarge}
                priority
              />
            </div>
            <div className={styles.aboutMeSection}>
              <a 
                href="/about" 
                className={styles.aboutMeLink}
              >
                <span className={styles.aboutMeText}>About Me</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProjectsList />
      <Education />
      <div className="mb-24"></div>
      <SkillsShowcase className="max-w-6xl mx-auto mb-16" />
      <Contact />
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Will Bernal. Built with Next.js and passion for great design.</p>
        </div>
      </footer>
    </div>
  );
}
