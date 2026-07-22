import type { Metadata } from 'next';
import { PhoneCall, Mail, MapPinned } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact MFJ Travel & Transfers',
  description: 'Get in touch with MFJ Travel & Transfers for bookings and enquiries across Galway and Connemara.',
};

export default function ContactPage() {
  return (
    <main className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">Speak with our team.</h1>
          <p className="text-lg text-zinc-300">For bookings, special requests or travel planning, contact us directly.</p>
          <div className="space-y-3 text-zinc-300">
            <div className="flex items-center gap-3"><PhoneCall className="text-gold" size={18} /> +353 86 000 0000</div>
            <div className="flex items-center gap-3"><Mail className="text-gold" size={18} /> hello@mfjtravel.com</div>
            <div className="flex items-center gap-3"><MapPinned className="text-gold" size={18} /> Galway, Ireland</div>
          </div>
        </div>
        <div className="card-sheen p-8">
          <iframe
            src="https://www.google.com/maps?q=Galway%20Ireland&z=11&output=embed"
            title="Google Maps MFJ Travel & Transfers"
            loading="lazy"
            className="h-[360px] w-full rounded-3xl border-0"
          />
        </div>
      </div>
    </main>
  );
}
