'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Section from '../shared/Section';
import Reveal from '../shared/Reveal';
import Button from '../shared/Button';
import Heading from '../shared/Heading';
import { Calendar, Clock, Users } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
];

export default function ConsultationSessions() {
  const t = useTranslations('home');
  const items = t.raw('consultations') as { title: string; name: string; date: string; time: string; seats: string; ctaLabel: string }[];
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>('free');

  return (
    <Section background="muted" spacing="none" id="consultation" containerClassName="!max-w-[1440px]" className="py-[64px] sm:py-[80px]">
      <div className="flex flex-col gap-12">
        {/* Header: centered */}
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center gap-4">
            <Heading level={2} align="center">
              {t('consultationsTitle')}
            </Heading>
            <p className="max-w-2xl text-[#6B5B57] text-base leading-relaxed">
              {t('consultationsSubtitle')}
            </p>
          </div>
        </Reveal>

        {/* Toggle Switch: Free Session / Paid Session */}
        <Reveal direction="up">
          <div className="flex items-center justify-center max-w-[1280px] mx-auto w-full h-[62px]">
            <div className="relative flex rounded-full bg-[#FAEDE6] p-1 w-[260px]">
              <div
                className={`absolute top-1 bottom-1 w-[126px] rounded-full bg-white shadow-md transition-transform duration-300 ${
                  activeTab === 'paid' ? 'translate-x-[126px]' : 'translate-x-0'
                }`}
              />
              <button
                type="button"
                onClick={() => setActiveTab('free')}
                className={`relative z-10 flex-1 rounded-full py-2 text-sm font-bold transition-colors duration-200 ${
                  activeTab === 'free' ? 'text-[#781E36]' : 'text-[#6B5B57]'
                }`}
              >
                {t('freeSession')}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('paid')}
                className={`relative z-10 flex-1 rounded-full py-2 text-sm font-bold transition-colors duration-200 ${
                  activeTab === 'paid' ? 'text-[#781E36]' : 'text-[#6B5B57]'
                }`}
              >
                {t('paidSession')}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Grid of 2 Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((session, index) => (
            <Reveal key={index} delay={index * 0.15} direction="up">
              <div
                className="group flex h-auto min-h-[263px] w-full max-w-[620px] mx-auto flex-col rounded-[24px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Top: circular image + title/name */}
                <div className="flex items-center gap-4">
                  <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={images[index % images.length]}
                      alt={session.title}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h3 className="text-sm font-extrabold text-gray-900 leading-snug truncate group-hover:text-[#781E36] transition-colors">
                      {session.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#781E36]">
                      {session.name}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-[#E8CFC1]/60" />

                {/* Bottom: meta info + button */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-[#6B5B57]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#781E36] shrink-0" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#781E36] shrink-0" />
                      {session.time}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-[#781E36] col-span-2">
                      <Users className="h-3.5 w-3.5 shrink-0" />
                      {session.seats}
                    </span>
                  </div>
                  <Button href="/consultation/details" size="sm" variant="primary" className="w-full justify-center">
                    {session.ctaLabel}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
