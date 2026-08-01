'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronRight, ExternalLink, Share2, Building2, Tag, Shield, Users, HeartHandshake, Coins, MessageCircle, Landmark, BookOpen, Home, Heart, Phone, Mail, MapPin, Clock, Calendar, ArrowRight, Bookmark } from 'lucide-react';
import Button from '@/components/shared/Button';
import Reveal from '@/components/shared/Reveal';
import Breadcrumb from '@/components/shared/Breadcrumb';

const heroImage =
  'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1440&auto=format&fit=crop';

const supportIcons = [
  <Coins className="h-5 w-5" key="s0" />,
  <Home className="h-5 w-5" key="s1" />,
  <BookOpen className="h-5 w-5" key="s2" />,
  <Shield className="h-5 w-5" key="s3" />,
  <Heart className="h-5 w-5" key="s4" />,
  <MessageCircle className="h-5 w-5" key="s5" />,
];

const benefitIcons = [
  <Coins className="h-5 w-5 text-[#781E36]" key="b0" />,
  <MessageCircle className="h-5 w-5 text-[#781E36]" key="b1" />,
  <Landmark className="h-5 w-5 text-[#781E36]" key="b2" />,
  <HeartHandshake className="h-5 w-5 text-[#781E36]" key="b3" />,
  <BookOpen className="h-5 w-5 text-[#781E36]" key="b4" />,
  <Users className="h-5 w-5 text-[#781E36]" key="b5" />,
];

const contactIcons = [
  <Building2 className="h-5 w-5" key="c0" />,
  <Phone className="h-5 w-5" key="c1" />,
  <Mail className="h-5 w-5" key="c2" />,
  <MapPin className="h-5 w-5" key="c3" />,
  <Clock className="h-5 w-5" key="c4" />,
];

const similarImages = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
];

type Step = { title: string; desc: string };
type Benefit = { title: string; desc: string };
type Contact = { label: string; value: string };
type SimilarItem = { tag: string; date: string; title: string; excerpt: string };

