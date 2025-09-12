// src/app/components/Contact.js
'use client';
import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible && !animate) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${animate ? styles.animate : ''}`}>
          Contact Me
        </h2>
      
        
        <div className={styles.contactInfo}>
          <div className={`${styles.infoItem} ${animate ? styles.animate : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.icon}>📧</div>
            <div className={styles.infoText}>
              <h3>Email</h3>
              <a href="mailto:willbern.dev@gmail.com" className={styles.link}>
                willbern.dev@gmail.com
              </a>
            </div>
          </div>
          
          <div className={`${styles.infoItem} ${animate ? styles.animate : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.icon}>📱</div>
            <div className={styles.infoText}>
              <h3>Phone</h3>
              <a href="tel:+14029040830" className={styles.link}>
                (402) 904-0830
              </a>
            </div>
          </div>
          
          <div className={`${styles.infoItem} ${animate ? styles.animate : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.icon}>💼</div>
            <div className={styles.infoText}>
              <h3>LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/william-bernal-651b51201" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                linkedin.com/in/william-bernal
              </a>
            </div>
          </div>
          
          <div className={`${styles.infoItem} ${animate ? styles.animate : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className={styles.infoText}>
              <h3>GitHub</h3>
              <a 
                href="https://github.com/William7786" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                github.com/William7786
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
