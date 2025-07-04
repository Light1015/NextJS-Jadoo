'use client';
import React, { useState } from 'react';
import styles from './destinations.module.scss';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

const destinations = [
  {
    image: '/images/rome.png',
    title: 'Rome, Italy',
    price: '$5.42k',
    duration: '10 Days Trip',
  },
  {
    image: '/images/london.png',
    title: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    image: '/images/europe.png',
    title: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
  },
];

const DestinationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Top Destinations</p>
          <h2>Explore Most Popular Destinations</h2>
        </div>

        {/* Desktop view: show all cards */}
        <div className={styles.grid}>
          {destinations.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.row}>
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>
                </div>
                <div className={styles.footer}>
                  <FaLocationArrow />
                  <p>{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view: only 1 card with navigation */}
        <div className={styles.mobileSlider}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={destinations[currentIndex].image}
                alt={destinations[currentIndex].title}
                fill
                sizes="100vw"
              />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.row}>
                <h3>{destinations[currentIndex].title}</h3>
                <span>{destinations[currentIndex].price}</span>
              </div>
              <div className={styles.footer}>
                <FaLocationArrow />
                <p>{destinations[currentIndex].duration}</p>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={prevSlide}>
              <Image src="/images/icons/Vector-pre.png" alt="Previous" width={36} height={36} />
            </button>

            <div className={styles.dots}>
              {destinations.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button onClick={nextSlide}>
              <Image src="/images/icons/Vector-next.png" alt="Next" width={36} height={36} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
