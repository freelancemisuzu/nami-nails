import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";

export function Testimonials() {
  const { lang } = useLanguage();
  const te = translations.testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center max-w-xl mx-auto p-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {t(te.title, lang)}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {te.items.map((testimonial, index) => (
            <div key={index} className="bg-[#E5E5E3] rounded-[2rem] p-4 md:p-8 space-y-3">
              <p className="text-sm md:text-xl leading-relaxed italic">
                "{t(testimonial.quote, lang)}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground tracking-wide mt-1">{t(testimonial.role, lang)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
