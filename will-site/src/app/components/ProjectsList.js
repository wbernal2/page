// src/components/ProjectsList.js
import ProjectCard from './ProjectCard';
import styles from './ProjectsList.module.css';

// Dummy project data
const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'An innovative project that showcases my skills.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A creative solution to a modern problem.',
  },
  // Add more projects as needed
];

export default function ProjectsList() {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.cardsContainer}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
