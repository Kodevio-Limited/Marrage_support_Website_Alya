'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
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

export default function NewsPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filters = [
    { name: 'latest', label: 'Latest', isDropdown: false, options: [] as string[] },
    { name: 'category', label: 'Category', isDropdown: true, options: ['Marriage', 'Family', 'Counseling', 'Community'] },
    { name: 'date', label: 'Date', isDropdown: true, options: ['This Week', 'This Month', 'This Year'] },
    { name: 'source', label: 'Source', isDropdown: true, options: ['Government', 'NGO', 'Private'] },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'News' },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full bg-white mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col gap-8 max-w-[672px] w-full">
                <h1 className="font-bold text-[#781E36] max-w-[480px]" style={{ fontFamily: 'Poppins', fontSize: '48px', lineHeight: '75px', letterSpacing: '0px' }}>
                  Stay Informed with the Latest Marriage &amp; Family News Across the UAE.
                </h1>
                <p className="font-normal text-[#6B5B57] max-w-[640px]" style={{ fontFamily: 'Poppins', fontSize: '22px', lineHeight: '32px', letterSpacing: '0px' }}>
                  Explore curated news, updates, and announcements from trusted government agencies, family organizations, and community initiatives.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Link href="#articles" className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors">
                    Browse Articles
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="#learn-more" className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-[#781E36] bg-transparent px-[10px] text-sm font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden">
                  <Image src="/Static/Home/Hero/Emirati couple looking at UAE skyline.png" alt="News" fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" priority unoptimized />
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
              <input type="text" placeholder="Search news articles..." className="w-full h-full bg-transparent text-sm font-normal text-gray-700 outline-none placeholder:text-[#989898]" />
            </div>
            <div className="flex items-center gap-6 w-full overflow-x-auto">
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
            <button className="w-full h-[52px] rounded-[12px] bg-[#781E36] px-6 py-3 text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors">Search</button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} direction="up">
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <div className="relative w-full h-[400px] rounded-[20px] overflow-hidden flex items-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1280&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 8px 10px -6px #781E360D, 0px 20px 25px -5px #781E360D' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute top-6 right-6 rounded-md bg-[#781E36] px-4 py-2 z-10">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins' }}>Government Announcements</span>
            </div>
            <div className="relative z-10 flex flex-col gap-3 max-w-[1184px] px-8 md:px-12">
              <h2 className="max-w-[753px]" style={{ fontFamily: 'Poppins', fontSize: '30px', fontWeight: 600, lineHeight: '37.5px', color: '#FFFFFF' }}>
                UAE Government Announces New Family Housing Initiative for Young Couples
              </h2>
              <p className="max-w-[657.81px]" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, lineHeight: '24px', color: '#FFFFFFCC' }}>
                A comprehensive new initiative aimed at providing affordable housing solutions and financial support to newly married Emirati couples across all seven emirates,…
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col gap-[50px] w-full">
            <div className="flex flex-col gap-[14px] w-full">
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>Latest Announcements &amp; Stories</span>
            </div>
            <motion.div
              className="grid grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                { image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop', title: 'Pre-Marital Counseling Program Reaches 10,000 Participants', description: 'The mandatory pre-marital counseling program has successfully guided thousands of couples, reducing early divorce rates significantly.' },
                { image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', title: 'New Family Court Opens in Sharjah to Support Marital Disputes', description: 'A dedicated family court has been inaugurated to provide faster, more compassionate resolution for marital and family matters.' },
                { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', title: 'Abu Dhabi Launches Free Marriage Counseling Hotline', description: 'Residents can now access free professional counseling support via a confidential 24/7 hotline operated by licensed family therapists.' },
                { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', title: 'UAE Announces Expanded Parental Leave Benefits for Working Families', description: 'New labor law amendments increase paid parental leave, supporting work-life balance for Emirati and resident families.' },
                { image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?q=80&w=800&auto=format&fit=crop', title: 'Community Development Ministry Reports Rise in Family Support Programs', description: 'The ministry highlights a 40% increase in enrollment across marriage preparation, parenting, and family wellness programs.' },
                { image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop', title: 'Dubai Launches Smart Platform for Marriage Registration & Guidance', description: 'A new digital platform streamlines marriage registration while offering integrated access to counseling and educational resources.' },
              ].map((article, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col w-full max-w-[400px] rounded-[24px] border border-[#E8CFC1] bg-white overflow-hidden">
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(120, 30, 54, 0.8) 0%, rgba(120, 30, 54, 0.2) 50%, rgba(120, 30, 54, 0) 100%)' }} />
                  </div>
                  <div className="flex flex-col justify-between w-full min-h-[218px] p-6 bg-white">
                    <div className="flex flex-col gap-3">
                      <h3 style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: '24.75px', color: '#781E36' }}>{article.title}</h3>
                      <p style={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, lineHeight: '21.13px', color: '#6B5B57' }}>{article.description}</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-auto">
                      <hr className="border-t border-[#E8CFC1]" />
                      <Link href="/news/article" className="text-sm font-semibold text-[#781E36] hover:text-[#B83A4A] transition-colors">Read More →</Link>
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
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>Popular News Categories</span>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>Click any category below to immediately browse focused articles, press releases and resources.</p>
            </div>
            <motion.div
              className="flex justify-between gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {[
                { icon: '🏛️', label: 'Government Announcements' },
                { icon: '💍', label: 'Marriage Initiative' },
                { icon: '👨‍👩‍👧‍👦', label: 'Family Well-being' },
                { icon: '🤝', label: 'Counseling' },
                { icon: '📚', label: 'Pre-educational Program' },
                { icon: '🎉', label: 'Community Events' },
              ].map((cat, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-3 w-[279px] h-[184px] rounded-[24px] bg-white cursor-pointer hover:border-[#781E36] transition-all"
                  style={{ boxShadow: '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' }}>
                  <div className="flex items-center justify-center h-[56px] w-[56px] rounded-[16px] bg-[#FAEDE6]">
                    <span className="text-2xl">{cat.icon}</span>
                  </div>
                  <span className="text-center max-w-[120px]" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 800, lineHeight: '19.25px', color: '#781E36' }}>{cat.label}</span>
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
              <span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>Featured Organizations</span>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>Select an organization to explore their latest news, initiatives and resources.</p>
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
                  <motion.div key={i} variants={itemVariants}
                    className={`flex flex-col items-center justify-center gap-3 rounded-[24px] bg-white cursor-pointer transition-all px-6 py-8 ${isSelected ? 'border-2 border-[#781E36]' : 'border border-[#E8CFC1]'}`}
                    style={{ boxShadow: isSelected ? '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' : 'none', width: '292px', minHeight: '200px' }}
                    onClick={() => setSelectedOrg(isSelected ? null : org.label)}>
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

      <Reveal delay={0.45} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <h2 className="font-bold text-[#781E36]" style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', lineHeight: '40px' }}>Frequently Asked Questions</h2>
            <p className="text-base font-normal text-[#6B5B57] max-w-[640px]">Quick answers to the most common questions about our news and resources.</p>
          </div>
          <motion.div
            className="flex flex-col gap-5 max-w-[663px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {[
              { question: 'Are these videos free?', answer: 'Yes — all our educational videos and resources are completely free to access for everyone.' },
              { question: 'Can I share this video?', answer: 'Absolutely. You can share any video directly from the platform with family, friends, or community groups.' },
              { question: 'How often are new videos added?', answer: 'We add new content weekly. Our library is continuously updated by trusted contributors and certified organizations.' },
              { question: 'Are subtitles available?', answer: 'Yes — most videos include Arabic and English subtitles. Additional language support is being rolled out gradually.' },
            ].map((faq, i) => (
              <motion.div key={i} variants={itemVariants}
                className="w-full rounded-[10px] border-[0.5px] border-[#959595] bg-white p-[10px] flex flex-col gap-[10px] cursor-pointer hover:border-[#781E36] transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between w-full h-[30px]">
                  <span className="font-semibold text-[#781E36]" style={{ fontFamily: 'Inter', fontSize: '20px', lineHeight: '150%' }}>{faq.question}</span>
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
                <h2 className="max-w-[848px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight pb-[24px]">Explore More Resources</h2>
                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">Discover Consultation Sessions, Marriage Initiatives, Educational Videos, and Family Support Programs across the UAE.</p>
                <div className="flex items-center gap-4">
                  <Link href="/initiatives" className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full bg-white px-[32px] py-[18px] font-extrabold text-lg text-[#781E36] hover:bg-[#FAEDE6] transition-colors">Explore Initiative</Link>
                  <Link href="/consultation" className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-[32px] py-[18px] font-extrabold text-lg text-white hover:bg-white hover:text-[#781E36] transition-colors">Consultation Session</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}