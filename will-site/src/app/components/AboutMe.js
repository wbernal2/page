// src/components/AboutMe.js
import styles from './AboutMe.module.css';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.intro}>
              Hi, I&apos;m <span className={styles.highlight}>William Bernal</span>, a Computer Science student 
              at the University of Nebraska.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight_item}>
                <span className={styles.number}>3+</span>
                <span className={styles.label}>Years Coding</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.number}>15+</span>
                <span className={styles.label}>Projects Built</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Technologies</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.profileImage}>
              <Image 
                src="/Will_Selfie.JPG" 
                alt="William Bernal" 
                width={300}
                height={300}
                className={styles.profilePhoto}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
