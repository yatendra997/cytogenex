import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';

export const metadata: Metadata = {
    title: 'Career',
    description: 'Join Cytogenex — we are always looking for talented medical writers, publication managers, and scientific editors. Submit your resume for future opportunities.',
};

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Career"
                subtitle="Join our dynamic team of data managers, statisticians, and medical writers."
            />

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521]">Open Positions</h2>
                        <p className="text-[#5B5B5B] mt-4 max-w-2xl mx-auto text-lg">We are continually looking for talented individuals to join us in advancing global healthcare through rigorous research.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-12 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold text-[#0F264D] mb-4">No Current Openings</h3>
                            <p className="text-[#5B5B5B] text-lg max-w-2xl">
                                We currently do not have any open positions available. However, we are always eager to connect with talented professionals.
                            </p>
                            <p className="text-[#5B5B5B] text-lg max-w-2xl mt-4">
                                Please feel free to send your resume directly to us, and we will keep it on file for future opportunities.
                            </p>
                            <a href="mailto:info@cytogenex.com" className="mt-8 inline-block px-10 py-4 rounded-full font-bold bg-[#1796CF] text-white hover:bg-[#0C2364] transition-colors duration-300">
                                Submit Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
