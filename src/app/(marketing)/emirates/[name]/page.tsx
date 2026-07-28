'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
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

const emiratesData: Record<string, { title: string; subtitle: string; image: string }> = {
  'abu-dhabi': {
    title: 'Abu Dhabi — Marriage Support & Family Programs',
    subtitle: 'Abu Dhabi, capital of the UAE, offering extensive family development programs, financial support initiatives, and expert counseling services for couples and families.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop',
  },
  'dubai': {
    title: 'Dubai — Modern Family & Counseling Hub',
    subtitle: 'Dubai, modern hub with a diverse community, developed authorities, and private counseling centers supporting family well-being and marriage initiatives.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1280&auto=format&fit=crop',
  },
  'sharjah': {
    title: 'Sharjah — Heritage & Family Well-being',
    subtitle: 'Sharjah, cultural capital known for its rich heritage and family-focused community initiatives promoting social cohesion and marriage preparation.',
    image: '/Static/Home/Hero/Emirati couple looking at UAE skyline.png',
  },
  'ajman': {
    title: 'Ajman — Growing Community Support',
    subtitle: 'Ajman, growing emirate with accessible marriage support programs, counseling services, and community development initiatives for all residents.',
    image: '/Static/Home/Hero/Emirati couple looking at UAE skyline.png',
  },
  'ras-al-khaimah': {
    title: 'Ras Al Khaimah — Northern Family Programs',
    subtitle: 'Ras Al Khaimah, northern emirate with strong community development programs, family guidance services, and local marriage support initiatives.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1280&auto=format&fit=crop',
  },
  'fujairah': {
    title: 'Fujairah — Coastal Family Services',
    subtitle: 'Fujairah, eastern emirate offering family support services and community resources in a unique coastal setting with personalized guidance.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280&auto=format&fit=crop',
  },
  'umm-al-quwain': {
    title: 'Umm Al Quwain — Personalized Family Guidance',
    subtitle: 'Umm Al Quwain, peaceful emirate with personalized family guidance services and emerging support initiatives for couples and families.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1280&auto=format&fit=crop',
  },
};

