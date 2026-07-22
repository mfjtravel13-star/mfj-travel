import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet | MFJ Travel & Transfers',
  description: 'Discover the executive vehicles used by MFJ Travel & Transfers for premium private travel.',
};

const fleet = [
  {
    name: 'Executive Saloon',
    detail: 'Ideal for business travel and airport transfers with refined comfort.',
  },
  {
    name: 'Luxury Estate',
    detail: 'Perfect for families and travellers with extra luggage.',
  },
  {
    name: 'Premium MPV',
    detail: 'A spacious option for groups and special occasion transport.',
  },
];

export default function FleetPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Fleet</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Vehicles designed for elegance and practicality.</h1>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {fleet.map((vehicle) => (
          <div key={vehicle.name} className="card-sheen p-8">
            <h2 className="font-display text-2xl text-white">{vehicle.name}</h2>
            <p className="mt-3 text-zinc-300">{vehicle.detail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
