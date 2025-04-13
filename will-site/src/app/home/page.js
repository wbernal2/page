// src/app/home/page.js
import FloatingPc from '../components/FloatingPc';
import FloatingPcScene from '../components/FloatingPcScene';
import styles from './Home.module.css';

export default function Home() {
  return (
    
    <div className={styles.container}>

      <header className={styles.banner}>
        🚀 Welcome to Will's Portfolio
      </header>
      {/* Floating Computer Scene overlay */}
      
      <div className="floatingScene">
        <FloatingPcScene />
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroText}>Welcome back, Will B.</h1>
      </section>

      {/* About Me Section */}
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Will Bernal—a software engineer passionate about creating immersive web experiences.
          I blend creativity with code to build elegant and functional projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.projectList}>
          <div className={styles.projectCard}>
            <h3>Project One</h3>
            <p>Description of project one.</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project Two</h3>
            <p>Description of project two.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  );
}
