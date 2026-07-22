import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | MFJ Travel & Transfers',
  description: 'Private airport transfers, tours, corporate travel and special occasion transport in Galway and Connemara.',
};

const services = [
  {
    title: 'Airport transfers',
    description: 'Elegant pickups and drop-offs from Shannon Airport, Dublin Airport and Knock Airport.',
  },
  {
    title: 'Galway & Connemara journeys',
    description: 'Scenic and efficient transfers to hotels, villas, attractions and remote country locations.',
  },
  {
    title: 'Corporate & executive travel',
    description: 'Professional service for meetings, conferences, VIP clients and business itineraries.',
  },
  {
    title: 'Weddings & special occasions',
    description: 'Luxury transport for celebrations, guest transfers and special event schedules.',
  },
];

export default function ServicesPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Services</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Tailored transport for every journey.</h1>
        <p className="mt-4 text-lg text-zinc-300">From airport arrivals to day trips and bespoke itineraries, every ride is crafted with comfort and attention to detail.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="card-sheen p-8">
            <h2 className="font-display text-2xl text-white">{service.title}</h2>
            <p className="mt-3 text-zinc-300">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
