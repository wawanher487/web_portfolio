"use client";

import { Project } from "@/types";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  //State untuk hover - butuh untu efe pada child elements
  const [isHovered, setIsHovered] = useState(false);

  const accentMap = {
    orange: {
      border: "hover:border-orange-500/40",
      shadow: "hover:shadow-orange-500/10",
      number: "text-orange-500/10",
      numberHov: "text-orange-500/20",
      badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      arrow: "text-orange-400",
      text: "hover:text-orange-400",
      glow: "from-orange-500/5",
    },
    green: {
      border: "hover:border-green-500/40",
      shadow: "hover:shadow-green-500/10",
      number: "text-green-500/10",
      numberHov: "text-green-500/20",
      badge: "bg-green-500/10 text-green-400 border-green-500/20",
      arrow: "text-green-400",
      text: "hover:text-green-400",
      glow: "from-green-500/5",
    },
    cyan: {
      border: "hover:border-cyan-500/40",
      shadow: "hover:shadow-cyan-500/10",
      number: "text-cyan-500/10",
      numberHov: "text-cyan-500/20",
      badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      arrow: "text-cyan-400",
      text: "hover:text-cyan-400",
      glow: "from-cyan-500/5",
    },
  };

  const accent = accentMap[project.accentColor];

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 hover:shadow-xl transition-all duration-500 overflow-hidden ${accent.border} ${accent.shadow}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s ease-out ${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow saat hover */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Nomor besar di backgroun - pure dekoratif */}
      <div
        className={`absolute -top-4 -right-2 font-mono font-bold text-8xl select-none transition-all duration-500 pointer-events-none ${isHovered ? accent.numberHov : accent.number}`}
      >
        {project.number}
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header: Featured badge + links */}
        <div className="flex items-start justify-between mb-4">
          {project.featured && (
            <span
              className={`px-2.5 py-1 text-xs font-mono rounded-full border ${accent.badge}`}
            >
              featured
            </span>
          )}

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-1"
              aria-label="Github repository"
              //agar link tidak trigger event lain diparent element
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={18} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors p-1"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLink size={18} />
              </a>
            )}
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* description - show shord desc by default, long on hover */}
        <div className="mb-6 flex-1">
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* extra detail muncul saat hover dengan smooth transiton */}
          <p
            className="text-slate-500 text-sm leading-relaxed mt-3 transition-all duration-300"
            style={{
              maxHeight: isHovered ? "120px" : "0px",
              opacity: isHovered ? 1 : 0,
              overflow: "hidden",
            }}
          >
            {project.longDescription}
          </p>
        </div>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 font-mono text-xs text-slate-400 bg-slate-800/80 border border-slate-700/50 rounded-md ${accent.border} ${accent.text} transition-colors`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* footer link */}
        <div
          className={`flex items-center gap-2 text-sm font-mono transition-all duration-300 ${isHovered ? accent.arrow : "text-slate-600"}`}
        >
          <span>View project</span>
          <ArrowRight
            size={14}
            className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
