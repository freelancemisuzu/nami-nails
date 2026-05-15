import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";

export function FAQ() {
  const { lang } = useLanguage();
  const f = translations.faq;

  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-12 bg-[#F8E8F2]">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Frequently Asked
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {f.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-base hover:no-underline py-4">
                <span className="font-bold">{t(faq.question, lang)}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {t(faq.answer, lang)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
