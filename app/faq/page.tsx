import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | MFJ Travel & Transfers',
  description: 'Answers to common questions about booking private transfers in Galway and Connemara.',
};

const faqs = [
  {
    question: 'Do you provide airport pickups from Shannon, Dublin and Knock?',
    answer: 'Yes. We offer premium private transfers from all major airports serving the west of Ireland.',
  },
  {
    question: 'Can you accommodate large luggage or group travel?',
    answer: 'Absolutely. We can advise the best vehicle based on passengers, luggage and comfort requirements.',
  },
  {
    question: 'Is the service available for weddings and special occasions?',
    answer: 'Yes. We provide elegant transport for weddings, celebrations and guest transfers.',
  },
];

export default function FAQPage() {
  return (
    <main className="section-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">FAQ</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Common questions before you travel.</h1>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="card-sheen p-8">
            <h2 className="font-display text-2xl text-white">{faq.question}</h2>
            <p className="mt-3 text-zinc-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
