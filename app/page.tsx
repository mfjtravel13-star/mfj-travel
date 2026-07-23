import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Tours from "@/components/Tours";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F7F3EA]">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose MFJ */}
      <Features />

      {/* Airport Transfers & Services */}
      <Services />

      {/* Luxury Tours */}
      <Tours />

      {/* Google Reviews */}
      <Reviews />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}