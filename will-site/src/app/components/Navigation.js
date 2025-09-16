// src/app/components/Navigation.js
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Removed logo/name for minimal navigation */}
        
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <a 
            href="#projects" 
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#education" 
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}
          >
            Education
          </a>
          <a 
            href="#skills" 
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Skills
          </a>
          <a 
            href="/about" 
            className={styles.menuItem}
          >
            About Me
          </a>
          <a 
            href="#contact" 
            className={styles.menuItem}
            style={{ marginLeft: 'auto' }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
        
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
}
