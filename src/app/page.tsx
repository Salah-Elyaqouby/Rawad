import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterSection from '@/components/NewsletterSection';
import HeroSection from './components/HeroSection';
import ServicesIntroSection from './components/ServicesIntroSection';
import ServiceSlider from './components/ServiceSlider';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesIntroSection />
      <ServiceSlider />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}