import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden bg-white" dir="rtl">
      {/* Decorative floating elements */}
      <div className="absolute top-28 right-6 sm:right-16 floating-el z-10 opacity-70">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="24" stroke="#1B9E8E" strokeWidth="2.5" fill="none" />
          <circle cx="26" cy="26" r="16" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="26" cy="26" r="8" stroke="#1B9E8E" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-32 left-8 sm:left-20 floating-el-slow z-10 opacity-60">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="2" y="2" width="32" height="32" rx="8" stroke="#1B9E8E" strokeWidth="2" fill="none" />
          <rect x="8" y="8" width="20" height="20" rx="4" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-12 sm:right-32 floating-el z-10 opacity-40">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>
      <div className="absolute bottom-32 left-12 opacity-30 floating-el-slow">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
      </div>
      <div className="absolute top-1/2 left-4 opacity-25 hidden lg:block">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 14 C4 14, 14 4, 24 14 C24 14, 14 24, 4 14Z" stroke="#1B9E8E" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-10 lg:pt-16">
        {/* Text Content - Right side in RTL */}
        <div className="flex-1 order-2 lg:order-1 fade-in-up text-right">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">منصة رواد</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-5">
            نجمع بين قوة الابتكار والتكنولوجيا لنقدم حلولاً رقمية متكاملة. نتمتع بفريق عمل متخصص ومؤهل لنكون جناحك التقني !
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <button className="bg-foreground text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary transition-all duration-300 shadow-lg text-sm">
              انضم الينا
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2 space-x-reverse">
              {[
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
              'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80',
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80']?.
              map((src, i) =>
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                  <AppImage src={src} alt={`عميل ${i + 1}`} width={36} height={36} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div>
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: 5 })?.map((_, i) =>
                <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">موثوق من أكثر من 500 عميل</p>
            </div>
          </div>
        </div>

        {/* Image - Left side in RTL */}
        <div className="flex-1 order-1 lg:order-2 relative fade-in-up delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent z-10 rounded-3xl pointer-events-none"></div>
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_155f04113-1772379344876.png"
              alt="فريق عمل رواد للتسويق الرقمي في اجتماع احترافي"
              width={700}
              height={500}
              priority
              className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover rounded-3xl" />
            
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl border border-border px-4 py-3 flex items-center gap-3 max-w-[220px] z-20">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-foreground font-bold text-sm">موثوق ومعتمد</p>
              <p className="text-muted-foreground text-xs mt-0.5">خدمات رقمية متكاملة</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}