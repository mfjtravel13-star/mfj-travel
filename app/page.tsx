import Link from 'next/link';
import { ArrowRight, BadgeCheck, Compass, ShieldCheck, Star, Sparkles, MapPinned, PhoneCall, PlaneTakeoff } from 'lucide-react';

const reviewCards = [
  {
    name: 'Aoife M.',
    quote: 'Exceptional service from Shannon to Galway. The car was spotless and the driver was professional and kind.',
  },
  {
    name: 'Colm D.',
    quote: 'Perfect for our Connemara weekend. On-time, comfortable, and beautifully presented.',
  },
];

const serviceHighlights = [
  'Luxury airport transfers',
  'Galway and Connemara day trips',
  'Corporate travel and VIP service',
  'Flexible itineraries and luggage support',
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="section-shell grid items-center gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-gold">
              <Sparkles size={16} /> Premium travel in Ireland
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Luxury transfers across Galway, Connemara and Ireland&apos;s airports.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-300">
                MFJ Travel &amp; Transfers offers elegant private chauffeur service for airport arrivals, business travel, weddings and unforgettable scenic journeys.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
                Book your transfer <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="rounded-full border border-gold/30 px-6 py-3 font-semibold text-gold transition hover:bg-gold/10">
                Explore services
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {serviceHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                  <BadgeCheck className="mb-2 text-gold" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-float card-sheen p-6 sm:p-8">
            <div className="rounded-3xl border border-gold/20 bg-black/70 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">Popular routes</p>
                  <h2 className="font-display text-2xl text-white">Comfort from gate to destination</h2>
                </div>
                <PlaneTakeoff className="text-gold" />
              </div>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 p-3">
                  <span>Shannon Airport → Galway</span>
                  <span className="font-semibold text-gold">45 min</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 p-3">
                  <span>Dublin Airport → Galway</span>
                  <span className="font-semibold text-gold">2h 30m</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 p-3">
                  <span>Knock Airport → Connemara</span>
                  <span className="font-semibold text-gold">2h 15m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card-sheen p-8">
            <ShieldCheck className="mb-4 text-gold" size={28} />
            <h3 className="font-display text-2xl text-white">Reliable and punctual</h3>
            <p className="mt-2 text-zinc-300">Professional chauffeurs, flight monitoring and dependable arrivals for every journey.</p>
          </div>
          <div className="card-sheen p-8">
            <Compass className="mb-4 text-gold" size={28} />
            <h3 className="font-display text-2xl text-white">Local expertise</h3>
            <p className="mt-2 text-zinc-300">We know Galway, Connemara and the best routes across the west coast.</p>
          </div>
          <div className="card-sheen p-8">
            <MapPinned className="mb-4 text-gold" size={28} />
            <h3 className="font-display text-2xl text-white">Door-to-door comfort</h3>
            <p className="mt-2 text-zinc-300">From airport terminals to remote coastal stops, your transfer is seamless.</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Client reviews</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Google Reviews from travellers across the west of Ireland.</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-sm text-zinc-300">
              <Star className="fill-gold text-gold" size={16} /> Rated 5.0 for comfort and punctuality
            </div>
            <p className="max-w-xl text-zinc-300">
              Read recent feedback from guests who chose MFJ for premium airport and countryside transfers.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {reviewCards.map((review) => (
            <div key={review.name} className="card-sheen p-8">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-zinc-300">“{review.quote}”</p>
              <p className="mt-6 font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
