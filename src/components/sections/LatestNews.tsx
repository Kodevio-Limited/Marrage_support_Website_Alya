'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Section from '../shared/Section';
import Reveal from '../shared/Reveal';
import Heading from '../shared/Heading';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
];

export default function LatestNews() {
  const t = useTranslations('home');
  const items = t.raw('news') as { tag: string; date: string; title: string; excerpt: string }[];

  return (
    <Section background="muted" spacing="none" id="news" containerClassName="!max-w-[1440px]" className="py-[64px] sm:py-[80px]">
      <div className="flex flex-col gap-[64px]">
        {/* Header Container: width 1280, height 104, gap 16 */}
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center gap-4 min-h-[104px]">
            <Heading
              level={2}
              align="center"
              subtitle={t('newsSubtitle')}
            >
              {t('newsTitle')}
            </Heading>
          </div>
        </Reveal>

        {/* Grid of 3 News Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((news, index) => (
          <Reveal key={index} delay={index * 0.1} direction="up">
            <div
              className="group flex h-auto min-h-[519px] w-full max-w-[400px] mx-auto flex-col justify-between overflow-hidden rounded-[24px] border border-[#E8CFC1] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#781E36]"
              style={{
                boxShadow:
                  '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* News Image */}
              <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={images[index % images.length]}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#781E36] backdrop-blur-md shadow-xs">
                  {news.tag}
                </span>
              </div>

              {/* News Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6B5B57]">
                    <Calendar className="h-3.5 w-3.5 text-[#781E36]" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-[#781E36] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="line-clamp-3 text-xs md:text-sm leading-relaxed text-[#6B5B57]">
                    {news.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#E8CFC1]/60 pt-4 text-xs font-bold text-[#781E36]">
                  <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    {t('newsReadMore')} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </span>
                  <Bookmark className="h-4 w-4 text-gray-400 hover:text-[#781E36] transition-colors" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </Section>
  );
}
