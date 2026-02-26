import PageBanner from '../components/PageBanner';
import Services from '../components/Services';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Our Services"
                subtitle="We offer end-to-end clinical research capabilities powered by technology, therapeutic depth, and operational agility."
            />
            {/* Reusing the Services component which is already built perfectly for this */}
            <div className="py-12 bg-gray-50">
                <Services />
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521] mb-8">Ready to Accelerate Your Clinical Research?</h2>
                    <p className="text-[#5B5B5B] text-lg mb-10 leading-relaxed">
                        Partner with Cytogenex to ensure the highest accuracy, integration, and security of clinical trial data across all phases. Our competitive pricing and customer-centric approach ensure you get the best value without compromising on quality.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider bg-[#1796CF] text-white hover:bg-[#0C2364] transition-all duration-300 shadow-xl">Contact Our Experts</Link>
                </div>
            </section>
        </main>
    );
}
