'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomeCards() {
    return (
        <section className="w-full px-4 md:px-8 max-w-[1240px] mx-auto">
            <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">

                {/* Left Card: Welcome */}
                <div className="w-full md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center">
                    <h4 className="text-[#1796CF] font-bold text-lg md:text-xl mb-3 tracking-wide">
                        Welcome to Cytogenex
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1521] leading-tight mb-10">
                        Specialized Expertise in Scientific Publications
                    </h2>
                    <div>
                        <Link
                            href="/about"
                            className="inline-block px-10 py-3.5 rounded-full text-[15px] font-bold border-2 border-[#1796CF] text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-all duration-300"
                        >
                            About Us
                        </Link>
                    </div>
                </div>

                {/* Right Card: Services */}
                <div className="relative w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center overflow-hidden">
                    {/* Background Image for Right Card */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero.png"
                            alt="Services Background"
                            fill
                            className="object-cover"
                        />
                        {/* Single semi-transparent blue overlay so image is clearly visible */}
                        <div className="absolute inset-0 bg-[#1796CF]/70" />
                    </div>

                    <div className="relative z-10">
                        <h4 className="text-white font-bold text-lg md:text-xl mb-3 tracking-wide drop-shadow-sm">
                            Our services
                        </h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1521] leading-tight mb-10 drop-shadow-sm">
                            We plan, develop and manage scientific publications.
                        </h2>
                        <div>
                            <Link
                                href="/services"
                                className="inline-block px-10 py-3.5 rounded-full text-[15px] font-bold border-2 border-white text-white hover:bg-white hover:text-[#1796CF] transition-all duration-300"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
