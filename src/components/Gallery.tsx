const photos = [
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/3330a9d1-1f34-44fb-8008-a0e1aa762e1f.jpg",
    alt: "Спектакль — драматическая сцена",
    caption: "Калевала, 2026",
  },
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/0a863111-907b-46c9-912e-087f0c3ca854.jpg",
    alt: "Танцевальная сцена спектакля",
    caption: "Пластика и движение",
  },
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/9a5c7a01-5070-4134-a348-d0f1981b0d62.jpg",
    alt: "Актёры на сцене",
    caption: "Живое слово",
  },
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/c75ffa32-d7f5-408b-b211-4f2f6b3e5c9b.jpg",
    alt: "Монолог актёра",
    caption: "Монолог",
  },
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/b618a8b7-bc34-4f16-b7a1-76fc039ab84e.jpg",
    alt: "Поклон труппы",
    caption: "Поклон",
  },
  {
    src: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/files/6029beec-d283-44ae-96b6-8cb462074a6c.jpg",
    alt: "Дуэт актёров",
    caption: "Дуэт",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-400/70 uppercase text-xs tracking-[0.4em] mb-3">Фотохроника</p>
          <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
            Со спектаклей
          </h2>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-300 uppercase text-xs tracking-[0.3em]">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
          </div>
          <div className="relative inline-block px-12">
            <p className="text-amber-400/60 uppercase text-xs tracking-[0.5em] mb-6">Мы здесь</p>
            <p
              className="text-white/20 uppercase text-xs tracking-[0.4em] mb-3"
              style={{ fontFamily: "serif" }}
            >
              ✦ ✦ ✦
            </p>
            <h3
              className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
              style={{
                fontFamily: "serif",
                textShadow: "0 0 60px rgba(180,100,30,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              Ждём вас по адресу
            </h3>
            <div className="flex items-center justify-center gap-4 mt-4 mb-4">
              <div className="h-px w-16 bg-amber-400/40" />
              <div className="w-1 h-1 rounded-full bg-amber-400/60" />
              <div className="h-px w-16 bg-amber-400/40" />
            </div>
            <p
              className="text-amber-300 text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest"
              style={{
                fontFamily: "serif",
                textShadow: "0 0 40px rgba(192,100,30,0.5), 0 2px 0 rgba(0,0,0,0.8)",
              }}
            >
              Совхозная, 25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
