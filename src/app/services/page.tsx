import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterSection from '@/components/NewsletterSection';
import ServicesHero from './components/ServicesHero';
import ServiceDetailSection from './components/ServiceDetailSection';

export default function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServiceDetailSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}