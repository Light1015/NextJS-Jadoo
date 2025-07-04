'use client';
import React, { useState, useRef } from 'react';
import styles from './services.module.scss';

const services = [
  {
    icon: '/images/Calculated-Weather.png',
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: '/images/plane.png',
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
  },
  {
    icon: '/images/Local-Events.png',
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
  },
  {
    icon: '/images/Customization.png',
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers.',
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgPosition, setBgPosition] = useState({ top: 0, left: 0, visible: false });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    setBgPosition({
      top: cardRect.top - containerRect.top + cardRect.height - 65,
      left: cardRect.left - containerRect.left - 25,
      visible: true,
    });
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Category</p>
          <h2>We Offer Best Services</h2>
        </div>

        <div className={styles.grid} ref={containerRef}>
          {bgPosition.visible && (
            <div
              className={styles.bgCornerShape}
              style={{ top: bgPosition.top, left: bgPosition.left }}
            />
          )}

          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={handleMouseEnter}
            >
              <div className={styles.iconWrapper}>
                <img src={service.icon} alt={service.title} className={styles.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
