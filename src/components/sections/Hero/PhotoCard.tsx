import { siteConfig } from "@/lib/data";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function PhotoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    // Posisi mouse relatif terhadap tengah card (nilai -0.5 sampai 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Konversi ke derajat rotasi (max 12 derajat)
    setTransform({ rotateX: -y * 12, rotateY: x * 12 });
  };

  const handleMouseLeave = () => {
    // Kembalikan ke posisi normal dengan smooth transition
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-80 cursor-pointer animate-float"
      style={{ perspective: "1000px" }}
    >
      {/* Card utama dengan 3D transform */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-500/20 bg-surface-800"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.5),
            0 0 40px rgba(34,211,238,0.08),
            inset 0 1px 0 rgba(255,255,255,0.05)
          `,
        }}
      >
        {/* Foto — ganti src dengan foto kamu */}
        <Image
          src="/photo.jpg"
          alt={siteConfig.name}
          fill
          className="object-cover object-top"
          priority
        />

        {/* Overlay gradient di bawah foto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Info di bawah foto */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-mono text-xs text-cyan-400 mb-1">
            Available for work
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <MapPin size={10} />
            <span>Indonesia</span>
          </div>
        </div>

        {/* Shine effect — lapisan putih transparan yang bergerak sesuai mouse */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${(transform.rotateY / 12 + 0.5) * 100}% ${(-transform.rotateX / 12 + 0.5) * 100}%,
              rgba(255,255,255,0.04) 0%,
              transparent 60%
            )`,
          }}
        />
      </div>

      {/* Badge floating di pojok — efek kedalaman 3D */}
      <div
        className="absolute -top-3 -right-3 bg-[#0f0f1a] border border-cyan-500/30 rounded-xl px-3 py-2 font-mono text-xs"
        style={{ transform: "translateZ(20px)" }}
      >
        <span className="text-cyan-400">{"{ "}</span>
        <span className="text-slate-300">open to work</span>
        <span className="text-cyan-400">{" }"}</span>
      </div>
    </div>
  );
}
