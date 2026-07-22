import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-20 text-center">
      <div className="card-sheen max-w-xl p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-3 font-display text-4xl text-white">Page not found</h1>
        <p className="mt-4 text-zinc-300">The page you requested could not be found. Return home and plan your next journey.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-black">
          Back home
        </Link>
      </div>
    </main>
  );
}
