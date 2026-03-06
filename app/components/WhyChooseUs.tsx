'use client';

import { Microscope, ShieldCheck, Clock, Globe, Handshake } from 'lucide-react';

const reasons = [
    {
        title: 'Scientific Expertise',
        description: 'Our medical writers have deep understanding of therapeutic areas, clinical endpoints, and study designs. We ensure scientific accuracy and clinical relevance in every deliverable.',
        icon: Microscope
    },
    {
        title: 'Quality-Driven Approach',
        description: 'Quality is integrated into every stage of document development.',
        icon: ShieldCheck,
        list: [
            'Scientific review',
            'Editorial review',
            'Reference verification',
            'Consistency checks',
            'Journal compliance checks'
        ]
    },
    {
        title: 'Reliable Delivery',
        description: 'Our structured workflows ensure predictable timelines and consistent delivery. We maintain clear communication throughout the project lifecycle.',
        icon: Clock
    },
    {
        title: 'Global Experience',
        description: 'We have experience supporting global publication programs and multinational author teams. We understand regional publication requirements and journal expectations.',
        icon: Globe
    },
    {
        title: 'Flexible Collaboration',
        description: 'We adapt to client working styles and communication preferences.',
        icon: Handshake,
        list: [
            'Author-driven projects',
            'Medical affairs-driven projects',
            'Publication agency partnerships'
        ]
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0B1521] relative overflow-hidden">
            {/* Background pattern overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 md:px-8 max-w-[1240px] relative z-10">
                <div className="text-left md:text-center mb-12 md:mb-16">
                    <h4 className="text-[#1796CF] font-bold text-base md:text-lg mb-3 tracking-wide uppercase">Why Partner With Us</h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-left md:text-center">
                        Why Cytogenex
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors ${index === reasons.length - 1 ? 'lg:col-start-2' : ''
                                }`}
                        >
                            <div className="w-14 h-14 bg-[#1796CF]/20 rounded-full flex items-center justify-center mb-6">
                                <reason.icon className="w-7 h-7 text-[#1796CF]" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                {reason.title}
                            </h3>

                            <p className="text-white/80 leading-relaxed text-sm mb-4">
                                {reason.description}
                            </p>

                            {reason.list && (
                                <ul className="space-y-2 mt-4">
                                    {reason.list.map((item, i) => (
                                        <li key={i} className="flex items-start text-white/90 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#1796CF] mt-1.5 mr-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
