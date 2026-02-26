'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WelcomeServices() {
    return (
        <section id="about" className="relative w-full z-20 -mt-16 md:-mt-24 mb-16 px-0 md:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col md:flex-row bg-white md:shadow-xl overflow-hidden">
                {/* Left side: Welcome - solid white */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 bg-white flex flex-col justify-center p-10 md:p-14 lg:p-20 aspect-square md:aspect-auto md:min-h-[400px] lg:min-h-[460px] xl:min-h-[500px]"
                >
                    <h4 className="text-[#1796CF] font-bold text-base md:text-lg mb-3">Welcome to Cytogenex</h4>
                    <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#0B1521] mb-6 leading-[1.15] tracking-tight">
                        A quality focused<br />clinical research<br />organisation.
                    </h2>
                    <div>
                        <Link
                            href="/about"
                            className="inline-block px-8 py-2.5 rounded-full text-[14px] font-semibold border border-[#1796CF] text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-colors duration-300"
                        >
                            About Us
                        </Link>
                    </div>
                </motion.div>

                {/* Right side: Services - blue with background image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 relative flex flex-col justify-center p-10 md:p-14 lg:p-20 aspect-square md:aspect-auto md:min-h-[400px] lg:min-h-[460px] xl:min-h-[500px] overflow-hidden"
                >
                    {/* Background image with blue overlay like Clinnex */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/hero.png')" }}
                    />
                    <div className="absolute inset-0 bg-[#5cafe5]/85" />

                    <div className="relative z-10">
                        <h4 className="text-white font-bold text-base md:text-lg mb-3">Our services</h4>
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#0B1521] mb-6 leading-[1.15] tracking-tight">
                            We plan, organize<br />and monitor<br />clinical trials.
                        </h2>
                        <div>
                            <Link
                                href="/services"
                                className="inline-block px-8 py-2.5 rounded-full text-[14px] font-semibold border border-white text-white hover:bg-white hover:text-[#5cafe5] transition-colors duration-300"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