export default function InitiativesPage() {
  const t = useTranslations('initiative');
  const nav = useTranslations('nav');

  const objectives = t.raw('objectives') as string[];
  const supports = t.raw('supports') as string[];
  const steps = t.raw('steps') as Step[];
  const benefitList = t.raw('benefitList') as Benefit[];
  const contacts = t.raw('contacts') as Contact[];
  const similarItems = t.raw('similarItems') as SimilarItem[];

  const basicInfoLeft = [
    { icon: <Building2 className="h-5 w-5 text-[#781E36]" />, label: t('organizer'), value: t('organizerValue') },
    { icon: <Tag className="h-5 w-5 text-[#781E36]" />, label: t('category'), value: t('categoryValue') },
    { icon: <Shield className="h-5 w-5 text-[#781E36]" />, label: t('programType'), value: t('programTypeValue') },
  ];

  const basicInfoRight = [
    { icon: <Users className="h-5 w-5 text-[#781E36]" />, label: t('eligibility'), value: t('eligibilityValue') },
    { icon: <HeartHandshake className="h-5 w-5 text-[#781E36]" />, label: t('supportType'), value: t('supportTypeValue') },
  ];

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: nav('home'), href: '/' },
            { label: t('title') },
          ]} />
        </div>
      </Reveal>
      <Reveal delay={0.1} direction="up">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pb-[30px]">
          <div className="relative mx-auto w-full max-w-[1280px] min-h-[420px] md:h-[480px] rounded-[20px] overflow-hidden">
            <Image
              src={heroImage}
              alt={t('title')}
              fill
              className="object-cover"
              sizes="1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

            <div className="relative z-10 flex flex-col h-full max-w-[1145px] mx-auto px-5 py-8 sm:px-[45px] md:pt-[47px] md:pb-[47px]">
              <div className="flex flex-wrap items-start justify-start gap-3 md:gap-[25px]">
                <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-[#781E36] shadow-sm">
                  {t('financialSupport')}
                </span>
                <button
                  type="button"
                  className="rounded-full bg-[#781E36] px-5 py-1.5 text-xs font-bold text-white shadow-md hover:bg-[#B83A4A] transition-colors"
                >
                  {t('openNow')}
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-end gap-6 md:gap-[39px]">
                <div className="flex flex-col gap-6 max-w-[872px]">
                  <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight">
                    {t('title')}
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed text-white/90 max-w-[872px]">
                    {t('description')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[40px]">
                  <a
                    href="#official"
                    className="flex h-[60px] w-full sm:w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    {t('visitOfficial')}
                  </a>
                  <a
                    href="#share"
                    className="flex h-[60px] w-full sm:w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-white/60 bg-white/10 px-[10px] text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                    {t('shareInitiative')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <section className="w-full bg-white py-12 mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('aboutTitle')}
              </h2>
            </div>

            <div className="mt-6 max-w-[1185px]">
              <p className="text-base leading-[30px] text-[#757575]">
                {t('aboutText')}
              </p>
            </div>

            <h3 className="mt-8 max-w-[819px] text-xl font-semibold text-black leading-[30px]">
              {t('purpose')}
            </h3>
            <p className="mt-1 max-w-[858px] text-base leading-[30px] text-[#757575]">
              {t('purposeText')}
            </p>

            <h3 className="mt-6 max-w-[819px] text-xl font-semibold text-black leading-[30px]">
              {t('objective')}
            </h3>

            <ul className="mt-2 flex flex-col gap-1 max-w-[858px]">
              {objectives.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base leading-[30px] text-[#757575]"
                >
                  <span className="mt-[9px] h-[10px] w-[10px] shrink-0 rounded-full bg-[#781E36]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <section className="w-full bg-white py-12 mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('basicInfo')}
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex flex-col gap-6">
                {basicInfoLeft.map((item, i) => (
                  <div key={i} className="flex items-center gap-[12px] max-w-[369px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base font-normal text-[#989898] leading-[28px]">{item.label}</span>
                      <span className="text-sm md:text-base font-semibold text-[#781E36] leading-[28px]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                {basicInfoRight.map((item, i) => (
                  <div key={i} className="flex items-center gap-[12px] max-w-[369px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base font-normal text-[#989898] leading-[28px]">{item.label}</span>
                      <span className="text-sm md:text-base font-semibold text-[#781E36] leading-[28px]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <section className="w-full bg-white py-12 mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('supportOffered')}
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {supports.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px] w-full"
                >
                  <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center text-[#781E36]">
                    {supportIcons[i]}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-[#781E36] leading-7">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.4} direction="up">
        <section className="w-full bg-white py-12 mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('applicationProcess')}
              </h2>
            </div>

            <div className="mt-6 relative">
              <div className="absolute left-[16px] top-3 bottom-3 w-px bg-[#E8CFC1] md:hidden" />
              <div className="hidden md:block absolute left-0 right-0 top-[17.5px] h-px bg-[#E8CFC1]" />

              <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:text-center">
                    <div className="relative z-10 flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#781E36]">
                      <span className="text-white text-sm font-bold leading-none">{i + 1}</span>
                    </div>
                    <div className="flex flex-col gap-1 md:mt-3">
                      <h4 className="font-bold text-[#781E36] text-base leading-6">{step.title}</h4>
                      <p className="text-sm font-normal text-[#989898] leading-[20px]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.45} direction="up">
        <section className="w-full bg-white py-12 mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('benefits')}
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitList.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-[10px] rounded-[16px] border border-[#E8CFC1] bg-white p-[10px] w-full"
                >
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                    {benefitIcons[i]}
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="text-base font-semibold text-[#781E36] leading-[30px]">
                      {item.title}
                    </h4>
                    <p className="text-sm font-normal text-[#989898] leading-[20px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.5} direction="up">
        <section className="w-full bg-[#781E36] py-[66px] mb-12">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
              <h2 className="text-2xl font-bold text-white">
                {t('contactInfo')}
              </h2>
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-10">
              <div className="flex flex-col gap-6 flex-1">
                {contacts.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[3px] max-w-[317px] w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-[#E8CFC1]">{contactIcons[i]}</span>
                      <span className="font-normal text-[#E8CFC1] text-base leading-7">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-white leading-7 ml-7">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 justify-start md:pt-0 w-full md:w-auto">
                <button className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#781E36] transition-colors text-center w-full md:w-auto">
                  {t('visitOfficialBtn')}
                </button>
                <button className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#781E36] transition-colors text-center w-full md:w-auto">
                  {t('visitWebsite')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.55} direction="up">
        <section className="w-full bg-white py-20 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px] mb-10">
              <h2 className="text-2xl font-bold text-[#781E36]">
                {t('similar')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarItems.map((item, i) => (
                <div
                  key={i}
                  className="group flex h-full w-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#E8CFC1] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#781E36]"
                  style={{
                    boxShadow:
                      '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={similarImages[i]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#781E36] backdrop-blur-md shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#6B5B57]">
                        <Calendar className="h-3.5 w-3.5 text-[#781E36]" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-[#781E36] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-xs md:text-sm leading-relaxed text-[#6B5B57]">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-[#E8CFC1]/60 pt-4 text-xs font-bold text-[#781E36]">
                      <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        {t('readFullArticle')} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </span>
                      <Bookmark className="h-4 w-4 text-gray-400 hover:text-[#781E36] transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="w-full bg-[#FAEDE6] py-[80px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal direction="up">
            <div
              className="relative flex h-auto min-h-[464px] flex-col items-center justify-center overflow-hidden rounded-[40px] px-6 py-[80px] text-center text-white md:px-[80px]"
              style={{
                background: 'linear-gradient(90deg, #781E36 0%, #B83A4A 100%)',
                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none animate-pulse" />
              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center max-w-[848px]">
                <h2 className="max-w-[848px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight pb-[24px]">
                  {t('ctaTitle')}
                </h2>

                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">
                  {t('ctaText')}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Button
                    href="#initiatives"
                    variant="white"
                    className="h-[64px] w-full sm:w-[221px] py-[18px] px-[32px] font-extrabold text-lg shadow-2xl"
                    icon={<ArrowRight className="h-5 w-5 text-[#781E36] rtl:rotate-180" />}
                  >
                    {t('ctaExplore')}
                  </Button>
                  <Button
                    href="#consultation"
                    variant="white"
                    className="h-[64px] w-full sm:w-[221px] py-[18px] px-[32px] font-extrabold text-lg shadow-2xl"
                    icon={<ArrowRight className="h-5 w-5 text-[#781E36] rtl:rotate-180" />}
                  >
                    {t('ctaFind')}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
