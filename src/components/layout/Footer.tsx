"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Kiri: Logo */}
        <Link href="/" className="font-mono text-sm group">
          <span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
            {"<"}
          </span>
          <span className="text-slate-500 mx-1 group-hover:text-slate-300 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
            {"/>"}
          </span>
        </Link>

        {/* Tengah: Credit */}
        <p className="font-mono text-xs text-slate-600">
          © {currentYear} — Designed & built by{" "}
          <span className="text-slate-500">{siteConfig.name}</span>
        </p>

        {/* Kanan: Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs text-slate-600 hover:text-cyan-400 transition-colors"
        >
          back to top ↑
        </button>
      </div>
    </footer>
  );
}
