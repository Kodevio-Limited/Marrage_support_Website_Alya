'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
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

interface ArticleItem {
  title: string;
  description: string;
}

interface OrgItem {
  label: string;
  subtitle: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FilterItem {
  name: string;
  label: string;
  isDropdown: boolean;
  options: string[];
}

const articleImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  '/Static/Home/Hero/Emirati couple looking at UAE skyline.png',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop',
];

const categoryIcons = ['🏛️', '💍', '👨‍👩‍👧‍👦', '🤝', '📚', '🎉'];

const orgIcons = ['💒', '🏗️', '👪', '🌟'];

export default function NewsPage() {
  const t = useTranslations('news');
  const tnav = useTranslations('nav');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articles = (t.raw('articles') as ArticleItem[]).map((article, i) => ({
    ...article,
    image: articleImages[i],
  }));

  const categories = (t.raw('categories') as string[]).map((label, i) => ({
    icon: categoryIcons[i],
    label,
  }));

  const orgs = (t.raw('orgs') as OrgItem[]).map((org, i) => ({
    ...org,
    icon: orgIcons[i],
  }));

  const faqs = t.raw('faqs') as FaqItem[];

  const filters: FilterItem[] = [
    { name: 'latest', label: t('latest'), isDropdown: false, options: [] },
    { name: 'category', label: t('category'), isDropdown: true, options: t.raw('catOptions') as string[] },
    { name: 'date', label: t('date'), isDropdown: true, options: t.raw('dateOptions') as string[] },
    { name: 'source', label: t('source'), isDropdown: true, options: t.raw('sourceOptions') as string[] },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: tnav('home'), href: '/' },
            { label: tnav('news') },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full bg-white mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col gap-8 max-w-[672px] w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#781E36] max-w-[480px] leading-tight">
                  {t('title')}
                </h1>
                <p className="text-lg sm:text-xl font-normal text-[#6B5B57] max-w-[640px] leading-snug">
                  {t('description')}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <Link href="#articles" className="flex h-[60px] w-full sm:w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors">
                    {t('browseArticles')}
                    <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                  </Link>
                  <Link href="#learn-more" className="flex h-[60px] w-full sm:w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-[#781E36] bg-transparent px-[10px] text-sm font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-[20px] overflow-hidden">
                  <Image src="/Static/Home/Hero/Emirati couple looking at UAE skyline.png" alt={t('title')} fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" priority unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="w-full rounded-[12px] border border-[#E8CFC1] bg-white p-[10px] flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] w-full h-[61px] rounded-[12px] border border-[#E8CFC1] bg-white px-[10px]">
              <Search className="h-5 w-5 text-[#989898] shrink-0" />
              <input type="text" placeholder={t('searchPlaceholder')} className="w-full h-full bg-transparent text-sm font-normal text-gray-700 outline-none placeholder:text-[#989898]" />
            </div>
            <div className="flex flex-wrap items-center gap-6 w-full">
              {filters.map((filter) => (
                <div key={filter.name} className="relative shrink-0">
                  <button type="button" onClick={() => filter.isDropdown && toggleDropdown(filter.name)}
                    className={`flex items-center justify-between w-[170px] h-[48px] rounded-[10px] border px-[10px] cursor-pointer transition-colors ${openDropdown === filter.name ? 'border-[#781E36]' : 'border-[#E8CFC1] hover:border-[#781E36]'} bg-white`}>
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
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] rounded-[20px] overflow-hidden flex items-center py-12 md:py-16"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1280&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 8px 10px -6px #781E360D, 0px 20px 25px -5px #781E360D' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute top-6 right-6 rounded-md bg-[#781E36] px-4 py-2 z-10">
              <span className="text-white font-bold text-sm">{t('heroBadge')}</span>
            </div>
            <div className="relative z-10 flex flex-col gap-3 max-w-[1184px] px-8 md:px-12">
              <h2 className="max-w-[753px] text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug">
                {t('heroTitle')}
              </h2>
              <p className="max-w-[657.81px] text-sm sm:text-base font-light text-white/80 leading-relaxed">
                {t('heroDesc')}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col gap-[50px] w-full">
            <div className="flex flex-col gap-[14px] w-full">
              <span className="text-xl font-bold text-[#781E36]">{t('latestTitle')}</span>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {articles.map((article, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col w-full rounded-[24px] border border-[#E8CFC1] bg-white overflow-hidden">
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(120, 30, 54, 0.8) 0%, rgba(120, 30, 54, 0.2) 50%, rgba(120, 30, 54, 0) 100%)' }} />
                  </div>
                  <div className="flex flex-col justify-between w-full min-h-[218px] p-6 bg-white">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold text-[#781E36] leading-snug">{article.title}</h3>
                      <p className="text-[13px] font-normal text-[#6B5B57] leading-relaxed">{article.description}</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-auto">
                      <hr className="border-t border-[#E8CFC1]" />
                      <Link href="/news/article" className="text-sm font-semibold text-[#781E36] hover:text-[#B83A4A] transition-colors">{t('readMore')} <span className="rtl:rotate-180 inline-block">→</span></Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-8 w-full bg-white border-t border-b border-[#E8CFC1] py-12 px-8">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold text-[#781E36]">{t('popularCategories')}</span>
              <p className="text-sm font-normal text-[#6B5B57]">{t('popularCategoriesText')}</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {categories.map((cat, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-3 w-full h-[184px] rounded-[24px] bg-white cursor-pointer hover:border-[#781E36] transition-all"
                  style={{ boxShadow: '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' }}>
                  <div className="flex items-center justify-center h-[56px] w-[56px] rounded-[16px] bg-[#FAEDE6]">
                    <span className="text-2xl">{cat.icon}</span>
                  </div>
                  <span className="text-center max-w-[120px] text-sm font-extrabold text-[#781E36] leading-snug">{cat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.4} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-8 w-full bg-white pt-[48px] pb-[48px] px-8">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold text-[#781E36]">{t('featuredOrgs')}</span>
              <p className="text-sm font-normal text-[#6B5B57]">{t('featuredOrgsText')}</p>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {orgs.map((org, i) => {
                const isSelected = selectedOrg === org.label;
                return (
                  <motion.div key={i} variants={itemVariants}
                    className={`flex flex-col items-center justify-center gap-3 w-full min-h-[200px] rounded-[24px] bg-white cursor-pointer transition-all px-6 py-8 ${isSelected ? 'border-2 border-[#781E36]' : 'border border-[#E8CFC1]'}`}
                    style={{ boxShadow: isSelected ? '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' : 'none' }}
                    onClick={() => setSelectedOrg(isSelected ? null : org.label)}>
                    <div className={`flex items-center justify-center h-[56px] w-[56px] rounded-[16px] transition-colors ${isSelected ? 'bg-[#781E36]' : 'bg-[#FAEDE6]'}`}>
                      <span className="text-2xl">{org.icon}</span>
                    </div>
                    <span className="text-center text-sm font-extrabold text-[#781E36] leading-snug">{org.label}</span>
                    <span className="text-center text-xs font-normal text-[#6B5B57]">{org.subtitle}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.45} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#781E36] leading-tight">{t('faqTitle')}</h2>
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
                <div className="flex items-center justify-between w-full h-[30px]">
                  <span className="text-lg sm:text-xl font-semibold text-[#781E36] leading-snug">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#781E36] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && <p className="text-sm font-normal text-[#6B5B57] leading-[20px] pt-2">{faq.answer}</p>}
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
                <h2 className="max-w-[848px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight pb-[24px]">{t('ctaTitle')}</h2>
                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">{t('ctaText')}</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/initiatives" className="flex h-[64px] w-full sm:w-auto min-w-[221px] items-center justify-center gap-2 rounded-full bg-white px-[32px] py-[18px] font-extrabold text-lg text-[#781E36] hover:bg-[#FAEDE6] transition-colors">{t('ctaExplore')}</Link>
                  <Link href="/consultation" className="flex h-[64px] w-full sm:w-auto min-w-[221px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-[32px] py-[18px] font-extrabold text-lg text-white hover:bg-white hover:text-[#781E36] transition-colors">{t('ctaConsultation')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
