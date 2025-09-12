// src/app/components/Education.js
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.unlBanner}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Education</h2>
              <div className={styles.universityInfo}>
                <h3 className={styles.universityName}>University of Nebraska-Lincoln</h3>
                <p className={styles.degree}>Bachelor of Science in Computer Science</p>
                <p className={styles.status}>Currently Enrolled</p>
              </div>
              
              <div className={styles.highlights}>
                <div className={styles.highlight_item}>
                  <span className={styles.number}>May 2026</span>
                  <span className={styles.label}>Expected Graduation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
