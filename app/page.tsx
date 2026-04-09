import type { Metadata } from 'next';
import Hero from './components/Hero';
import WelcomeServices from './components/WelcomeServices';
import WhyChooseUs from './components/WhyChooseUs';
import OurExpertise from './components/OurExpertise';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'Cytogenex | Medical Communication & Scientific Publications',
  description: 'Cytogenex is a specialized medical communication company delivering high-quality scientific publications, medical writing, and literature reviews to pharmaceutical, biotech, and medical device companies worldwide.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST SECTION */}
      <WelcomeServices />

      {/* 3. WHY CYTOGENEX */}
      <WhyChooseUs />

      {/* 6. THERAPEUTIC EXPERTISE */}
      <OurExpertise />

      {/* 7. CONTACT US */}
      <CTA />
    </div>
  );
}
