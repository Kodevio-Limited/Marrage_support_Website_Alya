'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, User, ArrowRight, Check, MapPin, FileText, Phone, Mail, ChevronDown } from 'lucide-react';
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

const sessionImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
];

export default function ConsultationDetailsPage() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Consultation Sessions', href: '/consultation' },
            { label: 'Session Details' },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16 pt-3">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-5 w-full lg:max-w-[860px]">
              <div className="relative w-full max-w-[838px] h-[400px] md:h-[500px] lg:h-[618px] rounded-[20px] overflow-hidden bg-gray-200">
                <Image
                  src={sessionImages[activeImage]}
                  alt="Consultation Session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 838px"
                  priority
                />
              </div>

              <div className="flex gap-4 w-full max-w-[838px]">
                {sessionImages.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative w-[calc(25%-12px)] h-[80px] md:h-[110px] lg:h-[125px] rounded-[10px] overflow-hidden border-2 transition-all ${
                      activeImage === i
                        ? 'border-[#781E36]'
                        : 'border-transparent hover:border-[#E8CFC1]'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[31px] w-full lg:max-w-[420px]">
              <motion.div
                className="w-full max-w-[420px] min-h-[465px] rounded-[10px] border border-[#E8CFC1] bg-white p-[18px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <div className="flex flex-col gap-5 max-w-[384px]">
                  <motion.div variants={itemVariants} className="flex items-center gap-[15px] max-w-[384px] h-[40px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FAEDE6] border border-[#E8CFC1]">
                      <Calendar className="h-5 w-5 text-[#781E36]" />
                    </div>
                    <span className="font-normal text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px', letterSpacing: '0.1px' }}>
                      October 15, 2026
                    </span>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-[15px] max-w-[384px] h-[40px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FAEDE6] border border-[#E8CFC1]">
                      <Clock className="h-5 w-5 text-[#781E36]" />
                    </div>
                    <span className="font-normal text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px', letterSpacing: '0.1px' }}>
                      6:00 PM - 8:00 PM GST
                    </span>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-[15px] max-w-[384px] h-[40px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FAEDE6] border border-[#E8CFC1]">
                      <Globe className="h-5 w-5 text-[#781E36]" />
                    </div>
                    <span className="font-normal text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px', letterSpacing: '0.1px' }}>
                      Online via Zoom
                    </span>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-8 max-w-[384px] mt-2">
                    <div className="flex flex-col gap-[6px] w-[142px]">
                      <span className="font-medium text-[#B83A4A]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px', letterSpacing: '0.1px' }}>
                        Session Fee
                      </span>
                      <span className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px' }}>
                        AED 350
                      </span>
                    </div>
                    <div className="flex flex-col gap-[6px] w-[142px]">
                      <span className="font-medium text-[#B83A4A]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px', letterSpacing: '0.1px' }}>
                        Seats Left
                      </span>
                      <span className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '30px' }}>
                        08 / 15
                      </span>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link
                      href="/consultation/book"
                      className="flex items-center justify-center gap-2 w-full max-w-[384px] h-[60px] rounded-[10px] bg-[#781E36] px-[10px] text-base font-bold text-white hover:bg-[#B83A4A] transition-colors mt-2"
                    >
                      Book Now
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="w-full max-w-[420px] min-h-[302px] rounded-[10px] border border-[#E8CFC1] bg-white p-[24px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <div className="flex flex-col gap-5 max-w-[373px]">
                  <motion.div variants={itemVariants} className="flex items-center gap-[25px] max-w-[373px]">
                    <div className="relative h-[74px] w-[74px] shrink-0 rounded-full overflow-hidden border-2 border-[#E8CFC1]">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                        alt="Counselor"
                        fill
                        className="object-cover"
                        sizes="74px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-[#781E36]">Sarah Jangis</span>
                      <span className="text-sm font-medium text-[#6B5B57]">Senior Family Counselor</span>
                    </div>
                  </motion.div>

                  <motion.p variants={itemVariants} className="max-w-[373px] text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '16px', lineHeight: '100%', letterSpacing: '1%' }}>
                    Learn more about the expert leading this consultation session. This section introduces the speaker&apos;s professional background, qualifications, organization, and experience in marriage counseling and family support.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="h-[166px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]">
            <motion.div
              className="flex items-center gap-[10px] h-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-30px' }}
            >
              {[
                { label: 'Category', value: 'Pre - Marriage' },
                { label: 'Format', value: 'Online / Zoom' },
                { label: 'Duration', value: '1 Session' },
                { label: 'Language', value: 'Arabic' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center w-[280px] h-[82px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px] gap-[10px]"
                >
                  <span className="text-center" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '28.13px', color: '#E8CFC1' }}>
                    {item.label}
                  </span>
                  <span className="text-center" style={{ fontFamily: 'Poppins', fontSize: '14.77px', fontWeight: 600, lineHeight: '28.13px', color: '#781E36' }}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="h-[300px] rounded-[12px] bg-white p-[10px]">
            <div className="flex flex-col gap-[10px] w-full max-w-[1237px]">
              <div className="flex items-center pb-[10px] border-b border-[#E8CFC1]">
                <span style={{ fontFamily: 'Roboto', fontSize: '32px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.1px', color: '#781E36' }}>
                  About The Session
                </span>
              </div>
              <p className="text-[#6B5B57] mt-4" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}>
                Learn what this consultation session covers and how it can help couples prepare for a healthy and successful marriage. This intensive program is designed by leading family counselors to provide actionable insights and practical tools for navigating the complexities of married life with confidence and empathy.
                <br /><br />
                Whether you are newly engaged or recently married, this session offers a safe space to explore expectations, understand individual differences, and build a unified vision for your family life in accordance with cultural and professional standards.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="rounded-[12px] bg-white p-[10px]">
            <div className="pb-[10px] border-b border-[#E8CFC1]">
              <span style={{ fontFamily: 'Roboto', fontSize: '32px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.1px', color: '#781E36' }}>
                Session Objectives
              </span>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-[10px] mt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                'Strengthen communication skills between partners',
                'Build healthy family values',
                'Provide professional guidance and improve relationship understanding',
                'Prepare couples for participating in marriage life',
                'Marriage fund',
                'Build mutual trust and respect',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-[10px] w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                >
                  <Check className="h-5 w-5 shrink-0 text-[#781E36]" />
                  <span style={{ fontFamily: 'Poppins', fontSize: '14.77px', fontWeight: 600, lineHeight: '28.13px', color: '#781E36' }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="rounded-[12px] bg-white p-[10px]">
            <div className="pb-[10px] border-b border-[#E8CFC1]">
              <span style={{ fontFamily: 'Roboto', fontSize: '32px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.1px', color: '#781E36' }}>
                What You Will Learn
              </span>
            </div>
            <motion.div
              className="grid grid-cols-3 gap-[10px] mt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                'Effective communication',
                'Conflict resolution',
                'Financial planning',
                'Marriage reputation',
                'Emotional well-being',
                'Family responsibilities',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-[10px] w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                >
                  <Check className="h-5 w-5 shrink-0 text-[#781E36]" />
                  <span style={{ fontFamily: 'Poppins', fontSize: '14.77px', fontWeight: 600, lineHeight: '28.13px', color: '#781E36' }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.4} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="rounded-[12px] bg-white p-[10px]">
            <div className="pb-[10px] border-b border-[#E8CFC1]">
              <span style={{ fontFamily: 'Roboto', fontSize: '32px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.1px', color: '#781E36' }}>
                Who Should Attend
              </span>
            </div>
            <motion.div
              className="grid grid-cols-3 gap-[10px] mt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                'Effective communication',
                'Conflict resolution',
                'Financial planning',
                'Marriage reputation',
                'Emotional well-being',
                'Family responsibilities',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-[10px] w-full h-[55px] rounded-[12px] bg-[#781E36] p-[10px]"
                >
                  <Check className="h-5 w-5 shrink-0 text-white" />
                  <span style={{ fontFamily: 'Poppins', fontSize: '14.77px', fontWeight: 600, lineHeight: '28.13px', color: '#ffffff' }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}