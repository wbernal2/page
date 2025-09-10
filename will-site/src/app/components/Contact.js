// src/app/components/Contact.js
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionDescription}>
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📧</div>
              <div className={styles.infoText}>
                <h3>Email</h3>
                <a href="mailto:your.email@example.com" className={styles.link}>
                  your.email@example.com
                </a>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.icon}>💼</div>
              <div className={styles.infoText}>
                <h3>LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  linkedin.com/in/your-profile
                </a>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.icon}>🐙</div>
              <div className={styles.infoText}>
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  github.com/your-username
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className={styles.textarea}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
