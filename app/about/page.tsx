import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MFJ Travel & Transfers',
  description: 'Learn about the luxury chauffeur service behind MFJ Travel & Transfers in Galway and Connemara.',
};

export default function AboutPage() {
  return (
    <main className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">About us</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">A refined travel experience from start to finish.</h1>
          <p className="text-lg text-zinc-300">
            MFJ Travel &amp; Transfers is a premium transport provider serving Galway, Connemara and major airports with understated luxury and attentive care.
          </p>
        </div>
        <div className="card-sheen p-8 text-zinc-300">
          <p>
            Our service is built around comfort, punctuality and local knowledge. Whether you are arriving from Shannon, Dublin or Knock, or travelling to a hotel, wedding venue or remote destination, we create a smooth and polished journey.
          </p>
          <div className="mt-6 grid gap-3">
            <div className="rounded-2xl border border-gold/20 bg-black/40 p-4">Professional, discreet chauffeur service</div>
            <div className="rounded-2xl border border-gold/20 bg-black/40 p-4">Airport monitoring and flexible scheduling</div>
            <div className="rounded-2xl border border-gold/20 bg-black/40 p-4">Comfortable vehicles for solo travellers and larger groups</div>
          </div>
        </div>
      </div>
    </main>
  );
}
