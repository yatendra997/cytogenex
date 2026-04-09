import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const CONTACT_RECIPIENT = 'enquiries@cytogenex.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Basic validation
    if (!firstName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'First name, email, and message are required.' },
        { status: 400 },
      );
    }

    const fullName = [firstName.trim(), lastName?.trim()].filter(Boolean).join(' ');

    // Nodemailer transporter (same Gmail SMTP used for careers)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from:    `"Cytogenex Website" <${process.env.GMAIL_USER}>`,
      to:      CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Enquiry – ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1796CF 0%, #0C2364 100%); padding: 32px 36px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">
              ✉️ New Contact Form Enquiry
            </h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">
              Submitted via the Cytogenex website contact form
            </p>
          </div>

          <!-- Body -->
          <div style="background: #f8fafc; padding: 32px 36px;">
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
                <td style="padding: 12px 0; font-weight: 600; color: #0f172a; font-size: 15px;">${phone || 'Not provided'}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 20px;">
              <p style="color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 10px;">Message</p>
              <p style="color: #0f172a; margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f1f5f9; padding: 16px 36px; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This email was sent automatically from the Cytogenex website contact form.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please try again.' },
      { status: 500 },
    );
  }
}
