import React from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote: 'تجربتي مع هذه الشركة كانت استثنائية بكل معنى الكلمة! خدماتهم في مجالات التسويق والتصميم تفوق كل التوقعات، وأنا فخورة بتحويل أفكاري إلى واقع رائع.',
  name: 'سارة محمد',
  role: 'صاحبة مشروع',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1ad9feb-1770651007033.png"
},
{
  quote: 'فريق رواد محترف جداً، أنجزوا موقعنا في وقت قياسي مع جودة عالية. نتائج التسويق الرقمي تجاوزت توقعاتنا بنسبة 200%.',
  name: 'أحمد الخالدي',
  role: 'مدير شركة',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_123389999-1768649603951.png"
}];


export default function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-right mb-10">
          <span className="text-primary font-bold text-sm mb-2 block">- آراء عملائنا</span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
            إبداعنا في مجالاتنا يلهم الثقة، نحن هنا لنبني مستقبلك الرقمي !
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials?.map((t, i) =>
          <div key={i} className="bg-muted rounded-3xl p-6 sm:p-8 relative">
              <svg className="w-8 h-8 text-primary mb-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground text-sm sm:text-base leading-relaxed mb-6 italic">
                &ldquo;{t?.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <AppImage src={t?.avatar} alt={`صورة ${t?.name}`} width={44} height={44} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t?.name}</p>
                  <p className="text-muted-foreground text-xs">{t?.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}