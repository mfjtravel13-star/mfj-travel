import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Transfer | MFJ Travel & Transfers',
  description: 'Reserve your private transfer with MFJ Travel & Transfers for Galway, Connemara and Irish airports.',
};

export default function BookingPage() {
  return (
    <main className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Booking</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">Reserve your premium transfer.</h1>
          <p className="text-lg text-zinc-300">Please share your journey details below and we&apos;ll confirm availability promptly.</p>
        </div>
        <form className="card-sheen p-8 text-zinc-300">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-white">Name</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Phone</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Email</span>
              <input type="email" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Pickup location</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Destination</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Date</span>
              <input type="date" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Time</span>
              <input type="time" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Passengers</span>
              <input type="number" min="1" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Approximate luggage</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white">Flight number (optional)</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" />
            </label>
            <label className="space-y-2 text-sm md:col-span-2">
              <span className="text-white">Additional notes</span>
              <textarea rows={4} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none ring-0" />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
            Request booking
          </button>
        </form>
      </div>
    </main>
  );
}
