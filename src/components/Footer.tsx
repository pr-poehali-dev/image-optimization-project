export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-black py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between border-t border-white/10">
            <div>
              <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] font-bold tracking-tight footer-title-gradient">
                МАСТЕРСКАЯ
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-end gap-6 sm:gap-0">
              <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-amber-400/60 text-xs tracking-widest">Театр</h3>
                  <a href="#about" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    О мастерской
                  </a>
                  <a href="#repertoire" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    Репертуар
                  </a>
                  <a href="#contact" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    Контакты
                  </a>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-amber-400/60 text-xs tracking-widest">Обучение</h3>
                  <a href="#" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    Студия
                  </a>
                  <a href="#" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    Мастер-классы
                  </a>
                  <a href="#" className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
                    Афиша
                  </a>
                </div>
              </div>
              <p className="text-white/30 text-xs tracking-widest uppercase">{new Date().getFullYear()} · А.В. Балашов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}