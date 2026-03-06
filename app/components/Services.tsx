'use client';

import { BookOpen, Edit3, Search, Mic } from 'lucide-react';

const services = [
    {
        title: 'Scientific Publications',
        description: 'Development of high-quality scientific publications aligned with publication guidelines and journal requirements.',
        icon: BookOpen,
        lists: [
            {
                heading: 'Services include:',
                items: ['Primary manuscripts', 'Secondary manuscripts', 'Review articles', 'Narrative reviews', 'Meta-analyses', 'Conference abstracts', 'Posters', 'Oral presentations']
            },
            {
                heading: 'Publications from:',
                items: ['Clinical trials', 'Observational studies', 'Real-world evidence', 'Registries']
            }
        ]
    },
    {
        title: 'Medical Writing',
        description: 'Comprehensive medical writing support across clinical development and commercialization.',
        icon: Edit3,
        lists: [
            {
                heading: 'Documents include:',
                items: ['Clinical Study Reports', 'Protocols', 'Investigator Brochures', 'Clinical summaries', 'Safety summaries', 'Regulatory documents']
            }
        ]
    },
    {
        title: 'Literature Reviews',
        description: 'Our literature review services support evidence generation and publication development.',
        icon: Search,
        lists: [
            {
                heading: 'Services include:',
                items: ['Systematic Literature Reviews', 'Targeted Literature Reviews', 'Rapid Reviews', 'Evidence gap analysis', 'Bibliographic screening', 'Data extraction', 'Evidence tables']
            }
        ]
    },
    {
        title: 'Medical Communications',
        description: 'Development of scientific materials for medical affairs and commercial teams.',
        icon: Mic,
        lists: [
            {
                heading: 'Materials include:',
                items: ['Slide presentations', 'Training materials', 'Advisory board materials', 'Medical information documents', 'Scientific newsletters', 'Educational materials']
            }
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                <div className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div>
                        <h4 className="text-[#1796CF] font-bold text-base md:text-lg mb-3 tracking-wide uppercase">Core Offerings</h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1521] mb-6 tracking-tight text-left md:text-center">
                            Our <span className="text-[#1796CF]">Services</span>
                        </h2>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            id={service.title.toLowerCase().replace(/\s+/g, '-')}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden scroll-mt-32"
                        >
                            {/* Blue accent line on top */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1796CF]" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#1796CF]/10 rounded-full flex items-center justify-center shrink-0">
                                    <service.icon className="w-8 h-8 text-[#1796CF]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0B1521]">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-[#5B5B5B] leading-relaxed mb-6 font-medium">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                                {service.lists.map((list, listIdx) => (
                                    <div key={listIdx} className={service.lists.length === 1 ? "col-span-full sm:col-span-2" : ""}>
                                        <h4 className="text-[15px] font-bold text-[#0B1521] mb-3">{list.heading}</h4>
                                        <ul className="space-y-2">
                                            {list.items.map((listItem, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start text-[#5B5B5B] text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1796CF] mt-1.5 mr-2 shrink-0" />
                                                    <span className="leading-tight">{listItem}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
