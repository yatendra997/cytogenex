'use client';

import { motion } from 'framer-motion';
import { Database, FileText, Activity, Beaker, Users, ShieldCheck } from 'lucide-react';

const services = [
    {
        title: 'Clinical Data Management',
        description: 'Ensuring the highest accuracy, integration, and security of clinical trial data across all phases.',
        icon: Database,
    },
    {
        title: 'Statistical Analysis',
        description: 'Advanced biometric and statistical modeling to turn complex data points into actionable insights.',
        icon: Activity,
    },
    {
        title: 'Medical Writing',
        description: 'Clear, compliant, and structured medical writing services for global regulatory submissions.',
        icon: FileText,
    },
    {
        title: 'Therapeutic Expertise',
        description: 'Specialized clinical focus across oncology, cardiology, immunology, and neurology.',
        icon: Beaker,
    },
    {
        title: 'Pharmacovigilance',
        description: 'Rigorous safety monitoring and risk management throughout the product lifecycle.',
        icon: ShieldCheck,
    },
    {
        title: 'Clinical Operations',
        description: 'End-to-end trial management focusing on patient recruitment, retention, and site monitoring.',
        icon: Users,
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                            Our <span className="text-secondary">Services</span>
                        </h2>
                        <p className="text-[#5B5B5B] text-lg">
                            We offer end-to-end clinical research capabilities powered by technology, therapeutic depth, and operational agility.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Blue accent line on top */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                            <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                <service.icon className="w-7 h-7 text-secondary" />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-[#5B5B5B] leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