export default function EmirateDetailPage() {
  const params = useParams();
  const name = params.name as string;
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

  const emirate = emiratesData[name] || emiratesData['abu-dhabi'];

  const displayName = name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Emirates', href: '/emirates' },
            { label: displayName },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full bg-white mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col gap-8 max-w-[672px] w-full">
                <h1 className="font-bold text-[#781E36] max-w-[640px]" style={{ fontFamily: 'Poppins', fontSize: '48px', lineHeight: '75px', letterSpacing: '0px' }}>
                  {emirate.title}
                </h1>
                <p className="font-normal text-[#6B5B57] max-w-[640px]" style={{ fontFamily: 'Poppins', fontSize: '22px', lineHeight: '32px', letterSpacing: '0px' }}>
                  {emirate.subtitle}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Link href="/initiatives" className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors">
                    Browse Initiatives
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden">
                  <Image src={emirate.image} alt={displayName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" priority />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-8 w-full bg-white rounded-[24px] border border-[#E8CFC1] p-8"
            style={{ boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A' }}
          >
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
                Available Initiatives
              </span>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
                Browse trusted marriage support initiatives offered by government agencies, private organizations and community partners in the selected area. Explore eligibility, benefits and official resources to find the support that best fits your needs.
              </p>
            </div>

            <motion.div
              className="flex justify-between gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                {
                  image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop',
                  title: `${displayName} Marriage Fund`,
                  description: 'A government-supported initiative providing financial assistance, educational programs, and counseling services for eligible UAE couples.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
                  title: 'Family Guidance Program',
                  description: 'Comprehensive pre-marital and post-marital counseling services designed to strengthen family bonds and promote healthy relationships.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
                  title: 'Community Support Initiative',
                  description: 'Local community-driven programs offering workshops, mediation services, and financial planning resources for soon-to-be-married couples.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex flex-col w-[400px] rounded-[24px] border border-[#E8CFC1] bg-white"
                  style={{ boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A' }}
                >
                  <div className="relative w-full h-[224px] rounded-t-[24px] overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover" sizes="400px" />
                  </div>
                  <div className="flex flex-col p-5 gap-[28px]">
                    <div className="flex flex-col gap-[14px]">
                      <span style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 700, lineHeight: '24px', color: '#781E36' }}>
                        {card.title}
                      </span>
                      <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#6B5B57' }}>
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[16px] rounded-[16px] border border-[#E8CFC1] bg-[#FAEDE6] p-5">
                      <div className="flex flex-col gap-[14px]">
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#781E36" /></svg>
                          <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: '#781E36' }}>Eligibility</span>
                        </div>
                        <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#6B5B57' }}>
                          Review the basic eligibility requirements to determine whether you qualify for this marriage support initiative before applying.
                        </p>
                      </div>
                      <div className="flex flex-col gap-[14px]">
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#781E36" /></svg>
                          <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: '#781E36' }}>Key Benefits</span>
                        </div>
                        <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#6B5B57' }}>
                          Access financial support, expert counseling sessions, educational workshops, and community resources tailored for your needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" className="flex-1 h-[48px] rounded-[12px] bg-[#781E36] text-white text-sm font-bold hover:bg-[#B83A4A] transition-colors">View Details</button>
                      <button type="button" className="flex-1 h-[48px] rounded-[12px] border border-[#E8CFC1] text-[#781E36] text-sm font-bold bg-white hover:border-[#781E36] transition-colors">Official Website</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-8 w-full bg-white pt-[48px] pb-[48px] px-8">
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
                Featured Organizations
              </span>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
                Select an organization to explore their initiatives, programs and resources.
              </p>
            </div>
            <motion.div
              className="flex justify-between gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                { icon: '💒', label: 'Marriage Foundation', subtitle: 'Zayed House for Islamic Culture' },
                { icon: '🏗️', label: 'Community Development', subtitle: 'Ministry of Community Development' },
                { icon: '👪', label: 'Family Development', subtitle: 'Family Development Foundation' },
                { icon: '🌟', label: 'Foundation', subtitle: 'Emirates Foundation' },
              ].map((org, i) => {
                const isSelected = selectedOrg === org.label;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`flex flex-col items-center justify-center gap-3 rounded-[24px] bg-white cursor-pointer transition-all px-6 py-8 ${isSelected ? 'border-2 border-[#781E36]' : 'border border-[#E8CFC1]'}`}
                    style={{ boxShadow: isSelected ? '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' : 'none', width: '292px', minHeight: '200px' }}
                    onClick={() => setSelectedOrg(isSelected ? null : org.label)}
                  >
                    <div className={`flex items-center justify-center h-[56px] w-[56px] rounded-[16px] transition-colors ${isSelected ? 'bg-[#781E36]' : 'bg-[#FAEDE6]'}`}>
                      <span className="text-2xl">{org.icon}</span>
                    </div>
                    <span className="text-center" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 800, lineHeight: '19.25px', color: '#781E36' }}>{org.label}</span>
                    <span className="text-center text-xs" style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#6B5B57' }}>{org.subtitle}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <div className="w-full pb-[80px]">
          <div className="mx-auto max-w-[1280px] px-6">
            <div
              className="relative flex h-auto min-h-[464px] flex-col items-center justify-center overflow-hidden rounded-[40px] px-6 py-[80px] text-center text-white md:px-[80px]"
              style={{ background: 'linear-gradient(90deg, #781E36 0%, #B83A4A 100%)', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none animate-pulse" />
              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center max-w-[848px]">
                <h2 className="max-w-[848px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight pb-[24px]">
                  Explore More Resources
                </h2>
                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">
                  Discover Consultation Sessions, Marriage Initiatives, Educational Videos, and Family Support Programs across the UAE.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/initiatives" className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full bg-white px-[32px] py-[18px] font-extrabold text-lg text-[#781E36] hover:bg-[#FAEDE6] transition-colors">
                    Explore Initiative
                  </Link>
                  <Link href="/consultation" className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-[32px] py-[18px] font-extrabold text-lg text-white hover:bg-white hover:text-[#781E36] transition-colors">
                    Consultation Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}