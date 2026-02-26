'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OurAdvantage() {
    return (
        <section id="services" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Image Content (matching Clinnex) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            <Image
                                src="/advantage.png"
                                alt="Our Advantage Scientific Illustration"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-[#1796CF] font-bold text-base mb-3">Our Advantage</h4>
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#1a1a1a] mb-5 tracking-tight leading-[1.2]">
                            A bundle of coveted<br />clinical research<br />services.
                        </h2>
                        <p className="text-[#5B5B5B] text-[15px] leading-relaxed mb-6">
                            We work within a partnership model where you receive clear benefit from our domain expertise, project management experience, global reach, quality systems approach and multi-disciplinary data management capabilities.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {[
                                "Quality Focus",
                                "Competitive Pricing",
                                "Clinical Practice",
                                "Optimized Productivity",
                                "Customer Centric Approach",
                                "Rich Expertise"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center text-[#5B5B5B]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1796CF] mr-3 shrink-0" />
                                    <span className="font-medium text-[14px]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-block px-8 py-2.5 rounded-full text-[14px] font-semibold border border-[#1796CF] text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-all duration-300"
                        >
                            Know More
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
