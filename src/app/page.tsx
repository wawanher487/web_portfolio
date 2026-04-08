export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-sans text-4xl font-bold text-primary-600">
        Font Inter + Tailwind v4 works!
      </h1>
      <p className="font-mono text-gray-500">JetBrains Mono untuk kode</p>
      <div className="bg-primary-500 text-white px-6 py-3 rounded-lg">
        Custom color primary-500 works!
      </div>
    </main>
  );
}
