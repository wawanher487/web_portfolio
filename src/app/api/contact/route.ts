// src/app/api/contact/route.ts

// Ini adalah Server-side code — tidak pernah dikirim ke browser
// Aman untuk taruh API key di sini (via env variable)

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Tipe data yang kita expect dari form
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Named export "POST" → Next.js otomatis map ke HTTP POST method
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body dari request
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validasi sederhana di server
    // Selalu validasi di server — jangan hanya rely pada client-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validasi format email dengan regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Kirim email via Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0f; color: #e2e8f0; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #22d3ee; margin-top: 0;">New Contact Form Submission</h2>
          <hr style="border-color: #1e293b; margin: 16px 0;" />
          <p><strong style="color: #94a3b8;">From:</strong> ${name}</p>
          <p><strong style="color: #94a3b8;">Email:</strong> ${email}</p>
          <p><strong style="color: #94a3b8;">Message:</strong></p>
          <div style="background: #0f172a; padding: 16px; border-radius: 8px; border-left: 3px solid #22d3ee; margin-top: 8px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
