'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, Link2 } from 'lucide-react';
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

interface InfoValues {
  org: string;
  city: string;
  emirates: string;
  author: string;
  published: string;
}

interface StoryItem {
  title: string;
}

const storyImages = [
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop',
];

export default function ArticlePage() {
  const t = useTranslations('article');
  const tnav = useTranslations('nav');

  const infoValues = t.raw('infoValues') as InfoValues;
  const resources = t.raw('resources') as string[];
  const stories = (t.raw('stories') as StoryItem[]).map((story, i) => ({
    ...story,
    image: storyImages[i],
  }));

  const infoRows = [
    { label: t('org'), value: infoValues.org },
    { label: t('city'), value: infoValues.city },
    { label: t('emirates'), value: infoValues.emirates },
    { label: t('author'), value: infoValues.author },
    { label: t('published'), value: infoValues.published },
  ];

  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: tnav('home'), href: '/' },
            { label: tnav('news'), href: '/news' },
            { label: t('title') },
          ]} />
        </div>
      </Reveal>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <Reveal delay={0.1} direction="up" className="w-full lg:max-w-[853px]">
            <div className="flex flex-col w-full lg:max-w-[853px] rounded-[20px] bg-white p-4 sm:p-8 gap-6"
              style={{ boxShadow: '0px 4px 20px 0px #781E360A' }}>
              <motion.div
                className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-[16px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" alt={t('title')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 853px" priority />
              </motion.div>

              <motion.h1
                className="max-w-[714px] text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#781E36] leading-snug"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                {t('title')}
              </motion.h1>

              <motion.div
                className="flex flex-col gap-4 text-sm sm:text-base text-[#6B5B57] leading-relaxed"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <motion.p variants={itemVariants}>{t('p1')}</motion.p>
                <motion.p variants={itemVariants}>{t('p2')}</motion.p>
                <motion.p variants={itemVariants}>{t('p3')}</motion.p>
                <motion.p variants={itemVariants}>{t('p4')}</motion.p>
              </motion.div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 w-full lg:max-w-[400px]">
            <Reveal delay={0.2} direction="right">
              <div className="flex flex-col gap-3 w-full rounded-[20px] border border-[#E8CFC1] bg-white p-5"
                style={{ boxShadow: '0px 2px 8px 0px #781E3605' }}>
                <motion.div
                  className="flex flex-col gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} className="text-base font-semibold text-[#781E36]">
                    {t('articleInfo')}
                  </motion.span>
                  {infoRows.map((row, i) => (
                    <motion.div key={i} variants={itemVariants}
                      className="flex items-center justify-between w-full py-2 border-b border-[#E8CFC1] last:border-b-0">
                      <span className="text-[13px] font-normal text-[#6B5B57] leading-snug">{row.label}</span>
                      <span className="text-[13px] font-semibold text-[#781E36] leading-snug">{row.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.25} direction="right">
              <div className="flex flex-col gap-3 w-full rounded-[20px] border border-[#E8CFC1] bg-white p-5"
                style={{ boxShadow: '0px 2px 8px 0px #781E3605' }}>
                <motion.div
                  className="flex flex-col gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} className="text-base font-semibold text-[#781E36]">
                    {t('relatedResources')}
                  </motion.span>
                  {resources.map((res, i) => (
                    <motion.div key={i} variants={itemVariants}
                      className="flex items-center justify-between w-full py-2 border-b border-[#E8CFC1] last:border-b-0">
                      <span className="text-[13px] font-normal text-[#6B5B57] leading-snug">{res}</span>
                      <ExternalLink className="h-[18px] w-[18px] text-[#6B5B57] opacity-60 cursor-pointer hover:text-[#781E36] rtl:rotate-180" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="right">
              <div className="flex flex-col gap-3 w-full rounded-[20px] border border-[#E8CFC1] bg-white p-5"
                style={{ boxShadow: '0px 2px 8px 0px #781E3605' }}>
                <motion.div
                  className="flex flex-col gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} className="text-base font-semibold text-[#781E36]">
                    {t('share')}
                  </motion.span>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <Link2 className="h-[14px] w-[14px] text-[#781E36]" />
                      <span className="text-xs font-medium text-[#781E36] leading-tight">{t('copyLink')}</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" /></svg>
                      <span className="text-xs font-medium text-[#781E36] leading-tight">{t('facebook')}</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M4 4l6.5 8.5L4 20h1.5l5.5-7 4.5 7H20l-7-9.5L19.5 4H18l-5 6.5L8.5 4H4zM6.5 5.5h1.5l9 13h-1.5l-9-13z" /></svg>
                      <span className="text-xs font-medium text-[#781E36] leading-tight">{t('x')}</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                      <span className="text-xs font-medium text-[#781E36] leading-tight">{t('linkedin')}</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.35} direction="right">
              <div className="flex flex-col gap-4 w-full rounded-[20px] border border-[#E8CFC1] bg-white p-5"
                style={{ boxShadow: '0px 2px 8px 0px #781E3605' }}>
                <motion.div
                  className="flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} className="text-base font-semibold text-[#781E36]">
                    {t('relatedStories')}
                  </motion.span>
                  {stories.map((story, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <Link href="/news/article" className="flex items-center gap-[12px] w-full min-h-[60px]">
                        <div className="relative w-[80px] h-[60px] shrink-0 rounded-[12px] overflow-hidden">
                          <Image src={story.image} alt={story.title} fill className="object-cover" sizes="80px" />
                        </div>
                        <span className="text-sm font-medium leading-[18px] text-[#781E36]">{story.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
