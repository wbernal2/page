// src/app/components/Education.js
import styles from './Education.module.css';
import FloatingPcScene from './FloatingPcScene';

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.universityInfo}>
              <h3 className={styles.universityName}>University of Nebraska</h3>
              <p className={styles.degree}>Bachelor of Science in Computer Science</p>
              <p className={styles.status}>Currently Enrolled</p>
            </div>
            
            <div className={styles.highlights}>
              <div className={styles.highlight_item}>
                <span className={styles.number}>3.8</span>
                <span className={styles.label}>GPA</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.number}>2025</span>
                <span className={styles.label}>Expected Graduation</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.number}>15+</span>
                <span className={styles.label}>CS Courses</span>
              </div>
            </div>
          </div>
          <div className={styles.modelContent}>
            <div className={styles.modelContainer}>
              <FloatingPcScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
