import React from 'react';
import AppImage from '@/components/ui/AppImage';

/* BENTO AUDIT: 6 images, grid-cols-3, 2 rows */
/* Row 1: [col-1: img0 cs-1] [col-2: img1 cs-1] [col-3: img2 cs-1] */
/* Row 2: [col-1: img3 cs-1] [col-2: img4 cs-1] [col-3: img5 cs-1] */
/* Placed 6/6 ✓ */
const galleryImages = [
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_16efdbcd1-1769280723781.png", alt: 'لوحة تحليلات التسويق الرقمي تعرض نمو المبيعات بألوان داكنة' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b812690d-1772688457677.png", alt: 'رسوم بيانية لأداء حملة تسويق إلكتروني مع ألوان زاهية' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_135a81dd5-1765040969011.png", alt: 'هاتف ذكي يعرض إشعارات تسويقية رقمية ملونة' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_10b3ae0f9-1777906360789.png", alt: 'مكبرات صوت صفراء تمثل حملة إعلانية قوية' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1971c4a33-1772126947956.png", alt: 'واجهة تطبيق تسويق رقمي بتصميم وردي جذاب' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_100a9a4f2-1777906357955.png", alt: 'رسم بياني يعرض نمو مبيعات إلكترونية على خلفية داكنة' }];


export default function EMarketingGallery() {
  return (
    <section className="pb-10 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* col-1: img0 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[0]?.src} alt={galleryImages?.[0]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          {/* col-2: img1 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[1]?.src} alt={galleryImages?.[1]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          {/* col-3: img2 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[2]?.src} alt={galleryImages?.[2]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          {/* col-1: img3 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[3]?.src} alt={galleryImages?.[3]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          {/* col-2: img4 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[4]?.src} alt={galleryImages?.[4]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          {/* col-3: img5 */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] group">
            <AppImage src={galleryImages?.[5]?.src} alt={galleryImages?.[5]?.alt} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>);

}