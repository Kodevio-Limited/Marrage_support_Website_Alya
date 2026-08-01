'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Section from '../shared/Section';
import Reveal from '../shared/Reveal';
import Heading from '../shared/Heading';
import { MapPin, Building2, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465414829459-d228b58caf6e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=600&auto=format&fit=crop',
];

export default function ExploreByEmirate() {
  const t = useTranslations('home');
  const items = t.raw('emirates') as { name: string; title: string; centerCount: string }[];
  const featured = items[0];
  const gridItems = items.slice(1, 5);

  return (
    <Section background="default" spacing="none" id="emirates" className="py-[64px] sm:py-[80px]">
      {/* Text Header Container Info: width 1280, height 104, gap 16 */}
      <Reveal direction="up">
        <div className="flex flex-col items-center text-center gap-4 min-h-[104px] mb-12">
          <Heading
            level={2}
            align="center"
            subtitle={t('emiratesSubtitle')}
          >
            {t('emiratesTitle')}
          </Heading>
        </div>
      </Reveal>

      {/* Grid Layout: Left Big Container + Right 4 Small Containers */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 max-w-[1280px] mx-auto min-h-[526px]">
        {/* Left Column: Big Inside Container */}
        <div className="lg:col-span-6">
          <Reveal direction="right" delay={0.1}>
            <div className="group relative flex h-[420px] sm:h-[526px] w-full max-w-[626px] flex-col justify-between overflow-hidden rounded-[24px] bg-white p-6 sm:p-8 transition-all duration-500">
              <Image
                src={images[0]}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 626px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Top Emirate Badge */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#781E36] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
                  {t('capitalRegion')} • {featured.name}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <MapPin className="h-3.5 w-3.5 text-[#E8CFC1]" />
                  {t('mainHeadquarters')}
                </span>
              </div>

              {/* Bottom Content Info */}
              <div className="relative z-10 text-white flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-200 flex items-center gap-2 font-medium">
                  <Building2 className="h-4 w-4 text-[#E8CFC1]" />
                  {featured.centerCount}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#E8CFC1] group-hover:translate-x-2 transition-transform">
                  <span>{t('exploreCenters')}</span>
                  <ChevronRight className="h-5 w-5 rtl:rotate-180" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 4 Small Inside Containers */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
          {gridItems.map((item, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1} direction="up">
              <div
                className="group relative flex h-[240px] sm:h-[252px] w-full max-w-[302px] flex-col justify-between overflow-hidden rounded-[24px] border border-black bg-white p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    '0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src={images[(index + 1) % images.length]}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 302px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <span className="relative z-10 w-fit rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#781E36] backdrop-blur-md shadow-xs">
                  {item.name}
                </span>

                <div className="relative z-10 text-white flex flex-col gap-1">
                  <h4 className="text-base font-bold leading-snug group-hover:text-[#E8CFC1] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-300 flex items-center gap-1 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-[#E8CFC1]" />
                    {item.centerCount}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
