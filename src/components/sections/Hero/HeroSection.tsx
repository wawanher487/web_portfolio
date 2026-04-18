"use client";

import { siteConfig } from "@/lib/data";
import Link from "next/link";
import GridBackground from "./GridBackground";
import TypingText from "./TypingAnimation";
import PhotoCard from "./PhotoCard";
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function HeroSection() {
  const typingTexts = [
    "Fullstack Developer",
    "Next.js Specialist",
    "Building Scalable Web Apps",
  ];

  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Businesses Helped" },
  ];

  const SocialLinks = [
    { icon: FaLinkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: FaGithubSquare, href: siteConfig.github, label: "Github" },
    { icon: FaWhatsapp, href: siteConfig.whatsapp, label: "WhatsApp" },
    {
      icon: SiGmail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`,
      label: "Email",
    },
  ];
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden  py-15 lg:pt-0"
    >
      <GridBackground />
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* kiri - Teks */}
          <div className="flex-1 max-w-2xl">
            {/* status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* sapaan */}
            <p className="font-mono text-slate-400 text-sm mb-4 animate-fade-up">
              Hi there 👋 I&apos;m {siteConfig.name}
            </p>

            {/* Nama besar */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-fade-up">
              I Build High-Performance Websites That Grow Your Business
            </h1>

            {/* Typing animation */}
            <div className="text-2xl md:text-3xl font-bold mb-6 h-10">
              <TypingText texts={typingTexts} />
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-lg leading-relaxed mb-3 max-w-lg">
              {siteConfig.tagline}
            </p>

            {/* CTA Butttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="
              group relative px-7 py-3 bg-cyan-500 text-surface-900 font-mono font-semibold text-sm rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
              >
                {/* shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                View My Projects
              </Link>

              <Link
                href="#contact"
                className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-mono text-sm rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>

            {/* Sosial Links */}
            <div className="flex items-center gap-2 mb-6 mt-3">
              {SocialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <div className="h-px flex-1 bg-slate-800" />
            </div>

            {/* Stats ketika mobile */}
            <div className="lg:hidden flex gap-8 justify-between">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kanan: Photo Card ── */}
          <div className="flex flex-col items-center gap-6">
            <PhotoCard />
            {/* Stats */}
            <div className="hidden lg:flex gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
