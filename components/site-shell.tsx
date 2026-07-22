import Link from 'next/link';
import type { Route } from 'next';
import { Menu, PhoneCall, MessageCircle } from 'lucide-react';

const navItems: Array<{ href: Route; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/booking', label: 'Booking' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-black/80 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">MFJ</div>
            <div>
              <p className="font-display text-xl text-white">MFJ Travel &amp; Transfers</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Luxury private transport</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/booking" className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-gold lg:inline-flex">
            <PhoneCall size={16} /> Book now
          </Link>
          <button className="rounded-full border border-gold/30 p-2 text-gold lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </header>

      {children}

      <footer className="border-t border-gold/20 bg-black/70">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="font-display text-2xl text-white">MFJ Travel &amp; Transfers</p>
            <p className="mt-3 max-w-md text-zinc-400">
              Premium chauffeur service for Galway, Connemara, Shannon Airport, Dublin Airport and Knock Airport.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick links</h3>
            <ul className="mt-3 space-y-2 text-zinc-400">
              {navItems.map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-zinc-400">
              <li>hello@mfjtravel.com</li>
              <li>+353 86 000 0000</li>
              <li>Galway, Ireland</li>
            </ul>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/353860000000?text=Hello%20MFJ%20Travel%20and%20Transfers%2C%20I%20would%20like%20to%20book%20a%20transfer."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg shadow-green-500/20"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  );
}
