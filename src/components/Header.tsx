export default function Header({ className }: { className?: string }) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xs uppercase tracking-[0.3em] font-light opacity-80">
          Театральная мастерская
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest">
            О театре
          </a>
          <a href="#repertoire" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest">
            Репертуар
          </a>
          <a href="#troupe" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest">
            Труппа
          </a>
          <a href="#contact" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-widest">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}