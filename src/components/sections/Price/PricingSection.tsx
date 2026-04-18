"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { pricingData } from "@/lib/data";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PricingCard from "./PricingCard";
import CustomCard from "./CustomCard";

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-15 px-6 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <SectionHeader
          label="04. pricing"
          title="Transparent Pricing"
          subtitle="Clear pricing, clear scope. No hidden fees."
        />

        {/* noted disclaimer */}
        <div className="flex items-center gap-3 mb-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
          <span className="text-xl shrink-0">💡</span>
          <p className="text-sm text-slate-400">
            The prices listed above are preliminary estimates. The final price
            will be determined after a brief consultation to understand your
            specific needs.{" "}
            <span className="text-cyan-400">Free initial consultation.</span>
          </p>
        </div>

        {/* 3 pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 items-start">
          {pricingData.packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} isInView={isInView} />
          ))}
        </div>

        {/* custom Card - full widht in bottom  */}
        <CustomCard isInView={isInView} />

        <div className="mt-10">
          <SectionHeader
            label=""
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our website development, SEO, and digital marketing services."
          />
          {/* Mini FAQ */}
          <div className=" grid md:grid-cols-2 gap-4">
            {[
              {
                q: "How long does the development take?",
                a: "Starter: 3–5 business days. Business: 7–14 days. Professional: 2–4 weeks. Depends on complexity and feedback speed.",
              },
              {
                q: "What does 1 revision mean?",
                a: "One feedback session after the first preview, covering up to 5 minor changes (colors, text, light layout adjustments).",
              },
              {
                q: "What do you mean by client-provided domain?",
                a: "You purchase the domain yourself (GoDaddy, Niagahoster, etc.). I will handle DNS setup and deployment to hosting.",
              },
              {
                q: "Is there any warranty after launch?",
                a: "Yes, 7 days of free bug fixes after launch. For long-term maintenance, we can discuss a monthly plan.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <p className="font-mono text-sm text-white mb-2">▸ {item.q}</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
