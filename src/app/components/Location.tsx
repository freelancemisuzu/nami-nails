import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";
import { MapPin } from "lucide-react";

export function Location() {
  const { lang } = useLanguage();
  const l = translations.location;

  return (
    <section 
      id="location" 
      className="py-20 md:py-32 px-6 md:px-12"
      style={{
        backgroundColor: "#FFDBFE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5C4CA' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">
          <div className="md:col-span-6 space-y-6 md:pl-12 lg:pl-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Our Location
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {t(l.description, lang) && <p>{t(l.description, lang)}</p>}
              <div className="pt-4 space-y-8">
                <div>
                  <h4 className="text-foreground font-medium mb-2 tracking-wide uppercase text-sm">{t(l.addressLabel, lang)}</h4>
                  <p>{t(l.address1, lang)}</p>
                  <p>{t(l.address2, lang)}</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2 tracking-wide uppercase text-sm">{t(l.contactLabel, lang)}</h4>
                  <p className="mb-4">hello@naminails.com</p>
                  <h4 className="text-foreground font-medium mb-2 tracking-wide uppercase text-sm">Phone Number</h4>
                  <p>03-1234-5678</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2 tracking-wide uppercase text-sm">{t(l.hoursLabel, lang)}</h4>
                  <p>{t(l.weekdays, lang)}</p>
                  <p>{t(l.saturday, lang)}</p>
                  <p>{t(l.sunday, lang)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative z-10">
            <div className="w-full h-[350px] md:aspect-square rounded-[2rem] overflow-hidden bg-muted mb-6">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Tokyo%20Minato%20Minami-Aoyama%201-2-3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=1-2-3+Minami-Aoyama+Minato-ku+Tokyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-60 transition-opacity uppercase border-b border-foreground pb-1"
              >
                <MapPin size={16} />
                {lang === "en" ? "GET DIRECTIONS" : "道順を調べる"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
