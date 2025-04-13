// src/components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>William Bernal</div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
