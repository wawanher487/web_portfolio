"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

//Data Navigasi Navbar
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  //cek scroll user
  const [isScrolled, setIsScrolled] = useState(false);
  //cek mobile device
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //jika scroll lebih dari 20px, setIsScrolled = true
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    //agar function cleanup dan tidak memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //[] = hanya dijalankan useEffect sekali saat component pertama mount

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-surface-900/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/20" : "bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* logo  */}
        <Link
          href="/"
          className="font-mono text-sm font-bold group hover:shadow-sm shadow-cyan-500 p-1"
        >
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {"<"}
          </span>
          <span className="text-white mx-1">{siteConfig.name}</span>
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {">"}
          </span>
        </Link>

        {/* Dekstop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="text-cyan-500/50 text-xs mr-1">0{i + 1}.</span>
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="https://resume.wawanhermawan.dev/"
              target="_blank"
              className="px-4 py-2 text-sm font-mono text-cyan-400 border border-cyan-400/50 rounded hover:bg-cyan-400/20 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* mobile: humberger button  */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* mobile menu - muncul dibawah navbar saat hamburger diklik */}
      {isMobileOpen && (
        <div className="md:hidden bg-surface-900/95 backdrop-blur-xl border-t border-white/70">
          <ul className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMobileOpen(false)} //tutu menu setelah diklik
                >
                  <span className="text-cyan-500/50 text-xs mr-2">
                    0{i + 1}.
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <span className="text-cyan-500/50 text-xs mr-2">05.</span>
              <a
                href="https://resume.wawanhermawan.dev/"
                target="_blank"
                className="font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
