'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div
                        className="lg:w-1/2"
                    >
                        <h4 className="text-[#1796CF] font-bold text-base md:text-lg mb-3 tracking-wide uppercase">About Us</h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1521] mb-6 tracking-tight leading-tight">
                            Specialized Expertise in <span className="text-[#1796CF]">Scientific Publications</span>
                        </h2>

                        <div className="space-y-4 mb-8 text-[#5B5B5B] text-base leading-relaxed">
                            <p>
                                Cytogenex focuses exclusively on medical communication and scientific publications, allowing us to provide specialized expertise and consistent quality.
                            </p>
                            <p>
                                We support clients throughout the publication lifecycle, from early publication planning through journal submission and post-publication support.
                            </p>
                            <p>
                                Our teams understand journal requirements, publication guidelines, and author expectations, enabling smooth and efficient publication development.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-[#0B1521] mb-4">Our Scientific Team</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Medical writers with advanced degrees",
                                        "Publication managers",
                                        "Scientific editors",
                                        "Literature review specialists",
                                        "Quality reviewers"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start text-[#5B5B5B]">
                                            <div className="w-2 h-2 rounded-full bg-[#1796CF] mt-2.5 mr-3 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-[#0B1521] mb-4">Our Capabilities</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Scientific interpretation of data",
                                        "Statistical data presentation",
                                        "Literature synthesis",
                                        "Evidence communication",
                                        "Scientific storytelling"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start text-[#5B5B5B]">
                                            <div className="w-2 h-2 rounded-full bg-[#1796CF] mt-2.5 mr-3 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Image Content */}
                    <div
                        className="lg:w-1/2 w-full max-w-lg mx-auto relative"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            {/* Note: In a real app we'd need to ensure this image exists, falling back to a placeholder or an existing image */}
                            <Image
                                src="/advantage.png"
                                alt="Specialized Expertise in Scientific Publications"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1521]/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20 shadow-sm inline-block">
                                    <p className="text-[#0B1521] font-bold text-xl">100% Focused</p>
                                    <p className="text-[#1796CF] font-semibold text-sm uppercase tracking-wider">On Medical Writing</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#1796CF]/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0B1521]/5 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
