import React from 'react';

export default function ServicesHero() {
  return (
    <section className="pt-28 pb-12 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-right relative">
        {/* Decorative */}
        <div className="absolute top-0 left-8 floating-el opacity-40">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#1B9E8E" strokeWidth="2" fill="none"/>
            <circle cx="24" cy="24" r="14" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5"/>
          </svg>
        </div>

        <span className="text-primary font-bold text-sm mb-3 block">- خدماتنا</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight max-w-3xl">
          تفقد خدماتنا المميزة و الرائدة في مجال التسويق الرقمي !
        </h1>
      </div>
    </section>
  );
}