'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Heart, Eye, Target, BookOpen, MessageCircle, Newspaper, MapPin, Users } from 'lucide-react';
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

export default function AboutPage() {
	return (
		<div className="bg-[#FAEDE6]">
			<Reveal delay={0}>
				<div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 pt-5 pb-3">
					<Breadcrumb items={[
						{ label: 'Home', href: '/' },
						{ label: 'About Us' },
					]} />
				</div>
			</Reveal>

			<Reveal delay={0.1} direction="up">
				<section className="w-full bg-white mb-16">
					<div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
						<div className="flex flex-col md:flex-row items-center gap-10">
							<div className="flex flex-col gap-8 max-w-[672px] w-full">
								<h1 className="font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', fontSize: '48px', lineHeight: '67px', letterSpacing: '0px' }}>
									About Alia - Supporting Stronger Families Across the UAE
								</h1>
								<p className="font-normal text-[#6B5B57]" style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '34px', letterSpacing: '0px' }}>
									Alia is the official UAE platform dedicated to empowering Emirati families through trusted marriage guidance, government programs, expert consultation sessions, and community-driven initiatives. Our mission is to provide every couple with the resources and support they need to build a strong and lasting family foundation.
								</p>
								<div className="flex items-center gap-4 mt-2">
									<Link href="/consultation" className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] bg-[#781E36] px-[10px] text-sm font-bold text-white shadow-lg hover:bg-[#B83A4A] transition-colors">
										Browse Session
									</Link>
									<Link href="/consultation" className="flex h-[60px] w-[300px] items-center justify-center gap-2 rounded-[20px] border-2 border-[#781E36] bg-transparent px-[10px] text-sm font-bold text-[#781E36] hover:bg-[#781E36] hover:text-white transition-colors">
										Contact Support
									</Link>
								</div>
							</div>
							<div className="w-full max-w-[640px]">
								<div className="relative w-full h-[600px] rounded-[20px] overflow-hidden">
									<Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1280&auto=format&fit=crop" alt="About Alia" fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" priority unoptimized />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Reveal>

			<Reveal delay={0.2} direction="up">
				<div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
					<div className="flex flex-col w-full bg-white rounded-[16px] p-10 gap-10"
						style={{ boxShadow: '0px 4px 20px 0px #781E360A' }}
					>
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center w-[50px] h-[50px] rounded-[6px] border border-[#781E36] bg-white p-[10px]">
									<Heart className="h-6 w-6 text-[#781E36]" />
								</div>
								<h2 className="text-[28px] font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', lineHeight: '36px' }}>
									Our Story
								</h2>
							</div>
							<p className="text-base font-normal text-[#6B5B57] leading-[28px] max-w-[900px]" style={{ fontFamily: 'Poppins' }}>
								Alia was created to serve as the centralized platform for marriage support services across the UAE. Our journey began with a simple belief: strong families are the foundation of a thriving society. What started as a vision to connect couples with trusted resources has grown into a comprehensive initiative backed by government agencies, private organizations, and community partners.
							</p>
						</div>

						<motion.div
							className="grid grid-cols-2 gap-6"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: '-50px' }}
						>
							<motion.div variants={itemVariants} className="flex flex-col gap-4 rounded-[16px] border border-[#E8CFC1] bg-white p-6">
								<div className="flex justify-end">
									<div className="flex items-center justify-center w-[50px] h-[50px] rounded-[6px] border border-[#781E36] bg-white p-[10px]">
										<Target className="h-6 w-6 text-[#781E36]" />
									</div>
								</div>
								<h3 className="text-[22px] font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', lineHeight: '30px' }}>
									Our Mission
								</h3>
								<p className="text-sm font-normal text-[#6B5B57] leading-[24px]" style={{ fontFamily: 'Poppins' }}>
									Provide easy access to trusted marriage support services, resources, and expert guidance for every couple and family across the UAE. We are committed to strengthening family bonds through accessible programs, professional counseling, and community-driven initiatives.
								</p>
							</motion.div>

							<motion.div variants={itemVariants} className="flex flex-col gap-4 rounded-[16px] border border-[#E8CFC1] bg-white p-6">
								<div className="flex justify-end">
									<div className="flex items-center justify-center w-[50px] h-[50px] rounded-[6px] border border-[#781E36] bg-white p-[10px]">
										<Eye className="h-6 w-6 text-[#781E36]" />
									</div>
								</div>
								<h3 className="text-[22px] font-bold text-[#781E36]" style={{ fontFamily: 'Poppins', lineHeight: '30px' }}>
									Our Vision
								</h3>
								<p className="text-sm font-normal text-[#6B5B57] leading-[24px]" style={{ fontFamily: 'Poppins' }}>
									A UAE where every marriage is supported, every family is empowered, and every individual has access to the resources they need to build a fulfilling and lasting partnership. We envision a future where family well-being is a shared priority across all communities.
								</p>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</Reveal>

			<Reveal delay={0.3} direction="up">
				<div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
					<div className="flex flex-col gap-8 w-full bg-white border-t border-b border-[#E8CFC1] py-12 px-8">
						<div className="flex flex-col gap-2">
							<span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
								Our Objective
							</span>
							<p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
								Our objective is to focus on making trusted marriage support services more accessible, helping individuals and families build stronger relationships and promote long-term family well-being across the UAE.
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
								{ icon: '💍', label: 'Promote Healthy Marriage' },
								{ icon: '🔗', label: 'Connect Users with Trusted Initiatives' },
								{ icon: '💬', label: 'Improve Access to Consultation Service' },
								{ icon: '👨‍👩‍👧‍👦', label: 'Support Families\' Well-being' },
								{ icon: '📢', label: 'Increase Awareness of Available Programs' },
								{ icon: '📚', label: 'Encourage Lifelong Learning' },
							].map((cat, i) => (
								<motion.div key={i} variants={itemVariants} className="flex flex-col items-center justify-center gap-3 w-[279px] h-[184px] rounded-[24px] bg-white cursor-pointer" style={{ boxShadow: '0px 4px 6px -4px #781E360D, 0px 10px 15px -3px #781E360D' }}>
									<div className="flex items-center justify-center h-[56px] w-[56px] rounded-[16px] bg-[#FAEDE6]">
										<span className="text-2xl">{cat.icon}</span>
									</div>
									<span className="text-center max-w-[160px]" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 800, lineHeight: '19.25px', color: '#781E36' }}>
										{cat.label}
									</span>
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
							<span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
								What We Offer
							</span>
							<p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
								Access trusted resources, expert consultations, educational content, and community support services designed to strengthen marriage and family life across the UAE.
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
								{
									icon: <BookOpen className="h-5 w-5 text-[#781E36]" />,
									title: 'Marriage Initiative',
									desc: 'Explore verified government and private programs that support marriage, family stability, and community well-being across the UAE.',
								},
								{
									icon: <MessageCircle className="h-5 w-5 text-[#781E36]" />,
									title: 'Consultation Sessions',
									desc: 'Connect with professional counselors and marriage experts through personalized consultation sessions tailored to your unique needs.',
								},
								{
									icon: <Heart className="h-5 w-5 text-[#781E36]" />,
									title: 'Educational Shorts',
									desc: 'Watch informative videos covering marriage preparation, communication skills, parenting guidance, and healthy family life.',
								},
								{
									icon: <Newspaper className="h-5 w-5 text-[#781E36]" />,
									title: 'Marriage News',
									desc: 'Stay informed with the latest announcements, initiatives, events, and educational updates related to marriage and family support.',
								},
								{
									icon: <MapPin className="h-5 w-5 text-[#781E36]" />,
									title: 'Emirates Discovery',
									desc: 'Browse marriage support services, organizations, and initiatives available across all seven emirates of the UAE.',
								},
								{
									icon: <Users className="h-5 w-5 text-[#781E36]" />,
									title: 'Community Support & Resources',
									desc: 'Access trusted charities, financial assistance programs, workshops, training opportunities, and community support services.',
								},
							].map((item, i) => (
								<motion.div key={i} variants={itemVariants} className="flex flex-col w-full max-w-[380px] h-[184px] rounded-[12px] border border-[#781E36] bg-white p-[10px]">
									<div className="flex justify-between items-start">
										<div className="flex items-center gap-3">
											<div className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px] bg-[#FAEDE6]">
												{item.icon}
											</div>
											<span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14.77px', lineHeight: '28.13px', color: '#781E36' }}>
												{item.title}
											</span>
										</div>
										<Check className="h-5 w-5 text-[#781E36] shrink-0" />
									</div>
									<p className="mt-3 text-xs font-normal text-[#6B5B57] leading-[18px]" style={{ fontFamily: 'Poppins' }}>
										{item.desc}
									</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</Reveal>

			<Reveal delay={0.4} direction="up">
				<div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
					<div className="flex flex-col items-center gap-6 w-full bg-white rounded-[10px] py-10 px-12">
						<div className="flex flex-col items-center gap-1 text-center">
							<span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
								Our Impact
							</span>
							<p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
								Measurable results that reflect our commitment to strengthening families across the UAE.
							</p>
						</div>
						<motion.div
							className="flex justify-between gap-6 w-full"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: '-50px' }}
						>
							{[
								{ label: 'Total Emirates Support Initiatives', value: '240+ Support Initiatives' },
								{ label: 'Partner Organizations', value: '100+ Partner Organizations' },
								{ label: 'Consulting Program', value: '45+ Consultation Programs' },
								{ label: 'Community Members', value: '50,000+ Members Served' },
							].map((item, i) => (
								<motion.div key={i} variants={itemVariants} className="flex flex-col items-center justify-center gap-3 w-[280px] h-[106px] rounded-[12px] bg-[#781E36] p-[10px]">
									<span className="text-xs font-medium text-white/80 text-center leading-tight" style={{ fontFamily: 'Poppins' }}>
										{item.label}
									</span>
									<span className="text-lg font-bold text-white text-center leading-tight" style={{ fontFamily: 'Poppins' }}>
										{item.value}
									</span>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</Reveal>

			<Reveal delay={0.45} direction="up">
				<div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
					<div className="flex flex-col items-center gap-8 w-full bg-white border-t border-b border-[#E8CFC1] py-12 px-8">
						<div className="flex flex-col items-center gap-1 text-center">
							<span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
								Why Choose Alia
							</span>
							<p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
								Built with care, backed by trust, designed for every family.
							</p>
						</div>

						<motion.div
							className="grid grid-cols-2 gap-6"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: '-50px' }}
						>
							{[
								{ icon: '🔒', title: 'Trusted Information' },
								{ icon: '✅', title: 'Verified Organizations' },
								{ icon: '🎯', title: 'Guided Experience' },
								{ icon: '🧭', title: 'Easy Navigation' },
							].map((item, i) => (
								<motion.div key={i} variants={itemVariants} className="flex items-center gap-[10px] w-full h-[80px] rounded-[12px] border border-[#E8CFC1] bg-white p-[10px]">
									<div className="flex items-center justify-center w-[50px] h-[50px] rounded-[10px] bg-[#FAEDE6] shrink-0">
										<span className="text-xl">{item.icon}</span>
									</div>
									<span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '24px', lineHeight: '40px', color: '#781E36' }}>
										{item.title}
									</span>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</Reveal>

			<Reveal delay={0.5} direction="up">
				<div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-12">
					<div className="flex flex-col items-center gap-6 w-full bg-white rounded-[10px] py-10 px-12">
						<div className="flex flex-col items-center gap-1 text-center">
							<span style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, lineHeight: '28px', color: '#781E36' }}>
								Our Core Values
							</span>
							<p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#6B5B57' }}>
								The principles that guide everything we do.
							</p>
						</div>
						<motion.div
							className="flex items-center justify-center gap-4 flex-wrap"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, margin: '-50px' }}
						>
							{['Trust', 'Convenience', 'Accessibility', 'Innovation', 'Community'].map((val, i) => (
								<motion.div key={i} variants={itemVariants} className="flex items-center justify-center h-[47px] min-w-[105px] rounded-[50px] border border-[#E8CFC1] bg-white px-[10px]">
									<span className="text-sm font-semibold text-[#781E36]" style={{ fontFamily: 'Poppins' }}>
										{val}
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