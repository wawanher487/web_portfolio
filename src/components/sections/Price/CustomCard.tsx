import { pricingData } from "@/lib/data";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CustomCard({ isInView }: { isInView: boolean }) {
  const { customCard } = pricingData;
  return (
    <div
      className="relative rounded-2xl border border-dashed border-slate-700 hover:border-slate-500 bg-transparent transition-all duration-500 overflow-hidden group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.6s ease-out 0.5s",
      }}
    >
      {/* Subtle background on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-800/0 to-slate-800/0 group-hover:from-slate-800/20 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="relative p-8 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Kiri: Info */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              flexible engagement
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {customCard.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">
            {customCard.description}
          </p>

          {/* Points dalam dua kolom */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {customCard.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <span className="text-slate-600">▸</span>
                <span className="font-mono text-xs">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kanan: Price placeholder + CTA */}
        <div className="flex flex-col items-center md:items-end gap-4 shrink-0 mx-auto">
          {/* No price — intentional */}
          <div className="text-center md:text-right">
            <div className="font-mono text-2xl font-bold text-slate-600">
              Let&apos;s discuss
            </div>
            <p className="text-xs text-slate-700 font-mono mt-1">
              scope Prices are based on the scope of work
            </p>
          </div>

          <a
            href={`https://wa.me/6281945085681?text=Halo, saya ingin diskusi tentang kebutuhan custom`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-mono text-sm rounded-xl transition-all hover:-translate-y-0.5 group/btn"
          >
            <MessageCircle size={15} />
            {customCard.cta}
            <ArrowRight
              size={13}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
