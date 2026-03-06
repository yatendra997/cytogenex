import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';
import Services from '../components/Services';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Explore Cytogenex\'s full range of medical communication services — scientific publications, manuscript writing, medical writing, literature reviews, and conference materials for pharma and biotech.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Our Services"
                subtitle="We offer end-to-end medical writing and publication support powered by scientific expertise and operational agility."
            />
            {/* Reusing the Services component which is already built perfectly for this */}
            <div className="py-12 bg-gray-50">
                <Services />
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521] mb-8">Ready to Accelerate Your Scientific Publications?</h2>
                    <p className="text-[#5B5B5B] text-lg mb-10 leading-relaxed">
                        Partner with Cytogenex to ensure the highest accuracy and scientific rigor of your manuscript, abstracts, and medical communications. Our competitive pricing and customer-centric approach ensure you get the reliable delivery without compromising on quality.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider bg-[#1796CF] text-white hover:bg-[#0C2364] transition-all duration-300 shadow-xl">Contact Our Experts</Link>
                </div>
            </section>
        </main>
    );
}
