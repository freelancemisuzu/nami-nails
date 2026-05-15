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
import { Instagram } from "lucide-react";

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
      <FAQ />
      <Location />

      <footer className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-4">
              <div className="text-3xl mb-6 font-bold tracking-tighter">
                NAMI NAILS
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(f.tagline, lang)}
              </p>
              <a href="https://instagram.com/naminails" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity">
                <Instagram size={24} />
                <span className="text-sm font-medium tracking-wide">Follow us on Instagram</span>
              </a>
            </div>

            <div className="md:col-span-4">
              <h4 className="mb-6 tracking-wide text-sm">ADDRESS</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>{t(translations.location.address1, lang)}</p>
                <p className="mb-4">{t(translations.location.address2, lang)}</p>
                <h4 className="tracking-wide text-sm font-medium text-foreground pt-2">CONTACT</h4>
                <p className="mb-4">hello@naminails.com</p>
                <h4 className="tracking-wide text-sm font-medium text-foreground pt-2">Phone Number</h4>
                <p>03-1234-5678</p>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="mb-6 tracking-wide text-sm">{t(f.hours, lang)}</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>{t(f.weekdays, lang)}</p>
                <p>{t(f.saturday, lang)}</p>
                <p>{t(f.sunday, lang)}</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center text-sm text-muted-foreground">
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