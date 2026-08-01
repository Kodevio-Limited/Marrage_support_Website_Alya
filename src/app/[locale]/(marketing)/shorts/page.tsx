'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Reveal from '@/components/shared/Reveal';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const videoImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
];

interface ShortVideo {
  category: string;
  subtitle: string;
  views: string;
  time: string;
  duration: string;
}

interface Topic {
  title: string;
  videos: string;
}

interface Faq {
  question: string;
  answer: string;
}

export default function ShortsPage() {
  const t = useTranslations('shorts');
  const tNav = useTranslations('nav');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const videos = (t.raw('videos') as ShortVideo[]).map((video, i) => ({
    ...video,
    thumbnail: videoImages[i % videoImages.length],
  }));

  const topics = t.raw('topics') as Topic[];
  const contributorList = t.raw('contributorList') as string[];
  const faqs = t.raw('faqs') as Faq[];

  const filters = [
    { name: 'free', label: t('free'), isDropdown: false, options: [] as string[] },
    { name: 'marital', label: t('marital'), isDropdown: true, options: t.raw('maritalOptions') as string[] },
    { name: 'language', label: t('language'), isDropdown: true, options: t.raw('languageOptions') as string[] },
    { name: 'date', label: t('date'), isDropdown: true, options: t.raw('dateOptions') as string[] },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: tNav('home'), href: '/' },
            { label: tNav('shorts') },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col gap-6 max-w-[672px] w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#781E36] leading-tight">
                  {t('title')}
                </h1>
                <p className="text-base md:text-lg font-normal text-[#6B5B57] leading-relaxed">
                  {t('description')}
                </p>
              </div>
              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[280px] sm:h-[360px] md:h-[460px] lg:h-[600px] rounded-[20px] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop" alt={t('title')} fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" priority />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="w-full rounded-[12px] border border-[#E8CFC1] bg-white p-[10px] flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] w-full h-[48px] sm:h-[61px] rounded-[12px] border border-[#E8CFC1] bg-white px-[10px]">
              <Search className="h-5 w-5 text-[#989898] shrink-0" />
              <input type="text" placeholder={t('searchPlaceholder')} className="w-full h-full bg-transparent text-sm font-normal text-gray-700 outline-none placeholder:text-[#989898]" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-6 w-full">
              {filters.map((filter) => (
                <div key={filter.name} className="relative w-full sm:w-auto">
                  <button type="button" onClick={() => filter.isDropdown && toggleDropdown(filter.name)}
                    className={`flex items-center justify-between w-full sm:w-[170px] h-[48px] rounded-[10px] border px-[10px] cursor-pointer transition-colors ${openDropdown === filter.name ? 'border-[#781E36]' : 'border-[#E8CFC1] hover:border-[#781E36]'} bg-white`}>
                    <span className={`text-sm ${filter.isDropdown ? 'font-medium text-[#6B5B57]' : 'font-semibold text-[#781E36]'}`}>{filter.label}</span>
                    {filter.isDropdown && (
                      <ChevronDown className={`h-4 w-4 text-[#989898] transition-transform duration-200 ${openDropdown === filter.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {filter.isDropdown && openDropdown === filter.name && (
                    <div className="absolute top-full left-0 mt-1 w-full rounded-[10px] border border-[#E8CFC1] bg-white shadow-lg z-20 overflow-hidden">
                      {filter.options.map((opt) => (
                        <button key={opt} type="button" onClick={() => setOpenDropdown(null)}
                          className="w-full px-[10px] py-2 text-left text-sm font-medium text-[#6B5B57] hover:bg-[#FAEDE6] hover:text-[#781E36] transition-colors">{opt}</button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full h-[52px] rounded-[12px] bg-[#781E36] px-6 py-3 text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors">{t('search')}</button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col gap-[44px] w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xl font-bold leading-7 text-[#781E36]">{t('featuredTitle')}</span>
              <span className="text-sm font-normal text-[#6B5B57]">{t('featuredSubtitle')}</span>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {videos.map((card, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="flex flex-col w-full rounded-[20px] border border-[#E8CFC1] bg-white overflow-hidden"
                  style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
                  <div className="relative w-full aspect-video bg-[#E8CFC1] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.thumbnail})` }} />
                    <div className="absolute top-3 right-3 rounded bg-black/60 px-1.5 py-0.5">
                      <span className="text-[10px] font-medium leading-[15px] text-white">{card.duration}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M15.5 8.5L0.5 0.5V17.5L15.5 8.5Z" fill="#781E36" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 gap-3 flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#989898]">{card.category}</span>
                    <span className="text-[15px] font-bold leading-5 text-[#781E36]">{card.subtitle}</span>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#989898"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        <span className="text-[11px] font-normal text-[#989898]">{card.views}</span>
                      </div>
                      <span className="text-[11px] font-normal text-[#989898]">{card.time}</span>
                    </div>
                    <Link href="/shorts/video-details" className="flex items-center justify-center w-full h-[52px] rounded-[12px] bg-[#781E36] text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors mt-1">{t('viewDetails')}</Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col gap-[44px] w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xl font-bold leading-7 text-[#781E36]">{t('libraryTitle')}</span>
              <span className="text-sm font-normal text-[#6B5B57]">{t('librarySubtitle')}</span>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {videos.map((card, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="flex flex-col w-full rounded-[20px] border border-[#E8CFC1] bg-white overflow-hidden"
                  style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
                  <div className="relative w-full aspect-video bg-[#E8CFC1] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.thumbnail})` }} />
                    <div className="absolute top-3 right-3 rounded bg-black/60 px-1.5 py-0.5">
                      <span className="text-[10px] font-medium leading-[15px] text-white">{card.duration}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M15.5 8.5L0.5 0.5V17.5L15.5 8.5Z" fill="#781E36" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 gap-3 flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#989898]">{card.category}</span>
                    <span className="text-[15px] font-bold leading-5 text-[#781E36]">{card.subtitle}</span>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#989898"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        <span className="text-[11px] font-normal text-[#989898]">{card.views}</span>
                      </div>
                      <span className="text-[11px] font-normal text-[#989898]">{card.time}</span>
                    </div>
                    <Link href="/shorts/video-details" className="flex items-center justify-center w-full h-[52px] rounded-[12px] bg-[#781E36] text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors mt-1">{t('viewDetails')}</Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-6 w-full bg-white border-t border-b border-[#E8CFC1] py-8 px-4 sm:px-8">
            <div className="flex flex-col gap-[6px] px-4">
              <span className="text-xl font-bold leading-7 text-[#781E36]">{t('exploreTopics')}</span>
              <span className="text-sm font-normal text-[#6B5B57]">{t('exploreTopicsText')}</span>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {topics.map((topic, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="flex flex-col items-center gap-3 w-full h-auto min-h-[125px] rounded-[16px] border border-[#E8CFC1] bg-white p-4 cursor-pointer hover:border-[#781E36] transition-colors">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FAEDE6]">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none"><path d="M9 0L11.59 5.41L17 6.18L13 10.64L14.18 16L9 13.77L3.82 16L5 10.64L1 6.18L6.41 5.41L9 0Z" fill="#781E36" /></svg>
                  </div>
                  <span className="text-center text-base font-semibold leading-4 text-[#781E36]">{topic.title}</span>
                  <span className="text-center text-base font-normal leading-[15px] text-[#6B5B57]">{topic.videos}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.4} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-6 w-full bg-white pt-[30px] pb-[48px] px-4 sm:px-8">
            <span className="text-xl font-bold leading-7 text-[#781E36]">{t('contributors')}</span>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {contributorList.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-[12px] w-full h-auto min-h-[74px] rounded-[16px] border border-[#E8CFC1] bg-white p-4">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FAEDE6]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="#781E36" strokeWidth="1.5" /><path d="M3 18C3 14.6863 6.13401 12 10 12C13.866 12 17 14.6863 17 18" stroke="#781E36" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <span className="text-base font-semibold leading-[15px] text-[#781E36]">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.45} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#781E36] leading-tight">{t('faqTitle')}</h2>
            <p className="text-base font-normal text-[#6B5B57] max-w-[640px]">{t('faqText')}</p>
          </div>
          <motion.div
            className="flex flex-col gap-5 max-w-[663px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}
                className="w-full rounded-[10px] border-[0.5px] border-[#959595] bg-white p-[10px] flex flex-col gap-[10px] cursor-pointer hover:border-[#781E36] transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between w-full h-auto min-h-[30px] gap-3">
                  <span className="text-base md:text-lg font-semibold text-[#781E36] leading-[150%]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#781E36] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && <p className="text-sm font-normal text-[#6B5B57] leading-5 pt-2">{faq.answer}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.5} direction="up">
        <div className="w-full pb-[80px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="relative flex h-auto min-h-[464px] flex-col items-center justify-center overflow-hidden rounded-[40px] px-6 py-[80px] text-center text-white md:px-[80px]"
              style={{ background: 'linear-gradient(90deg, #781E36 0%, #B83A4A 100%)', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none animate-pulse" />
              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center max-w-[848px]">
                <h2 className="max-w-[848px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight pb-6">{t('ctaTitle')}</h2>
                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-10">{t('ctaText')}</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Link href="#videos" className="flex h-[64px] w-full sm:w-[221px] items-center justify-center gap-2 rounded-full bg-white px-8 py-[18px] font-extrabold text-lg text-[#781E36] hover:bg-[#FAEDE6] transition-colors">{t('ctaBrowse')}</Link>
                  <Link href="/initiatives" className="flex h-[64px] w-full sm:w-[221px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-[18px] font-extrabold text-lg text-white hover:bg-white hover:text-[#781E36] transition-colors">{t('ctaExplore')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
