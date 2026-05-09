import React from 'react';
import ServicesTiles from '@/components/ServicesTiles';

export default function EMarketingServices() {
  return (
    <section className="py-10 sm:py-14 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Heading */}
          <div className="flex-1 order-2 lg:order-2 text-right">
            <span className="text-primary font-bold text-sm mb-2 block">- خدماتنا</span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
              تفقد خدماتنا المميزة و الرائدة في مجال التسويق الرقمي !
            </h2>
          </div>
          {/* Tiles */}
          <div className="flex-1 order-1 lg:order-1">
            <ServicesTiles activeId="emarketing" />
          </div>
        </div>
      </div>
    </section>
  );
}