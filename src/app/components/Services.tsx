import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";

const serviceImages = [
  "/rayana-sales-3EqQIavMRnE-unsplash.jpg",
  "/IMG_1253.jpg",
  "/de-aura-4aEkXAhkAVQ-unsplash.jpg",
  "/nail images7.jpg",
];

export function Services() {
  const { lang } = useLanguage();
  const s = translations.services;

  return (
    <section 
      id="services" 
      className="py-20 md:py-32 px-6 md:px-12"
      style={{
        backgroundColor: "#FFDBFE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5C4CA' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center max-w-xl mx-auto p-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Nail Menu
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {s.items.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-secondary/30 rounded-[2rem] overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={serviceImages[index]}
                  alt={t(service.title, lang)}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
              </div>

              <div className="space-y-2 p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                  {t(service.title, lang)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(service.description, lang)}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-1 text-[10px] sm:text-sm tracking-wide">
                  <span className="text-muted-foreground">{t(service.duration, lang)}</span>
                  <span className="font-medium">{t(service.price, lang)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://beauty.hotpepper.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
          >
            {lang === "en" ? "BOOK NOW" : "予約する"}
          </a>
        </div>
      </div>
    </section>
  );
}
