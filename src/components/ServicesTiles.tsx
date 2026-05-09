'use client';

import React from 'react';
import Link from 'next/link';

export interface ServiceTile {
  id: string;
  label: string;
  href: string;
}

export const servicesList: ServiceTile[] = [
  { id: 'social', label: 'إدارة صفحات سوشيال ميديا', href: '/services' },
  { id: 'emarketing', label: 'التسويق الاكتروني', href: '/electronic-marketing' },
  { id: 'websites', label: 'إنشاء المواقع الالكترونية', href: '/website-creation' },
  { id: 'campaigns', label: 'إدارة الحملات الترويجية', href: '/services' },
  { id: 'seo', label: 'تحسين محركات البحث SEO', href: '/seo' },
];

interface ServicesTilesProps {
  activeId?: string;
}

export default function ServicesTiles({ activeId }: ServicesTilesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {servicesList.map((service) => (
        <Link
          key={service.id}
          href={service.href}
          className={`service-tile ${activeId === service.id ? 'active' : ''} ${
            service.id === 'seo' ? 'sm:col-span-2' : ''
          }`}
        >
          {service.label}
        </Link>
      ))}
    </div>
  );
}