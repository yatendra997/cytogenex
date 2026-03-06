import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactSidebar from './components/ContactSidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Cytogenex | Medical Communication & Scientific Publications',
    template: '%s | Cytogenex',
  },
  description: 'Cytogenex is a specialized medical communication company providing high-quality scientific publications, medical writing, and literature reviews to pharmaceutical, biotechnology, and medical device companies worldwide.',
  keywords: [
    'medical writing', 'scientific publications', 'medical communication', 'clinical trial publications',
    'pharmaceutical writing', 'manuscript development', 'literature review', 'abstract writing',
    'regulatory writing', 'publication planning', 'Cytogenex', 'Bangalore'
  ],
  authors: [{ name: 'Cytogenex', url: 'https://cytogenex.com' }],
  creator: 'Cytogenex',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cytogenex.com',
    siteName: 'Cytogenex',
    title: 'Cytogenex | Medical Communication & Scientific Publications',
    description: 'Specialized medical communication company delivering high-quality scientific publications and medical writing support globally.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cytogenex | Medical Communication & Scientific Publications',
    description: 'Specialized medical communication company delivering high-quality scientific publications and medical writing support globally.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactSidebar />
      </body>
    </html>
  );
}
