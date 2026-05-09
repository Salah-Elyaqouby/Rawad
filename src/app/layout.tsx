import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import '../styles/tailwind.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'رواد — وكالة التسويق الرقمي المتكاملة',
  description: 'رواد وكالة تسويق رقمي متكاملة تجمع بين الابتكار والتكنولوجيا لتقديم حلول رقمية لأصحاب الأعمال في المنطقة العربية.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={cairo.className}>
        {children}
</body>
    </html>
  );
}