'use client';

import Link from 'next/link';
import HomeCards from './HomeCards';

export default function Hero() {
    return (
        <>
            {/* Hero: full viewport height. Text pushed to lower portion. */}
            <section
                id="home"
                className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-end bg-[#0C2364]"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/hero.png')" }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-[#0C2364]/60" />
                {/* Bottom fade to blend into cards */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0C2364]/40 z-[1]" />

                {/* Hero Content — anchored to bottom */}
                <div className="relative z-10 flex flex-col items-center px-[15px] w-full max-w-[1240px] text-center pb-32 lg:pb-24">
                    <p className="text-white uppercase tracking-[3px] md:tracking-[6px] text-[14px] md:text-[16px] mb-5 font-medium text-center drop-shadow-md">
                        Scientific Evidence. Clear Communication. Global Impact.
                    </p>

                    <h1 className="text-[28px] md:text-[40px] lg:text-[50px] font-bold text-[#1796CF] mb-8 leading-tight uppercase text-center drop-shadow-lg">
                        High-Quality Scientific Publications and<br className="hidden md:block" />Medical Writing for Global Life Sciences
                    </h1>

                    <div>
                        <Link
                            href="/services"
                            className="px-8 py-3 rounded-[30px] text-[15px] font-semibold border border-[#1796CF] bg-[#1796CF] text-white hover:bg-[#0C2364] hover:text-white transition-colors duration-300 uppercase block w-full md:w-auto text-center"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cards below the hero */}
            <div className="relative z-20 w-full bg-gray-50 pt-10">
                <HomeCards />
            </div>

            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">

                    {/* Section heading */}
                    <div className="text-left md:text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1521] leading-tight mb-5">
                            Turning Data Into <span className="text-[#1796CF]">Scientific Impact</span>
                        </h2>
                        <p className="text-[#5B5B5B] text-lg max-w-3xl mx-auto leading-relaxed">
                            Cytogenex is a specialized medical communication company. We help pharmaceutical, biotech, and medical device companies transform complex clinical data into publication-ready content that resonates globally.
                        </p>
                    </div>

                    {/* Feature cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#1796CF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1521] mb-4 border-b border-gray-100 pb-4">End-to-End Publication Support</h3>
                            <ul className="space-y-3 text-[#5B5B5B]">
                                {[
                                    'Publication strategy and planning',
                                    'Manuscript development',
                                    'Abstracts and conference materials',
                                    'Literature reviews & medical writing',
                                    'Journal submission & revision support',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#1796CF] mt-2 mr-3 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#0C2364] border border-[#0C2364] shadow-sm p-8 rounded-2xl hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#1796CF]/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#1796CF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-4">Flexible Engagement Models</h3>
                            <ul className="space-y-3 text-white/80">
                                {[
                                    'Project-based support',
                                    'Dedicated medical writers',
                                    'Functional service partnerships',
                                    'Publication outsourcing programs',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-[#1796CF] mt-2 mr-3 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

