'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Share2, Link2 } from 'lucide-react';
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

const videoDetails = [
  { label: 'Category', value: 'Education' },
  { label: 'Organization', value: 'Abu Dhabi Family Center' },
  { label: 'Family', value: 'Emirates Foundation' },
  { label: 'Language', value: 'Arabic & English' },
  { label: 'Published', value: 'October 24, 2023' },
  { label: 'Duration', value: '12:35 min' },
  { label: 'Views', value: '2.4k' },
  { label: 'Speaker', value: 'Dr. Sarah Al Mansoori' },
];

const keyTopics = [
  'Marriage Preparation',
  'Effective Communication',
  'Financial Planning',
  'Family Responsibilities',
  'Conflict Resolution',
  'Healthy Relationships',
];

export default function VideoDetailsPage() {
  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Shorts', href: '/shorts' },
            { label: 'Video Details' },
          ]} />
        </div>
      </Reveal>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
        <div className="flex flex-col gap-[50px] w-full">
          <Reveal delay={0.1} direction="up">
            <div className="relative w-full h-[684px] rounded-[20px] overflow-hidden flex items-center justify-center cursor-pointer group"
              style={{ backgroundColor: '#101828', boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A' }}>
              <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-white/90 shadow-lg group-hover:bg-white transition-colors">
                <Play className="h-8 w-8 text-[#781E36] ml-1" fill="#781E36" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="up">
            <div className="flex flex-col gap-4 w-full">
              <h1 style={{ fontFamily: 'Poppins', fontSize: '40px', fontWeight: 700, lineHeight: '37.5px', color: '#781E36' }}>
                Marriage Preparation: Building a Strong Foundation
              </h1>
              <p style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, lineHeight: '29.25px', color: '#6B5B57' }}>
                Learn practical tips and expert guidance to prepare for a successful and healthy marriage.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="w-full rounded-[20px] border border-[#E8CFC180] bg-white p-6">
              <motion.div
                className="flex flex-col gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#781E36' }}>
                  Video Details
                </motion.span>
                <motion.div className="grid grid-cols-4 gap-y-6 gap-x-4" variants={containerVariants}>
                  {videoDetails.map((detail, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex flex-col gap-1 w-full max-w-[289.5px]">
                      <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#6B5B57' }}>{detail.label}</span>
                      <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: '#781E36' }}>{detail.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.25} direction="up">
            <div className="w-full rounded-[20px] border border-[#E8CFC180] bg-white p-8">
              <motion.div
                className="flex flex-col gap-4 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-30px' }}
              >
                <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#781E36' }}>
                  About This Video
                </motion.span>
                <motion.p variants={itemVariants} className="max-w-[1214px]" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '26px', color: '#6B5B57' }}>
                  Learn what this video covers and how it helps couples and families build stronger relationships. This comprehensive session dives deep into the foundational elements required for a lasting union, addressing common challenges and providing actionable advice backed by psychological research and cultural values.
                </motion.p>
                <motion.span variants={itemVariants} className="mt-4" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#781E36' }}>
                  Key Topics Covered
                </motion.span>
                <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
                  {keyTopics.map((topic, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex items-center rounded-full border border-[#E8CFC180] bg-[#FAEDE6] px-4 py-2">
                      <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#781E36' }}>{topic}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <div className="flex gap-[30px] w-full">
              <div className="flex flex-col w-full max-w-[624px] min-h-[352px] rounded-[20px] border border-[#E8CFC180] bg-white p-8 gap-2">
                <motion.div
                  className="flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#781E36' }}>
                    Resources &amp; References
                  </motion.span>
                  <motion.p variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: '#6B5B57' }}>
                    Explore additional official resources and helpful links to this topic.
                  </motion.p>
                  <motion.div className="flex flex-col gap-3 mt-2" variants={containerVariants}>
                    {[
                      { icon: ExternalLink, label: 'Official Website', href: '#' },
                      { icon: ExternalLink, label: 'Government Resources', href: '#' },
                      { icon: ExternalLink, label: 'Educational Resources', href: '#' },
                    ].map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <motion.div key={i} variants={itemVariants}>
                          <Link href={link.href} className="flex items-center justify-between w-full h-[58px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 hover:border-[#781E36] transition-colors">
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5 text-[#781E36]" />
                              <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#6B5B57' }}>{link.label}</span>
                            </div>
                            <Share2 className="h-4 w-4 text-[#989898]" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </div>

              <div className="flex flex-col w-full max-w-[624px] min-h-[352px] rounded-[20px] bg-white p-8 gap-4"
                style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
                <motion.div
                  className="flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  <motion.span variants={itemVariants} style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '28px', color: '#781E36' }}>
                    Share This Video
                  </motion.span>
                  <motion.div className="flex gap-4 mt-2" variants={containerVariants}>
                    {[
                      { icon: 'facebook', label: 'Facebook' },
                      { icon: 'twitter', label: 'Twitter' },
                      { icon: 'link', label: 'Copy Link' },
                    ].map((item, i) => {
                      const iconEl = item.icon === 'facebook' ? (
                        <svg className="h-5 w-5 text-[#781E36]" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      ) : item.icon === 'twitter' ? (
                        <svg className="h-5 w-5 text-[#781E36]" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                      ) : (
                        <Link2 className="h-5 w-5 text-[#781E36]" />
                      );
                      return (
                        <motion.div key={i} variants={itemVariants} className="flex flex-col items-center gap-2 w-[58.11px] cursor-pointer group">
                          <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-[#FAEDE6] border border-[#E8CFC1] group-hover:border-[#781E36] transition-colors">
                            {iconEl}
                          </div>
                          <span className="text-center" style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, lineHeight: '16px', color: '#6B5B57' }}>{item.label}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35} direction="up">
            <div className="flex flex-col gap-6 w-full">
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>Related Shorts</span>
              <motion.div
                className="flex gap-6 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-50px' }}
              >
                {[
                  { thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop', duration: '01:45', category: 'Communication', subtitle: 'Active Listening in Marriage', views: '1.2k', time: '3 days ago' },
                  { thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop', duration: '02:30', category: 'Conflict Resolution', subtitle: 'Healthy Ways to Argue', views: '2.8k', time: '1 week ago' },
                  { thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop', duration: '01:15', category: 'Emotional Bond', subtitle: 'Building Trust Daily', views: '856', time: '5 days ago' },
                  { thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop', duration: '03:00', category: 'Family Values', subtitle: 'Raising Children Together', views: '3.4k', time: '2 days ago' },
                ].map((card, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Link href="/shorts/video-details" className="flex flex-col w-[284px] rounded-[20px] border border-[#E8CFC1] bg-white overflow-hidden hover:shadow-lg transition-shadow"
                      style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
                      <div className="relative w-full h-[501.33px] bg-[#E8CFC1] overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.thumbnail})` }} />
                        <div className="absolute top-3 right-3 rounded bg-black/60 px-1.5 py-0.5">
                          <span style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: 500, lineHeight: '15px', color: '#FFFFFF' }}>{card.duration}</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M15.5 8.5L0.5 0.5V17.5L15.5 8.5Z" fill="#781E36" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-4 gap-3 flex-1">
                        <span className="text-[#989898] uppercase tracking-wider" style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 600, lineHeight: '16px' }}>{card.category}</span>
                        <span className="text-[#781E36]" style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: 700, lineHeight: '20px' }}>{card.subtitle}</span>
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#989898"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <span style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#989898' }}>{card.views}</span>
                          </div>
                          <span style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#989898' }}>{card.time}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.4} direction="up">
            <div className="flex justify-center w-full pt-4">
              <Link href="/shorts" className="flex items-center justify-center h-[60px] w-[300px] rounded-[12px] bg-[#781E36] px-6 text-base font-bold text-white hover:bg-[#B83A4A] transition-colors">
                Browse All Shorts
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}