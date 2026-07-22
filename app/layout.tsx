import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'MFJ Travel & Transfers | Luxury Transfers in Galway & Connemara',
  description:
    'Luxury private transfers across Galway, Connemara, Shannon Airport, Dublin Airport and Knock Airport with premium service.',
  keywords: [
    'Galway transfers',
    'Connemara transport',
    'Shannon Airport transfer',
    'Dublin Airport transfer',
    'Knock Airport transfer',
    'luxury chauffeur',
  ],
  alternates: {
    canonical: 'https://mfjtravel.com',
  },
  openGraph: {
    title: 'MFJ Travel & Transfers',
    description: 'Luxury private transfers in Galway, Connemara, Shannon, Dublin and Knock.',
    type: 'website',
    locale: 'en_IE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
