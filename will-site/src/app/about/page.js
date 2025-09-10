'use client';

import { useRouter } from 'next/navigation';
import styles from './About.module.css';

export default function About() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Back to Home
        </button>
        
        <div className={styles.aboutHeader}>
          <div className={styles.profileSection}>
            <div className={styles.profilePhoto}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoEmoji}>👨‍💻</span>
              </div>
            </div>
            <div className={styles.headerText}>
              <h1 className={styles.name}>William Bernal</h1>
              <p className={styles.title}>Computer Science Student</p>
              <p className={styles.university}>University of Nebraska</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.paragraph}>
              Hi! I&apos;m William Bernal, a passionate Computer Science student at the University of Nebraska. 
              I&apos;m currently pursuing my Bachelor&apos;s degree and have developed a strong foundation in software 
              development, algorithms, and data structures.
            </p>
            <p className={styles.paragraph}>
              My journey in computer science began with a curiosity about how technology shapes our world. 
              Since then, I&apos;ve been dedicated to learning and applying various programming languages and 
              frameworks to create meaningful projects that solve real-world problems.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Interests</h2>
            <div className={styles.interestsGrid}>
              <div className={styles.interestCard}>
                <div className={styles.interestIcon}>🌐</div>
                <h3>Web Development</h3>
                <p>Creating responsive and interactive web applications using modern frameworks.</p>
              </div>
              <div className={styles.interestCard}>
                <div className={styles.interestIcon}>🤖</div>
                <h3>Machine Learning</h3>
                <p>Exploring AI and data science to build intelligent systems and predictive models.</p>
              </div>
              <div className={styles.interestCard}>
                <div className={styles.interestIcon}>📱</div>
                <h3>Mobile Development</h3>
                <p>Building cross-platform mobile applications with great user experiences.</p>
              </div>
              <div className={styles.interestCard}>
                <div className={styles.interestIcon}>⚡</div>
                <h3>Performance Optimization</h3>
                <p>Optimizing applications for speed, efficiency, and scalability.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Goals & Aspirations</h2>
            <p className={styles.paragraph}>
              I&apos;m passionate about using technology to make a positive impact. My goal is to work on 
              innovative projects that push the boundaries of what&apos;s possible while maintaining a focus 
              on user experience and accessibility.
            </p>
            <p className={styles.paragraph}>
              After graduation, I aim to contribute to cutting-edge software development teams where I 
              can continue learning, growing, and building solutions that matter.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>When I&apos;m Not Coding</h2>
            <p className={styles.paragraph}>
              Outside of programming, I enjoy exploring new technologies, reading about industry trends, 
              and working on personal projects. I also love collaborating with fellow students on 
              hackathons and open-source contributions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
