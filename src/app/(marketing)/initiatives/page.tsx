'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Share2, Building2, Tag, Shield, Users, HeartHandshake, Coins, MessageCircle, Landmark, BookOpen, Home, Heart, Phone, Mail, MapPin, Clock, Calendar, ArrowRight, Bookmark } from 'lucide-react';
import Button from '@/components/shared/Button';
import Reveal from '@/components/shared/Reveal';
import Breadcrumb from '@/components/shared/Breadcrumb';

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

const initiativeData = {
  id: 'mass-marriage-2026',
  title: 'Mass Marriage Program 2026',
  description:
    'A comprehensive government initiative designed to alleviate the financial burden of marriage for Emirati youth, fostering family stability and community cohesion.',
  image: {
    src: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1440&auto=format&fit=crop',
    alt: 'Mass Marriage Program 2026',
  },
};

export default function InitiativesPage() {
  return (
    <div className="bg-[#FAEDE6]">
      <Reveal delay={0}>
      {/* Global Breadcrumb */}
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Initiative Details' },
        ]} />
      </div>
      </Reveal>
      <Reveal delay={0.1} direction="up">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pb-[30px]">
        {/* Hero Container: 1280x480, radius 20px */}
        <div className="relative mx-auto w-full max-w-[1280px] h-[480px] rounded-[20px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={initiativeData.image.src}
          alt={initiativeData.image.alt}
          fill
          className="object-cover"
          sizes="1280px"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

        {/* Content Container: 1145x455, top 47px, left 45px */}
        <div className="relative z-10 flex flex-col h-full max-w-[1145px] mx-auto px-[45px] pt-[47px] pb-[47px]">
          {/* Top Left: Financial Support + Open Now */}
          <div className="flex items-start justify-start gap-[25px]">
            <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-[#781E36] shadow-sm">
              Financial Support
            </span>
            <button
              type="button"
              className="rounded-full bg-[#781E36] px-5 py-1.5 text-xs font-bold text-white shadow-md hover:bg-[#B83A4A] transition-colors"
            >
              Open Now
            </button>
          </div>

          {/* Text Container: gap 212px */}
          <div className="flex flex-1 flex-col justify-end gap-[39px]">
            {/* Title + Description */}
            <div className="flex flex-col gap-6 max-w-[872px]">
              <h1 className="text-[40px] font-bold text-white leading-tight tracking-tight">
                {initiativeData.title}
              </h1>
              <p className="text-sm leading-relaxed text-white/90 max-w-[872px]" style={{ letterSpacing: '0.1px' }}>
                {initiativeData.description}
              </p>
            </div>

            {/* Two Buttons: 640w, 60h, gap 40px */}
            <div className="flex items-center gap-[40px]">
              <a
                href="#official"
                className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Visit our official
              </a>
              <a
                href="#share"
                className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-white/60 bg-white/10 px-[10px] text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Share2 className="h-5 w-5" />
                Share our initiative
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Reveal>

      <Reveal delay={0.2} direction="up">
      <section className="w-full bg-white py-12 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Header Text Container: 1280w, 59h, border-bottom */}
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              About the Initiative
            </h2>
          </div>

          {/* Description Container: 1185w */}
          <div className="mt-6 max-w-[1185px]">
            <p
              className="text-base leading-[30px] text-[#757575]"
              style={{ letterSpacing: '0.1px' }}
            >
              The Dubai Marriage Fund is a government-supported initiative that helps eligible UAE citizens build a stable family life by providing financial assistance, educational programs, and marriage counseling services. The program aims to strengthen families, encourage healthy marriages, and support long-term social well-being across the UAE.
            </p>
          </div>

          {/* Purpose Header: 819w, 30h */}
          <h3
            className="mt-8 max-w-[819px] text-[20px] font-semibold text-black leading-[30px]"
            style={{ letterSpacing: '0.1px' }}
          >
            Purpose
          </h3>
          <p
            className="mt-1 max-w-[858px] text-base leading-[30px] text-[#757575]"
            style={{ letterSpacing: '0.1px' }}
          >
            Provide financial support for eligible couples.
          </p>

          {/* Objective Header */}
          <h3
            className="mt-6 max-w-[819px] text-[20px] font-semibold text-black leading-[30px]"
            style={{ letterSpacing: '0.1px' }}
          >
            Objective
          </h3>

          {/* 4 Objective Points */}
          <ul className="mt-2 flex flex-col gap-1 max-w-[858px]">
            {[
              'Provide financial support for eligible couples.',
              'Offer pre-marital counseling and educational workshops.',
              'Promote family stability and long-term social well-being.',
              'Encourage healthy marriages across the UAE community.',
            ].map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-base leading-[30px] text-[#757575]"
                style={{ letterSpacing: '0.1px' }}
              >
                <span className="mt-[9px] h-[10px] w-[10px] shrink-0 rounded-full bg-[#781E36]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.3} direction="up">
      <section className="w-full bg-white py-12 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Header — same style as About section */}
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              Basic Information
            </h2>
          </div>

          {/* Info Grid: 3 left + 2 right */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {/* Left Column (3 items) */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: 'building',
                  label: 'Organizer',
                  value: 'Dubai Community Development Authority',
                },
                {
                  icon: 'tag',
                  label: 'Category',
                  value: 'Financial Support',
                },
                {
                  icon: 'shield',
                  label: 'Program Type',
                  value: 'Government',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[12px] max-w-[369px]">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                    {item.icon === 'building' && <Building2 className="h-5 w-5 text-[#781E36]" />}
                    {item.icon === 'tag' && <Tag className="h-5 w-5 text-[#781E36]" />}
                    {item.icon === 'shield' && <Shield className="h-5 w-5 text-[#781E36]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-normal text-[#989898] leading-[28px]">{item.label}</span>
                    <span className="text-[14.77px] font-semibold text-[#781E36] leading-[28px]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (2 items) */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: 'users',
                  label: 'Eligibility',
                  value: 'UAE Citizens',
                },
                {
                  icon: 'heart',
                  label: 'Support Type',
                  value: 'Financial Assistance',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[12px] max-w-[369px]">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                    {item.icon === 'users' && <Users className="h-5 w-5 text-[#781E36]" />}
                    {item.icon === 'heart' && <HeartHandshake className="h-5 w-5 text-[#781E36]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-normal text-[#989898] leading-[28px]">{item.label}</span>
                    <span className="text-[14.77px] font-semibold text-[#781E36] leading-[28px]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.35} direction="up">
      <section className="w-full bg-white py-12 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              Support Offered
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-[10px]">
            <div className="flex flex-col gap-[10px]">
              {[
                {
                  icon: <Coins className="h-5 w-5" />,
                  label: 'Financial Support',
                },
                {
                  icon: <Home className="h-5 w-5" />,
                  label: 'Housing Support',
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  label: 'Educational Support',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                >
                  <div className="flex h-[20px] w-[20px] items-center justify-center text-[#781E36]">
                    {item.icon}
                  </div>
                  <span
                    className="font-semibold text-[#781E36]"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '14.77px',
                      lineHeight: '28.13px',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[10px]">
              {[
                {
                  icon: <Shield className="h-5 w-5" />,
                  label: 'Marriage Fraud Training Program',
                },
                {
                  icon: <Heart className="h-5 w-5" />,
                  label: 'Premarital Preparation Program',
                },
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  label: 'Family Mediation Program',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                >
                  <div className="flex h-[20px] w-[20px] items-center justify-center text-[#781E36]">
                    {item.icon}
                  </div>
                  <span
                    className="font-semibold text-[#781E36]"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '14.77px',
                      lineHeight: '28.13px',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.4} direction="up">
      <section className="w-full bg-white py-12 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              Application Process
            </h2>
          </div>

          <div className="mt-6 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[8.75px] top-3 bottom-3 w-px bg-[#E8CFC1]" />

            <div className="flex flex-col gap-6">
              {/* Step 1: Check Eligibility */}
              <div className="flex items-start gap-[10px] pl-1">
                <div className="relative z-10 flex h-[17.5px] w-[17.5px] shrink-0 mt-[3px] items-center justify-center rounded-full bg-[#781E36]">
                  <span className="text-white text-[10px] font-bold leading-none">1</span>
                </div>
                <div>
                  <h4
                    className="font-bold text-[#781E36]"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0px',
                    }}
                  >
                    Check Eligibility
                  </h4>
                  <p className="text-sm font-normal text-[#989898] leading-[20px] mt-1">
                    Ensure you meet all the criteria required to qualify for this initiative.
                  </p>
                </div>
              </div>

              {/* Step 2: Review Requirements */}
              <div className="flex items-start gap-[10px] pl-1">
                <div className="relative z-10 flex h-[17.5px] w-[17.5px] shrink-0 mt-[3px] items-center justify-center rounded-full bg-[#781E36]">
                  <span className="text-white text-[10px] font-bold leading-none">2</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#781E36] leading-6">
                    Review the eligibility requirement to confirm you qualify for the initiative
                  </h4>
                  <p className="text-sm font-normal text-[#989898] leading-[20px] mt-1">
                    Go to the official website of the organization to review the latest information about our application.
                  </p>
                </div>
              </div>

              {/* Step 3: Required Documents */}
              <div className="flex items-start gap-[10px] pl-1">
                <div className="relative z-10 flex h-[17.5px] w-[17.5px] shrink-0 mt-[3px] items-center justify-center rounded-full bg-[#781E36]">
                  <span className="text-white text-[10px] font-bold leading-none">3</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#781E36] leading-6">
                    Required Documents
                  </h4>
                  <p className="text-sm font-normal text-[#989898] leading-[20px] mt-1">
                    Prepare all necessary documents including Emirates ID, proof of income, and other supporting materials.
                  </p>
                </div>
              </div>

              {/* Step 4: Submit Application */}
              <div className="flex items-start gap-[10px] pl-1">
                <div className="relative z-10 flex h-[17.5px] w-[17.5px] shrink-0 mt-[3px] items-center justify-center rounded-full bg-[#781E36]">
                  <span className="text-white text-[10px] font-bold leading-none">4</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#781E36] leading-6">
                    Submit your application
                  </h4>
                  <p className="text-sm font-normal text-[#989898] leading-[20px] mt-1">
                    Complete and submit your application through the official provider website or organized application channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.45} direction="up">
      <section className="w-full bg-white py-12 mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              Benefits
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Coins className="h-5 w-5 text-[#781E36]" />,
                title: 'Financial Support',
                desc: 'Receive financial support to help reduce marriage-related expenses.',
              },
              {
                icon: <MessageCircle className="h-5 w-5 text-[#781E36]" />,
                title: 'Other Services',
                desc: 'Professional consulting and strengthening relationships and resolving challenges.',
              },
              {
                icon: <Landmark className="h-5 w-5 text-[#781E36]" />,
                title: 'Marriage Fund',
                desc: 'Access dedicated funding programs for eligible couples.',
              },
              {
                icon: <HeartHandshake className="h-5 w-5 text-[#781E36]" />,
                title: 'Family Guidance',
                desc: 'Access expert advice on building healthy and successful families.',
              },
              {
                icon: <BookOpen className="h-5 w-5 text-[#781E36]" />,
                title: 'Educational Program',
                desc: 'Join educational courses that focus on marriage, family, and personal development.',
              },
              {
                icon: <Users className="h-5 w-5 text-[#781E36]" />,
                title: 'Community Support',
                desc: 'Connect with community initiatives and promote family well-being.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-[10px] rounded-[16px] border border-[#E8CFC1] bg-white p-[10px] max-w-[400px] w-full"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E8CFC1] p-[7px]">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h4 className="text-base font-semibold text-[#781E36] leading-[30px]">
                    {item.title}
                  </h4>
                  <p
                    className="text-sm font-normal text-[#989898] leading-[20px]"
                    style={{ letterSpacing: '0.1px' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.5} direction="up">
      <section className="w-full bg-[#781E36] py-[66px] mb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px]">
            <h2 className="text-[24px] font-bold text-white">
              Contact Information
            </h2>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-10">
            {/* Left column: 5 contact items stacked vertically */}
            <div className="flex flex-col gap-6 flex-1">
              {[
                { icon: <Building2 className="h-5 w-5" />, label: 'Organization Name', value: 'Marage Support UAE' },
                { icon: <Phone className="h-5 w-5" />, label: 'Phone Number', value: '+971 50 123 4567' },
                { icon: <Mail className="h-5 w-5" />, label: 'Email Address', value: 'info@marage.ae' },
                { icon: <MapPin className="h-5 w-5" />, label: 'Office Address', value: 'Abu Dhabi, UAE' },
                { icon: <Clock className="h-5 w-5" />, label: 'Working Hours', value: 'Mon–Fri, 9 AM – 6 PM' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-[3px] max-w-[317px] w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E8CFC1]">{item.icon}</span>
                    <span
                      className="font-normal text-[#E8CFC1]"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        lineHeight: '28.13px',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span className="text-base font-semibold text-white leading-[28.13px] ml-7">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Right column: two buttons */}
            <div className="flex flex-col gap-6 justify-start md:pt-0">
              <button className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#781E36] transition-colors text-center">
                Visit our official
              </button>
              <button className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#781E36] transition-colors text-center">
                Visit our website
              </button>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.55} direction="up">
      <section className="w-full bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="w-full border-b border-[#E8CFC1] pb-[10px] pt-[10px] mb-10">
            <h2 className="text-[24px] font-bold text-[#781E36]">
              Similar Marriage Support Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
                tag: 'Financial Aid',
                date: 'March 15, 2026',
                title: 'National Marriage Fund Program 2026',
                excerpt: 'Apply for financial assistance covering wedding expenses, housing support, and family establishment grants for eligible UAE couples.',
              },
              {
                id: 2,
                image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
                tag: 'Counseling',
                date: 'March 10, 2026',
                title: 'Family Guidance & Counseling Initiative',
                excerpt: 'Free professional counseling sessions for engaged couples and newlyweds to build strong, healthy family foundations.',
              },
              {
                id: 3,
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
                tag: 'Education',
                date: 'February 28, 2026',
                title: 'Marriage Preparation Workshops',
                excerpt: 'Interactive workshops covering financial planning, communication skills, and legal awareness for soon-to-be-married couples.',
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group flex h-[519px] w-full max-w-[400px] mx-auto flex-col justify-between overflow-hidden rounded-[24px] border border-[#E8CFC1] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#781E36]"
                style={{
                  boxShadow:
                    '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#781E36] backdrop-blur-md shadow-xs">
                    {item.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#6B5B57]">
                      <Calendar className="h-3.5 w-3.5 text-[#781E36]" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-[#781E36] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="line-clamp-3 text-xs md:text-sm leading-relaxed text-[#6B5B57]">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#E8CFC1]/60 pt-4 text-xs font-bold text-[#781E36]">
                    <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </span>
                    <Bookmark className="h-4 w-4 text-gray-400 hover:text-[#781E36] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CTA Section: Find the right marriage support program */}
      <section className="w-full bg-[#FAEDE6] py-[80px]">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal direction="up">
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
                  Find the right marriage support program for your family
                </h2>

                <p className="max-w-[672px] text-base md:text-lg text-white/90 leading-relaxed pb-[40px]">
                  Explore the wide range of government and private initiative financial support and expert counseling service available across the UAE.
                </p>

                <div className="flex items-center gap-4">
                  <Button
                    href="#initiatives"
                    variant="white"
                    width="221px"
                    className="h-[64px] min-w-[221px] py-[18px] px-[32px] font-extrabold text-lg shadow-2xl"
                    icon={<ArrowRight className="h-5 w-5 text-[#781E36]" />}
                  >
                    Explore Initiatives
                  </Button>
                  <Button
                    href="#consultation"
                    variant="white"
                    width="221px"
                    className="h-[64px] min-w-[221px] py-[18px] px-[32px] font-extrabold text-lg shadow-2xl"
                    icon={<ArrowRight className="h-5 w-5 text-[#781E36]" />}
                  >
                    Find Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
