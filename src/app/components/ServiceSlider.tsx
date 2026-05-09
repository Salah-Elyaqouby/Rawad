'use client';

import React, { useState } from 'react';

const slides = [
  {
    num: '01',
    title: 'تحسين محركات البحث SEO',
    desc: 'نرفع ظهور موقعك في نتائج البحث، لزيادة الزيارات وتحقيق نمو مستدام.',
    cta: 'اطلب تصميمك الان !',
  },
  {
    num: '02',
    title: 'إدارة الحملات الإعلانية',
    desc: 'نخطط وننفذ حملات إعلانية مدروسة، تصل إلى جمهورك المستهدف.',
    cta: 'اطلب تصميمك الان !',
  },
  {
    num: '03',
    title: 'إدارة حسابات التواصل',
    desc: 'نصنع محتوى جذاب يعكس هوية علامتك التجارية، وندير حساباتك باحتراف.',
    cta: 'اطلب تصميمك الان !',
  },
];

export default function ServiceSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="teal-section py-14 sm:py-20 relative overflow-hidden" dir="rtl">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/20 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Slides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {slides?.map((slide, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                i === active
                  ? 'bg-white/15 border border-white/40' :'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
              onClick={() => setActive(i)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-white/40 text-sm font-bold">{slide?.num}</span>
                <div className="w-8 h-0.5 bg-white/40 mt-2"></div>
              </div>
              <h3 className="text-white font-black text-lg mb-3 leading-snug">{slide?.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{slide?.desc}</p>
              <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 border border-white/30">
                {slide?.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2">
          {slides?.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`الشريحة ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}