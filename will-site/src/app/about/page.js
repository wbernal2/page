'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Back to Home
        </button>
        <div className={styles.profileCenter}>
          <div className={styles.flagRow}>
            <Image
              src="/usa-flag.svg"
              alt="USA flag"
              width={32}
              height={20}
              className={styles.flagIcon}
            />
            <img
              src="/Will_Selfie.JPG"
              alt="Will Bernal"
              className={styles.profileImage}
              width={160}
              height={160}
            />
            <Image
              src="/mexico-flag.svg"
              alt="Mexico flag"
              width={32}
              height={20}
              className={styles.flagIcon}
            />
          </div>
          <div className={styles.profileName}>Will</div>
          <div className={styles.profileSummary}>
            I was raised in a Hispanic household where Spanish is my first language, making me fully bilingual. I thrive in collaborative environments, valuing diverse perspectives and finding motivation among driven, goal-oriented teammates.
          </div>
          <div className={styles.profileSummary}>
            When I&apos;m not coding, my passion for videography allows me to capture moments and tell stories in creative ways. Whether I&apos;m working on VFX, music festival recaps, or cinematic short films and weddings, I focus on delivering visually engaging content.
          </div>
          <img
            src="/about-collage/beach.JPG"
            alt="Beach travel photo"
            className={styles.familyImage}
          />
          <img
            src="/about-collage/jump.JPG"
            alt="Jumping at the beach"
            className={styles.familyImage}
          />
          <div className={styles.profileSummary}>
            I enjoy traveling, especially to warm destinations where I can relax by the beach.
          </div>
        </div>

        <div className={styles.aboutContent}></div>

        {/* Collage Section: 3 horizontal panels */}
        <section className={styles.section}>
          <div className={styles.collagePanelWrapper}>
            <div className={styles.collagePanel}>
              <img
                src="/about-collage/top.jpg"
                alt="Top Collage Image"
                className={styles.collageImage}
              />
            </div>
            <div className={styles.collagePanel}>
              <video
                src="/about-collage/middle.mp4"
                controls
                className={styles.collageVideo}
                poster="/about-collage/video-poster.jpg"
              />
            </div>
            <div className={styles.collagePanel + ' ' + styles.bottom}>
              <img
                src="/about-collage/bottom.jpg"
                alt="Bottom Collage Image"
                className={styles.collageImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
