"use client";

import { siteConfig } from "@/lib/data";
import { ArrowDown, Computer, LinkIcon, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-25 md:pt-16"
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        <p
          className="font-mono text-primary-600 text-sm animate-fade-up
        "
        >
          Hi, My name is
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          style={{ animationDelay: "100ms" }}
        >
          {siteConfig.name}
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 dark:text-gray-500 mb-6 animate-fade-up">
          {siteConfig.title}
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 animate-fade-up leading-relaxed">
          {siteConfig.tagline}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link
          href="#projects"
          className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="#contact"
          className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      {/* sosial links */}
      <div className="flex items-center justify-center gap-6 mb-16">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
          aria-label="GitHub"
        >
          <Computer size={22} />
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
          aria-label="LinkedIn"
        >
          <LinkIcon size={22} />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-gray-500 hover:text-primary-600 transition-colors"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs font-mono">scroll down</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
