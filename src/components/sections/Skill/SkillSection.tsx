"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillCard from "./SkillCard";
import { SkillCategory } from "@/types";

export default function SkillSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <SectionHeader
          label="02. skills"
          title="What I work With"
          subtitle="Technologies and tools I use to build production-grade applications."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.category}
              skill={skill as SkillCategory}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
