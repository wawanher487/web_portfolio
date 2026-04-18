import { PricingPackage } from "@/types";
import { Check, X } from "lucide-react";

export default function FeatureRow({
  text,
  included,
  color,
}: {
  text: string;
  included: boolean;
  color: PricingPackage["color"];
}) {
  const checkColorMap = {
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
    violet: "text-violet-400",
  };

  return (
    <li className="flex items-start gap-3">
      {included ? (
        <Check
          size={15}
          className={`mt-0.5 shrink-0 ${checkColorMap[color]}`}
        />
      ) : (
        <X size={15} className="mt-0.5 shrink-0 text-slate-700" />
      )}
      <span
        className={`text-sm leading-snug ${included ? "text-slate-300" : "text-slate-600 line-through"}`}
      >
        {text}
      </span>
    </li>
  );
}
