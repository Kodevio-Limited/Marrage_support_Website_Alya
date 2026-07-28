'use client';
import React from 'react';
import Image from 'next/image';
import Section from '../shared/Section';
import Reveal from '../shared/Reveal';
import Button from '../shared/Button';
import Heading from '../shared/Heading';
import { InitiativeItem } from '@/types/home';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface UpcomingInitiativesProps {
  items: InitiativeItem[];
}

export default function UpcomingInitiatives({ items }: UpcomingInitiativesProps) {
  return (
    <Section background="default" spacing="none" id="initiatives" containerClassName="!max-w-[1440px]" className="py-[80px]">
      {/* Insider Frame: 1280w, 851h, gap 48 — contains header + 2 cards */}
      <div className="flex flex-col gap-[48px] max-w-[1280px] mx-auto">
        {/* Header inside frame */}
        <Reveal direction="up">
          <Heading
            level={2}
            align="center"
            subtitle="Empowering Emirati youth with long-term marital stability and family support programs."
          >
            Upcoming National Initiatives
          </Heading>
        </Reveal>

        {/* 2 Cards Grid: 610w, 700h, radius 32px, border 1px solid #E8CFC1 */}
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2">
        {items.map((initiative, index) => (
          <Reveal key={initiative.id} delay={index * 0.15} direction={index % 2 === 0 ? 'right' : 'left'}>
            {/* Inside Card: width 610, height 700, radius 32px, border 1px solid #E8CFC1 */}
            <div
              className="group flex h-[700px] w-full max-w-[610px] mx-auto flex-col overflow-hidden rounded-[32px] border border-[#E8CFC1] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#781E36]"
              style={{
                boxShadow:
                  '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Image Banner - flush top, edge-to-edge */}
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-gray-900">
                <Image
                  src={initiative.image.src}
                  alt={initiative.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 610px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#781E36] px-4 py-1.5 text-xs font-extrabold text-white shadow-md">
                  {initiative.badge}
                </span>
              </div>

              {/* Text & Details */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-[#781E36] transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-[#6B5B57] line-clamp-3">
                    {initiative.description}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-xs font-bold text-[#781E36] bg-[#FAEDE6] p-3 rounded-xl border border-[#E8CFC1]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#781E36]" />
                    <span>{initiative.details}</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-4">
                  <Button
                    href={initiative.ctaHref}
                    size="lg"
                    variant="primary"
                    className="w-full"
                    icon={<ArrowRight className="h-5 w-5" />}
                  >
                    {initiative.ctaLabel}
                  </Button>
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
