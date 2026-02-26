'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
                >
                    Ready to Accelerate Your <span className="text-secondary block md:inline mt-2 md:mt-0">Clinical Research?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[16px] md:text-[18px] text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide"
                >
                    Partner with Cytogenex to bring precision, reliability, and speed to your next trial phase.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="#contact"
                        className="inline-block px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-secondary/20 hover:shadow-primary/30 transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
