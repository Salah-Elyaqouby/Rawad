'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#EEF6F9]">
      <Header />

      {/* Contact Section */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 opacity-20 floating-el">
          <div className="w-6 h-6 rounded-full bg-purple-400"></div>
        </div>
        <div className="absolute top-32 right-20 opacity-15 floating-el-slow">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20 floating-el">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#1B9E8E" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="30" r="18" stroke="#1B9E8E" strokeWidth="1.5" fill="none" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-0 opacity-10 pointer-events-none">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
            <path d="M120 0 Q0 100 120 200" stroke="#1B9E8E" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1B6E7A] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Map + Contact Info */}
              <div className="p-6 sm:p-8">
                {/* Map */}
                <div className="rounded-xl overflow-hidden mb-6 h-56 sm:h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54879.84!2d34.4!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd844524a43bb1%3A0x490a4b2c0e0b0e0!2sGaza!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع رواد على الخريطة"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-white text-sm font-medium">فلسطين، غزة</span>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-white text-sm font-medium" dir="ltr">+972 59-208-9037</span>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-white text-sm font-medium">qasembahaa2003@gmail.com</span>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white p-6 sm:p-8">
                <div className="text-right mb-6">
                  <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-2">تواصل معنا !</h1>
                  <p className="text-foreground/60 text-sm">نحن هنا لمساعدتك، فلا تتردد في التواصل و الاستفسار !</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="أدخل اسمك من فضلك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border border-border rounded-lg px-4 py-3 text-right text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border border-border rounded-lg px-4 py-3 text-right text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="أكتب رسالتك..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full border border-border rounded-lg px-4 py-3 text-right text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-foreground text-white font-bold py-3 rounded-lg hover:bg-primary transition-colors duration-300 text-sm"
                  >
                    {submitted ? 'تم الإرسال ✓' : 'أرسل'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
