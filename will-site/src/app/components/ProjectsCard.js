// src/components/ProjectsCard.js
import styles from './ProjectsCard.module.css';

export default function ProjectsCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
    </div>
  );
}
