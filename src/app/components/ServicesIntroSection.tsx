import React from 'react';
import ServicesTiles from '@/components/ServicesTiles';

export default function ServicesIntroSection() {
  return (
    <section className="py-14 sm:py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="flex-1 order-2 lg:order-2">
            <span className="text-primary font-bold text-sm mb-2 block">- خدماتنا</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight">
              يحتاج مشروعك الناشئ تصميم جيد ليجذب المستخدمين !
            </h2>
          </div>
          {/* Right: Tiles */}
          <div className="flex-1 order-1 lg:order-1">
            <ServicesTiles />
          </div>
        </div>
      </div>
    </section>
  );
}