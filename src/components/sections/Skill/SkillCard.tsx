import { SkillCategory } from "@/types";
import SkillBar from "./skillBar";

export default function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: SkillCategory;
  index: number;
  isInView: boolean;
}) {
  const borderColorMap = {
    cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/5",
    indigo: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
    violet: "hover:border-violet-500/40 hover:shadow-violet-500/5",
  };

  const iconColorMap = {
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
    violet: "text-violet-400",
  };

  return (
    <div
      className={`p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:shadow-lg transition-all duration-500 ${borderColorMap[skill.color]}`}
      style={{
        //staggered fade-up: setiap card muncul 150ms setalah card sebelumnya
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30)",
        transition: `all 0.6s ease-out ${index * 150}ms`,
      }}
    >
      {/* card header */}
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-xl ${iconColorMap[skill.color]}`}>
          {skill.icon}
        </span>
        <h3 className="font-mono font-semibold text-white">{skill.category}</h3>
      </div>

      {/* skill bars */}
      <div className="space-y-4">
        {skill.items.map((item, i) => (
          <SkillBar
            key={item.name}
            name={item.name}
            level={item.level}
            color={skill.color}
            delay={index * 150 + i * 80}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}
