import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0C2364] flex items-center justify-center px-4">
      <div className="text-center text-white max-w-xl">
        <p className="text-[#1796CF] font-bold text-lg uppercase tracking-widest mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Oops!
        </h1>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider bg-[#1796CF] text-white hover:bg-white hover:text-[#0C2364] transition-all duration-300 shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
