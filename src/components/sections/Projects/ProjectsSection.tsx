"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  //pisahkan featured vs non-featured
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-15 px-6 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <SectionHeader
          label="03. projects"
          title="Things I've Built"
          subtitle="A selection of projects that showcase my problem-solving approach and technical range"
        />

        {/* featured Projects - layout besar */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
