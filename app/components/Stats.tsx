'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle, Search, FileText } from 'lucide-react';

const statsData = [
    {
        icon: Users,
        value: '25+',
        label: 'CLIENTS',
    },
    {
        icon: CheckCircle,
        value: '400+',
        label: 'PROJECTS DELIVERED',
    },
    {
        icon: Search,
        value: '40+',
        label: 'CLINIC (BE/PHASE II-IV) STUDIES DELIVERED',
    },
    {
        icon: FileText,
        value: '1500000+',
        label: 'NUMBER OF PAGES PROCESSED',
    },
];

export default function Stats() {
    return (
        <section className="relative w-full py-14 text-white overflow-hidden bg-[#0C2364]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0C2364]/75" />

            <div className="container mx-auto px-10 md:px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
                {statsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-row items-center space-x-6 md:space-x-4 w-full md:w-1/4 px-0 md:px-2"
                    >
                        <div className="w-[60px] h-[60px] md:w-14 md:h-14 rounded-full bg-[#1796CF] flex items-center justify-center shrink-0 shadow-lg">
                            <stat.icon className="w-8 h-8 md:w-7 md:h-7 text-white" />
                        </div>
                        <div className="text-left flex flex-col justify-center">
                            <div className="text-[32px] md:text-3xl font-bold tracking-tight mb-1 md:mb-0.5 leading-none">{stat.value}</div>
                            <div className="text-[12px] md:text-[10px] lg:text-[11px] uppercase font-bold text-white/90 leading-snug tracking-wider">{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
