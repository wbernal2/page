// src/app/components/Skills.js
import styles from './Skills.module.css';
import { skills } from '../data/projects';

const SkillBar = ({ skill }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillHeader}>
      <span className={styles.skillName}>{skill.name}</span>
      <span className={styles.skillLevel}>{skill.level}%</span>
    </div>
    <div className={styles.skillBarContainer}>
      <div 
        className={styles.skillBar} 
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ title, skillList }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.categoryTitle}>{title}</h3>
    <div className={styles.skillsGrid}>
      {skillList.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsContainer}>
          <SkillCategory 
            title="Programming Languages" 
            skillList={skills.languages} 
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            skillList={skills.frameworks} 
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skillList={skills.tools} 
          />
        </div>
      </div>
    </section>
  );
}
