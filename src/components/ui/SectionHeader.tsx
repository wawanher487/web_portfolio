// Tidak perlu "use client" — tidak ada interaktivitas
// Ini murni Server Component

interface SectionHeaderProps {
  label: string; // teks kecil di atas, contoh: "01. about"
  title: string; // judul besar
  subtitle?: string; // deskripsi opsional
}

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {/* Label dengan gaya kode */}
      <p className="font-mono text-cyan-400 text-sm mb-3">{label}</p>

      {/* Judul dengan garis aksen */}
      <div className="flex items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        {/* Garis dekoratif di samping judul */}
        <div className="flex-1 h-px bg-linear-to-r from-cyan-500/30 to-transparent max-w-xs" />
      </div>

      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
