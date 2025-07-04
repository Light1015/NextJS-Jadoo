'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './tripCard.module.scss';

const TripCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className={styles.cardWrapper} ref={ref}>
      {/* Card lớn */}
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Trip-To-Greece.png"
            alt="Trip to Greece"
            width={321}
            height={161}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.info}>
          <h3>Trip To Greece</h3>
          <p className={styles.date}>14–29 June | by Robbin joseph</p>

          <div className={styles.details}>
            {/* Dòng 1: các icon */}
            <div className={styles.icons}>
              <Image src="/images/leaf.png" alt="leaf" width={36} height={36} />
              <Image src="/images/map.png" alt="map" width={36} height={36} />
              <Image src="/images/send.png" alt="send" width={36} height={36} />
            </div>

            {/* Dòng 2: icon + text + heart */}
            <div className={styles.detailsRow}>
              <div className={styles.detailItem}>
                <Image src="/images/building.png" alt="building" width={16} height={16} />
                <span>24 people going</span>
              </div>
              <Image src="/images/heart-purple.png" alt="heart" width={19.999996185302734} height={18.584728240966797} />
            </div>
          </div>
        </div>
      </div>

      {/* Mini card */}
      <div className={`${styles.miniCard} ${inView ? styles.slideOut : ''}`}>
        <div className={styles.miniImageWrapper}>
          <Image src="/images/trip.png" alt="Trip to Rome" width={40} height={40} />
        </div>
        <div>
          <p className={styles.miniStatus}>Ongoing</p>
          <h4>Trip to Rome</h4>
          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} />
            </div>
            <span>40% completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
