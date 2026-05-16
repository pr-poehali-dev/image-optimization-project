export default function Promo() {
  return (
    <div
      id="repertoire"
      className="relative flex items-center justify-center h-screen overflow-hidden"
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

      <h3 className="absolute top-12 right-6 text-amber-400/70 uppercase z-10 text-xs tracking-[0.3em]">
        Сезон 2026–2027
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 font-light leading-tight">
        Каждый спектакль — это путешествие. Мы создаём театр, который заставляет думать, чувствовать и помнить.
      </p>
    </div>
  );
}
