'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center bg-[#0C2364] overflow-hidden">
            {/* Background Image - clearly visible */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Gradient Overlay - lighter to show image more */}
            <div className="absolute inset-0 z-0 bg-[#0C2364]/65" />

            <div className="relative z-10 flex flex-col items-center text-center px-[15px] w-full max-w-[1240px]">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    className="text-white uppercase tracking-[6px] text-[16px] mb-5 font-normal"
                >
                    RESEARCH IS A PROCESS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-[36px] md:text-[50px] font-bold text-[#1796CF] mb-5 leading-[46px] md:leading-[60px] uppercase"
                >
                    THAT TAKES US FROM<br />CONFUSION TO UNDERSTANDING
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="text-[16px] md:text-[18px] text-white mb-10 max-w-2xl font-normal tracking-wide"
                >
                    IN A MANNER THAT&apos;S <span className="font-bold italic">PRECISE, PREDICTIVE</span> AND <span className="font-bold">RELIABLE.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                >
                    <Link
                        href="#more-info"
                        className="px-8 py-2.5 rounded-[30px] text-[14px] font-semibold border-[0.8px] border-[#1796CF] text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-colors duration-300 uppercase"
                    >
                        More Info
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
