'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';


interface GalleryImage {
  src: string;
  alt: string;
}

interface ServiceDetail {
  id: string;
  label: string;
  subtitle: string;
  heading: string;
  images: GalleryImage[];
}

const serviceDetails: ServiceDetail[] = [
{
  id: 'social',
  label: 'إدارة صفحات السوشيال ميديا',
  subtitle: 'إدارة صفحات السوشيال ميديا',
  heading: 'تصاميم السوشيال ميديا المميزة سبب في جذب المتابعين لمنتجاتك!',
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8105454-1773581657727.png", alt: 'تصميم سوشيال ميديا احترافي لمنتج إلكتروني بألوان جذابة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1278f75e8-1773208857665.png", alt: 'حملة سوشيال ميديا ملونة لمنتج غذائي مع تصميم إبداعي' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_16e601c3e-1772184897441.png", alt: 'منشور سوشيال ميديا لعلامة تجارية بتصميم احترافي' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1307641e0-1772833242537.png", alt: 'تصميم إعلاني لحملة ترويجية بألوان زاهية' },
  { src: "https://images.unsplash.com/photo-1647964186307-7589f0b34bce", alt: 'محتوى سوشيال ميديا إبداعي لمنتج تجاري على خلفية خضراء' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd96e92-1776261546465.png", alt: 'إعلان رقمي احترافي لعلامة تجارية على خلفية داكنة' }]

},
{
  id: 'emarketing',
  label: 'التسويق الاكتروني',
  subtitle: 'التسويق الإلكتروني',
  heading: 'التسويق الإلكتروني يضمن لمشروعك حضوراً قوياً ونتائج قابلة للقياس!',
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1663ba35d-1766477560298.png", alt: 'لوحة تحليلات التسويق الرقمي تعرض نمو المبيعات على شاشة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_15e35f536-1772448726095.png", alt: 'رسوم بيانية تحليلية لأداء حملة تسويق إلكتروني' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_135a81dd5-1765040969011.png", alt: 'هاتف ذكي يعرض إشعارات تسويق رقمي ملونة' },
  { src: "https://images.unsplash.com/photo-1645947849057-162fb67edcaa", alt: 'مكبرات صوت صفراء تمثل حملة إعلانية صاخبة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1971c4a33-1772126947956.png", alt: 'واجهة تطبيق تسويقي بتصميم وردي جذاب' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_100a9a4f2-1777906357955.png", alt: 'رسم بياني يعرض نمو مبيعات إلكترونية على خلفية داكنة' }]

},
{
  id: 'websites',
  label: 'إنشاء المواقع الالكترونية',
  subtitle: 'إنشاء المواقع الالكترونية',
  heading: 'نبني مواقع إلكترونية احترافية تعكس هوية علامتك وتحقق أهدافك!',
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfa7e718-1773175635556.png", alt: 'تصميم موقع إلكتروني على شاشة حاسوب بواجهة احترافية' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_106ca577d-1763293819604.png", alt: 'مطور ويب يعمل على كود برمجي لموقع إلكتروني' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1562a0252-1772507389010.png", alt: 'لابتوب مفتوح يعرض كود برمجي لتطوير موقع ويب' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_12cd37799-1772656338553.png", alt: 'تصميم واجهة مستخدم على تابلت بألوان أنيقة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_177703b42-1772392849817.png", alt: 'تصميم تطبيق موبايل على شاشة هاتف ذكي' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e95743b9-1772801172429.png", alt: 'شاشة حاسوب تعرض واجهة موقع إلكتروني بتصميم عصري' }]

},
{
  id: 'campaigns',
  label: 'إدارة الحملات الترويجية',
  subtitle: 'إدارة الحملات الترويجية',
  heading: 'إدارة الحملات الترويجية تضمن استثمار ميزانيتك الإعلانية بأفضل النتائج!',
  images: [
  { src: "https://images.unsplash.com/photo-1618126842865-f7c6e3db1140", alt: 'ملصق تسويقي بطباعة جريئة بالأسود والأصفر' },
  { src: "https://images.unsplash.com/photo-1698330404244-6e17ece14193", alt: 'شارع تجاري مضاء بإعلانات رقمية في مدينة آسيوية مزدحمة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_189cc8051-1769307659343.png", alt: 'يد تمسك هاتفاً يعرض حملة إعلانية على تطبيق' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_135a81dd5-1765040969011.png", alt: 'يد تمسك هاتفاً يعرض تطبيق تسويقي بواجهة ملونة' },
  { src: "https://images.unsplash.com/photo-1676287569872-f98afe23cada", alt: 'مفكرة تخطيط حملات إعلانية مع تقويم ودوائر ملونة' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_168f5cd1f-1773105979441.png", alt: 'تابلت يعرض مخطط استراتيجية تسويق ملونة' }]

},
{
  id: 'seo',
  label: 'تحسين محركات البحث SEO',
  subtitle: 'تحسين محركات البحث SEO',
  heading: 'تحسين محركات البحث يرفع ظهور موقعك لتصدر نتائج البحث وزيادة الزيارات!',
  images: [
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6b47d19-1772192059531.png", alt: 'لابتوب مفتوح يعرض نتائج تحليل SEO ومحركات البحث' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_132664274-1767212732495.png", alt: 'رسوم بيانية تعرض نمو الزيارات العضوية لموقع بعد تحسين SEO' },
  { src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74", alt: 'لوحة تحليلات رقمية تعرض بيانات أداء محركات البحث' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_109e9a1ef-1772439104362.png", alt: 'رسم بياني صاعد يمثل تحسن ترتيب الموقع في نتائج البحث' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_186d229df-1772171288082.png", alt: 'مطور يحلل أداء SEO على لابتوب في مكتب' },
  { src: "https://img.rocket.new/generatedImages/rocket_gen_img_18418b270-1766487500252.png", alt: 'شاشة تعرض كود تحسين محركات البحث والكلمات المفتاحية' }]

}];


export default function ServiceDetailSection() {
  const [activeId, setActiveId] = useState('social');
  const active = serviceDetails.find((s) => s.id === activeId) || serviceDetails[0];

  return (
    <section className="py-10 sm:py-14 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Active Service Header */}
        <div className="text-right mb-8">
          <span className="text-primary font-bold text-sm mb-2 block">- {active.subtitle}</span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight max-w-2xl">
            {active.heading}
          </h2>
        </div>

        {/* Photo Gallery — 3×2 grid */}
        {/* BENTO AUDIT: 6 images, 3 cols × 2 rows */}
        {/* Row 1: [col-1: img0] [col-2: img1] [col-3: img2] */}
        {/* Row 2: [col-1: img3] [col-2: img4] [col-3: img5] */}
        {/* Placed 6/6 ✓ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {active.images.map((img, i) => (
          /* col-span-1 each */
          <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] group">
              <AppImage
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            </div>)
          )}
        </div>

        {/* Services Tiles Navigation */}
        <div className="border-t border-border pt-10">
          <span className="text-primary font-bold text-sm mb-3 block">- خدماتنا</span>
          <h3 className="text-xl sm:text-2xl font-black text-foreground mb-6 leading-tight">
            تفقد خدماتنا المميزة و الرائدة في مجال التسويق الرقمي !
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {serviceDetails.map((s) =>
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`service-tile text-right ${activeId === s.id ? 'active' : ''} ${
              s.id === 'seo' ? 'sm:col-span-2' : ''}`
              }>
              
                {s.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>);

}