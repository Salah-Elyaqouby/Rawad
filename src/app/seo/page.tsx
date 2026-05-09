import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterSection from '@/components/NewsletterSection';
import AppImage from '@/components/ui/AppImage';
import ServicesTiles from '@/components/ServicesTiles';

const galleryImages = [
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_12a259989-1766490417832.png", alt: 'لوحة تحليلات SEO تعرض بيانات الأداء والزيارات بألوان داكنة' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1239d7e8d-1772867289954.png", alt: 'رسوم بيانية لأداء محركات البحث مع ألوان زاهية ومتدرجة' },
{ src: "https://images.unsplash.com/photo-1735582797359-86c0fa4594f0", alt: 'هاتف ذكي يعرض نتائج بحث Google بشكل واضح' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_12189539a-1773073309822.png", alt: 'لوحة مؤشرات أداء SEO تعرض معدلات النقر والظهور' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_113617219-1764737686388.png", alt: 'شاشة تعرض كود برمجي وبيانات تحليلية ملونة' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1895ffe79-1772596273334.png", alt: 'تقرير تحليلات موقع يعرض نمو الزيارات العضوية' }];


export default function SeoPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="pt-28 pb-10 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-right relative">
          <div className="absolute top-2 left-10 floating-el opacity-35">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="20" stroke="#1B9E8E" strokeWidth="2" fill="none" />
              <circle cx="22" cy="22" r="12" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5" />
              <circle cx="22" cy="22" r="5" fill="#1B9E8E" opacity="0.3" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-8 floating-el-slow opacity-25">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
          </div>
          <span className="text-primary font-bold text-sm mb-3 block">- تحسين محركات البحث SEO</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight max-w-3xl">
            <span className="text-primary">خدمة SEO تضمن لموقعك الظهور</span> في المكان الصحيح أمام الجمهور الصحي!
          </h1>
        </div>
      </section>
      {/* Gallery */}
      <section className="pb-10 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages?.map((img, i) =>
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] group">
                <AppImage
                src={img?.src}
                alt={img?.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Services Tiles */}
      <section className="py-10 sm:py-14 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1 order-2 lg:order-2 text-right">
              <span className="text-primary font-bold text-sm mb-2 block">- خدماتنا</span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                تفقد خدماتنا المميزة و الرائدة في مجال التسويق الرقمي !
              </h2>
            </div>
            <div className="flex-1 order-1 lg:order-1">
              <ServicesTiles activeId="seo" />
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </main>);

}