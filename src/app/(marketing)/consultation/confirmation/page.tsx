'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Reveal from '@/components/shared/Reveal';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const bookingFields = [
  { label: 'Booking ID', value: 'BK-2026-000458' },
  { label: 'Booking Date', value: 'July 20, 2026' },
  { label: 'Booking Status', value: 'Confirmed' },
  { label: 'Payment Status', value: 'Paid' },
  { label: 'Full Name', value: 'Ahmed Al Mansoori' },
  { label: 'Email Address', value: 'ahmed@example.com' },
  { label: 'Phone Number', value: '+971 50 123 4567' },
  { label: 'Country', value: 'United Arab Emirates' },
];

const sessionFields = [
  { label: 'Session Title', value: 'Marriage Counselling Session' },
  { label: 'Counselor', value: 'Dr. Sarah Al Mansoori' },
  { label: 'Organization', value: 'Abu Dhabi Family Development Center' },
  { label: 'Location', value: 'Abu Dhabi, UAE' },
  { label: 'Date & Time', value: 'July 20, 2026 - 10:00 AM' },
  { label: 'Duration', value: '45 Minutes' },
  { label: 'Language', value: 'Arabic' },
  { label: 'Session Format', value: 'Online via Zoom' },
  { label: 'Meeting Link', value: 'https://zoom.us/j/example' },
];

const importantNotes = [
  'Arrive 15 minutes before the session',
  'Bring valid Emirates ID for verification',
  'Check your audio/video for online calls',
  'Cancellation required 24-hour notice',
];

