'use client';

import { useState, useRef, useCallback } from 'react';
import PageBanner from '../components/PageBanner';

// Resume submissions are handled by /app/api/submit-resume/route.ts via Nodemailer.

type FormState = 'idle' | 'uploading' | 'sending' | 'success' | 'error';

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
];
const ACCEPTED_EXT = '.pdf,.doc,.docx,.jpg,.jpeg';
const MAX_SIZE_MB = 5;

export default function CareerPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [coverNote, setCoverNote] = useState('');

  // ── File validation ────────────────────────────────────────────────────
  const validateFile = (file: File): string | null => {
    if (!ACCEPTED_TYPES.includes(file.type))
      return 'Only PDF, Word (.doc / .docx), and JPEG files are accepted.';
    if (file.size > MAX_SIZE_MB * 1024 * 1024)
      return `File size must be under ${MAX_SIZE_MB} MB.`;
    return null;
  };

  const processFile = useCallback(async (file: File) => {
    const err = validateFile(file);
    if (err) { setErrorMsg(err); return; }

    setErrorMsg('');
    setFormState('uploading');
    setUploadProgress(0);

    // Animate progress (simulated — file is stored in memory, not uploaded yet)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          setSelectedFile(file);
          setFormState('idle');
        }, 300);
      } else {
        setUploadProgress(progress);
      }
    }, 60);
  }, []);

  // ── Drag & drop ────────────────────────────────────────────────────────
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ── Submit ─────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Full name and email address are required.');
      return;
    }
    if (!selectedFile) {
      setErrorMsg('Please attach your resume before submitting.');
      return;
    }

    setFormState('sending');

    try {
      // Build multipart FormData — the API route sends this as a real attachment
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('phone', phone || 'Not provided');
      formData.append('position', position || 'General / Open Application');
      formData.append('coverNote', coverNote || 'No cover note provided.');
      formData.append('resume', selectedFile, selectedFile.name);

      const res = await fetch('/api/submit-resume', {
        method: 'POST',
        body: formData,
        // Do NOT set Content-Type — browser sets it with correct boundary automatically
      });
      const data = await res.json();

      if (data.success) {
        setFormState('success');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('Submission error:', message);
      setErrorMsg(
        'Failed to send your application. Please try again or email us directly at info@cytogenex.com',
      );
      setFormState('error');
    }
  };

  const resetForm = () => {
    setFullName(''); setEmail(''); setPhone('');
    setPosition(''); setCoverNote('');
    removeFile();
    setErrorMsg('');
    setFormState('idle');
  };

  const isBusy = formState === 'uploading' || formState === 'sending';
  const fileIcon = (file: File) => {
    if (file.type === 'application/pdf') return '📄';
    if (file.type.startsWith('image/')) return '🖼️';
    return '📝';
  };

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Career"
        subtitle="Join our dynamic team of data managers, statisticians, and medical writers."
      />

      {/* ── Opening Statement ── */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1521]">
              Join Cytogenex
            </h2>
            <p className="text-[#5B5B5B] mt-4 max-w-2xl mx-auto text-lg">
              We are continually looking for talented individuals to help us
              advance global healthcare through rigorous scientific research.
            </p>
          </div>

          {/* No current openings notice */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#EBF6FC] flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-[#1796CF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F264D] mb-3">No Current Openings</h3>
            <p className="text-[#5B5B5B]">
              We don&apos;t have open positions right now, but we&apos;re always happy to
              hear from talented professionals. Submit your resume below and
              we&apos;ll keep it on file for future opportunities.
            </p>
          </div>

          {/* ── Success Screen ── */}
          {formState === 'success' ? (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#1796CF] to-[#0C2364]" />
              <div className="p-12 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-bounce-once">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0F264D] mb-3">Application Sent! 🎉</h3>
                <p className="text-[#5B5B5B] mb-8 max-w-md">
                  Thank you, <strong>{fullName}</strong>! Your resume has been
                  successfully sent to{' '}
                  <strong className="text-[#1796CF]">info@cytogenex.com</strong>.
                  We&apos;ll be in touch if there&apos;s a suitable opportunity.
                </p>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 rounded-full font-semibold text-[#1796CF] border-2 border-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-colors duration-300"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* ── Application Form ── */
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#1796CF] to-[#0C2364]" />
              <div className="p-5 md:p-6">
                <h2 className="text-xl font-bold text-[#0F264D] mb-0.5">
                  Submit Your Resume
                </h2>
                <p className="text-[#5B5B5B] text-xs mb-4">
                  Fill in your details and attach your resume. PDF, Word or JPEG — max {MAX_SIZE_MB} MB.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-3">

                  {/* Row 1: Full Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="career-fullname" className="block text-xs font-semibold text-[#0F264D] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="career-fullname"
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        disabled={isBusy}
                        required
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#0B1521] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1796CF]/40 focus:border-[#1796CF] transition bg-gray-50 disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-email" className="block text-xs font-semibold text-[#0F264D] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="career-email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        disabled={isBusy}
                        required
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#0B1521] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1796CF]/40 focus:border-[#1796CF] transition bg-gray-50 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Position */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="career-phone" className="block text-xs font-semibold text-[#0F264D] mb-1">
                        Phone <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="career-phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        disabled={isBusy}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#0B1521] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1796CF]/40 focus:border-[#1796CF] transition bg-gray-50 disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-position" className="block text-xs font-semibold text-[#0F264D] mb-1">
                        Position <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="career-position"
                        type="text"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        placeholder="e.g. Medical Writer"
                        disabled={isBusy}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#0B1521] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1796CF]/40 focus:border-[#1796CF] transition bg-gray-50 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label htmlFor="career-cover" className="block text-xs font-semibold text-[#0F264D] mb-1">
                      Cover Note <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="career-cover"
                      rows={2}
                      value={coverNote}
                      onChange={e => setCoverNote(e.target.value)}
                      placeholder="Briefly introduce yourself…"
                      disabled={isBusy}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#0B1521] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1796CF]/40 focus:border-[#1796CF] transition bg-gray-50 disabled:opacity-60 resize-none"
                    />
                  </div>

                  {/* ── File Upload ── */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F264D] mb-1.5">
                      Resume / CV <span className="text-red-500">*</span>
                    </label>

                    {!selectedFile ? (
                      /* Drop zone */
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="Upload resume — click or drag and drop"
                        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
                        className={`relative flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl py-4 px-4 cursor-pointer transition-colors duration-200
                          ${dragOver
                            ? 'border-[#1796CF] bg-[#EBF6FC]'
                            : 'border-gray-200 bg-gray-50 hover:border-[#1796CF] hover:bg-[#EBF6FC]/50'
                          }`}
                      >
                        {formState === 'uploading' ? (
                          <div className="w-full max-w-xs">
                            <p className="text-center text-[#5B5B5B] text-sm mb-3">
                              Reading file…
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-[#1796CF] h-2 rounded-full transition-all duration-100"
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-9 h-9 rounded-full bg-[#EBF6FC] flex items-center justify-center">
                              <svg className="w-5 h-5 text-[#1796CF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-[#0F264D]">
                                <span className="text-[#1796CF] underline underline-offset-2">
                                  Click to upload
                                </span>{' '}
                                or drag &amp; drop
                              </p>
                              <p className="text-xs text-[#5B5B5B] mt-1">
                                PDF, DOC, DOCX, JPG, JPEG — max {MAX_SIZE_MB} MB
                              </p>
                            </div>
                          </>
                        )}
                        <input
                          ref={fileInputRef}
                          id="career-resume-file"
                          type="file"
                          accept={ACCEPTED_EXT}
                          onChange={handleFileChange}
                          disabled={isBusy}
                          className="sr-only"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      /* File preview chip */
                      <div className="flex items-center gap-4 p-4 border border-[#1796CF]/30 bg-[#EBF6FC]/50 rounded-xl">
                        <span className="text-3xl leading-none">{fileIcon(selectedFile)}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#0F264D] truncate">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs text-[#5B5B5B]">
                            {(selectedFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          disabled={isBusy}
                          aria-label="Remove selected file"
                          className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-100 hover:text-red-600 transition disabled:opacity-40 flex-shrink-0"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Error alert */}
                  {errorMsg && (
                    <div role="alert" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    id="submitResumeBtn"
                    type="submit"
                    disabled={isBusy}
                    className="w-full py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-[#1796CF] to-[#0C2364] hover:from-[#0C2364] hover:to-[#1796CF] transition-all duration-500 shadow-lg shadow-[#1796CF]/20 hover:shadow-xl hover:shadow-[#0C2364]/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {formState === 'sending' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Application…
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Submit Application
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Or email us directly at{' '}
                    <a
                      href="mailto:info@cytogenex.com"
                      className="text-[#1796CF] hover:underline font-medium"
                    >
                      info@cytogenex.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
