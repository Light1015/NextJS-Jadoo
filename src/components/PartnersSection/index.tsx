'use client';
import styles from './partners.module.scss';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const partners = [
  '/images/logos/axon.png',
  '/images/logos/jetstar.png',
  '/images/logos/expedia.png',
  '/images/logos/qantas.png',
  '/images/logos/alitalia.png',
];

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

   // Cập nhật logo active dựa trên scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.querySelectorAll(`.${styles.logoItem}`));
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let minDiff = Infinity;
      let closestIndex = 0;

      children.forEach((child, index) => {
        const box = child.getBoundingClientRect();
        const center = box.left + box.width / 2;
        const diff = Math.abs(center - window.innerWidth / 2);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.logoGrid}>
          {partners.map((src, idx) => (
            <div className={styles.logoItem} key={idx}>
              <Image src={src} alt={`Partner ${idx + 1}`} width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
