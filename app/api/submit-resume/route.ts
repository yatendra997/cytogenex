import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use Node.js runtime (required for nodemailer)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // ── Parse multipart form data ─────────────────────────────────────────
    const data = await req.formData();

    const fullName = (data.get('fullName') as string) || '';
    const email = (data.get('email') as string) || '';
    const phone = (data.get('phone') as string) || 'Not provided';
    const position = (data.get('position') as string) || 'General / Open Application';
    const coverNote = (data.get('coverNote') as string) || 'No cover note provided.';
    const file = data.get('resume') as File | null;

    // ── Basic validation ──────────────────────────────────────────────────
    if (!fullName.trim() || !email.trim()) {
      return NextResponse.json(
        { success: false, message: 'Full name and email are required.' },
        { status: 400 },
      );
    }

    if (!file || file.size === 0) {
      return NextResponse.json(
        { success: false, message: 'No resume file attached.' },
        { status: 400 },
      );
    }

    // ── Convert file to buffer ────────────────────────────────────────────
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // ── Nodemailer transporter (Gmail SMTP) ───────────────────────────────
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,         // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char Gmail App Password
      },
    });

    // ── Send email with real attachment ───────────────────────────────────
    await transporter.sendMail({
      from: `"Cytogenex Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'cytogenex2026@gmail.com',
      replyTo: email,
      subject: `New Resume Submission – ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1796CF 0%, #0C2364 100%); padding: 32px 36px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">
              📋 New Resume Submission
            </h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">
              Submitted via the Cytogenex Careers portal
            </p>
          </div>

          <!-- Body -->
          <div style="background: #f8fafc; padding: 32px 36px;">

            <!-- Details table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                <td style="padding: 12px 0; font-weight: 700; color: #0f172a; font-size: 15px;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 12px 0; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #1796CF; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; font-size: 15px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Position</td>
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; font-size: 15px;">${position}</td>
              </tr>
            </table>

            <!-- Cover Note -->
            <div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 20px;">
              <p style="color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 10px;">Cover Note</p>
              <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${coverNote}</p>
            </div>

            <!-- Attachment notice -->
            <p style="margin-top: 20px; color: #64748b; font-size: 13px; background: #eff6ff; border-left: 3px solid #1796CF; padding: 12px 16px; border-radius: 0 6px 6px 0;">
              📎 <strong>Resume attached:</strong> ${file.name}
            </p>
          </div>

          <!-- Footer -->
          <div style="background: #f1f5f9; padding: 16px 36px; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This email was sent automatically from the Cytogenex website career form.
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 },
    );
  }
}
