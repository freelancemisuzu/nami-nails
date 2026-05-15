import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";
import { Instagram } from "lucide-react";

export function About() {
  const { lang } = useLanguage();
  const a = translations.about;

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#F8E8F2]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <ImageWithFallback
                src="/pexels-arthousestudio-4530178.jpg"
                alt="About our salon"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              About our salon
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>{t(a.paragraph1, lang)}</p>
              <p>{t(a.paragraph2, lang)}</p>
              <p>{t(a.paragraph3, lang)}</p>
              {t(a.paragraph4, lang) && <p>{t(a.paragraph4, lang)}</p>}
              {t(a.paragraph5, lang) && <p>{t(a.paragraph5, lang)}</p>}
            </div>

            <div className="pt-4">
              <a 
                href="https://instagram.com/naminails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-medium hover:opacity-60 transition-opacity"
              >
                <Instagram size={24} />
                <span>Follow us on Instagram</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-5xl mb-3 font-bold tracking-tighter">
                  8+
                </div>
                <div className="text-sm tracking-wide text-muted-foreground">{t(a.yearsLabel, lang)}</div>
              </div>
              <div>
                <div className="text-5xl mb-3 font-bold tracking-tighter">
                  5K+
                </div>
                <div className="text-sm tracking-wide text-muted-foreground">{t(a.clientsLabel, lang)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
