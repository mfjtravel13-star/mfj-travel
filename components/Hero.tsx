export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl">

          <img
            src="/logo-large.png"
            alt="MFJ Travel & Transfers"
            className="w-80 md:w-[420px] mb-8"
          />

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Luxury Private Transport
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Reliable,
            <br />
            Punctual &
            <br />
            Professional Transfers
          </h1>

          <p className="mt-8 text-lg text-gray-200 max-w-xl leading-8">
            Airport Transfers • Chauffeur Services • Private Tours

            <br />

            Galway • Connemara • Shannon • Dublin • Knock
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/booking"
              className="bg-[#143D2B] border-2 border-[#D4AF37] px-8 py-4 rounded-full text-[#F7F3EA] font-semibold hover:bg-[#1b5039] transition"
            >
              BOOK NOW
            </a>

            <a
              href="tel:+353872602717"
              className="border-2 border-[#D4AF37] px-8 py-4 rounded-full text-[#F7F3EA] hover:bg-[#D4AF37] hover:text-black transition"
            >
              CALL NOW
            </a>

            <a
              href="https://wa.me/353872602717"
              target="_blank"
              className="bg-green-700 px-8 py-4 rounded-full text-white hover:bg-green-600 transition"
            >
              WHATSAPP
            </a>

          </div>

          {/* Trust badges */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

            <div className="bg-black/40 backdrop-blur rounded-xl p-5 border border-[#D4AF37]/30">
              <h3 className="text-[#D4AF37] font-semibold">
                SPSV Licensed
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Local Professional Drivers
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur rounded-xl p-5 border border-[#D4AF37]/30">
              <h3 className="text-[#D4AF37] font-semibold">
                Reliable
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Punctual & Professional
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur rounded-xl p-5 border border-[#D4AF37]/30">
              <h3 className="text-[#D4AF37] font-semibold">
                Airport Transfers
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Door-to-door Service
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur rounded-xl p-5 border border-[#D4AF37]/30">
              <h3 className="text-[#D4AF37] font-semibold">
                Pre-Booking
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Advance Booking Recommended
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}