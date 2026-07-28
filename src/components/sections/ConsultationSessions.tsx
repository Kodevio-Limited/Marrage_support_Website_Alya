'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from '../shared/Section';
import Reveal from '../shared/Reveal';
import Button from '../shared/Button';
import Heading from '../shared/Heading';
import { ConsultationItem } from '@/types/home';
import { Calendar, Clock, Users } from 'lucide-react';

export interface ConsultationSessionsProps {
  items: ConsultationItem[];
}

export default function ConsultationSessions({ items }: ConsultationSessionsProps) {
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>('free');

  return (
    <Section background="muted" spacing="none" id="consultation" containerClassName="!max-w-[1440px]" className="py-[80px]">
      <div className="flex flex-col gap-12">
        {/* Header: centered */}
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center gap-4">
            <Heading level={2} align="center">
              Congratulations Sessions
            </Heading>
            <p className="max-w-2xl text-[#6B5B57] text-base leading-relaxed">
              Connect with certified expert and counselors to guide you through various stages of your merital journey.
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
                Free Session
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('paid')}
                className={`relative z-10 flex-1 rounded-full py-2 text-sm font-bold transition-colors duration-200 ${
                  activeTab === 'paid' ? 'text-[#781E36]' : 'text-[#6B5B57]'
                }`}
              >
                Paid Session
              </button>
            </div>
          </div>
        </Reveal>

        {/* Grid of 2 Cards: 620x263, radius 24px */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((session, index) => (
            <Reveal key={session.id} delay={index * 0.15} direction="up">
              <div
                className="group flex h-[263px] w-full max-w-[620px] mx-auto flex-col rounded-[24px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Top: circular image + title/name */}
                <div className="flex items-center gap-4">
                  <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={session.image.src}
                      alt={session.image.alt}
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
                  <Button href={session.ctaHref} size="sm" variant="primary" className="w-full justify-center">
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
