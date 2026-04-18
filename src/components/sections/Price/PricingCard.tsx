import { PricingPackage } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";
import FeatureRow from "./FeatureRow";

export default function PricingCard({
  pkg,
  index,
  isInView,
}: {
  pkg: PricingPackage;
  index: number;
  isInView: boolean;
}) {
  const colorMap = {
    cyan: {
      border: "border-cyan-500/30",
      borderHover: "hover:border-cyan-500/60",
      badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      price: "text-cyan-400",
      glow: "shadow-cyan-500/10",
      btn: "bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f]",
      btnShadow: "hover:shadow-cyan-500/25",
      subtitleDot: "bg-cyan-400",
    },
    indigo: {
      border: "border-indigo-500/40",
      borderHover: "hover:border-indigo-500/70",
      badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      price: "text-indigo-400",
      glow: "shadow-indigo-500/15",
      btn: "bg-indigo-500 hover:bg-indigo-400 text-white",
      btnShadow: "hover:shadow-indigo-500/25",
      subtitleDot: "bg-indigo-400",
    },
    violet: {
      border: "border-violet-500/30",
      borderHover: "hover:border-violet-500/60",
      badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      price: "text-violet-400",
      glow: "shadow-violet-500/10",
      btn: "bg-violet-500 hover:bg-violet-400 text-white",
      btnShadow: "hover:shadow-violet-500/25",
      subtitleDot: "bg-violet-400",
    },
  };

  const c = colorMap[pkg.color];

  const isPopular = pkg.popular;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-slate-900/40 transition-all duration-500 overflow-hidden ${c.border} ${c.borderHover} ${isPopular ? "shadow-xl ${c.glow} bg-slate-900/80 ring-1 ring-indigo-500/40" : "hover:shadow-lg"}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40)",
        transition: `all 0.6s ease-out ${index * 120}ms`,
      }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono border-b border-x rounded-b-xl ${c.badge}`}
          >
            <Sparkles size={11} />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`flex flex-col h-full p-6 ${isPopular ? "pt-10 pb-8" : ""}`}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-1.5 h-1.5 rounded-full ${c.subtitleDot}`} />
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              {pkg.subtitle}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {pkg.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-slate-800">
          <div className={`font-mono text-2xl font-bold ${c.price}`}>
            {pkg.priceRange}
          </div>
          <p className="text-xs text-slate-600 mt-1 font-mono">
            * adjusted for complexity
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {pkg.features.map((feature) => (
            <FeatureRow
              key={feature.text}
              text={feature.text}
              included={feature.included}
              color={pkg.color}
            />
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={`https://wa.me/6281945085681?text=Halo, saya tertarik dengan ${pkg.name} Package`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${c.btn} ${c.btnShadow}`}
        >
          {pkg.cta} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
