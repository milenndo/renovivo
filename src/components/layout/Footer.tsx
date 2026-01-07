import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Cookie } from "lucide-react";
import logo from "@/assets/Renovivo_logover.2.svg";
import { useCookieConsentContext } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openSettings } = useCookieConsentContext();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <img
              src={logo}
              alt="Renovivo"
              width={160}
              height={40}
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/60 text-base leading-relaxed max-w-md">
              Професионални ремонтни услуги с внимание към всеки детайл. 
              Трансформираме вашите пространства в мечтани домове.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/17eRc268rh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/renovivo.bg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-label text-primary-foreground/60 mb-6">Навигация</h3>
            <ul className="space-y-3">
              {[
                { name: "Начало", path: "/" },
                { name: "Услуги", path: "/services" },
                { name: "Портфолио", path: "/portfolio" },
                { name: "Блог", path: "/blog" },
                { name: "За нас", path: "/about" },
                { name: "Контакти", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-label text-primary-foreground/60 mb-6">Контакти</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+359893712919"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+359 89 371 29 19</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@renovivo.bg"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">office@renovivo.bg</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">гр. София, България</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Пон - Пет: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Renovivo. Всички права запазени.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={openSettings}
              className="flex items-center gap-2 text-primary-foreground/50 hover:text-primary transition-colors text-sm"
            >
              <Cookie className="h-4 w-4" />
              Бисквитки
            </button>
            <span className="text-primary-foreground/30 text-sm italic">Every Detail Matters</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
