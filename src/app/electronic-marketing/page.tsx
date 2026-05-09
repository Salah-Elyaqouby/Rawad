import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterSection from '@/components/NewsletterSection';
import EMarketingHero from './components/EMarketingHero';
import EMarketingGallery from './components/EMarketingGallery';
import EMarketingServices from './components/EMarketingServices';

export default function EMarketingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />
      <EMarketingHero />
      <EMarketingGallery />
      <EMarketingServices />
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}