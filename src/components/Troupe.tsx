const actors = [
  { name: "Варвара Груздева", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/8e679fb5-21ac-4004-aa88-c78f93fd205c.jpg" },
  { name: "Анастасия Травина", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/36638bc3-4b84-41f7-9593-54e4b3899d6d.jpg" },
  { name: "Виноградов Прохор", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/9629c686-b44c-45a1-8140-0822f7b945b7.jpg" },
  { name: "Скрябин Андрей", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/bc306ea1-ebcf-4203-9972-637912f66687.jpg" },
  { name: "Анастасия Рогова", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/a187552e-19f0-4923-9413-01f49c9bbf64.jpg" },
  { name: "Варвара Ивановна", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/2b302df7-4e1f-472e-97c7-3c0d7524214b.jpg" },
  { name: "Владислава Дреер", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/cac493ab-04ed-4181-b806-b4fd1da42c2d.jpg" },
  { name: "Савелий Виноградов", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/8c2803cb-b8d3-4613-9d07-1a3ee5cebc06.jpg" },
  { name: "Златослава Сотникова", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/7c0d2d54-f23b-4824-a269-0563119713e4.jpg" },
  { name: "Виктория Ярошева", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/2535e815-b05e-48a4-a248-3549525d485c.jpg" },
  { name: "Иван Богданов", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/e5c6e72d-baca-478d-8a47-2b91888a8915.jpg" },
  { name: "Антон Циков", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/f4c887b9-fa9a-4e00-97e3-6bcc9be0ca55.jpg" },
  { name: "Александра Ремеслова", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/08d631f5-3882-48a8-9179-953a270e7780.jpg" },
  { name: "Сусанна Топчян", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/f5ddc7d1-f95b-474e-8b55-2fb6efeb07f5.jpg" },
  { name: "Светлана Спускан", photo: "https://cdn.poehali.dev/projects/f49bde08-f9de-438a-b455-a2f7ec7f0f1f/bucket/da988cfe-eff7-411f-ade9-c60effa7a559.jpg" },
];

export default function Troupe() {
  return (
    <section id="troupe" className="bg-black px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-amber-400/70 uppercase text-xs tracking-[0.5em]">Творческая мастерская</p>
          <h2
            className="text-5xl md:text-7xl font-light uppercase tracking-[0.15em] text-white"
            style={{ fontFamily: "serif" }}
          >
            Труппа
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-px bg-amber-400/40" />
            <div className="w-2 h-2 rounded-full bg-amber-400/40" />
            <div className="w-12 h-px bg-amber-400/40" />
          </div>
          <p className="text-white/40 text-sm font-light tracking-wide max-w-md mt-2">
            Артисты, которые каждый вечер выходят на сцену и проживают историю заново
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 w-full">
          {actors.map((actor) => (
            <div key={actor.name} className="flex flex-col items-center gap-3 group cursor-default">
              <div
                className="w-full aspect-[3/4] overflow-hidden relative"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <img
                  src={actor.photo}
                  alt={actor.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <p className="text-white/50 text-xs text-center leading-tight tracking-wide group-hover:text-amber-400/80 transition-colors duration-300 px-1">
                {actor.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
