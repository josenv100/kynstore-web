import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-2xl font-bold text-red-500">
            KynStore
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white/90 hover:text-red-500 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-red-500 transition-colors"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-red-500 transition-colors"
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-red-500 transition-colors"
            >
              Empresa
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="shadow-elegant">
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white/90 hover:text-red-500 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-white/90 hover:text-red-500 transition-colors text-left"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-white/90 hover:text-red-500 transition-colors text-left"
              >
                Soluciones
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-white/90 hover:text-red-500 transition-colors text-left"
              >
                Empresa
              </button>
              <Button onClick={() => scrollToSection('contacto')} className="w-full">
                Contáctanos
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;