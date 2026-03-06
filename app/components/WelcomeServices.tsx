'use client';

import { Globe, Users, FileText } from 'lucide-react';

export default function WelcomeServices() {
    return (
        <section id="trust" className="py-20 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                <div className="text-left md:text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B1521] mb-6 tracking-tight">
                        A Reliable Global Scientific Partner
                    </h2>
                    <p className="text-[#5B5B5B] text-[16px] md:text-[18px] leading-relaxed text-left md:text-center">
                        Cytogenex supports pharmaceutical and biotechnology companies across multiple regions and therapeutic areas. We have experience working with global and regional pharmaceutical companies and understand the expectations of international journals and regulatory authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Regions Supported */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 bg-[#1796CF]/10 rounded-full flex items-center justify-center mb-6">
                            <Globe className="w-7 h-7 text-[#1796CF]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1521] mb-6 border-b border-gray-100 pb-4">Regions Supported</h3>
                        <ul className="space-y-3 text-[#5B5B5B]">
                            {[
                                "United States",
                                "Europe",
                                "China",
                                "Japan",
                                "India",
                                "Asia-Pacific"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#1796CF] mr-3 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Types of Clients */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 bg-[#1796CF]/10 rounded-full flex items-center justify-center mb-6">
                            <Users className="w-7 h-7 text-[#1796CF]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1521] mb-6 border-b border-gray-100 pb-4">Types of Clients</h3>
                        <ul className="space-y-3 text-[#5B5B5B]">
                            {[
                                "Global pharmaceutical companies",
                                "Biotechnology companies",
                                "Medical device companies",
                                "CRO organizations",
                                "Academic research groups"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#1796CF] mr-3 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Types of Studies Supported */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-14 h-14 bg-[#1796CF]/10 rounded-full flex items-center justify-center mb-6">
                            <FileText className="w-7 h-7 text-[#1796CF]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1521] mb-6 border-b border-gray-100 pb-4">Types of Studies Supported</h3>
                        <ul className="space-y-3 text-[#5B5B5B]">
                            {[
                                "Phase I–IV clinical trials",
                                "Real-world evidence studies",
                                "Observational studies",
                                "Registry studies",
                                "Investigator-initiated studies"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#1796CF] mr-3 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
