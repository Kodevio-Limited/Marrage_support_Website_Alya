'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ChevronDown, User, MapPin, Calendar, Clock, Building2, ChevronLeft, BadgeCheck, Wallet, Globe } from 'lucide-react';
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

export default function ConsultationPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'free' | 'paid'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sessionTabs = [
    { key: 'all', label: 'All Sessions' },
    { key: 'free', label: 'Free Sessions' },
    { key: 'paid', label: 'Paid Sessions' },
  ] as const;

  const sessionCards = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    title: 'Mawadda Pre-Marital Program',
    description: 'A comprehensive program designed to equip soon-to-be-married couples with essential skills for a successful and stable married life.',
    doctor: 'Dr. Fatima Al Nuaimi',
    designation: 'Ministry of Community Development',
    location: 'Abu Dhabi, UAE',
    date: 'October 18, 2026',
    time: '10:00 AM - 12:00 PM',
    price: 'AED 350',
    duration: '2 Hours',
  }));

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const filters = [
    {
      name: 'free',
      label: 'Free',
      isDropdown: false,
      options: [],
    },
    {
      name: 'marital',
      label: 'Marital',
      isDropdown: true,
      options: ['Premarital', 'Marital', 'Post-marital'],
    },
    {
      name: 'language',
      label: 'Arabic',
      isDropdown: true,
      options: ['Arabic', 'English', 'Both'],
    },
    {
      name: 'date',
      label: 'Date',
      isDropdown: true,
      options: ['This Week', 'This Month', 'This Year'],
    },
  ];

  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Consultation Sessions' },
          ]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <section className="w-full bg-white mb-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col gap-8 max-w-[672px] w-full">
                <h1
                  className="font-bold text-[#781E36] max-w-[480px]"
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '48px',
                    lineHeight: '75px',
                    letterSpacing: '0px',
                  }}
                >
                  Find the Right Marriage Consultation Session for a Stronger and Happier Future.
                </h1>

                <p
                  className="font-normal text-[#6B5B57] max-w-[640px]"
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    lineHeight: '32px',
                    letterSpacing: '0px',
                  }}
                >
                  Explore free and paid consultation sessions offered by trusted government agencies, private organizations, and certified professionals across the UAE.
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <Link
                    href="#sessions"
                    className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors"
                  >
                    Browse Sessions
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#learn-more"
                    className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-[#781E36] bg-transparent px-[10px] text-sm font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="w-full max-w-[640px]">
                <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop"
                    alt="Marriage Consultation Session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                  />
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
              <input
                type="text"
                placeholder="Search consultation sessions..."
                className="w-full h-full bg-transparent text-sm font-normal text-gray-700 outline-none placeholder:text-[#989898]"
              />
            </div>

            <div className="flex items-center gap-6 w-full overflow-x-auto">
              {filters.map((filter) => (
                <div key={filter.name} className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => filter.isDropdown && toggleDropdown(filter.name)}
                    className={`flex items-center justify-between w-[170px] h-[48px] rounded-[10px] border px-[10px] cursor-pointer transition-colors ${
                      openDropdown === filter.name
                        ? 'border-[#781E36]'
                        : 'border-[#E8CFC1] hover:border-[#781E36]'
                    } bg-white`}
                  >
                    <span
                      className={`text-sm ${filter.isDropdown ? 'font-medium text-[#6B5B57]' : 'font-semibold text-[#781E36]'}`}
                    >
                      {filter.label}
                    </span>
                    {filter.isDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 text-[#989898] transition-transform duration-200 ${
                          openDropdown === filter.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {filter.isDropdown && openDropdown === filter.name && (
                    <div className="absolute top-full left-0 mt-1 w-full rounded-[10px] border border-[#E8CFC1] bg-white shadow-lg z-20 overflow-hidden">
                      {filter.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            filter.label = opt;
                            setOpenDropdown(null);
                          }}
                          className="w-full px-[10px] py-2 text-left text-sm font-medium text-[#6B5B57] hover:bg-[#FAEDE6] hover:text-[#781E36] transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full h-[52px] rounded-[12px] bg-[#781E36] px-6 py-3 text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors">
              Search
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-6">
          <div className="flex items-center justify-center gap-[21px] w-[538px] h-[62px] rounded-[16px] border border-[#E8CFC1] bg-white p-[6px] mx-auto">
            {sessionTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`h-[48px] w-[158px] rounded-[12px] px-8 py-3 text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#781E36] text-white shadow-sm'
                    : 'bg-transparent text-[#6B5B57] hover:text-[#781E36]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {sessionCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className="flex flex-col w-full max-w-[400px] mx-auto rounded-[24px] border border-[#E8CFC1] bg-white overflow-hidden"
                style={{
                  boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)',
                }}
              >
                <div className="relative w-full h-[224px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="flex flex-col justify-between min-h-[110px]">
                    <h3
                      className="font-bold text-[#781E36]"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        lineHeight: '27.5px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm font-normal text-[#6B5B57]"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="rounded-[16px] border border-[#E8CFC1] bg-[#FAEDE6] p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-[13px]">
                      <User className="h-5 w-5 text-[#781E36] shrink-0" />
                      <span
                        className="font-medium text-[#781E36]"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          lineHeight: '17.5px',
                        }}
                      >
                        {card.doctor}
                      </span>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <Building2 className="h-5 w-5 text-[#781E36] shrink-0" />
                      <span
                        className="font-medium text-[#781E36]"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          lineHeight: '17.5px',
                        }}
                      >
                        {card.designation}
                      </span>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <MapPin className="h-5 w-5 text-[#6B5B57] shrink-0" />
                      <span
                        className="font-medium text-[#6B5B57]"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          lineHeight: '17.5px',
                        }}
                      >
                        {card.location}
                      </span>
                    </div>
                  </div>

                  <div className="w-full border-t border-[#E8CFC1]" />

                  <div className="flex items-center gap-[8px]">
                    <Calendar className="h-5 w-5 text-[#B83A4A] shrink-0" />
                    <span className="text-sm font-medium text-[#6B5B57]">{card.date}</span>
                    <Clock className="h-5 w-5 text-[#B83A4A] shrink-0 ml-4" />
                    <span className="text-sm font-medium text-[#6B5B57]">{card.time}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[6px]">
                      <span className="font-normal text-[#989898]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '32px' }}>
                        Price
                      </span>
                      <span className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '32px' }}>
                        {card.price}
                      </span>
                    </div>
                    <div className="flex flex-col gap-[6px] text-right">
                      <span className="font-normal text-[#989898]" style={{ fontFamily: 'Poppins', fontSize: '24px', lineHeight: '32px' }}>
                        Duration
                      </span>
                      <span className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '32px' }}>
                        {card.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href="/consultation/details" className="w-[170px] h-[60px] flex items-center justify-center rounded-[50px] border-2 border-[#781E36] bg-transparent px-[10px] text-sm font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors">
                      View Details
                    </Link>
                    <Link href="/consultation/book" className="w-[170px] h-[60px] flex items-center justify-center rounded-[50px] bg-[#781E36] px-[10px] text-sm font-bold text-white hover:bg-[#B83A4A] transition-colors">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center justify-center gap-[30px] mx-auto mt-8">
            <button type="button" className="flex items-center justify-center w-[35px] h-[42px] rounded-[10px] border border-[#E8CFC1] bg-white text-[#6B5B57] hover:border-[#781E36] hover:text-[#781E36] transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                type="button"
                className={`w-[35px] h-[42px] px-[10px] text-sm font-bold transition-colors ${
                  page === 1
                    ? 'rounded-[4px] bg-[#781E36] text-white'
                    : 'rounded-[10px] border border-[#E8CFC1] bg-white text-[#6B5B57] hover:border-[#781E36] hover:text-[#781E36]'
                }`}
              >
                {page}
              </button>
            ))}
            <button type="button" className="flex items-center justify-center w-[35px] h-[42px] rounded-[10px] border border-[#E8CFC1] bg-white text-[#6B5B57] hover:border-[#781E36] hover:text-[#781E36] transition-colors">
              <ChevronLeft className="h-4 w-4 rotate-180" />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col items-center text-center gap-4 max-w-[1280px]">
            <h2
              className="font-bold text-[#781E36] max-w-[658px]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '36px',
                lineHeight: '40px',
              }}
            >
              Why Choose Our Consultation Services
            </h2>
            <p className="text-base font-normal text-[#6B5B57] max-w-[640px]">
              Trusted marriage counseling designed to strengthen families across every emirate of the UAE.
            </p>
          </div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {[
              {
                icon: <User className="h-7 w-7 text-[#781E36]" />,
                title: 'Expert Counselors',
                subtitle: 'Licensed Emirati family therapists with decades of combined experience guiding couples toward lasting harmony.',
              },
              {
                icon: <Wallet className="h-7 w-7 text-[#781E36]" />,
                title: 'Free & Paid Options',
                subtitle: 'Government-backed free sessions alongside premium private consultations tailored to every budget.',
              },
              {
                icon: <Globe className="h-7 w-7 text-[#781E36]" />,
                title: 'UAE-Wide Coverage',
                subtitle: 'In-person and virtual sessions available across all seven emirates, accessible from anywhere in the country.',
              },
              {
                icon: <BadgeCheck className="h-7 w-7 text-[#781E36]" />,
                title: 'Verified Providers',
                subtitle: 'Every counselor is officially accredited by UAE authorities and certified to deliver trusted guidance.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-[16px] border border-[#E8CFC1] hover:border-[#781E36] transition-colors"
              >
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FAEDE6] border border-[#E8CFC1]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#781E36] leading-[24px]">{item.title}</h3>
                <p className="text-sm font-normal text-[#6B5B57] leading-[20px] max-w-[260px]">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col items-center text-center gap-4 max-w-[1280px] mt-12">
            <h3
              className="font-bold text-[#781E36] max-w-[658px]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '36px',
                lineHeight: '40px',
              }}
            >
              Start Your Journey Toward a Stronger Family Today
            </h3>
            <p className="text-base font-normal text-[#6B5B57] max-w-[640px]">
              Book a session in minutes and connect with certified experts ready to support your family at every step.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.4} direction="up">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <h2
              className="font-bold text-[#781E36]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '36px',
                lineHeight: '40px',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base font-normal text-[#6B5B57] max-w-[640px]">
              Quick answers to the most common questions about our consultation services.
            </p>
          </div>

          <motion.div
            className="flex flex-col gap-5 max-w-[663px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {[
              {
                question: 'Are free sessions available?',
                answer: 'Yes — multiple government-backed organizations offer free sessions across the UAE. Use the filter above and select "Free Sessions" to view them.',
              },
              {
                question: 'Can I book a session in Arabic or English?',
                answer: 'All our verified counselors deliver sessions in both Arabic and English. Use the language filter to choose your preferred language.',
              },
              {
                question: 'Are consultation sessions confidential?',
                answer: 'Absolutely. Every consultation is conducted under strict confidentiality in line with UAE privacy regulations and professional ethics.',
              },
              {
                question: 'Can couples attend together?',
                answer: 'Yes. Most sessions are designed for both partners to attend together. Some specialty topics may be individual — details are listed on each session card.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="w-full rounded-[10px] border-[0.5px] border-[#959595] bg-white p-[10px] flex flex-col gap-[10px] cursor-pointer hover:border-[#781E36] transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between w-full h-[30px]">
                  <span
                    className="font-semibold text-[#781E36]"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      lineHeight: '150%',
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#781E36] shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openFaq === i && (
                  <p className="text-sm font-normal text-[#6B5B57] leading-[20px] pt-2">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.45} direction="up">
        <div className="w-full py-[80px]">
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
                  Need Personalised Marriage Guidance
                </h2>

                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">
                  Connect with Experienced Counselor and Trusted Organizations to Receive Professional Support Tailored to Your Unique Relationship Needs.
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href="#consultation"
                    className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full bg-white px-[32px] py-[18px] font-extrabold text-lg text-[#781E36] hover:bg-[#FAEDE6] transition-colors"
                  >
                    Book a Session
                  </Link>
                  <Link
                    href="#organizations"
                    className="flex h-[64px] min-w-[221px] items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-[32px] py-[18px] font-extrabold text-lg text-white hover:bg-white hover:text-[#781E36] transition-colors"
                  >
                    Browse Organizations
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