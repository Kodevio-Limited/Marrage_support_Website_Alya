'use client';
import React from 'react';
import Hero from '@/components/sections/Hero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import MarriageShorts from '@/components/sections/MarriageShorts';
import LatestNews from '@/components/sections/LatestNews';
import UpcomingInitiatives from '@/components/sections/UpcomingInitiatives';
import ConsultationSessions from '@/components/sections/ConsultationSessions';
import ExploreByEmirate from '@/components/sections/ExploreByEmirate';
import CTA from '@/components/sections/CTA';
import { homeContent } from '@/lib/mock-data/home';

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <FeatureGrid items={homeContent.stats} />
      <MarriageShorts items={homeContent.marriageShorts} />
      <LatestNews items={homeContent.latestNews} />
      <UpcomingInitiatives items={homeContent.initiatives} />
      <ConsultationSessions items={homeContent.consultations} />
      <ExploreByEmirate items={homeContent.emirates} />
      <CTA {...homeContent.cta} />
    </>
  );
}
