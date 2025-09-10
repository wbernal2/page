// src/app/home/page.js
'use client';

// import FloatingPcScene from '../components/FloatingPcScene'; // Removed 3D component
import Navigation from '../components/Navigation';
import Education from '../components/Education';
import ProjectsList from '../components/ProjectsList';
import Courses from '../components/Courses';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
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
              Hi, I&apos;m <span className={styles.highlight}>Will Bernal</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Software Engineer & Computer Science Student
            </p>
            <p className={styles.heroDescription}>
              I build innovative web applications and solve complex problems through elegant code.
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
              <div className={styles.photoPlaceholderLarge}>
                <span className={styles.photoEmojiLarge}>👨‍💻</span>
              </div>
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

      <Education />
      <ProjectsList />
      <Courses />
      <Skills />
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
