import React from 'react';

export default function EMarketingHero() {
  return (
    <section className="pt-28 pb-10 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-right relative">
        {/* Decorative */}
        <div className="absolute top-2 left-10 floating-el opacity-35">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="20" stroke="#1B9E8E" strokeWidth="2" fill="none"/>
            <circle cx="22" cy="22" r="12" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <circle cx="22" cy="22" r="5" fill="#1B9E8E" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-8 floating-el-slow opacity-25">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
        </div>

        <span className="text-primary font-bold text-sm mb-3 block">- التسويق الإلكتروني</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight max-w-3xl">
          <span className="text-primary">التسويق الإلكتروني يضمن</span> لمشروعك حضوراً قوياً ونتائج قابلة للقياس!
        </h1>
      </div>
    </section>
  );
}