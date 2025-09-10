// src/app/home/page.js
'use client';

import FloatingPcScene from '../components/FloatingPcScene';
import Navigation from '../components/Navigation';
import AboutMe from '../components/AboutMe';
import ProjectsList from '../components/ProjectsList';
import SchoolWork from '../components/SchoolWork';
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
              Hi, I'm <span className={styles.highlight}>Will Bernal</span>
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
            <FloatingPcScene />
          </div>
        </div>
      </section>

      <AboutMe />
      <ProjectsList />
      <SchoolWork />
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
