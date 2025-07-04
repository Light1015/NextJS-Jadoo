import '@/styles/fonts.scss';
import styles from './page.module.scss';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DestinationsSection from '@/components/DestinationsSection';
import StepsSection from '@/components/StepsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (

    <>
      <div className={styles.mainContainer}>
        <Header />
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <StepsSection />
        <TestimonialsSection />
        <PartnersSection />
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
}
