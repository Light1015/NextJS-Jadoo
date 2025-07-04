'use client';

import React from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>

        <div className={styles.content}>
          <p className={styles.label}>Best destinations around the world</p>
          <h1 className={styles.title}>
            Travel, <span>enjoy</span> and live a new and full life
          </h1>
          <p className={styles.description}>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className={styles.buttons}>
            <Link href="#" className={styles.primaryBtn}>Find out more</Link>
            <button className={styles.playBtn}>
              <span className={styles.playIcon}>▶</span> Play Demo
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-image.png"
            alt="Traveler Girl"
            width={765}
            height={764}
            priority
          />
        </div>
      </div>
    </section>
  );
}
