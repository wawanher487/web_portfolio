"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useContactForm } from "@/hooks/useContactForm";
import { siteConfig } from "@/lib/data";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// ============================================================
// Sub-component: Form Input Field
// Reusable agar tidak repeat styling untuk setiap input
// ============================================================
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
}) {
  const baseClass = `
    w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3
    font-mono text-sm text-slate-300 placeholder-slate-600
    focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900
    transition-all duration-200
  `;

  return (
    <div>
      <label className="block font-mono text-xs text-slate-500 mb-2 uppercase tracking-wider">
        {label} {required && <span className="text-cyan-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}

// ============================================================
// Main Component: ContactSection
// ============================================================
export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Semua logika form ada di hook — component ini bersih
  const { fields, status, errorMsg, handleChange, handleSubmit } =
    useContactForm();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/wawanher487",
      href: siteConfig.github,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/wawanhermawan24",
      href: siteConfig.linkedin,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "0819-2889-7858",
      href: siteConfig.whatsapp,
    },
  ];

  return (
    <section id="contact" className="py-15 px-6 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <SectionHeader
          label="05. contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
        />

        {/* Pesan ajakan */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400">
              open to opportunities
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            I&apos;m currently available for freelance projects and full-time
            positions. If you have an exciting project, let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* ── Kiri: Info (2/5 lebar) ── */}
          <div
            className="lg:col-span-2 space-y-8"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.6s ease-out",
            }}
          >
            {/* Contact Links */}
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon
                      size={16}
                      className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500">{label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Kanan: Form (3/5 lebar) ── */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            {/* Success State */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 p-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-center">
                <CheckCircle size={48} className="text-cyan-400" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              // Form State
              <form
                onSubmit={handleSubmit}
                className="space-y-3 p-5 rounded-2xl border border-slate-800 bg-slate-900/40"
              >
                {/* Row: Name + Email side by side */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <FormField
                  label="Message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  isTextarea
                />

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    w-full flex items-center justify-center gap-2
                    px-6 py-3.5 bg-cyan-500 text-surface-900
                    font-mono font-semibold text-sm rounded-xl
                    hover:bg-cyan-400 transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25
                  "
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
