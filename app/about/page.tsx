import PageBanner from '../components/PageBanner';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <PageBanner
                title="About Us"
                subtitle="A quality focused clinical research organisation."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h4 className="text-[#1796CF] font-bold text-lg mb-4">Cytogenex Story</h4>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521] mb-6">Advancing Clinical Research Through Precision</h2>
                            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-6">
                                We are a contract research organization dedicated to providing comprehensive biometrics services including Clinical Data Management, Statistical Analysis and Medical Writing.
                            </p>
                            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-8">
                                We work within a partnership model where you receive clear benefit from our domain expertise, project management experience, global reach, quality systems approach and multi-disciplinary data management capabilities.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Quality Focus", "Clinical Practice", "Optimized Productivity", "Customer Centric Approach"].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-[#0B1521] font-semibold">
                                        <span className="w-2 h-2 rounded-full bg-[#1796CF] mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-[#1796CF] font-bold text-lg mb-4">Leadership</h4>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521]">Our Team</h2>
                        <p className="text-[#5B5B5B] mt-4 max-w-2xl mx-auto text-lg">Meet the dedicated professionals leading our clinical research initiatives and driving innovation across all phases.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                                <div className="w-32 h-32 rounded-full bg-gray-100 mb-6 flex items-center justify-center text-gray-400 border-4 border-white shadow-inner">
                                    <span className="text-sm font-medium tracking-wide">Photo Later</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0F264D] mb-2 tracking-tight">Team Member {member}</h3>
                                <p className="text-[#1796CF] font-bold text-sm uppercase mb-4 tracking-wider">Position Title</p>
                                <div className="w-10 h-1 bg-gray-200 mb-4 rounded-full" />
                                <p className="text-[#5B5B5B] text-sm leading-relaxed">Dedicated clinical professional focused on excellence, patient safety, and precision in biometrics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
