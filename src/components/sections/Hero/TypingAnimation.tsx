import { useEffect, useState } from "react";

export default function TypingText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Sedang mengetik
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === currentText.length) {
            // Selesai mengetik, tunggu 2 detik lalu hapus
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Sedang menghapus
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex - 1 === 0) {
            // Selesai menghapus, pindah ke teks berikutnya
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-cyan-400">
      {displayText}
      {/* Cursor berkedip */}
      <span className="animate-typing-cursor ml-0.5 inline-block w-0.5 h-8 bg-cyan-400 align-middle" />
    </span>
  );
}
