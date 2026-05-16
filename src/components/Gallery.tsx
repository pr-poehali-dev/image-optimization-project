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
      </div>
    </section>
  );
}
