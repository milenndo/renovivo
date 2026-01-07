import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Renovivo_logover.2.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Начало", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Цени", path: "/pricing" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "Полезно", path: "/blog" },
    { name: "За нас", path: "/about" },
    { name: "Контакти", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-background/90 backdrop-blur-luxe border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src={logo}
              alt="Renovivo"
              width={140}
              height={40}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className={`h-10 w-auto transition-all duration-500 ${
                isScrolled || !isHomePage
                  ? ""
                  : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled || !isHomePage
                    ? isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : isActive(link.path)
                    ? "text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+359893712919"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? "text-primary hover:text-primary/80"
                  : "text-primary-foreground hover:text-primary"
              }`}
            >
              <Phone className="h-4 w-4" />
              +359 89 371 29 19
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${
              isMenuOpen
                ? "text-foreground"
                : isScrolled || !isHomePage
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-medium transition-all duration-300 opacity-0 ${
                isMenuOpen ? "animate-fade-in-up" : ""
              } ${isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+359893712919"
            className="mt-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button className="rounded-full px-8">
              <Phone className="h-4 w-4 mr-2" />
              Обадете се
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
