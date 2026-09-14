'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import Container from '../shared/Container';
import Reveal from '../shared/Reveal';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import {
  getFooterContent,
  type FooterContent,
  type FooterLink,
} from '@/lib/api/settings';

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 + i * 0.1 },
  }),
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + i * 0.05 },
  }),
};

interface DisplayLink {
  label: string;
  href: string;
}

/**
 * Default footer links mirror the current i18n-driven footer. Labels resolve
 * through the `footer` i18n namespace so they stay localized unless the admin
 * overrides them from the backend.
 */
const defaultQuickLinks: Array<{ labelKey: string; href: string }> = [
  { labelKey: 'home', href: '/' },
  { labelKey: 'about', href: '/about' },
  { labelKey: 'contact', href: '/contact' },
  { labelKey: 'nationalInitiatives', href: '/initiatives' },
  { labelKey: 'emiratesCenters', href: '/emirates' },
  { labelKey: 'privacyPolicy', href: '/privacy-policy' },
  { labelKey: 'termsConditions', href: '/terms-and-conditions' },
];

const defaultResourceLinks: Array<{ labelKey: string; href: string }> = [
  { labelKey: 'weddingGrants', href: '#' },
  { labelKey: 'familyLaw', href: '#' },
  { labelKey: 'housing', href: '#' },
  { labelKey: 'media', href: '/news' },
];

function pickLocalized(
  value: string | undefined,
  fallback: string,
): string {
  return value && value.trim().length > 0 ? value : fallback;
}

function normalizeLinks(
  links: FooterLink[] | undefined,
  fallbacks: Array<{ labelKey: string; href: string }>,
  translate: (key: string) => string,
): DisplayLink[] {
  if (!links || links.length === 0) {
    return fallbacks.map((l) => ({ label: translate(l.labelKey), href: l.href }));
  }
  return links
    .map((l) => ({
      label: (l?.label ?? '').trim(),
      href: (l?.href ?? '').trim(),
    }))
    .filter((l) => l.label.length > 0 && l.href.length > 0)
    .map((l) => ({ label: l.label, href: l.href || '#' }));
}

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [content, setContent] = useState<FooterContent | null>(null);

  useEffect(() => {
    let mounted = true;
    getFooterContent().then((data) => {
      if (mounted) setContent(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const quickLinks = useMemo(
    () =>
      normalizeLinks(
        content?.quickLinks?.map((l) =>
          isArabic && l.labelAr ? { ...l, label: l.labelAr } : l,
        ),
        defaultQuickLinks,
        t,
      ),
    [content, isArabic, t],
  );
  const resourceLinks = useMemo(
    () =>
      normalizeLinks(
        content?.resources?.map((l) =>
          isArabic && l.labelAr ? { ...l, label: l.labelAr } : l,
        ),
        defaultResourceLinks,
        t,
      ),
    [content, isArabic, t],
  );

  const pick = (en: string | undefined, ar: string | undefined, fallback: string) =>
    pickLocalized(isArabic ? ar || en : en, fallback);

  const brandText = pick(content?.brandText, content?.brandTextAr, t('brand'));
  const governmentInitiative = pick(
    content?.governmentInitiative,
    content?.governmentInitiativeAr,
    t('governmentInitiative'),
  );
  const phone = pickLocalized(content?.phone, '+971 800 2542');
  const email = pickLocalized(content?.email, 'support@alia.gov.ae');
  const address = pick(content?.address, content?.addressAr, 'Abu Dhabi, UAE');
  const copyright = pick(
    content?.copyright,
    content?.copyrightAr,
    `© ${new Date().getFullYear()} ${t('allRights')}`,
  );

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-t border-[#E8CFC1] bg-white pt-[80px] pb-[40px] text-gray-700"
    >
      <Container className="!max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Main Bio */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-30px' }}
            className="flex flex-col gap-4 lg:col-span-4 max-w-[416px] pb-[34px] min-h-[205px]"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/Static/alia-logo.png"
                alt="ALIA Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-[#6B5B57]">
              {brandText}
            </p>
            <motion.div
              className="text-xs font-extrabold text-[#781E36]"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {governmentInitiative}
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-30px' }}
            className="flex flex-col gap-[24px] lg:col-span-3 max-w-[272px] min-h-[236px]"
          >
            <h4 className="text-base font-extrabold text-[#781E36] tracking-wide">{t('quickLinks')}</h4>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm font-semibold">
              {quickLinks.map((item, i) => (
                <motion.li
                  key={`${item.label}-${i}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    {isInternalHref(item.href) ? (
                      <Link href={item.href} className="hover:text-[#781E36] transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-[#781E36] transition-colors"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-30px' }}
            className="flex flex-col gap-[24px] lg:col-span-3 max-w-[272px] pb-[40px] min-h-[236px]"
          >
            <h4 className="text-base font-extrabold text-[#781E36] tracking-wide">{t('resources')}</h4>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm font-semibold">
              {resourceLinks.map((item, i) => (
                <motion.li
                  key={`${item.label}-${i}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    {isInternalHref(item.href) ? (
                      <Link href={item.href} className="hover:text-[#781E36] transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-[#781E36] transition-colors"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contacts */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-30px' }}
            className="flex flex-col gap-[24px] lg:col-span-2 max-w-[272px] pb-[8px] min-h-[236px]"
          >
            <h4 className="text-base font-extrabold text-[#781E36] tracking-wide">{t('contacts')}</h4>
            <div className="flex flex-col gap-3 text-xs md:text-sm font-semibold">
              <motion.a
                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-2.5 hover:text-[#781E36] transition-colors"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 text-[#781E36] shrink-0" />
                <span>{phone}</span>
              </motion.a>
              <motion.a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 hover:text-[#781E36] transition-colors"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 text-[#781E36] shrink-0" />
                <span className="truncate">{email}</span>
              </motion.a>
              <motion.div
                className="flex items-start gap-2.5"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 text-[#781E36] shrink-0 mt-1" />
                <span>{address}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.3} direction="up">
          <motion.div
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#6B5B57]"
            whileHover={{ color: '#781E36' }}
            transition={{ duration: 0.3 }}
          >
            <p>{copyright}</p>
            <motion.div
              className="flex items-center gap-1.5 text-xs"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>{t('builtFor')}</span>
              <Heart className="h-3.5 w-3.5 fill-[#781E36] text-[#781E36]" />
            </motion.div>
          </motion.div>
        </Reveal>
      </Container>
    </motion.footer>
  );
}

function isInternalHref(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#');
}
