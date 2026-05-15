import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24"
      style={{
        backgroundColor: "#FFDBFE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5C4CA' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-[800px] w-full text-center p-8 md:p-16">
        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-bold leading-[1.1] tracking-tighter mb-12">
          NAMI NAILS
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
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
