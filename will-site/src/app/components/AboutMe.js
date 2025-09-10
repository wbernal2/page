// src/components/AboutMe.js
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.intro}>
              Hi, I'm <span className={styles.highlight}>William Bernal</span>—a passionate software engineer 
              who loves creating immersive web experiences and solving complex problems through code.
            </p>
            <p className={styles.description}>
              I'm currently pursuing a Computer Science degree, where I've developed a strong foundation 
              in algorithms, data structures, and software engineering principles. My passion lies in 
              full-stack development, with particular interests in modern web technologies, machine learning, 
              and creating intuitive user experiences.
            </p>
            <p className={styles.description}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or working on personal projects that challenge me to grow as a developer.
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
              <div className={styles.imagePlaceholder}>
                <span className={styles.emoji}>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
