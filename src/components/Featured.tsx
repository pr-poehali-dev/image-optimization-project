export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-black">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/54d25be3-de13-4d6b-9ad6-7863f6e95c87.jpg"
          alt="Александр Валерьевич Балашов"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-[0.3em] text-amber-400/80">О мастерской</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight font-light">
          Место, где рождается искусство. Каждая постановка — живое дыхание сцены, история, рассказанная всем телом, голосом и душой.
        </p>
        <p className="text-neutral-400 text-base mb-10 leading-relaxed max-w-lg">
          Молодёжный театр «Творческая Мастерская» под руководством Александра Валерьевича Балашова — пространство для смелых идей, профессионального роста и настоящего театрального искусства.
        </p>
        <button className="bg-transparent text-white border border-white/30 hover:border-amber-400 hover:text-amber-400 px-6 py-3 text-xs transition-all duration-300 cursor-pointer w-fit uppercase tracking-[0.2em]">
          Репертуар
        </button>
      </div>
    </div>
  );
}