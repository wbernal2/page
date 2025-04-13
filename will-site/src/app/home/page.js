// src/app/home/page.js
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Fixed Header */}
      <header className={styles.header}>
        <div className={styles.headerName}>William Bernal</div>
        <div className={styles.logo}>Logo</div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroText}>Welcome back, Will B.</h1>
        <p className={styles.subText}>Experience a dark, immersive aesthetic.</p>
      </section>
    </div>
  );
}
