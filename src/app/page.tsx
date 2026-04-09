import AboutSection from "@/components/sections/About/AboutSection";
import HeroSection from "@/components/sections/Hero/HeroSection";
import SkillSection from "@/components/sections/Skill/SkillSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection/>
      {/* Section lain akan kita tambahkan di sini nanti */}
    </main>
  );
}
