'use client';
import React from 'react';
import Link from 'next/link';
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

export default function BookingPage() {
  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      {/* Breadcrumb */}
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Consultation Sessions', href: '/consultation' },
            { label: 'Book Session' },
          ]} />
        </div>
      </Reveal>

      {/* Complete Your Consultation Booking */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
        <div className="flex gap-8">
          {/* Left Side */}
          <div className="flex flex-col gap-[50px] w-full max-w-[829px]">

            {/* Text Header */}
            <Reveal delay={0.1} direction="up">
              <div>
                <h2
                  className="text-[#781E36]"
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    letterSpacing: '0.1px',
                  }}
                >
                  Complete Your Consultation Booking
                </h2>
                <p
                  className="text-[#6B5B57] mt-4"
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                  }}
                >
                  Reserve your consultation session by reviewing the details below and completing your booking information.
                </p>
              </div>
            </Reveal>

            {/* Session Summary */}
            <Reveal delay={0.2} direction="up">
              <div className="rounded-[12px] border border-[#E8CFC1] bg-white p-6">
                <div className="pb-[10px] border-b border-[#E8CFC1]">
                  <span
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    Session Summary
                  </span>
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-[10px] mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  {[
                    { icon: User, label: 'Counselor', value: 'Dr. Sarah Al Mansoori' },
                    { icon: FileText, label: 'Session Title', value: 'Managed through effective communication' },
                    { icon: Clock, label: 'Duration', value: '10:00 am to 11:30 am, 45 minutes' },
                    { icon: Globe, label: 'Language', value: 'Arabic' },
                    { icon: Calendar, label: 'Date', value: 'July 20, 2026' },
                    { icon: MapPin, label: 'Location', value: 'Abu Dhabi Family Development Center' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} variants={itemVariants} className="flex items-center gap-[12px] w-full max-w-[400px]">
                        <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[30px] bg-[#E8CFC1] p-[7px]">
                          <Icon className="h-5 w-5 text-[#781E36]" />
                        </div>
                        <div className="flex flex-col">
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '28.13px',
                              color: '#989898',
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '14.77px',
                              fontWeight: 600,
                              lineHeight: '28.13px',
                              color: '#781E36',
                            }}
                          >
                            {item.value}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </Reveal>

            {/* Personal Information */}
            <Reveal delay={0.3} direction="up">
              <div className="rounded-[12px] border border-[#E8CFC1] bg-white p-6">
                <div className="pb-[10px] border-b border-[#E8CFC1]">
                  <span
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    Personal Information
                  </span>
                </div>
                <motion.div
                  className="mt-6 flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: '-30px' }}
                >
                  {/* Row 1: Full Name + Phone Number */}
                  <motion.div variants={itemVariants} className="grid grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-2 w-full max-w-[380px]">
                      <label
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '19px',
                          fontWeight: 500,
                          lineHeight: '140%',
                          color: '#781E36',
                        }}
                      >
                        Full Name <span className="text-[#B83A4A]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '14.77px',
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[380px]">
                      <label
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '19px',
                          fontWeight: 500,
                          lineHeight: '140%',
                          color: '#781E36',
                        }}
                      >
                        Phone Number <span className="text-[#B83A4A]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '14.77px',
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Row 2: Email (full width) */}
                  <motion.div variants={itemVariants} className="flex flex-col gap-2 w-full">
                    <label
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '19px',
                        fontWeight: 500,
                        lineHeight: '140%',
                        color: '#781E36',
                      }}
                    >
                      Email Address <span className="text-[#B83A4A]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '14.77px',
                      }}
                    />
                  </motion.div>

                  {/* Row 3: Country + Preferred Language */}
                  <motion.div variants={itemVariants} className="grid grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-2 w-full max-w-[380px]">
                      <label
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '19px',
                          fontWeight: 500,
                          lineHeight: '140%',
                          color: '#781E36',
                        }}
                      >
                        Country <span className="text-[#B83A4A]">*</span>
                      </label>
                      <div className="relative w-full">
                        <select
                          className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] appearance-none outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '14.77px',
                          }}
                        >
                          <option value="">Select your country</option>
                          <option value="UAE">United Arab Emirates</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="QA">Qatar</option>
                          <option value="KW">Kuwait</option>
                          <option value="BH">Bahrain</option>
                          <option value="OM">Oman</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B5B57] pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[380px]">
                      <label
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '19px',
                          fontWeight: 500,
                          lineHeight: '140%',
                          color: '#781E36',
                        }}
                      >
                        Preferred Language <span className="text-[#B83A4A]">*</span>
                      </label>
                      <div className="relative w-full">
                        <select
                          className="w-full h-[55px] rounded-[12px] border border-[#E8CFC1] bg-white px-4 text-[#6B5B57] appearance-none outline-none focus:border-[#781E36] transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(120,30,54,0.15)]"
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '14.77px',
                          }}
                        >
                          <option value="">Select language</option>
                          <option value="ar">Arabic</option>
                          <option value="en">English</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B5B57] pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Right Side - Booking Summary */}
          <Reveal delay={0.35} direction="right">
            <motion.div
              className="w-full max-w-[420px] h-[796px] rounded-[10px] border border-[#E8CFC1] bg-white p-[18px]"
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
                {/* Booking Summary Header */}
                <motion.div variants={itemVariants}>
                  <span
                    className="text-[#781E36]"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                    }}
                  >
                    Booking Summary
                  </span>
                </motion.div>

                {/* Summary Rows */}
                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-[30px]">
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#6B5B57',
                    }}
                  >
                    Session Fee
                  </span>
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 500,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    100 AED
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-[30px]">
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#6B5B57',
                    }}
                  >
                    Processing Fee
                  </span>
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 500,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    15 AED
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-[30px]">
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#6B5B57',
                    }}
                  >
                    Discount
                  </span>
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 500,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#B83A4A',
                    }}
                  >
                    -20 AED
                  </span>
                </motion.div>

                {/* Horizontal Line */}
                <motion.hr variants={itemVariants} className="border-t border-[#E8CFC1] w-full" />

                {/* Total */}
                <motion.div variants={itemVariants} className="flex items-center justify-between w-full max-w-[384px] h-[30px]">
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    Total
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '30px',
                      letterSpacing: '0.1px',
                      color: '#781E36',
                    }}
                  >
                    95 AED
                  </span>
                </motion.div>

                {/* Payment Method */}
                <motion.div variants={itemVariants} className="flex flex-col gap-[18px] w-full max-w-[384px] mt-2">
                  <div className="flex items-center justify-between w-full">
                    <span
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '24px',
                        fontWeight: 700,
                        lineHeight: '30px',
                        letterSpacing: '0.1px',
                        color: '#781E36',
                      }}
                    >
                      Payment Method
                    </span>
                  </div>

                  {/* Credit/Debit Card */}
                  <motion.div
                    className="flex items-center gap-[8px] w-full h-[56px] rounded-[24px] border border-[#E8CFC1] bg-white px-4 cursor-pointer"
                    whileHover={{ scale: 1.02, borderColor: '#781E36' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-[36px] w-[37px] shrink-0 items-center justify-center rounded-[30px] border-[3px] border-[#781E36]">
                      <div className="h-[20px] w-[20px] rounded-full bg-[#781E36]" />
                    </div>
                    <span
                      className="flex-1"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#6B5B57',
                      }}
                    >
                      Credit or Debit Card
                    </span>
                    <CreditCard className="h-6 w-6 text-[#6B5B57]" />
                  </motion.div>

                  {/* Apple Pay */}
                  <motion.div
                    className="flex items-center gap-[8px] w-full h-[56px] rounded-[24px] border border-[#E8CFC1] bg-white px-4 cursor-pointer"
                    whileHover={{ scale: 1.02, borderColor: '#781E36' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-[36px] w-[37px] shrink-0 items-center justify-center rounded-[30px] border-[3px] border-[#E8CFC1]">
                      <div className="h-[20px] w-[20px] rounded-full bg-transparent" />
                    </div>
                    <span
                      className="flex-1"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#6B5B57',
                      }}
                    >
                      Apple Pay
                    </span>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#6B5B57">
                      <path d="M18.71 19.58c-.83.86-1.73.73-2.6.32-1.24-.53-2.34-.55-3.63 0-1.62.7-2.48.5-3.44-.32C4.75 14.46 5.47 6.05 10.9 5.72c1.52.08 2.57.84 3.46.9 1.33-.27 2.6-1.06 4.02-.96 1.7.14 2.98.82 3.83 2.03-3.52 2.12-2.69 6.76.54 8.06-.65 1.7-1.48 3.38-2.86 4.63l-.18.2zM13.44 5.86c-.17-2.52 1.86-4.6 4.2-4.8.33 2.92-2.63 5.09-4.2 4.8z"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Privacy Policy Agreement */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-[10px] w-full max-w-[384px] min-h-[66px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]"
                  whileHover={{ borderColor: '#781E36' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-[#6B5B57] mt-0.5 cursor-pointer">
                    <div className="h-3 w-3 rounded-[2px] bg-transparent" />
                  </div>
                  <p
                    className="text-[#6B5B57]"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                    }}
                  >
                    I agree to the terms and conditions and privacy policy of Marage Support Services.
                  </p>
                </motion.div>

                {/* Buttons */}
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
                      Confirm Booking
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
                      Back to Session
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
