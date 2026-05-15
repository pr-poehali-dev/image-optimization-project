import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Театральная сцена"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        {/* Логотип с эффектами */}
        <div className="logo-wrapper">
          <img
            src="https://cdn.poehali.dev/projects/650ff3e9-e7d6-4a0f-935f-7fcb054f7123/bucket/9630bcab-0475-42fb-a496-4560c13ad213.jpg"
            alt="Молодёжный театр Творческая Мастерская"
            className="logo-image"
          />
        </div>

        <div className="text-center">
          <p className="text-white/60 uppercase tracking-[0.4em] text-xs md:text-sm font-light mt-4">
            Александр Валерьевич Балашов
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#about"
            className="border border-white/40 text-white/80 hover:border-amber-300 hover:text-amber-300 transition-all duration-500 uppercase text-xs tracking-[0.3em] px-8 py-3 inline-block"
          >
            Узнать больше
          </a>
        </motion.div>
      </div>
    </div>
  );
}
