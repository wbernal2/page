// src/app/components/Skills.js
import styles from './Skills.module.css';

const skillsData = {
  languages: [
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚙️" },
    { name: "SQL", icon: "🗃️" },
    { name: "HTML/CSS", icon: "🎨" }
  ],
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "💚" },
    { name: "Express", icon: "🚀" },
    { name: "React Native", icon: "📱" },
    { name: "TensorFlow", icon: "🧠" }
  ],
  tools: [
    { name: "Git", icon: "📝" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Figma", icon: "🎯" }
  ]
};

const SkillItem = ({ skill }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillIcon}>{skill.icon}</div>
    <span className={styles.skillName}>{skill.name}</span>
  </div>
);

const SkillCategory = ({ title, skillList }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.categoryTitle}>{title}</h3>
    <div className={styles.skillsGrid}>
      {skillList.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
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
            skillList={skillsData.languages} 
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            skillList={skillsData.frameworks} 
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skillList={skillsData.tools} 
          />
        </div>
      </div>
    </section>
  );
}
