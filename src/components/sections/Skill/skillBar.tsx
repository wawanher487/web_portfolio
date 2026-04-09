import { SkillCategory } from "@/types";

export default function SkillBar({
  name,
  level,
  color,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  color: SkillCategory["color"];
  delay: number;
  isInView: boolean;
}) {
  //map color string ke class tailwind
  const colorMap = {
    cyan: { bar: "bg-cyan-400", text: "text-cyan-400" },
    indigo: { bar: "bg-indigo-400", text: "text-indigo-400" },
    violet: { bar: "bg-violet-400", text: "text-violet-400" },
  };

  const colors = colorMap[color];

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-300 font-mono group-hover:text-white transition-colors">
          {name}
        </span>
        <span className={`text-xs font-mono ${colors.text}`}>{level}%</span>
      </div>

      {/* track bar (bacground) */}
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        {/* fil bar dengan animasi  */}
        <div
          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
          style={{
            //width dimulai dari 0, menjadi "level%" saat isInView true
            // delay berbeda tiap bar agar animasinya staggered (berurutan)
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: isInView ? `0 0 8px currentColor` : "none",
          }}
        />
      </div>
    </div>
  );
}
