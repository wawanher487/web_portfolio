import AboutSection from "@/components/sections/About/AboutSection";
import ContactSection from "@/components/sections/Contact/ContactSection";
import HeroSection from "@/components/sections/Hero/HeroSection";
import ProjectsSection from "@/components/sections/Projects/ProjectsSection";
import SkillSection from "@/components/sections/Skill/SkillSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
