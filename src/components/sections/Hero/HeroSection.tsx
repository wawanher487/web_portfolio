"use client";

import { siteConfig } from "@/lib/data";
import { ArrowDown, Computer, LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import GridBackground from "./GridBackground";
import TypingText from "./TypingAnimation";
import PhotoCard from "./PhotoCard";

export default function HeroSection() {
  const typingTexts = [
    "Fullstack Developer",
    "Web & Digital Growth Specialist",
    "Next.js & Node.js Expert",
    "Helping Businesses Grow Through Technology",
  ];

  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Businesses Helped" },
  ];
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-surface-900 pt-15 lg:pt-0"
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
            <p className="font-mono text-slate-400 text-sm mb-3 animate-fade-up">
              Hi there 👋 I&apos;m
            </p>

            {/* Nama besar */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fade-up">
              {siteConfig.name}
            </h1>

            {/* Typing animation */}
            <div className="text-2xl md:text-3xl font-bold mb-6 h-10">
              <TypingText texts={typingTexts} />
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              {siteConfig.tagline}
            </p>

            {/* CTA Butttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="#projects"
                className="
              group relative px-6 py-3 bg-cyan-500 text-surface-900 font-mono font-semibold text-sm rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
              >
                {/* shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                View My Work →
              </Link>

              <Link
                href="#contact"
                className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-mono text-sm rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats ketika mobile */}
            <div className="lg:hidden flex gap-8 justify-center">
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
        {/* Scroll indicator */}
        <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 lg:flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
