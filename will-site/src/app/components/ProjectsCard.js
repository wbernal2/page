// src/components/ProjectCard.js
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
    </div>
  );
}
