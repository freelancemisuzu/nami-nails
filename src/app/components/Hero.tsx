import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";
import { Cherry } from "lucide-react";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 text-[#5C4033]"
      style={{
        backgroundColor: "#FFFCD5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCAD39' stroke-width='0' stroke-opacity='0.28'%3E%3Crect fill='%23D1F0F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-[800px] w-full text-center p-8 md:p-16 flex flex-col items-center">
        <div className="mb-4 text-[#A71C1C]">
          <Cherry size={48} strokeWidth={2.5} />
        </div>
        <h1 
          className="text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] mb-2 tracking-tight text-[#A71C1C]"
          style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 700 }}
        >
          NAMI<br />NAILS
        </h1>
        <div 
          className="text-3xl md:text-5xl text-[#A71C1C] mt-2 mb-12"
          style={{ fontFamily: '"Pacifico", cursive' }}
        >
          beauty salon
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://beauty.hotpepper.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 text-sm hover:opacity-90 transition-opacity font-medium rounded-full border border-primary"
          >
            {t(translations.hero.bookAppointment, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
