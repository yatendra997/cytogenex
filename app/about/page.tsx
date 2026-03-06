import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Cytogenex — a specialized medical communication company providing scientific publications, medical writing, and publication management services to global pharma and biotech companies.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <PageBanner
                title="About Us"
                subtitle="A quality focused clinical research organisation."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h4 className="text-[#1796CF] font-bold text-lg mb-4 uppercase">Specialized Expertise</h4>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521] mb-6">Scientific Publications</h2>
                            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-6">
                                Cytogenex focuses exclusively on medical communication and scientific publications, allowing us to provide specialized expertise and consistent quality.
                            </p>
                            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-6">
                                We support clients throughout the publication lifecycle, from early publication planning through journal submission and post-publication support.
                            </p>
                            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-8">
                                Our teams understand journal requirements, publication guidelines, and author expectations, enabling smooth and efficient publication development.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about-us.png"
                                alt="About Cytogenex"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Blue overlay to match theme */}
                            <div className="absolute inset-0 bg-[#0C2364]/10 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Team Section */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="text-[#1796CF] font-bold text-lg mb-4 uppercase">Our Scientific Team</h4>
                            <h2 className="text-3xl font-extrabold text-[#0B1521] mb-6">Who We Are</h2>
                            <p className="text-[#5B5B5B] mb-8 text-lg">Our team includes:</p>

                            <ul className="space-y-4">
                                {[
                                    "Medical writers with advanced life science degrees",
                                    "Publication managers",
                                    "Scientific editors",
                                    "Literature review specialists",
                                    "Quality reviewers"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-[#5B5B5B] text-lg">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#1796CF] mt-2 mr-4 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Capabilities Section */}
                        <div className="bg-[#0C2364] p-10 rounded-2xl shadow-xl border border-[#0C2364] text-white">
                            <h4 className="text-[#1796CF] font-bold text-lg mb-4 uppercase">Our Capabilities</h4>
                            <h2 className="text-3xl font-extrabold mb-8">What We Do</h2>

                            <ul className="space-y-4">
                                {[
                                    "Scientific interpretation of clinical data",
                                    "Statistical data presentation",
                                    "Literature synthesis",
                                    "Evidence communication",
                                    "Scientific storytelling"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-white/90 text-lg">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#1796CF] mt-2 mr-4 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
