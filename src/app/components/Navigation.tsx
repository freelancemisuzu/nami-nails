import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations, t } from "../i18n/translations";
import { Instagram, Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggle } = useLanguage();
  const nav = translations.nav;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-[#A71C1C] ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
      style={{ fontFamily: '"Fredoka", sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            NAMI NAILS
          </div>

          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              PRICE
            </a>
            <a href="#about" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              ABOUT
            </a>
            <a href="#testimonials" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              REVIEW
            </a>
            <a href="#faq" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              FAQ
            </a>
            <a href="#location" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              LOCATION
            </a>
            <a href="https://instagram.com/naminails" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="hidden sm:block px-6 py-2 text-sm tracking-wide border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {lang === "en" ? "日本語" : "EN"}
            </button>
            <a 
              href="https://beauty.hotpepper.jp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-primary text-primary-foreground px-8 py-2 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
            >
              BOOK NOW
            </a>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[80vh] py-8" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-8 px-6">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-wide">PRICE</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-wide">ABOUT</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-wide">REVIEW</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-wide">FAQ</a>
          <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-lg tracking-wide">LOCATION</a>
          <div className="flex items-center gap-6 pt-4 border-t border-border w-full justify-center">
            <button
              onClick={toggle}
              className="px-8 py-3 text-sm tracking-wide border border-border rounded-full"
            >
              {lang === "en" ? "日本語" : "EN"}
            </button>
            <a 
              href="https://instagram.com/naminails" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full"
            >
              <Instagram size={24} />
            </a>
          </div>
          <a 
            href="https://beauty.hotpepper.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center bg-primary text-primary-foreground py-4 rounded-full font-medium"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </nav>
  );
}
