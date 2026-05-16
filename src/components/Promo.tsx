export default function Promo() {
  return (
    <div
      id="repertoire"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/spiral-circles.jpg"
          alt="Абстрактная графика"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.25) hue-rotate(30deg)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center gap-10">

        <h3 className="text-amber-400/80 uppercase text-xs tracking-[0.4em]">
          Сезон 2026–2027
        </h3>

        <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
          <div className="flex-shrink-0 w-72 md:w-96 shadow-2xl border border-white/10" style={{ boxShadow: "0 0 60px rgba(180,30,30,0.3)" }}>
            <img
              src="https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/a636143e-069e-44ed-9831-30efaecc71de.jpg"
              alt="Калевала — афиша спектакля"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4 text-left">
            <p className="text-white/40 uppercase text-xs tracking-[0.35em]">Премьера сезона</p>
            <h2
              className="text-6xl md:text-8xl font-black uppercase leading-none"
              style={{
                color: "#c0392b",
                textShadow: "0 0 40px rgba(192,57,43,0.6), 2px 2px 0 #000",
                fontFamily: "serif",
                letterSpacing: "0.05em",
              }}
            >
              Калевала
            </h2>
            <div className="w-16 h-px bg-red-600 my-1" />
            <p className="text-white/70 text-base font-light leading-relaxed max-w-md">
              Эпос о богатырях, богах и тайнах древнего мира. Музыка, танец и живое слово — в одном незабываемом действе.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-white/50 text-xs uppercase tracking-[0.25em]">Режиссёр — Александр Балашов</p>
              <p className="text-white/50 text-xs uppercase tracking-[0.25em]">Хореограф — Дарья Балашова</p>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs uppercase tracking-[0.4em] text-center max-w-lg">
          Каждый спектакль — это путешествие. Мы создаём театр, который заставляет думать, чувствовать и помнить.
        </p>
      </div>
    </div>
  );
}