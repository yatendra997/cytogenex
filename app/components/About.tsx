'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                            Our <span className="text-secondary">Advantage</span>
                        </h2>
                        <p className="text-[#5B5B5B] text-base leading-relaxed mb-6 font-medium">
                            Cytogenex brings together exceptional domain expertise and rigorous methodology to deliver clinical research solutions. We prioritize data integrity, patient safety, and regulatory compliance.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Global standards of clinical research",
                                "Advanced biometrics and statistical analysis",
                                "Therapeutic expertise across major indications",
                                "Robust quality assurance frameworks"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-[#5B5B5B]">
                                    <div className="w-2 h-2 rounded-full bg-secondary mr-4" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300">
                            Discover More
                        </button>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full max-w-lg mx-auto relative"
                    >
                        <div className="relative aspect-square">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                            <Image
                                src="/media__1772133439106.png"
                                alt="Cytogenex Advantage Scientific Illustration"
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