export default function ConfirmationPage() {
  return (
    <div className="bg-[#FAEDE6] min-h-screen">
      {/* Breadcrumb */}
      <Reveal delay={0}>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Consultation Sessions', href: '/consultation' },
            { label: 'Booking Confirmation' },
          ]} />
        </div>
      </Reveal>

      {/* Confirmation Container */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
        <Reveal delay={0.1} direction="up">
          <div className="rounded-[12px] bg-white p-6">
            <div className="flex flex-col items-center gap-[50px] w-full">

              {/* Upper Header */}
              <div className="flex flex-col items-center gap-[50px] w-full max-w-[1260px] pt-12">
                {/* Green Check Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="flex items-center justify-center h-[100px] w-[100px] rounded-full bg-[#34C759]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  >
                    <Check className="h-10 w-10 text-white" strokeWidth={3} />
                  </motion.div>
                </motion.div>

                {/* Text Container */}
                <div className="flex flex-col items-center gap-[26px] w-full max-w-[1260px]">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="text-center"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '48px',
                      fontWeight: 700,
                      lineHeight: '75px',
                      color: '#781E36',
                    }}
                  >
                    Booking Confirmed Successfully!
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                    className="text-center max-w-[759px]"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '20px',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.1px',
                      color: '#6B5B57',
                    }}
                  >
                    Your consultation session has been successfully booked. A confirmation email has been sent with your booking details and further instructions.
                  </motion.p>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="flex gap-[30px] w-full max-w-[1260px]">
                {/* Left: Booking Information */}
                <Reveal delay={0.2} direction="up" className="w-full max-w-[570px]">
                  <motion.div
                    className="flex flex-col w-full rounded-[12px] border border-[#E8CFC1] bg-white p-6 gap-4"
                    whileHover={{ boxShadow: '0 8px 30px rgba(120,30,54,0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-[10px] border-b border-[#E8CFC1]">
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '32px',
                          fontWeight: 700,
                          lineHeight: '48px',
                          color: '#781E36',
                        }}
                      >
                        Booking Information
                      </span>
                    </div>
                    <motion.div
                      className="flex flex-col"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, margin: '-30px' }}
                    >
                      {bookingFields.map((field, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-center justify-between w-full py-3 px-1"
                        >
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '24px',
                              color: '#6B5B57',
                            }}
                          >
                            {field.label}
                          </span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '16px',
                              fontWeight: 600,
                              lineHeight: '24px',
                              color: '#781E36',
                            }}
                          >
                            {field.value}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </Reveal>

                {/* Right: Session Details */}
                <Reveal delay={0.3} direction="up" className="w-full max-w-[570px]">
                  <motion.div
                    className="flex flex-col w-full rounded-[12px] border border-[#E8CFC1] bg-white p-6 gap-4"
                    whileHover={{ boxShadow: '0 8px 30px rgba(120,30,54,0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-[10px] border-b border-[#E8CFC1]">
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '32px',
                          fontWeight: 700,
                          lineHeight: '48px',
                          color: '#781E36',
                        }}
                      >
                        Session Details
                      </span>
                    </div>
                    <motion.div
                      className="flex flex-col"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, margin: '-30px' }}
                    >
                      {sessionFields.map((field, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-center justify-between w-full py-3 px-1"
                        >
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '24px',
                              color: '#6B5B57',
                            }}
                          >
                            {field.label}
                          </span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontSize: '16px',
                              fontWeight: 600,
                              lineHeight: '24px',
                              color: '#781E36',
                            }}
                          >
                            {field.value}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </Reveal>
              </div>

              {/* Bottom Two Containers */}
              <div className="flex gap-[30px] w-full max-w-[1260px]">
                {/* Payment Summary */}
                <Reveal delay={0.35} direction="up" className="w-full max-w-[600px]">
                  <motion.div
                    className="flex flex-col w-full min-h-[397px] rounded-[12px] border border-[#E8CFC1] bg-white p-6 gap-4"
                    whileHover={{ boxShadow: '0 8px 30px rgba(120,30,54,0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-[10px] border-b border-[#E8CFC1]">
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '24px',
                          fontWeight: 700,
                          lineHeight: '32px',
                          color: '#781E36',
                        }}
                      >
                        Payment Summary
                      </span>
                    </div>
                    <motion.div
                      className="flex flex-col gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, margin: '-30px' }}
                    >
                      <motion.div variants={itemVariants} className="flex items-center justify-between w-full mt-2">
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 400,
                            color: '#6B5B57',
                          }}
                        >
                          Session Fee
                        </span>
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#781E36',
                          }}
                        >
                          100 AED
                        </span>
                      </motion.div>
                      <motion.div variants={itemVariants} className="flex items-center justify-between w-full">
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 400,
                            color: '#6B5B57',
                          }}
                        >
                          Processing Fee
                        </span>
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#781E36',
                          }}
                        >
                          15 AED
                        </span>
                      </motion.div>
                      <motion.div variants={itemVariants} className="flex items-center justify-between w-full">
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 400,
                            color: '#6B5B57',
                          }}
                        >
                          Discount
                        </span>
                        <span
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#B83A4A',
                          }}
                        >
                          -20 AED
                        </span>
                      </motion.div>
                      <motion.hr variants={itemVariants} className="border-t border-[#E8CFC1] w-full my-2" />
                      <motion.div variants={itemVariants} className="flex items-center justify-between w-full">
                        <span
                          className="font-bold"
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#781E36',
                          }}
                        >
                          Total Paid
                        </span>
                        <span
                          className="font-bold"
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#781E36',
                          }}
                        >
                          95 AED
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Reveal>

                {/* Important Note */}
                <Reveal delay={0.45} direction="up" className="w-full max-w-[600px]">
                  <motion.div
                    className="flex flex-col w-full min-h-[397px] rounded-[12px] border border-[#E8CFC1] bg-white p-6 gap-4"
                    whileHover={{ boxShadow: '0 8px 30px rgba(120,30,54,0.08)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-[10px] border-b border-[#E8CFC1]">
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '24px',
                          fontWeight: 700,
                          lineHeight: '32px',
                          color: '#781E36',
                        }}
                      >
                        Important Note
                      </span>
                    </div>
                    <motion.ul
                      className="flex flex-col gap-4 mt-2 list-disc pl-5"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, margin: '-30px' }}
                    >
                      {importantNotes.map((note, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#6B5B57',
                          }}
                        >
                          {note}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </Reveal>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-[20px] w-full max-w-[600px] mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center w-full h-[60px] rounded-[10px] bg-[#781E36] px-[10px] text-base font-bold text-white hover:bg-[#B83A4A] transition-colors"
                  >
                    Download Confirmation
                  </Link>
                </motion.div>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/consultation"
                    className="flex items-center justify-center w-full h-[60px] rounded-[10px] border-2 border-[#781E36] bg-transparent px-[10px] text-base font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors"
                  >
                    Return to Consultations
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
