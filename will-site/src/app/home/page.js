// src/app/home/page.js
"use client";

import Navigation from '../components/Navigation';
import Education from '../components/Education';
import ProjectsList from '../components/ProjectsList';
import SkillsShowcase from '../components/SkillsShowcase';
import Contact from '../components/Contact';
import Image from 'next/image';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const keywords = ['Software Developer', 'Learner', 'Teammate'];
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
              I am a{' '}
              <span style={{ color: '#fff', fontWeight: 700 }}>
                {keywords[currentKeyword]}
              </span>
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
                href="/about" 
                className={styles.secondaryButton}
              >
                About Me
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
          <p>&copy; 2024 Will Bernal. Built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}


