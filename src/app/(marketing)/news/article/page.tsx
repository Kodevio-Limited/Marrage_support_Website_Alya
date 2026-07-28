'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Link2 } from 'lucide-react';
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

export default function ArticlePage() {
  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'News', href: '/news' },
            { label: 'Article' },
          ]} />
        </div>
      </Reveal>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
        <div className="flex gap-[30px]">
          <Reveal delay={0.1} direction="up" className="w-full max-w-[853px]">
            <div className="flex flex-col w-full max-w-[853px] rounded-[20px] bg-white p-8 gap-6"
              style={{ boxShadow: '0px 4px 20px 0px #781E360A' }}>
              <motion.div
                className="relative w-full h-[400px] rounded-[16px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" alt="Article" fill className="object-cover" sizes="853px" priority />
              </motion.div>

              <motion.h1
                className="max-w-[714px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{ fontFamily: 'Poppins', fontSize: '28px', fontWeight: 700, lineHeight: '33.6px', color: '#781E36' }}
              >
                Pre-Marital Counseling Program Reaches 10,000 Participants
              </motion.h1>

              <motion.div
                className="flex flex-col gap-4 text-[#6B5B57]"
                style={{ fontFamily: 'Poppins', fontSize: '16px', lineHeight: '26px' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <motion.p variants={itemVariants}>
                  The UAE&apos;s mandatory pre-marital counseling program has achieved a significant milestone, reaching over 10,000 participants since its launch. The program, designed to equip soon-to-be-married couples with essential skills for a successful married life, has been widely praised for its impact on reducing early divorce rates.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Operating across all seven emirates, the initiative provides couples with expert-led sessions covering communication skills, financial planning, conflict resolution, and family values. Each session is tailored to address the unique cultural and social dynamics of Emirati society.
                </motion.p>
                <motion.p variants={itemVariants}>
                  The Ministry of Community Development has reported a steady increase in participation rates, with many couples voluntarily enrolling even when not mandated. The program&apos;s success has led to discussions about expanding it to include post-marital counseling and advanced family support modules.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Couples who have completed the program report higher satisfaction levels and better preparedness for the challenges of married life. The initiative continues to evolve, incorporating feedback from participants and experts to ensure it remains relevant and effective.
                </motion.p>
              </motion.div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 w-full max-w-[400px]">
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
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: '#781E36' }}>
                    Article Information
                  </motion.span>
                  {[
                    { label: 'Organization', value: 'MOCD' },
                    { label: 'City', value: 'Abu Dhabi' },
                    { label: 'Emirates', value: 'Abu Dhabi' },
                    { label: 'Author', value: 'Editorial Team' },
                    { label: 'Published', value: '24 October 2023' },
                  ].map((row, i) => (
                    <motion.div key={i} variants={itemVariants}
                      className="flex items-center justify-between w-full py-2 border-b border-[#E8CFC1] last:border-b-0">
                      <span style={{ fontFamily: 'Arial', fontSize: '13px', fontWeight: 400, lineHeight: '19.5px', color: '#6B5B57' }}>{row.label}</span>
                      <span style={{ fontFamily: 'Arial', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', color: '#781E36' }}>{row.value}</span>
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
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: '#781E36' }}>
                    Related Resources
                  </motion.span>
                  {[
                    { label: 'Official Website' },
                    { label: 'Government Resources' },
                    { label: 'Related Initiatives' },
                  ].map((res, i) => (
                    <motion.div key={i} variants={itemVariants}
                      className="flex items-center justify-between w-full py-2 border-b border-[#E8CFC1] last:border-b-0">
                      <span style={{ fontFamily: 'Arial', fontSize: '13px', fontWeight: 400, lineHeight: '19.5px', color: '#6B5B57' }}>{res.label}</span>
                      <ExternalLink className="h-[18px] w-[18px] text-[#6B5B57] opacity-60 cursor-pointer hover:text-[#781E36]" />
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
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: '#781E36' }}>
                    Share This Article
                  </motion.span>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <Link2 className="h-[14px] w-[14px] text-[#781E36]" />
                      <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#781E36' }}>Copy Link</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" /></svg>
                      <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#781E36' }}>Facebook</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M4 4l6.5 8.5L4 20h1.5l5.5-7 4.5 7H20l-7-9.5L19.5 4H18l-5 6.5L8.5 4H4zM6.5 5.5h1.5l9 13h-1.5l-9-13z" /></svg>
                      <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#781E36' }}>X</span>
                    </motion.button>
                    <motion.button variants={itemVariants} type="button"
                      className="flex items-center gap-[6px] h-[30px] rounded-[8px] bg-[#FAEDE6] border border-[#E8CFC1] px-3 py-[6px] hover:border-[#781E36] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#781E36"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                      <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#781E36' }}>LinkedIn</span>
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
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: '#781E36' }}>
                    Related Stories
                  </motion.span>
                  {[
                    { image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=200&auto=format&fit=crop', title: 'New Family Court Opens in Sharjah' },
                    { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop', title: 'Abu Dhabi Launches Free Hotline' },
                    { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop', title: 'UAE Expands Parental Leave Benefits' },
                  ].map((story, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <Link href="/news/article" className="flex items-center gap-[12px] w-full min-h-[60px]">
                        <div className="relative w-[80px] h-[60px] shrink-0 rounded-[12px] overflow-hidden">
                          <Image src={story.image} alt={story.title} fill className="object-cover" sizes="80px" />
                        </div>
                        <span className="text-sm font-medium leading-[18px]" style={{ fontFamily: 'Poppins', color: '#781E36' }}>{story.title}</span>
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