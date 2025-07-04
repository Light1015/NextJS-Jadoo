'use client';
import { useState } from 'react';
import styles from './testimonials.module.scss';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Mike Taylor',
    role: 'Lahore, Pakistan',
    avatar: '/images/user.png',
    text: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
  },
  {
    id: 2,
    name: 'John Do',
    role: 'CEO of Red Button',
    avatar: '/images/user.png',
    text: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
  },
  
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.label}>Testimonials</p>
          <h2 className={styles.heading}>
            What People Say<br />About Us.
          </h2>
        </div>

        {/* Desktop stack cards */}
        <div className={`${styles.right} ${styles.desktopOnly}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.card} ${index === activeIndex ? styles.active : styles.inactive}`}
            >
              <div className={styles.avatar}>
                <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} />
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.user}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}

          <div className={styles.controls}>
            <button onClick={handleNext} aria-label="Next"><FaChevronUp /></button>
            <button onClick={handlePrev} aria-label="Previous"><FaChevronDown /></button>
          </div>
        </div>

        {/* Mobile swiper */}
        <div className={`${styles.mobileOnly}`}>
          <div className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                width={50}
                height={50}
              />
            </div>
            <p className={styles.text}>{testimonials[activeIndex].text}</p>
            <div className={styles.user}>
              <h4>{testimonials[activeIndex].name}</h4>
              <p>{testimonials[activeIndex].role}</p>
            </div>
          </div>

          <div className={styles.mobileControls}>
            <button onClick={handlePrev} aria-label="Previous"><FaChevronLeft /></button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={i === activeIndex ? styles.dotActive : styles.dot}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
            <button onClick={handleNext} aria-label="Next"><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
