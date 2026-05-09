import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex-1 relative order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19f5fd4fc-1773137238571.png"
                alt="فريق رواد يعمل على حلول رقمية متكاملة في بيئة مهنية"
                width={600}
                height={450}
                className="w-full h-[300px] sm:h-[380px] object-cover" />
              
            </div>
            {/* Floating decorative */}
            <div className="absolute -top-6 -right-4 floating-el opacity-60">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" stroke="#1B9E8E" strokeWidth="2" fill="none" />
                <rect x="9" y="9" width="26" height="26" rx="6" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-2 text-right">
            <span className="text-primary font-bold text-sm mb-2 block">- لماذا نحن ؟</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-5">
              نقدم حلولاً مبتكرة وموثقة لتلبية احتياجات عملك بكفاءة و جودة عالية !
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
              شركتنا تبرز كوجهة مثالية لاحتياجاتك في مجالات التسويق الرقمي و إنشاء المواقع الالكترونية و تطبيقات الهاتف النقال و إدارة صفحات السوشيال ميديا و إدارة الحملات الترويجية وتحسين محركات البحث.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-primary">+500</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">عميل</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-primary">24h</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">دعم</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">جودة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}