'use client';
import styles from './newsletter.module.scss';
import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Subscribe to get information, latest news and other<br />
          interesting offers about <strong>Cobham</strong>
        </h2>

        <form className={styles.form} method="POST">
          <div className={styles.inputWrapper}>
            <Image src="/images/icons/email.png" alt="Email icon" width={20} height={20} />
            <input type="email" placeholder="Your email" required />
          </div>
          <button type="submit">Subscribe</button>
        </form>

        <div className={styles.paperPlane}>
          <Image src="/images/icons/send-blue.png" alt="Paper plane" width={48} height={48} />
        </div>
      </div>
    </section>
  );
}
