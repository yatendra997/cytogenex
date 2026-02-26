import PageBanner from '../components/PageBanner';

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Career"
                subtitle="Join our dynamic team of data managers, statisticians, and medical writers."
            />

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521]">Open Positions</h2>
                        <p className="text-[#5B5B5B] mt-4 max-w-2xl mx-auto text-lg">We are continually looking for talented individuals to join us in advancing global healthcare through rigorous research.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: 'Senior Clinical Data Manager', location: 'Ahmedabad, India', type: 'Full-time' },
                            { title: 'Principal Biostatistician', location: 'Mumbai / Remote', type: 'Full-time' },
                            { title: 'Medical Writer', location: 'Ahmedabad, India', type: 'Contract' },
                        ].map((job, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0F264D] mb-2 group-hover:text-[#1796CF] transition-colors">{job.title}</h3>
                                    <p className="text-[#5B5B5B] font-medium flex gap-4">
                                        <span>📍 {job.location}</span>
                                        <span>💼 {job.type}</span>
                                    </p>
                                </div>
                                <a href="mailto:careers@cytogenex.com" className="mt-6 md:mt-0 inline-block px-8 py-3 rounded-full font-bold bg-[#1796CF] text-white hover:bg-[#0C2364] transition-colors duration-300">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-[#0C2364] text-white rounded-2xl p-10 text-center">
                        <h3 className="text-2xl font-bold mb-4">Don&apos;t see a matching role?</h3>
                        <p className="mb-6 opacity-80">Send your resume to us directly, and we will contact you if a suitable position opens up.</p>
                        <a href="mailto:careers@cytogenex.com" className="text-[#1796CF] underline font-medium">careers@cytogenex.com</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
