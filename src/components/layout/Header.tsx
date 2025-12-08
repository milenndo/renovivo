import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Начало", path: "/" },
    { name: "Иновации", path: "/innovative-coatings" },
    { name: "Услуги", path: "/services" },
    { name: "Цени", path: "/prices" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "Блог", path: "/blog" },
    { name: "За нас", path: "/about" },
    { name: "Контакти", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-foreground text-background py-2">
        <div className="container-custom flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+359893712919" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+359 89 371 29 19</span>
            </a>
            <a href="mailto:info@renovivo.bg" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@renovivo.bg</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Пон - Пет: 08:00 - 18:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Последвайте ни във Facebook">
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Последвайте ни в Instagram">
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-center relative">
            {/* Menu button - absolute right */}
            <button
              className="absolute right-0 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
            
            {/* Centered Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Renovivo - Every Detail Matters" className="h-28 w-auto" />
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-end gap-8">
            {/* Logo - far left */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logo} alt="Renovivo - Every Detail Matters" className="h-32 w-auto" />
            </Link>

            {/* Navigation Menu */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors relative py-2 ${
                    isActive(link.path)
                      ? "text-amber-600"
                      : "text-foreground hover:text-amber-600"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                    isActive(link.path) ? "after:scale-x-100" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Phone CTA - pushed right */}
            <a href="tel:+359893712919" className="ml-auto flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-semibold">
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>+359 89 371 29 19</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+359893712919" className="mt-4">
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold">
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Обадете се
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
