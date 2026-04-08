"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutData } from "@/lib/data";

// ============================================================
// Konsep baru: useInView dari Framer Motion
// Trigger animasi saat elemen masuk viewport
// ============================================================

export default function AboutSection() {
  // useRef untuk menunjuk ke elemen DOM yang ingin kita pantau
  const sectionRef = useRef<HTMLDivElement>(null);

  // useInView: returns true saat elemen masuk viewport
  // once: true → animasi hanya terjadi sekali
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Subtle separator line dari section sebelumnya */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-cyan-500/20" />

      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <SectionHeader
          label="01. about me"
          title="Who I Am"
          subtitle="A little bit about my background and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Kiri: Bio Text ── */}
          <div
            style={{
              // Animasi slide-in dari kiri saat masuk viewport
              transform: isInView ? "translateX(0)" : "translateX(-40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s ease-out",
            }}
          >
            {/* Paragraf bio */}
            <div className="space-y-4 mb-10">
              {aboutData.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tech stack yang sering dipakai */}
            <div className="mb-10">
              <p className="font-mono text-xs text-slate-500 mb-4 uppercase tracking-wider">
                Technologies I work with
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "NestJS",
                  "Node.js",
                  "Laravel",
                  "PostgreSQL",
                  "Supabase",
                  "Tailwind CSS",
                  "MongoDB",
                  "Docker",
                  "Vercel"
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    {/* Triangle aksen — signature visual gaya dev */}
                    <span className="text-cyan-400 text-xs">▸</span>
                    <span className="font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Kanan: Highlight Cards ── */}
          <div
            style={{
              transform: isInView ? "translateX(0)" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              // Delay 200ms agar masuk setelah sisi kiri
              transition: "all 0.7s ease-out 0.2s",
            }}
            className="space-y-4"
          >
            {aboutData.highlights.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}

            {/* Terminal-style card — menambah kesan developer */}
            <div className="mt-6 p-4 rounded-xl border border-slate-800 bg-[#0d0d14] font-mono text-sm">
              {/* Dot-dot-dot header terminal */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-cyan-400">const</span>
                  <span className="text-white"> dev </span>
                  <span className="text-slate-500">= {"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-indigo-400">passion</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-green-400">
                    &quot;building great products&quot;
                  </span>
                  <span className="text-slate-500">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-indigo-400">available</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-cyan-400">true</span>
                </p>
                <p>
                  <span className="text-slate-500">{"}"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
