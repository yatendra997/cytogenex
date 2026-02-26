'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OurExpertise() {
    return (
        <section id="expertise" className="py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Text Content (matching Clinnex - text on LEFT) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-[#1796CF] font-bold text-base mb-3">Our Expertise</h4>
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#1a1a1a] mb-5 tracking-tight leading-[1.2]">
                            We have experience in<br />various phases of<br />clinical trials and wide<br />therapeutic areas.
                        </h2>
                        <p className="text-[#5B5B5B] text-[15px] leading-relaxed mb-6">
                            We assist in binding clinical and biometric aspects of clinical trials to ensure clinical accuracy and integrity of trial data. With us specializing on biometrics services alone, we are well positioned to provide focused and responsive services resulting in timely and quality outputs to our customers.
                        </p>

                        <Link
                            href="/expertise"
                            className="inline-block px-8 py-2.5 rounded-full text-[14px] font-semibold border border-[#1796CF] text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-all duration-300"
                        >
                            Know More
                        </Link>
                    </motion.div>

                    {/* Right: Image Content (matching Clinnex - image on RIGHT) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            <Image
                                src="/expertise.png"
                                alt="Our Expertise Anatomical Illustration"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
