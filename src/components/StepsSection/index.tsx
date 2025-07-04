'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './steps.module.scss';
import Image from 'next/image';
import TripCard from '../UI/TripCard';
const steps = [
  {
    number: '01',
    icon: '/images/selection.png',
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F0BB1F',
  },
  {
    number: '02',
    icon: '/images/water-sport.png',
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F15A2B',
  },
  {
    number: '03',
    icon: '/images/taxi.png',
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#006380',
  },
];

const StepsSection = () => {
  const rightRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section className={styles.stepsSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.header}>
            <p>Easy and Fast</p>
            <h2>
              Book your next trip <br /> In 3 easy steps
            </h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: step.bgColor }}
                >
                  <Image src={step.icon} alt={step.title} width={32} height={32} />
                </div>
                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.right} ${inView ? styles.inView : ''}`} ref={rightRef}>
          <div className={styles.travelCardSplit}>
            <div className={`${styles.cardWrapper} ${styles.cardRight}`}>
              <TripCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
