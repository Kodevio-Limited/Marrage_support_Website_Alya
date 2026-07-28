'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

export default function EmiratesPage() {
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Emirates' },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full bg-white mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex flex-col gap-8 max-w-[672px] w-full">
                <h1 className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '48px', lineHeight: '67px', letterSpacing: '0px' }}>
                  Discover marriage support services across the UAE Emirates
                </h1>
                <p className="font-normal text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '34px', letterSpacing: '0px' }}>
                  Rouse Marriage Initiative, Consulting Services, Financial Support Programs, Counseling Services, and Community Resources — all available in each emirate. Whether you are preparing for marriage, seeking family guidance, or looking for financial assistance, find the support you need close to home.
                </p>
              </div>

              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop"
                    alt="Emirates"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="flex flex-col gap-8 w-full bg-white border-t border-b border-[#E8CFC1] py-12 px-8">
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
                Explore Emirates
              </span>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
                Export email and description will be updated daily from the verified UAE community platform.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                { name: 'Abu Dhabi', description: 'Abu Dhabi, the capital of the UAE, is home to a wide range of extensive family development programs, generous financial support initiatives, professional pre-marital counseling services, and well-established community resources designed to support couples and families at every stage of their journey across the emirate.', count: 45, slug: 'abu-dhabi', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop' },
                { name: 'Dubai', description: 'Dubai, a modern global hub with a wonderfully diverse community, features developed authorities, a wide network of private counseling centers, and comprehensive marriage support services readily available through both government entities and private organizations dedicated to family well-being.', count: 36, slug: 'dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop' },
                { name: 'Sharjah', description: 'Sharjah, the cultural capital renowned for its rich heritage and traditions, offers a variety of family-focused community initiatives, valuable educational programs, and meaningful social cohesion projects that work to strengthen marriage bonds and promote stable family life.', count: 25, slug: 'sharjah', image: '/Static/Home/Hero/Emirati couple looking at UAE skyline.png' },
                { name: 'Ajman', description: 'Ajman, a fast-growing emirate with a close-knit community, provides accessible marriage support programs, active community development initiatives, professional counseling services, and helpful financial assistance options for residents who are seeking guidance and support for their families.', count: 18, slug: 'ajman', image: '/Static/Home/Hero/Emirati couple looking at UAE skyline.png' },
                { name: 'Ras Al Khaimah', description: 'Ras Al Khaimah, a beautiful northern emirate surrounded by nature, offers strong community development programs, dedicated family guidance services, reliable local marriage support initiatives, and a variety of resources designed to assist couples at every stage of their relationship journey.', count: 22, slug: 'ras-al-khaimah', image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop' },
                { name: 'Fujairah', description: 'Fujairah, a scenic eastern emirate along the coast, provides a range of family support services, valuable community resources, personalized counseling programs, and thoughtfully designed coastal initiatives that promote healthy and lasting family relationships for all residents.', count: 15, slug: 'fujairah', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop' },
                { name: 'Umm Al Quwain', description: 'Umm Al Quwain, a peaceful and tranquil emirate, offers personalized family guidance services, newly emerging marriage support programs, growing community outreach initiatives, and carefully tailored resources designed to meet the unique needs of local families and couples.', count: 10, slug: 'umm-al-quwain', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col w-full max-w-[400px] min-h-[370px] rounded-[24px] border border-[#E8CFC1] bg-white overflow-hidden">
                  <div className="relative w-full h-[160px] shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="400px" unoptimized />
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 700, lineHeight: '18px', color: '#781E36' }}>
                      {item.name}
                    </span>
                    <p style={{ fontFamily: 'Arial', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: '#6B5B57' }}>
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#E8CFC1]">
                      <span className="rounded-full bg-[#781E36] px-3 py-0.5 text-xs font-bold text-white">
                        {item.count} initiatives
                      </span>
                      <Link href={`/emirates/${item.slug}`} className="text-xs font-bold text-[#781E36] hover:text-[#B83A4A] transition-colors" style={{ fontFamily: 'Poppins' }}>
                        Read more →
                      </Link>
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
                    style={{
                      boxShadow: isSelected ? '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' : 'none',
                      width: '292px',
                      minHeight: '200px',
                    }}
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
              style={{
                background: 'linear-gradient(90deg, #781E36 0%, #B83A4A 100%)',
                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
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