'use client';

import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" style={{ backgroundColor: '#D6EFF0' }}>
      {/* Decorative elements */}
      <div className="absolute top-6 right-12 floating-el opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 2 C20 2, 38 10, 38 20 C38 30, 20 38, 20 38 C20 38, 2 30, 2 20 C2 10, 20 2, 20 2Z" stroke="#1B9E8E" strokeWidth="2" fill="none"/>
          <path d="M20 8 C20 8, 32 14, 32 20 C32 26, 20 32, 20 32 C20 32, 8 26, 8 20 C8 14, 20 8, 20 8Z" stroke="#1B9E8E" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-16 floating-el-slow opacity-25">
        <div className="w-5 h-5 rounded-full bg-primary"></div>
      </div>
      <div className="absolute top-1/2 left-8 opacity-20">
        <div className="deco-dots">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-8 leading-tight">
          هل تريد ان تصلك عروضنا ؟
        </h2>

        {submitted ? (
          <div className="bg-primary text-white rounded-2xl px-8 py-4 inline-block font-bold text-lg">
            شكراً! تم تسجيلك بنجاح ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto shadow-lg rounded-2xl overflow-hidden border border-border bg-white">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              required
              dir="rtl"
              className="flex-1 px-5 py-4 text-sm text-foreground placeholder-muted-foreground outline-none bg-white text-right"
            />
            <button
              type="submit"
              className="bg-foreground text-white font-bold px-7 py-4 text-sm hover:bg-primary transition-all duration-300 whitespace-nowrap"
            >
              انضم الينا
            </button>
          </form>
        )}
      </div>
    </section>
  );
}