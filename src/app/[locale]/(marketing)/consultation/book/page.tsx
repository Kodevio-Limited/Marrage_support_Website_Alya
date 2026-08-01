'use client';
import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { User, FileText, Clock, Globe, Calendar, MapPin, ChevronDown, CreditCard } from 'lucide-react';
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

type SummaryItem = { label: string; value: string };

const summaryIcons = [User, FileText, Clock, Globe, Calendar, MapPin];

export default function BookingPage() {
  const t = useTranslations('booking');
  const tNav = useTranslations('nav');
  const tB = useTranslations('consultation');

  const summary = t.raw('summary') as SummaryItem[];
  const countries = t.raw('countries') as string[];
  const languages = t.raw('languages') as string[];

  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: tNav('home'), href: '/' },
            { label: tB('breadcrumbParent'), href: '/consultation' },
            { label: t('breadcrumbCurrent') },
          ]} />
        </div>
      </Reveal>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-[50px] w-full lg:max-w-[829px]">

            <Reveal delay={0.1} direction="up">
              <div>
                <h2 className="text-[#781E36] text-2xl md:text-[32px] font-semibold leading-[24px] md:leading-[36px] tracking-[0.1px]">
                  {t('title')}
                </h2>
                <p className="text-[#6B5B57] mt-4 text-sm md:text-base leading-6">
                  {t('subtitle')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="rounded-[12px] border border-[#E8CFC1] bg-white p-6">
                <div className="pb-[10px] border-b border-[#E8CFC1]">
                  <span className="text-2xl md:text-[32px] font-semibold leading-[24px] md:leading-[36px] tracking-[0.1px] text-[#781E36]">
                    {t('sessionSummary')}
                  </span>
                </div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  {summary.map((item, i) => {
                    const Icon = summaryIcons[i % summaryIcons.length];
                    return (
                      <motion.div key={i} variants={itemVariants} className="flex items-center gap-[12px] w-full max-w-[400px]">
                        <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[30px] bg-[#E8CFC1] p-[7px]">
                          <Icon className="h-5 w-5 text-[#781E36]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm md:text-base leading-[28px] text-[#989898]">
                            {item.label}
                          </span>
                          <span className="text-sm md:text-[14.77px] font-semibold leading-[28px] text-[#781E36]">
                            {item.value}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="rounded-[12px] border border-[#E8CFC1] bg-white p-6">
                <div className="pb-[10px] border-b border-[#E8CFC1]">
                  <span className="text-2xl md:text-[32px] font-semibold leading-[24px] md:leading-[36px] tracking-[0.1px] text-[#781E36]">
                    {t('personalInfo')}
                  </span>
                </div>
                <motion.div
                  className="mt-6 flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[17px] md:text-[19px] font-medium leading-[140%] text-[#781E36]">
                        {t('fullName')} <span className="text-[#B83A4A]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t('fullNamePlaceholder')}
                        className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[17px] md:text-[19px] font-medium leading-[140%] text-[#781E36]">
                        {t('phone')} <span className="text-[#B83A4A]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={t('phonePlaceholder')}
                        className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2 w-full">
                    <label className="text-[17px] md:text-[19px] font-medium leading-[140%] text-[#781E36]">
                      {t('email')} <span className="text-[#B83A4A]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[17px] md:text-[19px] font-medium leading-[140%] text-[#781E36]">
                        {t('country')} <span className="text-[#B83A4A]">*</span>
                      </label>
                      <div className="relative w-full">
                        <select
                          className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] appearance-none outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                        >
                          <option value="">{t('selectCountry')}</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B5B57] pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[17px] md:text-[19px] font-medium leading-[140%] text-[#781E36]">
                        {t('preferredLanguage')} <span className="text-[#B83A4A]">*</span>
                      </label>
                      <div className="relative w-full">
                        <select
                          className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] appearance-none outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                        >
                          <option value="">{t('selectLanguage')}</option>
                          {languages.map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B5B57] pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.35} direction="right">
            <motion.div
              className="w-full max-w-[420px] h-auto rounded-[10px] border border-[#E8CFC1] bg-white p-[18px]"
              whileHover={{ boxShadow: '0 8px 30px rgba(120,30,54,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col gap-[16px] max-w-[384px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <motion.div variants={itemVariants}>
                  <span className="text-[#781E36] text-xl md:text-2xl font-bold leading-[30px] tracking-[0.1px]">
                    {t('bookingSummary')}
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-auto min-h-[30px]">
                  <span className="text-lg md:text-2xl font-normal leading-[30px] tracking-[0.1px] text-[#6B5B57]">
                    {t('sessionFee')}
                  </span>
                  <span className="text-lg md:text-2xl font-medium leading-[30px] tracking-[0.1px] text-[#781E36]">
                    100 AED
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-auto min-h-[30px]">
                  <span className="text-lg md:text-2xl font-normal leading-[30px] tracking-[0.1px] text-[#6B5B57]">
                    {t('processingFee')}
                  </span>
                  <span className="text-lg md:text-2xl font-medium leading-[30px] tracking-[0.1px] text-[#781E36]">
                    15 AED
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-auto min-h-[30px]">
                  <span className="text-lg md:text-2xl font-normal leading-[30px] tracking-[0.1px] text-[#6B5B57]">
                    {t('discount')}
                  </span>
                  <span className="text-lg md:text-2xl font-medium leading-[30px] tracking-[0.1px] text-[#B83A4A]">
                    -20 AED
                  </span>
                </motion.div>

                <motion.hr variants={itemVariants} className="border-t border-[#E8CFC1] w-full" />

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-auto min-h-[30px]">
                  <span className="font-bold text-lg md:text-2xl font-bold leading-[30px] tracking-[0.1px] text-[#781E36]">
                    {t('total')}
                  </span>
                  <span className="font-bold text-lg md:text-2xl font-bold leading-[30px] tracking-[0.1px] text-[#781E36]">
                    95 AED
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-[18px] w-full max-w-[384px] mt-2">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg md:text-2xl font-bold leading-[30px] tracking-[0.1px] text-[#781E36]">
                      {t('paymentMethod')}
                    </span>
                  </div>

                  <motion.div
                    className="flex items-center gap-[8px] w-full h-[56px] rounded-[24px] border border-[#E8CFC1] bg-white px-4 cursor-pointer"
                    whileHover={{ scale: 1.02, borderColor: '#781E36' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-[36px] w-[37px] shrink-0 items-center justify-center rounded-[30px] border-[3px] border-[#781E36]">
                      <div className="h-[20px] w-[20px] rounded-full bg-[#781E36]" />
                    </div>
                    <span className="flex-1 text-base font-normal text-[#6B5B57]">
                      {t('creditDebit')}
                    </span>
                    <CreditCard className="h-6 w-6 text-[#6B5B57]" />
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-[8px] w-full h-[56px] rounded-[24px] border border-[#E8CFC1] bg-white px-4 cursor-pointer"
                    whileHover={{ scale: 1.02, borderColor: '#781E36' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-[36px] w-[37px] shrink-0 items-center justify-center rounded-[30px] border-[3px] border-[#E8CFC1]">
                      <div className="h-[20px] w-[20px] rounded-full bg-transparent" />
                    </div>
                    <span className="flex-1 text-base font-normal text-[#6B5B57]">
                      {t('applePay')}
                    </span>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#6B5B57">
                      <path d="M18.71 19.58c-.83.86-1.73.73-2.6.32-1.24-.53-2.34-.55-3.63 0-1.62.7-2.48.5-3.44-.32C4.75 14.46 5.47 6.05 10.9 5.72c1.52.08 2.57.84 3.46.9 1.33-.27 2.6-1.06 4.02-.96 1.7.14 2.98.82 3.83 2.03-3.52 2.12-2.69 6.76.54 8.06-.65 1.7-1.48 3.38-2.86 4.63l-.18.2zM13.44 5.86c-.17-2.52 1.86-4.6 4.2-4.8.33 2.92-2.63 5.09-4.2 4.8z"/>
                    </svg>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-[10px] w-full max-w-[384px] min-h-[66px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                  whileHover={{ borderColor: '#781E36' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-[#6B5B57] mt-0.5 cursor-pointer">
                    <div className="h-3 w-3 rounded-[2px] bg-transparent" />
                  </div>
                  <p className="text-[#6B5B57] text-xs leading-[18px]">
                    {t('agreeText')}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-[10px] w-full mt-2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/consultation/confirmation"
                      className="block w-full h-[60px] flex items-center justify-center rounded-[10px] bg-[#781E36] px-[10px] text-base font-bold text-white hover:bg-[#B83A4A] transition-colors"
                    >
                      {t('confirmBooking')}
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      type="button"
                      className="w-full h-[60px] rounded-[10px] border-2 border-[#781E36] bg-transparent px-[10px] text-base font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors"
                      onClick={() => window.history.back()}
                    >
                      {t('backToSession')}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
