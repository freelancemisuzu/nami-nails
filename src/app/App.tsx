import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ImageBanner } from "./components/ImageBanner";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Location } from "./components/Location";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { translations, t } from "./i18n/translations";
import { Instagram, Cherry } from "lucide-react";

function AppContent() {
  const { lang } = useLanguage();
  const f = translations.footer;

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImageBanner />
      <Services />
      <About />
      <Testimonials />
      <Location />
      <FAQ />

      <footer className="py-20 px-6 md:px-12 border-t border-border text-[#A71C1C]" style={{ fontFamily: '"Fredoka", sans-serif' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 text-3xl mb-6 font-bold tracking-tighter text-[#A71C1C]">
                NAMI NAILS
                <Cherry size={32} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-6">
                <a href="https://instagram.com/naminails" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#A71C1C] hover:opacity-60 transition-opacity">
                  <Instagram size={24} />
                  <span className="text-sm font-medium tracking-wide">Follow us on Instagram</span>
                </a>
                <a 
                  href="https://beauty.hotpepper.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity text-center w-fit"
                >
                  {t(translations.footer.bookNow, lang)}
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="mb-6 tracking-wide text-sm">ADDRESS</h4>
              <div className="space-y-3">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(translations.location.address1, lang))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-60 transition-opacity"
                >
                  {t(translations.location.address1, lang) && <p>{t(translations.location.address1, lang)}</p>}
                  {t(translations.location.address2, lang) && <p className="mb-4">{t(translations.location.address2, lang)}</p>}
                </a>
                <h4 className="tracking-wide text-sm font-medium text-[#A71C1C] pt-2">CONTACT</h4>
                <a href="tel:0312345678" className="block hover:opacity-60 transition-opacity mb-1">
                  03-1234-5678
                </a>
                <p className="mb-4">hello@naminails.com</p>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="mb-6 tracking-wide text-sm">{t(f.hours, lang)}</h4>
              <div className="space-y-3">
                <p>{t(f.weekdays, lang)}</p>
                <p>{t(f.saturday, lang)}</p>
                <p>{t(f.sunday, lang)}</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center text-sm">
            <p>{t(f.copyright, lang)}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}