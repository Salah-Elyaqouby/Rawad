import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterSection from '@/components/NewsletterSection';
import AppImage from '@/components/ui/AppImage';

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />

      {/* About Hero Section */}
      <section className="pt-28 pb-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/3 opacity-20 floating-el">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#1B9E8E" strokeWidth="2" fill="none" />
            <circle cx="40" cy="40" r="25" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 floating-el-slow">
          <div className="w-5 h-5 rounded-full bg-primary"></div>
        </div>
        <div className="absolute top-40 right-1/4 opacity-15 floating-el">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="5" y="5" width="30" height="30" rx="6" stroke="#1B9E8E" strokeWidth="2" fill="none" transform="rotate(15 20 20)" />
          </svg>
        </div>
        {/* Teal blob top-left */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q100 0 200 100 Q200 200 0 200 Z" fill="#1B9E8E" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text - Right */}
            <div className="flex-1 text-right order-1">
              <span className="text-primary font-bold text-sm mb-3 block">- من نحن ؟</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                <span className="bg-primary text-white px-3 py-1 rounded-lg inline-block">منصة رواد</span>
              </h1>
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-xl">
                رواد هي منصة رقمية متكاملة تهدف إلى مساعدة الشركات الصغيرة والمتوسطة، ورواد الأعمال، ومدراء التسويق على بناء حضور رقمي قوي وفعّال. توفر المنصة خدمات تصميم وتطوير المواقع الإلكترونية، تطوير تطبيقات الجوال، إدارة صفحات السوشيال ميديا، إدارة الحملات الترويجية، وتحسين محركات البحث (SEO)، مع التركيز على تقديم نتائج ملموسة وقابلة للقياس.
              </p>
            </div>

            {/* Image - Left */}
            <div className="flex-1 order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <AppImage
                  src="https://images.unsplash.com/photo-1555077292-22a4489e5897"
                  alt="شخص يقرأ كتاباً عن التسويق الرقمي في الهواء الطلق"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover" />
                
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 opacity-30">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="10" cy="10" r="4" fill="#1B9E8E" />
                  <circle cx="30" cy="10" r="4" fill="#1B9E8E" />
                  <circle cx="50" cy="10" r="4" fill="#1B9E8E" />
                  <circle cx="10" cy="30" r="4" fill="#1B9E8E" />
                  <circle cx="30" cy="30" r="4" fill="#1B9E8E" />
                  <circle cx="50" cy="30" r="4" fill="#1B9E8E" />
                  <circle cx="10" cy="50" r="4" fill="#1B9E8E" />
                  <circle cx="30" cy="50" r="4" fill="#1B9E8E" />
                  <circle cx="50" cy="50" r="4" fill="#1B9E8E" />
                </svg>
              </div>
              {/* Floating icon badge */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-border">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </main>);

}